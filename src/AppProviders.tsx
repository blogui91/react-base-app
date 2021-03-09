import React from 'react';
import { AuthProvider } from 'contexts/AuthContext';
import ReactQueryProvider from 'providers/reactQueryProvider';
import AppThemeProvider from 'providers/styledComponentsProvider';

interface AppProvidersProps {}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AppThemeProvider>
      <ReactQueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReactQueryProvider>
    </AppThemeProvider>
  );
}

export default AppProviders;
