import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AppRoot from './components/AppRoot/AppRoot';
import Screen from './components/Screen/Screen';
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoot />,
        children: [
            {
                path: '/',
                element: <Screen name="Screen 1" />
            },
            {
                path: '/screen-2',
                element: <Screen name="Screen 2" />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
