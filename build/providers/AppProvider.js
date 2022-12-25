import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/customTheme';
const queryClient = new QueryClient();
const ErrorFallback = () => {
    return (React.createElement("div", { role: "alert" },
        React.createElement("h2", { className: "text-lg font-semibold" }, "Ooops, something went wrong :( "),
        React.createElement(Button, { variant: "outlined", onClick: () => window.location.assign(window.location.origin) }, "Refresh")));
};
const AppProvider = ({ children }) => {
    return (React.createElement(React.Suspense, { fallback: React.createElement("div", { className: "flex items-center justify-center w-screen h-screen" },
            React.createElement("div", null, "Loading...")) },
        React.createElement(ErrorBoundary, { FallbackComponent: ErrorFallback },
            React.createElement(Router, null,
                React.createElement(QueryClientProvider, { client: queryClient },
                    process.env.NODE_ENV !== 'test' && React.createElement(ReactQueryDevtools, null),
                    React.createElement(ThemeProvider, { theme: theme }, children))))));
};
export { AppProvider };
//# sourceMappingURL=AppProvider.js.map