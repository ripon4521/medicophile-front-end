import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "../Utils/LoadingScreen";
import Navbar from "../components/Home/Navbar/Navbar";
import MobileNavbar from "../components/Home/Navbar/MobileNavba";
import Footer from "../Shared/Footer";


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