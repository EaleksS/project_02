import { FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import styles from './NotFound.module.scss';
import { Text } from '../components/UI/Text/Text';
import { Button } from '../components/UI/Button/Button';
import { Link } from 'react-router-dom';

export const NotFound: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.not_found}>
          <img src="./404.svg" alt="404" />
        </div>
        <div className={styles.content}>
          <Text type="h1" className={styles.title}>
            Страница не найдена
          </Text>
          <Text className={styles.text}>
            Извините, но страницу, которую Вы пытаетесь найти - не существует.
            <br />
            Предлагаем Вам перейти на Главную страницу
          </Text>
          <Link to={'/'}>
            <Button type="active" className={styles.btn}>
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
