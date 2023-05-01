import { FC } from 'react';
import styles from './Items.module.scss';
import { Card } from '../../Card/Card';
import { useProduct } from '../../../store/products.store';

export const Items: FC = (): JSX.Element => {

  const {products} = useProduct()

  return (
    <div className={styles.items}>
      {products && products.map((e) => {
        return <Card key={e._id} {...e} />;
      })}
    </div>
  );
};
