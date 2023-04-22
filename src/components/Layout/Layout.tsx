import { FC, ReactNode } from 'react';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
