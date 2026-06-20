import { createContext, useContext, useState } from "react";
import { signIn, signUp } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginUser = async ({ login, password }) => {
    try {
      const userData = await signIn({ login, password });
      if (!userData) {
        throw new Error("Неверный логин или пароль");
      }
      setUser(userData);
      return userData;
    } catch (err) {
      throw new Error(err.message || "Ошибка при входе в аккаунт", {
        cause: err,
      });
    }
  };

  const registerUser = async ({ name, login, password }) => {
    try {
      const userData = await signUp({ name, login, password });
      if (!userData) {
        throw new Error("Пользователь с таким логином уже существует");
      }
      setUser(userData);
      return userData;
    } catch (err) {
      // Пробрасываем ошибку дальше в компонент регистрации
      throw new Error(err.message || "Ошибка при регистрации", {
        cause: err,
      });
    }
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
