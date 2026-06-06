// /src/routes/AppRouter.jsx

import { createBrowserRouter, RouterProvider } from "react-router";

import PublicLayout from "../layouts/PublicLayout";

import LandingPage from "../pages/public/LandingPage";
import AboutPage from "../pages/public/AboutPage";

import NotFound from "../pages/shared/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ]
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}