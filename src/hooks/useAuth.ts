import AuthContext from "contexts/AuthContext"
import { useContext } from "react"

const useAuth = () => useContext<any>(AuthContext);

export default useAuth;
