import { FC, useEffect } from "react";
import { Button } from "../UI/Button/Button";
import { Text } from "../UI/Text/Text";
import styles from "./Card.module.scss";
import { MdCircle } from "react-icons/md";
import { IProduct } from "../../types/products.interface";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../store/basket.store";
import { useUser } from "../../store/user.store";
import { useAuth } from "../../store/auth.store";

export const Card: FC<IProduct> = (props): JSX.Element => {
  const { getAddInBasket } = useBasket();
  const { profile, addInBasket } = useUser();
  const { user } = useAuth();

  let newPrice = `${Math.round(
    (props.price * (100 - props.discount)) / 100
  )} ₽`;

  const navigate = useNavigate();

  let isSameProduct = profile?.basket.find((e) => e._id === props?._id);

  useEffect(() => {
    isSameProduct = profile?.basket.find((e) => e._id === props?._id);
  }, [isSameProduct]);

  const handleBuy = () => {
    if (!user) return;

    if (profile && props && !isSameProduct) {
      addInBasket({ ...props, quantity: 1 });
      getAddInBasket(profile._id, { ...props, quantity: 1 });
      return;
    }

    navigate(`/products/${props._id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/products/${props._id}`)}
    >
      <div className={styles.img}>
        <img src={props.imageUrl} alt="img" width={"100%"} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <Text type="h3">{props.info?.weight} грамм</Text>
          <MdCircle className={styles.icon} />
          <Text type="h3">{props.info?.calories} Ккал</Text>
        </div>
        <Text type="h1" className={styles.title}>
          {props.name}
        </Text>
        <Text className={styles.desc}>
          {props.description.length < 90
            ? props.description
            : `${props.description.slice(0, 90)}...`}
        </Text>
        <div className={styles.down}>
          <div className={styles.price}>
            {newPrice}
            <span>{props.discount !== 0 && `${props.price} ₽`}</span>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleBuy();
            }}
          >
            <Button type="active" className={styles.btn}>
              {user ? (isSameProduct ? "В корзине" : "Купить") : "Войдите"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
