import { FC, useState } from "react";
import styles from "./Order.module.scss";
import { Layout } from "../components/Layout/Layout";
import { Text } from "../components/UI/Text/Text";
import { CardBasket } from "../components/CardBasket/CardBasket";
import { useUser } from "../store/user.store";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Button } from "../components/UI/Button/Button";
import { useCalcDiscount } from "../hooks/useCalcDiscount";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  MarkerF,
} from "@react-google-maps/api";
import { Loader } from "../components/UI/Loader/Loader";

interface Location {
  lat: number;
  lng: number;
}

const libraries: any = ["places"];

export const Order: FC = (): JSX.Element => {
  const { profile } = useUser();

  let price: number = 0;

  profile?.basket.forEach((e) => {
    price += useCalcDiscount(e);
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries,
  });

  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [center, setCenter] = useState<Location>({
    lat: 62.02781,
    lng: 129.73242,
  });
  const [value, setValue] = useState<string>("");
  const [isBox, setIsBox] = useState<boolean>(false);


  const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces()!;
      if (places.length === 0) {
        console.log("No places found");
        return;
      }

      if (places[0].name) {
        setValue(places[0]?.name);
        setIsBox(true);
      }

      setCenter({
        lat: places[0]?.geometry?.location?.lat() ?? 62.02781,
        lng: places[0]?.geometry?.location?.lng() ?? 129.73242,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Text type="h1">Оформление заказа</Text>
        <div className={styles.content}>
          <div className={styles.cards}>
            {profile &&
              profile.basket.map((e) => <CardBasket key={e._id} {...e} />)}
          </div>
          <form className={styles.order} onSubmit={(e) => e.preventDefault()}>
            <div className={`${styles.cont} ${styles.contact_details}`}>
              <Text type="h3">
                <img src="/01.svg" alt="step" /> Контактные данные
              </Text>
              <div className={styles.label}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={styles.input}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={`${styles.cont} ${styles.shipping_options}`}>
              <Text type="h3">
                <img src="/02.svg" alt="step" /> Параметры доставки
              </Text>
              <div className={`${styles.label} ${styles.search}`}>
                {isLoaded ? (
                  <StandaloneSearchBox
                    onLoad={onSearchBoxLoad}
                    onPlacesChanged={onPlacesChanged}
                  >
                    <input
                      type="text"
                      placeholder="Введите улицу и дом"
                      value={value ? `Якутск ${value}` : ""}
                      onChange={(e) =>
                        setValue(e.target.value.replaceAll("Якутск ", ""))
                      }
                      className={styles.input}
                    />
                  </StandaloneSearchBox>
                ) : (
                  <Loader />
                )}
              </div>
              <div className={styles.label}>
                <input
                  type="text"
                  placeholder="Квартира"
                  className={styles.input}
                  style={{ width: "35%" }}
                />
                <input
                  type="tel"
                  placeholder="Подьезд/Этаж/Домофон"
                  className={styles.input}
                  style={{ width: "65%" }}
                />
              </div>
              <div className={styles.map}>
                {isLoaded ? (
                  <GoogleMap
                    center={center}
                    zoom={isBox ? 15 : 11}
                    mapContainerStyle={{ height: "300px" }}
                    options={{ disableDefaultUI: true }}
                  >
                    {isBox && <MarkerF position={center} />}
                  </GoogleMap>
                ) : (
                  <Loader />
                )}
              </div>
              <Text>
                <MdOutlineDeliveryDining className={styles.icon} /> Доставим за
                40 мин
              </Text>
            </div>
            <div className={`${styles.cont} ${styles.payment_options}`}>
              <Text type="h3">
                <img src="/03.svg" alt="step" /> Параметры оплаты
              </Text>
              <div className={styles.payment}>
                <div>Наличными</div>
                <div>Онлайн оплата</div>
              </div>
            </div>
            <div className={`${styles.cont} ${styles.last_step}`}>
              <Text type="h3">
                <img src="/04.svg" alt="step" /> Последний шаг
              </Text>
              <div className={styles.order_price}>
                <div className={styles.price}>
                  <span>Сумма заказа</span>
                  <span>{price} ₽</span>
                </div>
                <div className={styles.delivery}>
                  <span>Стоимость доставки</span>
                  <span>0 ₽</span>
                </div>
              </div>
              <div className={styles.promo}>
                <div className={styles.label}>
                  <input type="text" placeholder="Промокод" />
                  <div>Применить</div>
                </div>
              </div>
              <div className={styles.total_order_amount}>
                <div className={styles.price}>
                  <span>Итоговая сумма заказа</span>
                  <span>{price} ₽</span>
                </div>
                <textarea placeholder="Комментарий к заказу"></textarea>
              </div>
              <Button type="active">Подтвердить заказ</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
