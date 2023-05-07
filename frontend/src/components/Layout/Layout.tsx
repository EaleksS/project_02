import { FC, ReactNode } from "react";
import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Up } from "../Up/Up";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
      <Up />
      <ToastContainer autoClose={5000} />
    </React.Fragment>
  );
};
