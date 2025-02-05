

const WhyChoseUs = () => {



  
  
    return (
      <div  style={{
        backgroundImage: "url('https://st.depositphotos.com/17620692/61381/v/450/depositphotos_613818782-stock-illustration-black-abstract-banner-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className=" p-6 bg-gray-50 drop-shadow-md shadow lg:h-[650px]">
  <div className="max-w-7xl mx-auto flex md:mt-10 lg:gap-20 flex-col lg:flex-row">
  <div data-aos="fade-up"
     data-aos-duration="2000">
   <p className="text-start text-xl font-semibold drop-shadow-md mb-2 text-yellow-400">Why Chose Us</p>
   <h1 className="text-5xl font-bold  drop-shadow-md text-start text-white">We are dedicated <span className="text-yellow-500">to provide</span> quality service </h1>
   <img data-aos="fade-up"
     data-aos-duration="2000" className="w-full lg:-mt-28 -z-20 -mt-20 md:w-[600px]"  src="/src/assets/image-removebg-preview (3).png" alt="" />
   </div>

   <div data-aos="fade-up"
     data-aos-duration="2000" className="flex flex-col gap-5 -mt-10 md:-mt-16  lg:mt-5 lg:flex-col">


    <div  data-aos-duration="2000" data-aos="fade-left" className="lg:w-[450px] bg-white p-4 py-2 rounded-2xl shadow ">
        <div className="flex items-start gap-5 mt-2">
        <img className="w-20 bg-yellow-400 p-2 rounded-full " src="/src/assets/Taxi-Car.png" alt="" />
      <div>
 
      <div className="flex justify-between">
      <h2 className="text-xl drop-shadow-md font-semibold">Best Quality Taxi</h2>
      <p style={{ fontFamily: 'Rancho, serif' }} className="text-4xl">01</p>
      </div>
        <p>There are many variations of passages available but the majority have suffered alteration in form injected humour wor.</p>
      </div>
      
        </div>
        
    </div>

    <div  data-aos-duration="2000" data-aos="fade-left" className="lg:w-[500px] bg-white p-4 py-2 rounded-2xl shadow lg:ml-10">
        <div className="flex items-start gap-5 mt-2">
        <img className="w-20 bg-yellow-400 p-2 rounded-full " src="/src/assets/taxi_driver-removebg-preview.png" alt="" />
      <div>
 
      <div className="flex justify-between">
      <h2 className="text-xl drop-shadow-md font-semibold">Expert Drivers</h2>
      <p style={{ fontFamily: 'Rancho, serif' }} className="text-4xl">02</p>
      </div>
        <p>There are many variations of passages available but the majority have suffered alteration in form injected humour wor.</p>
      </div>
      
        </div>
        
    </div>

    <div  data-aos-duration="2000" data-aos="fade-left" className="lg:w-[500px] bg-white p-4 py-2 rounded-2xl shadow ">
        <div className="flex items-start gap-5 mt-2">
        <img className="w-20 bg-yellow-400 p-2 rounded-full " src="/src/assets/locationn.png" alt="" />
      <div>
 
      <div className="flex justify-between">
      <h2 className="text-xl drop-shadow-md font-semibold">Many Locations</h2>
      <p style={{ fontFamily: 'Rancho, serif' }} className="text-4xl">03</p>
      </div>
        <p>There are many variations of passages available but the majority have suffered alteration in form injected humour wor.</p>
      </div>
      
        </div>
        
    </div>


  </div>

   </div>
 
      </div>
    );
};

export default WhyChoseUs;
