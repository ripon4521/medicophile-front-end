import AirportTranserBanner from "../../../components/AirportTranser/AirportTransferBanner/AirportTranserBanner";
import Footer from "../../../Shared/Footer";


const AirportTransfer = () => {
    console.log('AirportTransfer')
    return (
        <div className=" ">
  <AirportTranserBanner/>
  <div className="mt-[266px] md:mt-32 lg:mt-0">
<Footer/>
  </div>

        </div>
    );
};

export default AirportTransfer;