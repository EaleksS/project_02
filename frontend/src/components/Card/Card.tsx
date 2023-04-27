import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import { Text } from '../UI/Text/Text';
import styles from './Card.module.scss';
import { MdCircle } from 'react-icons/md';

export const Card: FC = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="./sushi/1.png" alt="sushi" />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <Text type="h3">200 грамм</Text>
          <MdCircle className={styles.icon} />
          <Text type="h3">130 Ккал</Text>
        </div>
        <Text type="h1" className={styles.title}>
          Ролл "Филадельфия"
        </Text>
        <Text className={styles.desc}>
          Лосось, сыр "Филадельфия", огурец, авокадо
        </Text>
        <div className={styles.down}>
          <div className={styles.price}>
            219 ₽ <span>269 ₽</span>
          </div>
          <Button type="active" className={styles.btn}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};
