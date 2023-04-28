import { FC } from 'react';
import styles from './Feedback.module.scss';
import { Text } from '../UI/Text/Text';

export const Feedback: FC = (): JSX.Element => {
  return (
    <div className={styles.feedbackBanner}>
      <div className={styles.text}>
        <Text type="h2">
          <b>Заказывали уже у нас?</b>
        </Text>
        <Text>Оставьте отзыв. Помогите нам стать лучше.</Text>
      </div>
      <div className={styles.icon}>
        <img src="/illroll5feedback.svg" alt="feedback" />
      </div>
      <div className={styles.btn}>
        <span>Оставить отзыв</span>
        <img src="/path222.png" alt="path" />
      </div>
    </div>
  );
};
