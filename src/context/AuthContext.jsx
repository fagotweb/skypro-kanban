import { createContext, useContext, useState } from "react";
import { signIn, signUp } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  
  const loginUser = async ({ login, password }) => {   
    const userData = await signIn({ login, password });    
    setUser(userData);
    return userData;
  };

  const registerUser = async ({ name, login, password }) => {
    const userData = await signUp({ name, login, password });
    setUser(userData);
    return userData;
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loginUser, registerUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
