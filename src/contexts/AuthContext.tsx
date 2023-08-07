import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface AuthProps {
  login: (data: { email: string, password: string}) => void;
}

const AuthContext = createContext<AuthProps>({
  login: () => {}
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthProvider = ({ children, userData }: any) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (data: any) => {
    setUser(data);
    navigate("/dashboard/home", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };