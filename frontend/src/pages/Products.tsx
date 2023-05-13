import { FC, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import styles from "./Products.module.scss";
import { Nav } from "../components/Nav/Nav";
import { InfoProduct } from "../components/InfoProduct/InfoProduct";
import { Feedback } from "../components/Feedback/Feedback";
import { Comments } from "../components/Comments/Comments";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../store/products.store";
import { Loader } from "../components/UI/Loader/Loader";

export const Products: FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProductById, isError, setIsError, isLoader } =
    useProduct();

  let changeComp = 0;

  useEffect(() => {
    if (changeComp === 0 && id) {
      getProductById(id);
      changeComp++;
    }
  }, [id]);

  useEffect(() => {
    if (isError) navigate("/not-found");
    setIsError(false);
  }, [isError]);

  return (
    <Layout>
      <div className={styles.container}>
        <Nav />
        <InfoProduct />
        <div className={styles.line} />
        <Feedback />
        <Comments />
      </div>
      {isLoader && <Loader className={styles.loader} />}
    </Layout>
  );
};
