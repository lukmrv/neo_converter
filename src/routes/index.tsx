import React from 'react';

import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from 'utils/consts';
import { Layout } from 'components/Layout/Layout';
import { Converter } from 'components/Converter/Converter';
import { History } from 'components/History/History';

const App = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route path={routes.converter} element={<Converter />} />
        <Route path={routes.history} element={<History />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  </Router>
);

export { AppRoutes };
