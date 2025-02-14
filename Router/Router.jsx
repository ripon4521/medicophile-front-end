import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/Layout/MainLayout";
import Home from "../src/pages/Home/Home";
import AirportTransfer from "../src/pages/Services/AirportTransfer/AirportTransfer";
import LocalRides from "../src/pages/LocalRides/LocalRides";
import SpecialEvents from "../src/pages/SpecialEvents/SpecialEvents";
import AboutUs from "../src/pages/AboutUs/AboutUs";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/airport-Transfer',
                element:<AirportTransfer/>
            },{
                path:"/local-rides",
                element:<LocalRides/>
            },{
                path:"/special-events",
                element:<SpecialEvents/>
            },{
                path:"/about-us",
                element:<AboutUs/>
            }
        ]
    }
])