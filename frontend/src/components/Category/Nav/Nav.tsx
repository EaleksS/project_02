import { FC, memo } from "react";
import styles from "./Nav.module.scss";
import { Button } from "../../UI/Button/Button";
import { Text } from "../../UI/Text/Text";
import { useStore } from "../store";

export const Nav: FC = memo((): JSX.Element => {
  const { selectType, setSelectType } = useStore();

  console.log("render Nav");

  return (
    <div className={styles.nav}>
      <Button
        className={styles.btn}
        type="category"
        active={selectType === "pizza" ? true : false}
        onClick={() => setSelectType("pizza")}
      >
        <img
          src="./logofoot/pizza.svg"
          alt="foot"
          style={{ marginRight: "10px" }}
        />
        <Text>Пицца</Text>
      </Button>
      <Button
        className={styles.btn}
        type="category"
        onClick={() => setSelectType("rolls")}
        active={selectType === "rolls" ? true : false}
      >
        <img
          src="./logofoot/rolle.svg"
          alt="foot"
          style={{ marginRight: "10px" }}
        />
        <Text>Роллы</Text>
      </Button>

      <Button
        className={styles.btn}
        type="category"
        onClick={() => setSelectType("additives")}
        active={selectType === "additives" ? true : false}
      >
        <img
          src="./logofoot/soy-sauce.png"
          alt="foot"
          style={{ marginRight: "10px" }}
        />
        <Text>Добавки</Text>
      </Button>
      <Button
        className={styles.btn}
        type="category"
        onClick={() => setSelectType("drink")}
        active={selectType === "drink" ? true : false}
      >
        <img
          src="./logofoot/drink.svg"
          alt="foot"
          style={{ marginRight: "10px" }}
        />
        <Text>Напитки</Text>
      </Button>
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('sale')}
        active={isActive === 'sale' ? true : false}
      >
        <img
          src="./logofoot/sale.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Акции</Text>
      </Button> */}
    </div>
  );
});
