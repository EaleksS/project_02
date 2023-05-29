import { FC, memo } from "react";
import styles from "./Items.module.scss";
import { Card } from "../../Card/Card";
import { useProduct } from "../../../store/products.store";
import { useStore } from "../store";
import { IProduct } from "../../../types/products.interface";
import { useCalcDiscount } from "../../../hooks/useCalcDiscount";
import { Loader } from "../../UI/Loader/Loader";

export const Items: FC = memo((): JSX.Element => {
  const { products } = useProduct();
  const { start, end, selectType, selectedOption } = useStore();

  const sort = (a: IProduct, b: IProduct) => {
    if (selectedOption === "По умолчанию") return false;

    if (selectedOption === "По возрастание")
      return useCalcDiscount(a) > useCalcDiscount(b);

    return useCalcDiscount(a) < useCalcDiscount(b);
  };

  console.log(selectedOption);

  return (
    <div className={styles.items}>
      {products ? (
        products
          .filter((f) => f.type.includes(selectType))
          .sort((a, b) => (sort(a, b) ? 1 : -1))
          .slice(start, end)
          .map((e) => <Card key={e._id} {...e} />)
      ) : (
        <Loader className="loader-swiper" />
      )}
    </div>
  );
});
