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
      throw new Error('Hubo un error al obtener el usuario');
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

// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
