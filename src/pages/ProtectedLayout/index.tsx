import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SideBar } from "../../components/Sidebar";
import { Wrapper } from "./styles";
import { useSidebar } from "../../hooks/useSidebar";
import SearchBar from "../../components/SearchBar";

export const ProtectedLayout = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user }: any = useAuth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { openedSidebar }: any = useSidebar();

    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <SideBar />
            <Wrapper openedSidebar={openedSidebar}>
                <SearchBar />
                {outlet}
            </Wrapper>
        </div>
    );
};
