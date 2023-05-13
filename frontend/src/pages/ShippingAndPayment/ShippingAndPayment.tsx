import { FC } from "react";
import styles from "./ShippingAndPayment.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Text } from "../../components/UI/Text/Text";
import { Map } from "../../components/Map/Map";

export const ShippingAndPayment: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Text type="h1">
          Доставка <img src="/ic1.svg" alt="ic1" />
        </Text>
        <div className={styles.zone_info}>
          <div className={styles.zone_green}>
            <img src="/zone-green.svg" alt="zone" />
            <div className={styles.info}>
              <Text type="h3">Зеленая зона</Text>
              <Text>Доставка: до 29 мин</Text>
              <Text>Минимальная сумма заказа: 600 ₽ </Text>
              <Text>Доставляем БЕСПЛАТНО</Text>
            </div>
          </div>
          <div className={styles.zone_yellow}>
            <img src="/zone-yellow.svg" alt="zone" />
            <div className={styles.info}>
              <Text type="h3">Желтая зона</Text>
              <Text>Доставка: до 59 мин</Text>
              <Text>Минимальная сумма заказа: 800 ₽ </Text>
              <Text>Доставляем БЕСПЛАТНО</Text>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </Layout>
  );
};
