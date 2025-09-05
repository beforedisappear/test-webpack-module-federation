import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AuthState, User, LoginCredentials } from "../types/auth";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "RESTORE_AUTH"; payload: { user: User; token: string } };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case "RESTORE_AUTH":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Восстанавливаем авторизацию из localStorage
    const savedToken = localStorage.getItem("auth_token");
    const savedUser = localStorage.getItem("auth_user");

    if (savedToken && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({
          type: "RESTORE_AUTH",
          payload: { user, token: savedToken },
        });
      } catch (error) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    // Имитация API запроса
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username === "admin" &&
          credentials.password === "password"
        ) {
          const user: User = {
            id: "1",
            username: credentials.username,
            email: "admin@example.com",
          };
          const token = "mock-jwt-token";

          localStorage.setItem("auth_token", token);
          localStorage.setItem("auth_user", JSON.stringify(user));

          dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
          resolve();
        } else {
          reject(new Error("Неверные учетные данные"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
