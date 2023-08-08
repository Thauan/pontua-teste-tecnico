import { ReactNode, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface AuthProps {
  login: (data: { email: string, password: string}) => void;
  logout: () => void;
  chooseToAgent: (agent: object) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
  userData: object;
}

const AuthContext = createContext<AuthProps>({
  login: () => {},
  logout: () => {},
  chooseToAgent: () => {}
});

const AuthProvider = ({ children, userData }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const [choosedAgent, setChoosedAgent] = useLocalStorage("agent", null);
  const navigate = useNavigate();

  const login = async (data: { email: string, password: string }) => {
    setUser(data);
    navigate("/choose/agent", { replace: true });
  };

  const chooseToAgent = async (agent: object) => {
    setChoosedAgent(agent);
    navigate("/dashboard/home", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      chooseToAgent,
      choosedAgent,
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };