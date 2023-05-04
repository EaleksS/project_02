import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./ModalAuth.module.scss";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../../store/auth.store";

interface Props {
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

interface IFormInput {
  email: string;
  password: string | number;
}

interface IFormInputRegister {
  email: string;
  password: string | number;
  password_repeat: string | number;
}

export const ModalAuth: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  const [selectAuth, setSelectAuth] = useState<"login" | "register">("login");

  const { getLogin, getRegister } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    reset: resetRegister,
    watch,
    formState: { errors: errorsRegister },
  } = useForm<IFormInputRegister>();

  // Login
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    getLogin(data.email, data.password);
    reset();

    setTimeout(() => {
      setIsActive && setIsActive(false);
    }, 1000);
  };

  // Register
  const onSubmitRegister: SubmitHandler<IFormInputRegister> = (data) => {
    getRegister(data.email, data.password);
    resetRegister();
  };

  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={() => {
        setIsActive && setIsActive(false);
        reset();
        resetRegister();
      }}
    >
      <div
        className={`${styles.content} ${isActive && styles.activeContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        {selectAuth === "login" ? (
          <>
            <Text className={styles.title} type="h1">
              Вход в кабинет
            </Text>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
                placeholder="Почта"
              />
              {errors.email && (
                <span className={styles.error}>
                  {errors.email.type === "required"
                    ? "Поле на заполнено"
                    : "Почта введена не корректно"}
                </span>
              )}
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Слишком короткий пароль",
                  },
                })}
                placeholder="Пароль"
                type="password"
              />
              {errors.password && errors.password.type === "required" ? (
                <span className={styles.error}>Поле на заполнено</span>
              ) : (
                <span className={styles.error}>{errors.password?.message}</span>
              )}
              <Button type="active">Войти</Button>
            </form>
            <Text
              className={styles.mess}
              onClick={() => setSelectAuth("register")}
            >
              Зарегистрироваться
            </Text>
          </>
        ) : (
          <>
            <Text className={styles.title} type="h1">
              Зарегистрироваться
            </Text>
            <form
              onSubmit={handleSubmitRegister(onSubmitRegister)}
              className={styles.form}
            >
              <input
                {...registerRegister("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
                placeholder="Почта"
              />
              {errorsRegister.email && (
                <span className={styles.error}>
                  {errorsRegister.email.type === "required"
                    ? "Поле на заполнено"
                    : "Почта введена не корректно"}
                </span>
              )}
              <input
                {...registerRegister("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Слишком короткий пароль",
                  },
                })}
                placeholder="Пароль"
                type="password"
              />
              {errorsRegister.password && (
                <span className={styles.error}>
                  {errorsRegister.password.type === "required"
                    ? "Поле на заполнено"
                    : errorsRegister.password.message}
                </span>
              )}
              <input
                {...registerRegister("password_repeat", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Пароли не совпадают",
                  minLength: {
                    value: 6,
                    message: "Слишком короткий пароль",
                  },
                })}
                placeholder="Пароль"
                type="password"
              />
              {errorsRegister.password_repeat && (
                <span className={styles.error}>
                  {errorsRegister.password_repeat.type === "required"
                    ? "Поле на заполнено"
                    : errorsRegister.password_repeat.message}
                </span>
              )}
              <Button type="active">Зарегистрироваться</Button>
            </form>
            <Text
              className={styles.mess}
              onClick={() => setSelectAuth("login")}
            >
              Войти в кабинет
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
