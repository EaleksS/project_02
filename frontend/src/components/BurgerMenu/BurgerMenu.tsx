import { Dispatch, FC, SetStateAction, memo, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { Text } from "../UI/Text/Text";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  isActiveMenu: boolean;
  setIsActiveMenu: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = memo(
  ({ isActiveMenu, setIsActiveMenu }): JSX.Element => {
    useEffect(() => {
      if (isActiveMenu) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }, [isActiveMenu]);

    const navigate = useNavigate();

    return (
      <div className={`${styles.burger_menu} ${isActiveMenu && styles.active}`}>
        <div
          className={styles.close}
          onClick={() => setIsActiveMenu((prev) => !prev)}
        >
          <AiFillCloseCircle />
        </div>

        <div className={styles.content}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <img src="/logo.svg" alt="logo" />
          </div>
          <ul className={styles.list}>
            <li>
              <Text>О нас</Text>
            </li>
            <li>
              <Text>Доставка и оплата</Text>
            </li>
            <li>
              <Text>Контакты</Text>
            </li>
            <li>
              <Text>Бонусы</Text>
            </li>
          </ul>
          <div className={styles.tel}>
            <span>
              <FaPhoneAlt className={styles.icon} />
              <a href="tel:+74956171424">+7 (495) 617-14-24</a>
            </span>
            <span className={styles.datetime}>c 10:00 до 23:00</span>
          </div>
        </div>
      </div>
    );
  }
);
