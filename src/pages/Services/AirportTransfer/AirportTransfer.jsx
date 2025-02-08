import AirportTranserBanner from "../../../components/AirportTranser/AirportTransferBanner/AirportTranserBanner";
import WhyChoseOurTaxiService from "../../../components/AirportTranser/WhyChoseOurAirportService/WhyChoseOurTaxiService";
import Footer from "../../../Shared/Footer";


const AirportTransfer = () => {
    console.log('AirportTransfer')
    return (
        <div className=" ">
  <AirportTranserBanner/>
  <WhyChoseOurTaxiService/>
  <div className="mt-[266px] md:mt-32 lg:mt-0">
<Footer/>
  </div>

        </div>
    );
};

export default AirportTransfer;