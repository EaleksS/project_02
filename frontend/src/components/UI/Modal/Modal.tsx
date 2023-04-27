import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

interface Props {
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  const handleClickRemove = () => {
    setIsActive && setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickRemove);

    return () => {
      window.removeEventListener('click', handleClickRemove);
    };
  }, []);

  return (
    <div
      className={`${styles.modal} ${styles.basket} ${
        isActive && styles.active
      }`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.content}>
        <img src="./ic2.svg" alt="logo" />
        <Text type="h2">Ваша корзина пуста</Text>
      </div>
      <div className={styles.buy}>
        <div className={styles.count}>
          Сумма заказа: <b>0 ₽ </b>
        </div>
        <Button type="active" className={styles.btn}>
          В каталог
        </Button>
      </div>
    </div>
  );
};
