import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  active?: boolean;
  className?: string;
  onClick?: (bool?: ReactNode) => void;
  type?: 'active' | 'category' | 'default';
}

export const Button: FC<Props> = ({
  children,
  active = false,
  type = 'default',
  className = '',
  onClick,
}): JSX.Element => {
  switch (type) {
    case 'active':
      return (
        <button className={`${className} ${styles.btn} ${styles.active}`}>
          <img src="./path222.png" alt="path222" className={styles.img} />
          <span>{children}</span>
        </button>
      );

    case 'category':
      return (
        <button
          className={`${className} ${styles.btn} ${styles.category} ${
            active && styles.active_category
          }`}
          onClick={() => (onClick ? onClick() : '')}
        >
          {children}
        </button>
      );

    default:
      return (
        <button className={`${className} ${styles.btn}`}>{children}</button>
      );
  }
};
