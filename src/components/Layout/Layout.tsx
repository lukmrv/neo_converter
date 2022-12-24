import React, { PropsWithChildren } from 'react';

// import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/system';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Header />
    </>
  );
};

export { Layout };
