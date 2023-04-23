import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiShoppingBasketFill, RiUserFill } from 'react-icons/ri';
import { Text } from '../UI/Text/Text';
import { Modal } from '../UI/Modal/Modal';
import { ModalAuth } from '../UI/ModalAuth/ModalAuth';

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveAuth, setIsActiveAuth] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="./logo.svg" alt="logo" />
        </div>
        <div style={{ width: '100%' }}>
          <nav className={styles.top}>
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
                setIsActive((prev) => !prev);
              }}
            >
              <div className={styles.count}>0 ₽</div>
              <div className={styles.basket_icon}>
                <RiShoppingBasketFill />
                <span>0</span>
              </div>
            </div>
            <div className={styles.user} onClick={() => setIsActiveAuth(true)}>
              <RiUserFill />
            </div>
          </nav>
          {/* Карзина */}
          <Modal isActive={isActive} setIsActive={setIsActive} />
          {/* /Карзина */}
          {/* Атвторизация */}
          <ModalAuth isActive={isActiveAuth} setIsActive={setIsActiveAuth} />
          {/* /Атвторизация */}
          <nav className={styles.down}>
            <ul>
              <li>
                <img src="./1.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./2.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./3.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./4.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./5.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./6.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./7.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./8.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./9.svg" alt="logo foot" />
              </li>
              <li>
                <img src="./10.svg" alt="logo foot" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
