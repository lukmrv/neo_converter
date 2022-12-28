import React, { PropsWithChildren } from 'react';

import { Header } from 'components/Header/Header';
import { Container } from '@mui/system';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ padding: '40px 20px' }}>
        {children}
      </Container>
    </>
  );
};

export { Layout };
