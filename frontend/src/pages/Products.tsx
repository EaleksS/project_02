import { FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import styles from './Products.module.scss';
import { Nav } from '../components/Nav/Nav';
import { InfoProduct } from '../components/InfoProduct/InfoProduct';
import { Feedback } from '../components/Feedback/Feedback';
import { Comments } from '../components/Comments/Comments';

export const Products: FC = (): JSX.Element => {
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
