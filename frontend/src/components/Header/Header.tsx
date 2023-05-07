import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { RiShoppingBasketFill, RiUserFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Text } from "../UI/Text/Text";
import { Modal } from "../UI/Modal/Modal";
import { ModalAuth } from "../UI/ModalAuth/ModalAuth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth.store";
import { useUser } from "../../store/user.store";
import { useBasket } from "../../store/basket.store";
import { useStore } from "../Category/store";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header: FC = (): JSX.Element => {
  const [isActiveAuth, setIsActiveAuth] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const { user, getLogout } = useAuth();
  const { setIsActive } = useBasket();

  // Стейт категория
  const { setSelectType } = useStore();

  const navigate = useNavigate();

  const { profile } = useUser();

  let price: number = 0;

  profile?.basket.forEach((e) => {
    price += Math.round(
      (e.price * (e?.quantity ? e?.quantity : 1) * (100 - e.discount)) / 100
    );
  });

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
                <Text>Доставка и оплата</Text>
              </li>
              <li>
                <Text>Контакты</Text>
              </li>
              <li>
                <Text>Бонусы</Text>
              </li>
              <li>
                <Text>Вакансии</Text>
              </li>
            </ul>
            <div className={styles.tel}>
              <span>
                <FaPhoneAlt className={styles.icon} />
                <a href=".#">+7 (495) 617-14-24</a>
              </span>
              <span className={styles.datetime}>c 10:00 до 23:00</span>
            </div>
            <div
              className={styles.basket}
              onClick={(e) => {
                e.stopPropagation();
                setIsActive();
              }}
            >
              <div className={styles.count}>{price} ₽</div>
              <div className={styles.basket_icon}>
                <RiShoppingBasketFill />
                <span>{profile ? profile.basket.length : 0}</span>
              </div>
            </div>
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
};
