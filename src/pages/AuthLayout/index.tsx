import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";

export const AuthLayout = () => {
  const outlet = useOutlet();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userPromise }: any = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={userPromise}
        errorElement={<p>Error</p>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
