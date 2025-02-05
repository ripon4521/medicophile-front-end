import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import BookingFrom from "../../components/Home/BookingFrom/BookingFrom";
import OurServices from "../../components/Home/OurServices/OurServices";
import WhyChoseUs from "../../components/Home/WhyChoseUs/WhyChoseUs";




const Home = () => {
    return (
        <div>
            <Banner/>
            <BookingFrom/>
            <OurServices/> 
            <AboutUs/>
       <WhyChoseUs/>
           
        </div>
    );
};

export default Home;