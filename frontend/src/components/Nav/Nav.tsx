import { FC } from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft } from 'react-icons/hi2';

export const Nav: FC = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Link to="/catalog">
        <HiArrowLongLeft className={styles.icon} />
        Перейти в каталог
      </Link>
    </nav>
  );
};
