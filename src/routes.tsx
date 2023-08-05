import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { AuthLayout } from "./pages/AuthLayout";
import Login from "./pages/Login";
import { ProtectedLayout } from "./pages/ProtectedLayout";
import { HomeLayout } from "./pages/HomeLayout";

import Home from "./pages/Home";
import AccountRecovery from "./pages/AccountRecovery";

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
                <Route path="/login" element={<Login />} />
                <Route path="/recovery/account" element={<AccountRecovery />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Route>
    )
);

export { router, getUserData };
// import React from 'react';
// import { Route, BrowserRouter, Routes as Router } from 'react-router-dom';
// import Login from './pages/Login';
// import AccountRecovery from './pages/AccountRecovery';

// const Routes: React.FC = () => {
//     return (
//         <BrowserRouter>
//             <main>
//                 <Router>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/recovery/account" element={<AccountRecovery />} />
//                 </Router>
//             </main>
//         </BrowserRouter>
//     );
// }

// export default Routes;