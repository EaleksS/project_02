import { FC } from "react";
import styles from "./Nav.module.scss";
import { Button } from "../../UI/Button/Button";
import { Text } from "../../UI/Text/Text";
import { useStore } from "../store";

export const Nav: FC = (): JSX.Element => {
  const { selectType, setSelectType} = useStore();


  return (
    <div className={styles.nav}>
      {/* <Button
        className={styles.btn}
        type="category"
        active={isActive === 'pizza' ? true : false}
        onClick={() => setIsActive('pizza')}
      >
        <img
          src="./logofoot/pizza.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Пицца</Text>
      </Button> */}
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('sushi')}
        active={isActive === 'sushi' ? true : false}
      >
        <img
          src="./logofoot/sushi.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Суши</Text>
      </Button> */}
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
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('set')}
        active={isActive === 'set' ? true : false}
      >
        <img
          src="./logofoot/set.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Сеты</Text>
      </Button> */}
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('wok')}
        active={isActive === 'wok' ? true : false}
      >
        <img
          src="./logofoot/wok.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Wok</Text>
      </Button> */}
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('soup')}
        active={isActive === 'soup' ? true : false}
      >
        <img
          src="./logofoot/soup.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Супы</Text>
      </Button> */}
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('salad')}
        active={isActive === 'salad' ? true : false}
      >
        <img
          src="./logofoot/Frame 12.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Салаты</Text>
      </Button> */}
      {/* <Button
        className={styles.btn}
        type="category"
        onClick={() => setIsActive('dessert')}
        active={isActive === 'dessert' ? true : false}
      >
        <img
          src="./logofoot/dessert.svg"
          alt="foot"
          style={{ marginRight: '10px' }}
        />
        <Text>Десерты</Text>
      </Button> */}
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
};
