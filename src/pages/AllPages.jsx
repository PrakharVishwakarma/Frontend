import { createBrowserRouter, RouterProvider } from 'react-router';

import NotFound from './NotFound';

import LandingPg from './LandingPg';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPg />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'about',
                element: <h1>About</h1>
            }
        ]
    },

]);

export default function AllPages() {
    return (
        <RouterProvider router={router} />
    )
}