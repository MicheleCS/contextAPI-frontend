import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContexts"
import { User } from "../../types/User";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [user, setuser] = useState<User | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token) {
      setuser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  }

  const signout = async () => {
    await api.signout();
    setuser(null);
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  return(
    <AuthContext.Provider value={{ user, signin, signout}}>
      {children}
    </AuthContext.Provider>
  )
}