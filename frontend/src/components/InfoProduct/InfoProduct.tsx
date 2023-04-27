import { FC, useState } from 'react';
import styles from './InfoProduct.module.scss';
import { Text } from '../UI/Text/Text';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import { HiMinusSm, HiPlus } from 'react-icons/hi';
import { Slider } from '../Slider/Slider';

export const InfoProduct: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);

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

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider type="info-product" />
      </div>
      <div className={styles.info}>
        <Text type="h1">Ролл "Филадельфия"</Text>
        <div className={styles.infoProduct}>
          <Text type="h3">
            <b>Вес:</b> 200 грамм
          </Text>
          <div className={styles.table}>
            <div>
              Белки <br />
              <b>7,5 г</b>
            </div>
            <div>
              Углеводы
              <br />
              <b>16,6 г</b>
            </div>
            <div>
              Жиры
              <br />
              <b>3,8 г</b>
            </div>
            <div>
              Калорийность
              <br />
              <b>213 Ккал</b>
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
          <Text>Лосось, сыр "Филадельфия", огурец, авокадо</Text>
        </div>
        <div className={styles.order}>
          <div className={styles.price}>
            {219 * count} ₽ <span>269 ₽</span>
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
