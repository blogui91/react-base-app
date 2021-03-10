import React from 'react'
import { useQuery } from 'react-query';
import { HttpNamespaces } from 'types.d';
import AuthResource from 'api/http/resources/auth.resource';
import LoadingState from 'components/LoadingState';

const AuthContext = React.createContext<any>({});

export const AuthProvider: React.FC<any> = (props: any) => {
  const { data: user, isLoading } = useQuery<any>(HttpNamespaces.CURRENT_USER, async () => {
    try {
      const { data } = await AuthResource.getCurrentUser();

      return data.data;
    } catch (error) {
      console.log('Hubo un error al obtener el usuario');
      throw new Error('No se pudo obtener el usuario');
    }
  }, {
    retry: false,
  });

  if (isLoading) {
    return (
      <LoadingState />
    );
  }

  const login = () => {}; // TODO: make a login request

  const register = () => {}; // TODO: register the user

  const logout = () => {
    localStorage.clear();
    // TODO: Redirect to login
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
      }}
      {...props}
    />
  );
};

export default AuthContext;
