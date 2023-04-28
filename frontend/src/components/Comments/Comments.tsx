import { FC, Fragment } from 'react';
import styles from './Comments.module.scss';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Text } from '../UI/Text/Text';

export const Comments: FC = (): JSX.Element => {
  return (
    <div className={styles.comments}>
      {[1, 2, 3, 4, 5].map((e) => (
        <Fragment key={e}>
          <div className={styles.line} />
          <div className={styles.comment}>
            <div className={styles.user}>
              <div className={styles.img}>ЯР</div>
              <div className={styles.name}>
                <b>Яна Рождественская</b> <br />
                12.02.2022
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
              <Text>
                Lorem ipsum dolor
              </Text>
            </div>
            <div className={styles.photo}>
              {e % 2 === 0 && (
                <img
                  src="/imgcomment.png"
                  alt="img"
                  width={164}
                  height={124}
                />
              )}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
