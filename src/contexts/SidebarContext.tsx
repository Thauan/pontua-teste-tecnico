import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const SidebarContext = createContext({});

interface SidebarProviderProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children?: any;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [openedSidebar, setOpenedSidebar] = useLocalStorage("opened-side", true);

  const toggle = () => {
    setOpenedSidebar(!openedSidebar);
  };

  const value = useMemo(
    () => ({
      openedSidebar,
      toggle
    }),
    [openedSidebar]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export { SidebarContext, SidebarProvider };