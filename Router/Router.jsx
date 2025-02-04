import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/Layout/MainLayout";
import Home from "../src/pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])