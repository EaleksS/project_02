import { FC, ReactNode } from 'react';
import styles from './Text.module.scss';

interface Props {
  children: ReactNode;
  onClick?: (bool?: ReactNode) => void;
  className?: ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'p';
}

export const Text: FC<Props> = ({
  children,
  onClick,
  className = '',
  type = 'p',
}): JSX.Element => {
  switch (type) {
    case 'h1':
      return (
        <h1
          className={`${className} ${styles.h1}`}
          onClick={() => (onClick ? onClick() : '')}
        >
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2
          className={`${className} ${styles.h2}`}
          onClick={() => (onClick ? onClick() : '')}
        >
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3
          className={`${className} ${styles.h3}`}
          onClick={() => (onClick ? onClick() : '')}
        >
          {children}
        </h3>
      );

    default:
      return (
        <p
          className={`${className} ${styles.p}`}
          onClick={() => (onClick ? onClick() : '')}
        >
          {children}
        </p>
      );
  }
};
