import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ReactQueryProviderProps {}
const queryClient = new QueryClient();

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
