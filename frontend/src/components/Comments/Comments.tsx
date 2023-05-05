import { FC, Fragment } from "react";
import styles from "./Comments.module.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Text } from "../UI/Text/Text";
import { useProduct } from "../../store/products.store";
import { IComment } from "../../types/products.interface";
import { useUser } from "../../store/user.store";

export const Comments: FC = (): JSX.Element => {
  const { productById, getDeleteComment } = useProduct();
  const { profile } = useUser();

  return (
    <div className={styles.comments}>
      {productById?.comments
        .map((e: IComment) => (
          <Fragment key={e._id}>
            <div className={styles.line} />
            <div className={styles.comment}>
              <div className={styles.user}>
                {profile?.isAdmin && (
                  <div className={styles.delete}>
                    <button
                      onClick={() => getDeleteComment(productById._id, e._id)}
                    >
                      Удалить
                    </button>
                  </div>
                )}
                <div className={styles.img}>
                  {e.name.split(" ").map((i) => (
                    <Fragment key={i}>{i[0].toUpperCase()}</Fragment>
                  ))}
                </div>
                <div className={styles.name}>
                  <b>{e.name}</b> <br />
                  {e.createdAt
                    ? `${e.createdAt.slice(8, 10)}.${e.createdAt.slice(
                        5,
                        7
                      )}.${e.createdAt.slice(0, 4)}`
                    : `${new Date().toLocaleDateString()}`}
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((s) => {
                    if (s - 0.5 <= e.rating && e.rating <= s - 0.1)
                      return <BsStarHalf key={s + 10} />;

                    if (e.rating >= s) return <BsStarFill key={s + 10} />;
                    return <BsStar key={s + 10} />;
                  })}
                </div>
                <Text>{e.comment}</Text>
              </div>
              <div className={styles.photo}>
                {e.img && (
                  <img src={e.img} alt="img" width={164} height={124} />
                )}
              </div>
            </div>
          </Fragment>
        ))
        .reverse()}
    </div>
  );
};
