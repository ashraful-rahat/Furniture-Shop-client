import Carousel from "../Slider/Carousel";

import HotProducts from "./HotProducts";
import MostPopular from "./MostPopular";
import NewArrivals from "./NewArrivals";
import OurBestDesign from "./OurBestDesign";
// import Practice from "./Practice";


const Home = () => {
  return (
    <div>
    
    <Carousel></Carousel>

    <div>
    <NewArrivals></NewArrivals>
    </div>

      <div>
      <HotProducts></HotProducts>
      </div>  

    <div>
      <MostPopular></MostPopular>
    </div>


 {/* <div className="mt-45">
 <Practice></Practice>
 </div> */}

 <div>
  <OurBestDesign></OurBestDesign>
 </div>

 
    </div>
  )
}

export default Home;
