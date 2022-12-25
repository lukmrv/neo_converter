import React from 'react';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/system';
const Layout = ({ children }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Container, { maxWidth: "lg", sx: { display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 128px)' } }, children),
        React.createElement(Header, null)));
};
export { Layout };
//# sourceMappingURL=Layout.js.map