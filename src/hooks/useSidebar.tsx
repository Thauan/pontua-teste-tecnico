import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";


const useSidebar = () => {
  return useContext(SidebarContext);
};

export { useSidebar };