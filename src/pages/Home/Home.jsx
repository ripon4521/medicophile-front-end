import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import BookingFrom from "../../components/Home/BookingFrom/BookingFrom";
import OurServices from "../../components/Home/OurServices/OurServices";



const Home = () => {
    return (
        <div>
            <Banner/>
            <BookingFrom/>
            <AboutUs/>
            <OurServices/>
        </div>
    );
};

export default Home;