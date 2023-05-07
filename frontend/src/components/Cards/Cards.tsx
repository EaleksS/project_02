import { FC, useState } from "react";
import { Slider } from "../Slider/Slider";
import { Text } from "../UI/Text/Text";
import styles from "./Cards.module.scss";

export const Cards: FC = (): JSX.Element => {
  return (
    <div className={styles.cards}>
      <div className={styles.nav}>
        <Text type="h2">Новинки</Text>
        <img src="/new.svg" alt="role" height={64} width={64} />
      </div>
      <Slider type="cards" />
    </div>
  );
};
