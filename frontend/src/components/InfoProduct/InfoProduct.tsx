import { FC, useState } from "react";
import styles from "./InfoProduct.module.scss";
import { Text } from "../UI/Text/Text";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { HiMinusSm, HiPlus } from "react-icons/hi";
import { Slider } from "../Slider/Slider";
import { useProduct } from "../../store/products.store";
import { useBasket } from "../../store/basket.store";
import { useUser } from "../../store/user.store";
import { useAuth } from "../../store/auth.store";

export const InfoProduct: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);
  const { productById } = useProduct();
  const { getAddInBasket, getDeleteInBasket } = useBasket();
  const { profile, addInBasket, deleteInBasket } = useUser();
  const { user } = useAuth();

  const handleAddition = () => {
    setCount((prev) => {
      if (prev === 10) return prev;
      return ++prev;
    });
  };
  const handleSubtraction = () => {
    setCount((prev) => {
      if (prev === 1) return prev;
      return --prev;
    });
  };

  let newPrice =
    productById &&
    `${
      Math.round((productById?.price * (100 - productById?.discount)) / 100) *
      count
    } ₽`;

  const isSameProduct = profile?.basket.find((e) => e._id === productById?._id);

  const handleBuy = () => {
    if (!user) return;

    if (profile && productById && !isSameProduct) {
      addInBasket({ ...productById, quantity: count });
      getAddInBasket(profile._id, { ...productById, quantity: count });
      return;
    }

    if (profile && productById) {
      deleteInBasket(productById);
      getDeleteInBasket(profile?._id, productById?._id);
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider type="info-product" />
      </div>
      <div className={styles.info}>
        <Text type="h1">{productById?.name}</Text>
        <div className={styles.infoProduct}>
          <Text type="h3">
            <b>Вес:</b> {productById?.info?.weight} грамм
          </Text>
          <div className={styles.table}>
            <div>
              Белки <br />
              <b>{productById?.info?.proteins} г</b>
            </div>
            <div>
              Углеводы
              <br />
              <b>{productById?.info?.carbohydrates} г</b>
            </div>
            <div>
              Жиры
              <br />
              <b>{productById?.info?.fats} г</b>
            </div>
            <div>
              Калорийность
              <br />
              <b>{productById?.info?.calories} Ккал</b>
            </div>
          </div>
        </div>
        <div className={styles.delivery}>
          <MdOutlineDeliveryDining className={styles.icon} />
          <Text type="h3">
            <b>Доставим за 40 мин</b>
          </Text>
          <Link to="/">Условия доставки</Link>
        </div>
        <div className={styles.compound}>
          <Text type="h3">
            <b>Состав:</b>
          </Text>
          <Text>{productById?.description}</Text>
        </div>
        <div className={styles.order}>
          <div className={styles.price}>
            {newPrice} <span>{productById?.price} ₽</span>
          </div>

          <div className={styles.count}>
            <HiMinusSm
              className={styles.icon}
              onClick={!isSameProduct ? handleSubtraction : () => ""}
              style={isSameProduct ? { opacity: ".1" } : {}}
            />
            <span>{!isSameProduct ? count : isSameProduct.quantity}</span>
            <HiPlus
              className={styles.icon}
              onClick={!isSameProduct ? handleAddition : () => ""}
              style={isSameProduct ? { opacity: ".1" } : {}}
            />
          </div>
          <div onClick={() => handleBuy()}>
            <Button type="active" className={styles.btn}>
              {user
                ? isSameProduct
                  ? "Убрать из корзины"
                  : "Добавить в корзину"
                : "Войдите"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
