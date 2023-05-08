import { FC } from "react";
import styles from "./Order.module.scss";
import { Layout } from "../components/Layout/Layout";
import { Text } from "../components/UI/Text/Text";
import { CardBasket } from "../components/CardBasket/CardBasket";
import { useUser } from "../store/user.store";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Button } from "../components/UI/Button/Button";

export const Order: FC = (): JSX.Element => {
  const { profile } = useUser();

  let price: number = 0;

  profile?.basket.forEach((e) => {
    price += Math.round(
      (e.price * (e.quantity ? e.quantity : 1) * (100 - e.discount)) / 100
    );
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Text type="h1">Оформление заказа</Text>
        <div className={styles.content}>
          <div className={styles.cards}>
            {profile &&
              profile.basket.map((e) => <CardBasket key={e._id} {...e} />)}
          </div>
          <form className={styles.order} onChange={(e) => e.preventDefault()}>
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
              <div className={styles.label}>
                <input
                  type="text"
                  placeholder="Улица"
                  className={styles.input}
                  style={{ width: "80%" }}
                />
                <input
                  type="tel"
                  placeholder="Дом"
                  className={styles.input}
                  style={{ width: "20%" }}
                />
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
              <div>карта</div>
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
