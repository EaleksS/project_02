import { FC } from 'react';
import styles from './Items.module.scss';
import { Card } from '../../Card/Card';

export const Items: FC = (): JSX.Element => {
  return (
    <div className={styles.items}>
      {[0, 1, 2, 3, 4, 5].map((e) => {
        return <Card key={e} />;
      })}
    </div>
  );
};
