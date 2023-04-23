import { FC } from 'react';
import styles from './About.module.scss';
import { Text } from '../UI/Text/Text';

export const About: FC = (): JSX.Element => {
  return (
    <div className={styles.about}>
      <div className={styles.about_text}>
        <div className={styles.about_text_title}>
          <Text type="h2" className={styles.title}>
            О компании <img src="./illroll5about.svg" alt="illroll5about" />
          </Text>
        </div>
        <Text>
          Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления,
          украсит любой ваш стол и не заставит себя долго ждать. С нами вы
          сможете забыть о готовке, легко сделать приятное родным и близким,
          устроить вкусный праздник или расслабится в кругу друзей. Все блюда
          готовятся исключительно из свежих продуктов и по оригинальным рецептам
          Нашего шеф-повара. Любая позиция из Нашего Меню может оказаться у Вас
          на столе максимум через 60 минут! У вас есть возможность сделать
          предварительный заказ на определенный день и время.
        </Text>
      </div>
      <div className={styles.about_img}>
        <img src="./about1.png" alt="about" className={styles.img1} />
        <img src="./about2.png" alt="about" className={styles.img2} />
      </div>
    </div>
  );
};
