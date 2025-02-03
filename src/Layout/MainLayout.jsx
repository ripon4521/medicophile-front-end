import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;