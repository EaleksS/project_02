import { FC, useEffect, useRef, useState } from "react";
import styles from "./Pagination.module.scss";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useStore } from "../store";
import { useProduct } from "../../../store/products.store";

export const Pagination: FC = (): JSX.Element => {
  const [array, setArray] = useState<number[]>([]);

  const { start, end, setStart, setEnd, selectType, active, setActive } =
    useStore();

  const { products } = useProduct();

  useEffect(() => {
    // Все обнуляем
    setArray([]);
    setEnd(6);
    setStart(0);
    setActive(1);

    if (products) {
      for (
        let i = 1;
        i <=
        Math.ceil(
          products.filter((f) => f.type.includes(selectType)).length / 6
        );
        i++
      ) {
        setArray((prev) => [...prev, i]);
      }
    }
  }, [selectType]);

  // Плавный переход
  const [renderScroll] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll, active]);
  // /Плавный переход

  return (
    <div className={styles.container}>
      <div
        ref={sectionRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      ></div>
      <div className={styles.pagination}>
        <button
          className={styles.prev}
          onClick={() => {
            setActive(active === 1 ? 1 : active - 1);
            if (active !== 1) {
              setStart(start - 6);
              setEnd(end - 6);
            }
          }}
        >
          <HiArrowLongLeft className={styles.icon} />
        </button>

        {Array.from(new Set(array))
          .sort()
          .map((i) => (
            <button
              key={i}
              onClick={() => {
                if (i === 1) {
                  setStart(0);
                  setEnd(6);
                }
                if (i === 2) {
                  setStart(6);
                  setEnd(12);
                }
                if (i === 3) {
                  setStart(12);
                  setEnd(18);
                }
                if (i === 4) {
                  setStart(18);
                  setEnd(24);
                }
                if (i === 5) {
                  setStart(24);
                  setEnd(30);
                }
                setActive(i);
              }}
              className={active === i ? styles.active : ""}
            >
              {i}
            </button>
          ))}
        <button
          className={styles.next}
          onClick={() => {
            setActive(
              active === Array.from(new Set(array)).length ? active : active + 1
            );
            if (active !== Array.from(new Set(array)).length) {
              setStart(start + 6);
              setEnd(end + 6);
            }
          }}
        >
          <HiArrowLongRight className={styles.icon} />
        </button>
      </div>
      {/* <div className={styles.link}>
        <Link to=".#">
          Перейти в каталог <HiArrowLongRight className={styles.icon} />
        </Link>
      </div> */}
    </div>
  );
};
