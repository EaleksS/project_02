import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Text } from "../../components/UI/Text/Text";

export const Advantages: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Text type="h1">
          Наши преимущества <img src="/ill roll 1.svg" alt="contacts" />
        </Text>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector.svg" alt="Vector" />
              <Text type="h3">
                Реальные <br /> отзывы
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-1.svg" alt="Vector" />
              <Text type="h3">
                Безопасность <br />
                продукта
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-2.svg" alt="Vector" />
              <Text type="h3">
                Быстрая <br />
                доставка
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-3.svg" alt="Vector" />
              <Text type="h3">
                Техническая <br />
                поддержка
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-4.svg" alt="Vector" />
              <Text type="h3">
                Безопасные <br />
                платежи
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-5.svg" alt="Vector" />
              <Text type="h3">
                Низкие <br />
                цены
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-6.svg" alt="Vector" />
              <Text type="h3">
                Гарантия <br />
                возврата денег
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <img src="/Vector-7.svg" alt="Vector" />
              <Text type="h3">
                Сертификаты <br />
                гарантии
              </Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis, dictum semper sem a. Justo, eget luctus faucibus vitae
              tincidunt sit faucibus sollicitudin. Lectus senectus in tempus,
              amet, nam nec. Enim amet nec cras quis felis nullam porta lorem
              ante. Odio.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  );
};
