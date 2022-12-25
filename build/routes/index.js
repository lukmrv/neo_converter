import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { appRoutes } from 'utils/consts';
import { Layout } from 'components/Layout/Layout';
import { Converter } from 'modules/Converter/Converter';
import { History } from 'modules/History/History';
const App = () => (React.createElement(Layout, null,
    React.createElement(Outlet, null)));
const AppRoutes = () => (React.createElement(Routes, null,
    React.createElement(Route, { element: React.createElement(App, null) },
        React.createElement(Route, { path: appRoutes.converter, element: React.createElement(Converter, null) }),
        React.createElement(Route, { path: appRoutes.history, element: React.createElement(History, null) }),
        React.createElement(Route, { path: "*", element: React.createElement("div", null, "Page not found") }))));
export { AppRoutes };
//# sourceMappingURL=index.js.map