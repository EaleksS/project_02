import { FC } from "react";
import styles from "./Contact.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Text } from "../../components/UI/Text/Text";
import { IoIosCopy } from "react-icons/io";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Как купить роллы, если нет денег?",
      content:
        "На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.",
    },
    {
      title: "Как купить роллы, если нет денег?",
      content:
        "На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.",
    },
    {
      title: "Как купить роллы, если нет денег?",
      content:
        "На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.",
    },
    {
      title: "Как купить роллы, если нет денег?",
      content:
        "На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.",
    },
  ],
};

export const Contact: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Text type="h1">
          Контакты и поддержка <img src="/contacts.svg" alt="contacts" />
        </Text>
        <div className={styles.supports}>
          <div className={styles.support}>
            <div className={styles.title}>
              Support.Gmail.com <span>Техническая поддержка</span>
            </div>
            <button className={styles.copy}>
              <IoIosCopy />
            </button>
          </div>
          <div className={styles.support}>
            <div className={styles.title}>
              Support.Mail.ru <span>Техническая поддержка</span>
            </div>
            <button className={styles.copy}>
              <IoIosCopy />
            </button>
          </div>
        </div>
        <div className={styles.faq}>
          <Faq
            data={data}
            config={{
              arrowIcon: <img src="/add.png" alt="add" width={25} height={25} />,
              tabFocus: true,
            }}
            styles={{
              bgColor: "white",
              titleTextColor: "#1b1b1b",
              rowTitleColor: "#1b1b1b",
              rowTitleTextSize: "large",
              rowContentColor: "#48484a",
              rowContentTextSize: "16px",
              rowContentPaddingTop: "10px",
              rowContentPaddingBottom: "10px",
              rowContentPaddingLeft: "20px",
              rowContentPaddingRight: "20px",
              arrowColor: "black",
            }}
          />
        </div>
      </div>
    </Layout>
  );
};
