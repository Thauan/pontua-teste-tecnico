import { Suspense } from "react";
import { useLoaderData, useOutlet, Await, useRouteError } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";
import { SidebarProvider } from "../../contexts/SidebarContext";

export const AuthLayout = () => {
  const outlet = useOutlet();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userPromise }: any = useLoaderData();


  function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={userPromise}
        errorElement={<ErrorBoundary />}
        children={(user) => (
          <SidebarProvider>
            <AuthProvider userData={user}>
              {outlet}
            </AuthProvider>
          </SidebarProvider>
        )}
      />
    </Suspense>
  );
};
