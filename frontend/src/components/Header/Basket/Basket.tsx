import { FC, memo, useMemo } from "react";
import { useBasket } from "../../../store/basket.store";
import styles from "./Basket.module.scss";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useUser } from "../../../store/user.store";
import { useCalcDiscount } from "../../../hooks/useCalcDiscount";

export const Basket: FC = memo((): JSX.Element => {
  const { setIsActive } = useBasket();

  const { profile } = useUser();

  const price = useMemo(() => {
    return profile?.basket.reduce(
      (accumulator, current) => accumulator + useCalcDiscount(current),
      0
    );
  }, [profile?.basket]);

  return (
    <div
      className={styles.basket}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive();
      }}
    >
      <div className={styles.count}>{price ? price : 0} ₽</div>
      <div className={styles.basket_icon}>
        <RiShoppingBasketFill />
        <span>{profile ? profile.basket.length : 0}</span>
      </div>
    </div>
  );
});
