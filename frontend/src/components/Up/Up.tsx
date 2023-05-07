import { FC, useEffect, useRef, useState } from "react";
import styles from "./Up.module.scss";
import { BsArrowUp } from "react-icons/bs";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export const Up: FC = (): JSX.Element => {
  const [handleClick, setHandleClick] = useState<number>(0);
  const [active, setActive] = useState(false);

  // Плавный переход
  const [renderScroll] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll, handleClick]);
  // /Плавный переход

  const { height } = useWindowDimensions();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (scroll > height / 2) return setActive(true);

    setActive(false);
  }, [scroll]);

  return (
    <>
      <div
        ref={sectionRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      ></div>
      <div
        className={`${styles.up} ${active && styles.active}`}
        onClick={() => setHandleClick((prev) => prev + 1)}
      >
        <img
          src="/path222.png"
          alt="path222"
          className={styles.img}
          width={"600%"}
          height={"600%"}
        />
        <div className={styles.content}>
          <BsArrowUp className={styles.icon} />
          <span>Наверх</span>
        </div>
      </div>
    </>
  );
};
