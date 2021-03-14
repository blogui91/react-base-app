import React, { useMemo } from 'react';
import useAuth from 'hooks/useAuth';
import { AppStack, AuthStack } from 'routes';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {useMemo(() => isAuthenticated ? (
        <AppStack />
      ) : (
        <AuthStack />
      ), [isAuthenticated])}
    </>
  );
}

export default App;
