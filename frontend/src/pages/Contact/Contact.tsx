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
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
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
              arrowIcon: <img src="/tre2.svg" alt="tre2" />,

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
              rowContentPaddingLeft: "50px",
              rowContentPaddingRight: "150px",
              arrowColor: "black",
            }}
          />
        </div>
      </div>
    </Layout>
  );
};
