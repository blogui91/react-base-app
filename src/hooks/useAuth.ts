import AuthContext from "contexts/AuthContext"
import { useContext, useMemo } from "react"

const useAuth = () => {
  const auth = useContext<any>(AuthContext);

  const isAuthenticated = useMemo(() => !!auth?.user, [auth?.user]);

  return {
    ...auth,
    isAuthenticated,
  }
};

export default useAuth;
