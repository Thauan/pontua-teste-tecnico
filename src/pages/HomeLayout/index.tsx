import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const HomeLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user, choosedAgent }: any = useAuth();
  const outlet = useOutlet();

  if (user && choosedAgent) {
    return <Navigate to="/dashboard/home" replace />;
  }

  if (user && (choosedAgent == undefined || choosedAgent == null)) {
    return <Navigate to="/choose/agent" replace />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
