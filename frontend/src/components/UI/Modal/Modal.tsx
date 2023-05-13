import { FC, useEffect } from "react";
import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { useUser } from "../../../store/user.store";
import { useBasket } from "../../../store/basket.store";
import { CardBasket } from "../../CardBasket/CardBasket";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { useCalcDiscount } from "../../../hooks/useCalcDiscount";

export const Modal: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBasket();

  const navigate = useNavigate();

  const handleClickRemove = () => {
    setIsActive && setIsActive(false);
  };

  const handleClick = () => {
    if (!profile?.basket.length) {
      navigate("/catalog");
      setIsActive && setIsActive(false);
      return;
    }

    navigate("/order");
    setIsActive && setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickRemove);

    return () => {
      window.removeEventListener("click", handleClickRemove);
    };
  }, []);

  const { profile } = useUser();

  const price = profile?.basket.reduce(
    (accumulator, current) => accumulator + useCalcDiscount(current),
    0
  );

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 700 && isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.modal} ${styles.basket} ${
        isActive && styles.active
      }`}
      onClick={(e) => {
        e.stopPropagation();
        e.stopPropagation();
      }}
    >
      <div
        className={styles.close}
        onClick={() => setIsActive && setIsActive(false)}
      >
        <AiFillCloseCircle />
      </div>
      <div className={styles.content}>
        {profile?.basket.length ? (
          profile.basket
            .map((product) => <CardBasket key={product._id} {...product} />)
            .reverse()
        ) : (
          <div className={styles.basket_null}>
            <img src="/ic2.svg" alt="logo" />
            <Text type="h2">Ваша корзина пуста</Text>
          </div>
        )}
      </div>
      <div className={styles.buy}>
        <div className={styles.count}>
          Сумма заказа: <b>{price ? price : 0} ₽ </b>
        </div>
        <div onClick={() => handleClick()}>
          <Button type="active" className={styles.btn}>
            {profile?.basket.length ? "Оформить заказ" : "В каталог"}
          </Button>
        </div>
      </div>
    </div>
  );
};
