import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { useUser } from "../../../store/user.store";
import { useBasket } from "../../../store/basket.store";

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
      (e.price * (e?.quantity ? e?.quantity : 1) * (100 - e.discount)) / 100
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
          1
        ) : (
          <>
            <img src="/ic2.svg" alt="logo" />
            <Text type="h2">Ваша корзина пуста</Text>
          </>
        )}
      </div>
      <div className={styles.buy}>
        <div className={styles.count}>
          Сумма заказа: <b>{price} ₽ </b>
        </div>
        <Button type="active" className={styles.btn}>
          В каталог
        </Button>
      </div>
    </div>
  );
};
