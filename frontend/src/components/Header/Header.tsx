import { FC, memo, useState } from "react";
import styles from "./Header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Text } from "../UI/Text/Text";
import { Modal } from "../UI/Modal/Modal";
import { ModalAuth } from "../UI/ModalAuth/ModalAuth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth.store";
import { useStore } from "../Category/store";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Basket } from "./Basket/Basket";

export const Header: FC = memo((): JSX.Element => {
  const [isActiveAuth, setIsActiveAuth] = useState<boolean>(false);
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const { user, getLogout } = useAuth();

  // Стейт категория
  const { setSelectType } = useStore();

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div style={{ width: "100%" }}>
          <nav className={styles.top}>
            <div
              className={`${styles.burger_menu} ${
                isActiveMenu && styles.active
              }`}
              onClick={() => setIsActiveMenu(true)}
            >
              <GiHamburgerMenu />
            </div>
            {/* Burger Menu */}
            <BurgerMenu
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
            />
            {/* /Burger Menu */}
            <ul className={styles.list}>
              <li>
                <Text>О нас</Text>
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
              <li style={{ textDecoration: "line-through" }}>
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
            <Basket />
            {user ? (
              <div onClick={() => getLogout()}>выйти</div>
            ) : (
              <div
                className={styles.user}
                onClick={() => setIsActiveAuth(true)}
              >
                <RiUserFill />
              </div>
            )}
          </nav>
          {/* Корзина */}
          <Modal />
          {/* /Корзина */}
          {/* Атвторизация */}
          <ModalAuth isActive={isActiveAuth} setIsActive={setIsActiveAuth} />
          {/* /Атвторизация */}
          <nav className={styles.down}>
            <ul>
              <li>
                <img
                  src="/1.svg"
                  alt="pizza"
                  onClick={() => {
                    setSelectType("pizza");
                    navigate("/catalog");
                  }}
                />
              </li>
              {/* <li>
                <img src="/2.svg" alt="logo foot" />
              </li> */}
              <li>
                <img
                  src="/3.svg"
                  alt="rolls"
                  onClick={() => {
                    setSelectType("rolls");
                    navigate("/catalog");
                  }}
                />
              </li>
              {/* <li>
                <img src="/4.svg" alt="logo foot" />
              </li>
              <li>
                <img src="/5.svg" alt="logo foot" />
              </li>
              <li>
                <img src="/6.svg" alt="logo foot" />
              </li>
              <li>
                <img src="/7.svg" alt="logo foot" />
              </li>
              <li>
                <img src="/8.svg" alt="logo foot" />
              </li> */}
              <li>
                <img
                  src="/9.svg"
                  alt="drink"
                  onClick={() => {
                    setSelectType("drink");
                    navigate("/catalog");
                  }}
                />
              </li>
              <li>
                <img src="/10.svg" alt="акции" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
