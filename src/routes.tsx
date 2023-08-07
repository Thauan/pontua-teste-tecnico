import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { AuthLayout } from "./pages/AuthLayout";
import { ProtectedLayout } from "./pages/ProtectedLayout";
import { HomeLayout } from "./pages/HomeLayout";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AccountRecovery } from "./pages/AccountRecovery";
import { Profile } from "./pages/Profile";

const getUserData = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 3000)
    );

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout />}
            loader={() => defer({ userPromise: getUserData() })}
        >
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recovery/account" element={<AccountRecovery />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route path="profile" element={<Profile />} />
                <Route path="home" element={<Home />} />
            </Route>
        </Route>
    )
);

export { router, getUserData };