import { FC, useState } from 'react';
import styles from './InfoProduct.module.scss';
import { Text } from '../UI/Text/Text';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import { HiMinusSm, HiPlus } from 'react-icons/hi';
import { Slider } from '../Slider/Slider';
import { useProduct } from '../../store/products.store';

export const InfoProduct: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);
  const { productById } = useProduct();

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
            <HiMinusSm className={styles.icon} onClick={handleSubtraction} />
            <span>{count}</span>
            <HiPlus className={styles.icon} onClick={handleAddition} />
          </div>
          <Button type="active" className={styles.btn}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};
