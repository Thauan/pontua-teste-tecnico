import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SideBar } from "../../components/Sidebar";

export const ProtectedLayout = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user }: any = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <SideBar />
            <p>Busca</p>
            {/* <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/recovery/account">recovery</Link></li>
                </ul>
            </nav> */}
            {outlet}
        </div>
    );
};
