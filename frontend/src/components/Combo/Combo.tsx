import { FC } from 'react';
import styles from './Combo.module.scss';
import { Text } from '../UI/Text/Text';
import { Slider } from '../Slider/Slider';

export const Combo: FC = (): JSX.Element => {
  return (
    <div className={styles.combo}>
      <div className={styles.nav}>
        <Text type="h2">Комбо меню</Text>
        <img src="/iilroll2.svg" alt="role" height={64} width={64} />
      </div>

      <Slider type="combo" />
    </div>
  );
};
