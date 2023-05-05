import { FC, useEffect } from "react";
import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { useUser } from "../../../store/user.store";
import { useBasket } from "../../../store/basket.store";
import { CardBasket } from "../../CardBasket/CardBasket";

export const Modal: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBasket();

  const handleClickRemove = () => {
    setIsActive && setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickRemove);

    return () => {
      window.removeEventListener("click", handleClickRemove);
    };
  }, []);

  const { profile } = useUser();

  let price: number = 0;

  profile?.basket.forEach((e) => {
    price += Math.round(
      (e.price * (e.quantity ? e.quantity : 1) * (100 - e.discount)) / 100
    );
  });

  return (
    <div
      className={`${styles.modal} ${styles.basket} ${
        isActive && styles.active
      }`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.content}>
        {profile?.basket.length ? (
          profile.basket
            .map((product) => <CardBasket key={product._id} {...product} />)
            .reverse()
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src="/ic2.svg" alt="logo" />
            <Text type="h2">Ваша корзина пуста</Text>
          </div>
        )}
      </div>
      <div className={styles.buy}>
        <div className={styles.count}>
          Сумма заказа: <b>{price} ₽ </b>
        </div>
        <Button type="active" className={styles.btn}>
          {profile?.basket.length ? "Оформить заказ" : "В каталог"}
        </Button>
      </div>
    </div>
  );
};
