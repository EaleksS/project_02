import { FC } from "react";
import styles from "./Catalog.module.scss";
import { Layout } from "../components/Layout/Layout";
import { Category } from "../components/Category/Сategory";
import { About } from "../components/About/About";

export const Catalog: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Category />
        <About />
      </div>
    </Layout>
  );
};
