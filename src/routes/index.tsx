import React from 'react';

import { Outlet, Route, Routes } from 'react-router';

import { appRoutes } from 'utils/consts';
import { Layout } from 'components/Layout/Layout';
import { Converter } from 'modules/Converter/Converter';
import { History } from 'modules/History/History';

const App = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const AppRoutes = () => (
  <Routes>
    <Route element={<App />}>
      <Route path={appRoutes.converter} element={<Converter />} />
      <Route path={appRoutes.history} element={<History />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Route>
  </Routes>
);

export { AppRoutes };
