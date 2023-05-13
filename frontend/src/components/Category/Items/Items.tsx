import { FC, memo } from "react";
import styles from "./Items.module.scss";
import { Card } from "../../Card/Card";
import { useProduct } from "../../../store/products.store";
import { useStore } from "../store";

export const Items: FC = memo((): JSX.Element => {
  const { products } = useProduct();
  const { start, end, selectType } = useStore();


  return (
    <div className={styles.items}>
      {products &&
        products
          .filter((f) => f.type.includes(selectType))
          .slice(start, end)
          .map((e) => <Card key={e._id} {...e} />)}
    </div>
  );
});
