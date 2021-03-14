import React, { ContextType } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { HttpNamespaces, StorageKeys } from 'types.d';
import AuthResource from 'api/http/resources/auth.resource';
import LoadingState from 'components/LoadingState';
import useLocalStorage from 'hooks/useLocalStorage';

const AuthContext = React.createContext<ContextType<AuthContextInterface|any>>(null);

export interface LoginFormFields {
  email: string;
  password: string;
}
interface UserInterface {
  id: number;
  name: string;
  last_name: string;
  email: string;
}

// Implement this interface in AuthContext
interface AuthContextInterface {
  user: UserInterface,
  login: (form: LoginFormFields) => Promise<any>,
  logout: () => void,
}

export const AuthProvider: React.FC<any> = (props: any) => {
  const queryClient = useQueryClient();
  const [accessToken, setAccessToken] = useLocalStorage(StorageKeys.ACCESS_TOKEN, null);

  // Login Http Request
  const { mutateAsync: doLogin } = useMutation((form: LoginFormFields) => AuthResource.login(form));

  // Fetch current user
  const {
    data: user,
    isLoading,
    refetch: refetchCurrentUser,
    isError,
    remove: destroyUserData
  } = useQuery<any>(HttpNamespaces.CURRENT_USER, async () => {
    try {
      const { data } = await AuthResource.getCurrentUser();

      return data.data;
    } catch (error) {
      setAccessToken('');
      localStorage.clear();
      throw new Error('No se pudo obtener el usuario');
    }
  }, {
    refetchOnWindowFocus: !! accessToken,
    retry: false,
  });

  if (isLoading) {
    return (
      <LoadingState />
    );
  }

  const login = (form: LoginFormFields) => {
    doLogin(form)
      .then(({ data: { access_token } }) => {
        setAccessToken(access_token);
        refetchCurrentUser();
      })
  };

  const register = () => {}; // TODO: register the user

  const logout = () => {
    queryClient.invalidateQueries(HttpNamespaces.CURRENT_USER);
    setAccessToken('');
    localStorage.clear();
    destroyUserData();
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        login,
        isError,
        logout,
        register,
      }}
      {...props}
    />
  );
};

export default AuthContext;
