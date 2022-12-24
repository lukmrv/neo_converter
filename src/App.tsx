import React from 'react';

import './index.css';

import { AppProvider } from 'providers/AppProvider';
import { AppRoutes } from 'routes';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
