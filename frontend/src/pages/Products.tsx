import { FC, useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import styles from "./Products.module.scss";
import { Nav } from "../components/Nav/Nav";
import { InfoProduct } from "../components/InfoProduct/InfoProduct";
import { Feedback } from "../components/Feedback/Feedback";
import { Comments } from "../components/Comments/Comments";
import { useParams } from "react-router-dom";
import { useProduct } from "../store/products.store";
import { NotFound } from "./NotFound";

export const Products: FC = (): JSX.Element => {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [notFound, setNotFound] = useState<boolean>(false);

  const { getProductById, isError, setIsError } = useProduct();

  let changeComp = 0;

  useEffect(() => {
    if (changeComp === 0 && id) {
      getProductById(id);
      changeComp++;
    }
  }, [id]);

  useEffect(() => {
    if (isError) setNotFound(true);
    setIsError(false);
  }, [isError]);

  if (notFound) return <NotFound />;

  return (
    <Layout>
      <div className={styles.container}>
        <Nav />
        <InfoProduct />
        <div className={styles.line} />
        <Feedback />
        <Comments />
      </div>
    </Layout>
  );
};
