import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./ModalComment.module.scss";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useProduct } from "../../../store/products.store";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

interface IFormInputs {
  description: string;
  email: string;
  name: string | number;
}

export const ModalComment: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  const [rating, setRating] = useState<number>(5);

  const { getAddComment, productById } = useProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  // Feedback Send
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    productById &&
      getAddComment(productById?._id, {
        name: String(data.name),
        comment: data.description,
        img: "",
        rating: rating,
      });

    setIsActive && setIsActive(false);

    reset();
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 700 && isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={() => {
        setIsActive && setIsActive(false);
        reset();
      }}
    >
      <div
        className={styles.close}
        onClick={() => setIsActive && setIsActive(false)}
      >
        <AiFillCloseCircle />
      </div>
      <div
        className={`${styles.content} ${isActive && styles.activeContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Text className={styles.title} type="h1">
            Оставить отзыв
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.rating}>
              <Text>Ваша оценка</Text>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => {
                  if (rating >= s)
                    return (
                      <BsStarFill
                        key={s + 100}
                        onMouseEnter={() => setRating(s)}
                      />
                    );
                  return (
                    <BsStar key={s + 100} onMouseEnter={() => setRating(s)} />
                  );
                })}
              </div>
            </div>
            <textarea
              className={styles.textarea}
              {...register("description", {
                required: true,
              })}
              placeholder="Напишите Ваш отзыв *"
            />
            {errors.email && (
              <span className={styles.error}>Поле на заполнено</span>
            )}
            <div className={styles.form_user}>
              <div>
                <input
                  {...register("email", {
                    required: false,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  placeholder="Почта"
                  type="email"
                />
                {errors.email && (
                  <span className={styles.error}>
                    {errors.email.type === "required"
                      ? "Поле на заполнено"
                      : "Почта введена не корректно"}
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("name", { required: true })}
                  placeholder="Ваше имя и фамилия *"
                  type="text"
                />
                {errors.name && (
                  <span className={styles.error}>Поле на заполнено</span>
                )}
              </div>
            </div>
            <Button type="active">Оставить отзыв</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
