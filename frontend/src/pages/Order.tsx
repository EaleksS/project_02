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
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Location {
  lat: number;
  lng: number;
}

const libraries: any = ["places"];

interface IFormInput {
  name: string;
  tel: string | number;
  apartment: string;
  porch: string;
  comm: string;
}

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
  const [valueErr, setValueErr] = useState<boolean>(false);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!value) {
      toast.error("Введите адрес");
      return;
    }

    console.log(data, value);
    toast.success(
      "Приветствую! Хочу вам сообщить, что ваш заказ успешно создан и сейчас находится в обработке. Команда нашего магазина уже начала его сборку, и в течение 1-2 часов ваш товар будет готов к доставке. Мы ценим ваш выбор и уверены, что вы останетесь довольны качеством нашего обслуживания. Спасибо, что выбрали наш магазин для своей покупки!"
    );

    setValue("");
    setValueErr(false);
    reset();
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
          <form className={styles.order} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.cont} ${styles.contact_details}`}>
              <Text type="h3">
                <img src="/01.svg" alt="step" /> Контактные данные
              </Text>
              <div className={styles.label}>
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  className={styles.input}
                  style={errors.name ? { border: "1px solid red" } : {}}
                  {...register("name", {
                    required: true,
                  })}
                />
                <input
                  type="tel"
                  placeholder="Телефон *"
                  className={styles.input}
                  style={errors.tel ? { border: "1px solid red" } : {}}
                  {...register("tel", {
                    required: true,
                  })}
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
                      placeholder="Введите улицу и дом *"
                      value={value ? `Якутск ${value}` : ""}
                      onChange={(e) =>
                        setValue(e.target.value.replaceAll("Якутск ", ""))
                      }
                      style={
                        valueErr && !value
                          ? {
                              border: "1px solid red",
                              width: "calc(100% - 3px)",
                            }
                          : { width: "calc(100% - 3px)" }
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
                  placeholder="Квартира *"
                  className={styles.input}
                  style={
                    errors.apartment
                      ? { border: "1px solid red", width: "35%" }
                      : { width: "35%" }
                  }
                  {...register("apartment", {
                    required: true,
                  })}
                />
                <input
                  type="text"
                  placeholder="Подьезд/Этаж/Домофон *"
                  className={styles.input}
                  style={
                    errors.porch
                      ? { border: "1px solid red", width: "65%" }
                      : { width: "65%" }
                  }
                  {...register("porch", {
                    required: true,
                  })}
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
                {/* <div>Онлайн оплата</div> */}
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
                <textarea
                  placeholder="Комментарий к заказу"
                  {...register("comm")}
                ></textarea>
              </div>
              <div
                onClick={() => !value && setValueErr(true)}
                className={styles.btn}
              >
                <Button type="active">Подтвердить заказ</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
