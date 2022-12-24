import React, { PropsWithChildren } from 'react';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/system';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container sx={{ display: 'flex', justifyContent: 'center', paddingLeft: 0 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export { Layout };
