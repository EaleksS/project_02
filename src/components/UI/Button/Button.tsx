import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'active' | 'default';
}

export const Button: FC<Props> = ({
  children,
  type = 'default',
  className = '',
}): JSX.Element => {
  switch (type) {
    case 'active':
      return (
        <button className={`${className} ${styles.btn} ${styles.active}`}>
          {children}
        </button>
      );

    default:
      return (
        <button className={`${className} ${styles.btn}`}>{children}</button>
      );
  }
};
