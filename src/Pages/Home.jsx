import Carousel from "../Slider/Carousel";
import MostPopular from "./MostPopular";
import NewArrivals from "./NewArrivals";


const Home = () => {
  return (
    <div>
    
    <Carousel></Carousel>

    <div>
    <NewArrivals></NewArrivals>
    </div>

    <div>
      <MostPopular></MostPopular>
    </div>
    
    </div>
  )
}

export default Home;
