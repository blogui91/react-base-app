import React from 'react';
import { AuthProvider } from 'contexts/AuthContext';
import ReactQueryProvider from 'providers/ReactQueryProvider';
import AppThemeProvider from 'providers/StyledComponentsProvider';
import RouterProvider from 'providers/RouterProvider';

interface AppProvidersProps {}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AppThemeProvider>
      <ReactQueryProvider>
        <RouterProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </RouterProvider>
      </ReactQueryProvider>
    </AppThemeProvider>
  );
}

export default AppProviders;
