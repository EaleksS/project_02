import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import { Text } from '../UI/Text/Text';
import styles from './Card.module.scss';
import { MdCircle } from 'react-icons/md';
import { IProduct } from '../../types/products.interface';

export const Card: FC<IProduct> = (props): JSX.Element => {
  let newPrice = `${(props.price * (100 - props.discount)) / 100} ₽`;

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={props.imageUrl} alt="img" />
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
        <Text className={styles.desc}>{props.description}</Text>
        <div className={styles.down}>
          <div className={styles.price}>
            {newPrice}
            <span>{props.discount !== 0 && `${props.price} ₽`}</span>
          </div>
          <Button type="active" className={styles.btn}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};
