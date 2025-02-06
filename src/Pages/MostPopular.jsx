import { FaHeart, FaShoppingCart } from "react-icons/fa";

import Image1 from "/Product/most.jpg";
import Image2 from "/Product/most1.jpg";

import Image6 from "/Product/chair1.jpg";
import Image3 from "/Product/chair2.jpg";
import Image4 from "/Product/most4.jpg";
import Image5 from "/Product/most5.jpg";
const MostPopular = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-500 font-mono">Most Popular Furniture</h1>
        <p className="text-lg text-gray-700 mt-2">
          Explore Our Popular Furniture Categories. Upgrade your home with elegance and comfort.
        </p>
      </div>

      {/* Grid Layout for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Image Cards */}
        {[
          { img: Image1, title: "Luxury Sofa", discount: "20% OFF" },
          { img: Image2, title: "Modern Sofa", discount: "15% OFF" },
          { img: Image3, title: "Comfortable Sofa", discount: "10% OFF" },
          { img: Image4, title: "Elegant Dining Table", discount: "25% OFF" },
          { img: Image5, title: "Mini Table", discount: "30% OFF" },
          { img: Image6, title: "Stylish Chair", discount: "5% OFF" },
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 group-hover:opacity-80"
            />

            {/* Left Side - Discount Info */}
            <div className="absolute top-5 left-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold bg-orange-500 bg-opacity-50 px-3 py-1 rounded-md">
                {item.discount}
              </p>
            </div>

            {/* Right Side - Wishlist & Cart Buttons */}
            <div className="absolute top-5 right-5 flex flex-col space-y-2 ">
              <button className=" p-2  bg-white text-black backdrop-blur-lg ">
                <FaHeart size={16} />
              </button>
              <button className=" p-2 bg-white text-black ">
                <FaShoppingCart size={16} />
              </button>
            </div>

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-base-200 backdrop-blur-sm bg-opacity-60 text-white text-center py-2">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
