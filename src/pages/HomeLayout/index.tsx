import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const HomeLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
