import { FC } from "react";
import { Layout } from "../components/Layout/Layout";
import styles from "./Main.module.scss";
import { Slider } from "../components/Slider/Slider";
import { Cards } from "../components/Cards/Cards";
import { Combo } from "../components/Combo/Combo";
// import { Category } from "../components/Category/Сategory";
import { About } from "../components/About/About";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Slider />
        <Cards />
        <Combo />
        {/* <Category /> */}
        <About />
      </div>
    </Layout>
  );
};
