import { FC } from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  w?: number;
  h?: number;
}

export const Loader: FC<Props> = ({
  className,
  w = 80,
  h = 80,
}): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <ColorRing
        visible={true}
        height={h}
        width={w}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
