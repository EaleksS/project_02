import { FC } from 'react';
import styles from './Category.module.scss';
import { Text } from '../UI/Text/Text';
import { Nav } from './Nav/Nav';
import { Items } from './Items/Items';
import { Pagination } from './Pagination/Pagination';

export const Category: FC = (): JSX.Element => {
  return (
    <div className={styles.category}>
      <div className={styles.nav}>
        <Text type="h2">Категории</Text>
        <img src="./illrollcategory.svg" alt="role" height={64} width={64} />
      </div>
      <Nav />

      <Items />

      <Pagination />
    </div>
  );
};
