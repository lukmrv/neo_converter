import React, { PropsWithChildren } from 'react';

// import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/system';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 128px)' }}
      >
        {children}
      </Container>
      <Header />
    </>
  );
};

export { Layout };
