import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import BookingFrom from "../../components/Home/BookingFrom/BookingFrom";
import Faq from "../../components/Home/Faq/Faq";
import OurServices from "../../components/Home/OurServices/OurServices";
import { Testimonial } from "../../components/Home/Testimonials/Testimonial";
// import TestimonnialSlider from "../../components/Home/Testimonials/TestimonnialSlider";
import WhyChoseUs from "../../components/Home/WhyChoseUs/WhyChoseUs";




const Home = () => {
    return (
        <div>
            <Banner/>
            <BookingFrom/>
            <OurServices/> 
            <AboutUs/>
       <WhyChoseUs/>
       <Faq/>
       <Testimonial/>
           
        </div>
    );
};

export default Home;