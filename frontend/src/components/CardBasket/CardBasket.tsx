import { FC } from "react";
import styles from "./CardBasket.module.scss";
import { IProduct } from "../../types/products.interface";
import { Text } from "../UI/Text/Text";
import { MdCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../store/basket.store";
import { useUser } from "../../store/user.store";
import { useAuth } from "../../store/auth.store";

export const CardBasket: FC<IProduct> = (props): JSX.Element => {
  const navigate = useNavigate();

  const { getDeleteInBasket } = useBasket();
  const { profile, deleteInBasket } = useUser();
  const { user } = useAuth();

  const handleDelete = () => {
    if (!user) return;

    if (profile && props) {
      deleteInBasket(props);
      getDeleteInBasket(profile?._id, props?._id);
      return;
    }
  };

  const price = Math.round(
    (props.price *
      (props.quantity ? props.quantity : 1) *
      (100 - props.discount)) /
      100
  );

  return (
    <div className={styles.card}>
      <div
        className={styles.title}
        onClick={() => navigate(`/products/${props._id}`)}
      >
        <img src={props.imageUrl} alt={props.name} />
        <div>
          <Text type="h2" className={styles.h2}>
            {props.name.length < 12
              ? props.name
              : `${props.name.slice(0, -8)}...`}
          </Text>
          <div className={styles.product_info}>
            <Text type="h3" className={styles.h3}>
              {props.info?.weight} грамм
            </Text>
            <MdCircle className={styles.icon} />
            <Text type="h3">{props.info?.calories} Ккал</Text>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.count}>{props.quantity}</div>
        <div className={styles.price}>{price}₽</div>
        <div className={styles.delete} onClick={handleDelete}>
          <RiDeleteBin5Line />
        </div>
      </div>
    </div>
  );
};
