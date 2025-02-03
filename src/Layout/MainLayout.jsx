import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import MobileNavbar from "../pages/Home/Navbar/MobileNavba";
import { useEffect, useState } from "react";
import LoadingScreen from "../Utils/LoadingScreen";


const MainLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 3 সেকেন্ড পর লোডিং বন্ধ করবে
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="">
            {loading ? (
        <LoadingScreen />
      ) : (
        <div>
           <Navbar/>
            <MobileNavbar/>
            <Outlet/>
        </div>
      )}
          
        </div>
    );
};

export default MainLayout;