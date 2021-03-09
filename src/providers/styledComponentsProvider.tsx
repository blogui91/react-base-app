import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

interface AppThemeProviderProps {}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
