import { FC, useState } from 'react';
import styles from './Pagination.module.scss';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export const Pagination: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button
          className={styles.prev}
          onClick={() =>
            setIsActive((prev) => {
              if (prev === 1) return prev;
              return prev - 1;
            })
          }
        >
          <HiArrowLongLeft className={styles.icon} />
        </button>
        <button
          onClick={() => setIsActive(1)}
          className={isActive === 1 ? styles.active : ''}
        >
          1
        </button>
        <button
          onClick={() => setIsActive(2)}
          className={isActive === 2 ? styles.active : ''}
        >
          2
        </button>
        <button
          onClick={() => setIsActive(3)}
          className={isActive === 3 ? styles.active : ''}
        >
          3
        </button>
        <button
          onClick={() => setIsActive(4)}
          className={isActive === 4 ? styles.active : ''}
        >
          4
        </button>
        <button
          className={styles.next}
          onClick={() =>
            setIsActive((prev) => {
              if (prev === 4) return prev;
              return prev + 1;
            })
          }
        >
          <HiArrowLongRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.link}>
        <Link to=".#">
          Перейти в каталог <HiArrowLongRight className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};
