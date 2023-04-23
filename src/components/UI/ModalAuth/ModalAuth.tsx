import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ModalAuth.module.scss';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

interface IFormInput {
  email: string;
  password: string | number;
}

export const ModalAuth: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={() => setIsActive && setIsActive(false)}
    >
      <div
        className={`${styles.content} ${isActive && styles.activeContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Text className={styles.title} type="h1">
          Вход в кабинет
        </Text>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            {...register('email', { required: true })}
            placeholder="Почта"
          />
          {errors.email && (
            <span className={styles.error}>Поле на заполнено</span>
          )}
          <input
            {...register('password', { required: true })}
            placeholder="Пароль"
            type="password"
          />
          {errors.password && (
            <span className={styles.error}>Поле на заполнено</span>
          )}
          <Button type="active">Войти</Button>
        </form>
      </div>
    </div>
  );
};
