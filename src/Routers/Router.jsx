import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import Installation from "../pages/Installation";
import AppsDetailes from "../pages/AppsDetailes";
import AppsDetailErorr from "../pages/AppsDetailErorr";




export const router = createBrowserRouter([


    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'Allpss',

                Component: AllApps,
            }, {
                path: 'install',
                loader: () => fetch('/appsData.json'),
                element: <Installation></Installation>,
            },
            {

                path: 'appsDetail/:id',

                errorElement: <AppsDetailErorr></AppsDetailErorr>,
                loader: () => fetch('/appsData.json'),

                element: <AppsDetailes></AppsDetailes>,
            }

        ]
    }
])