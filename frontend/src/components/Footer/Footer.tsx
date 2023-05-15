import { FC } from "react";
import styles from "./Footer.module.scss";
import { Text } from "../UI/Text/Text";
import { Link } from "react-router-dom";

export const Footer: FC = (): JSX.Element => {
  return (
    <header className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo-footer.svg" alt="logo" />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <Text>
                <Link to="/advantages">Наши преимущества</Link>
              </Text>
            </li>
            <li>
              <Text>
                <Link to="/ship-and-pay">Доставка и оплата</Link>
              </Text>
            </li>
            <li>
              <Text>
                <Link to="/contact">Контакты</Link>
              </Text>
            </li>
          </ul>
          <div className={styles.social}>
            <img
              src="/remix-icons/fill/logos/facebook-box-fill.svg"
              alt="facebook"
            />
            <img
              src="/remix-icons/fill/logos/instagram-fill.svg"
              alt="instagram"
            />
            <img
              src="/remix-icons/fill/logos/vk-social-logotype.svg"
              alt="vk"
            />
          </div>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Пицца</td>
              <td>Суши</td>
              <td>Роллы</td>
              <td>Сеты</td>
              <td>Wok</td>
            </tr>
            <tr>
              <td>Супы</td>
              <td>Салаты</td>
              <td>Десерты</td>
              <td>Напитки</td>
              <td>Акции</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.info}>
          <Text type="h1">
            <a href=".#">+7 (495) 617-14-24</a>
          </Text>
          <Text type="p" className={styles.datetime}>
            c 10:00 до 23:00
          </Text>
          <Text type="p">© Рикша. Все права защищены.</Text>
        </div>
      </div>
    </header>
  );
};
