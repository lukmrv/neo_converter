import React, { PropsWithChildren } from 'react';

// import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'styles/customTheme';

const queryClient = new QueryClient();

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button variant="outlined" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <div>Loading...</div>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export { AppProvider };
