import { ReactElement, createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface SidebarProps {
	openedSidebar?: boolean;
	toggle: () => void;
}

const SidebarContext = createContext<SidebarProps>({
  openedSidebar: true,
  toggle: () => {}
});

interface SidebarProviderProps {
	children?: ReactElement;
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