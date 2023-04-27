import { FC, useState } from 'react';
import { Slider } from '../Slider/Slider';
import { Text } from '../UI/Text/Text';
import styles from './Cards.module.scss';

export const Cards: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<'top' | 'new'>('top');

  return (
    <div className={styles.cards}>
      <div className={styles.nav}>
        <Text
          type="h2"
          className={isActive === 'top' ? styles.active : ''}
          onClick={() => setIsActive('top')}
        >
          Топ позиции
        </Text>
        <Text
          type="h2"
          className={isActive === 'new' ? styles.active : ''}
          onClick={() => setIsActive('new')}
        >
          Новинки
        </Text>
      </div>

      <Slider type="cards" />
    </div>
  );
};
