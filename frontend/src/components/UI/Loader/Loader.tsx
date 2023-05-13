import { FC } from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
