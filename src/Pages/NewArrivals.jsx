import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import Image4 from "/Product/bookshelf.jpg";
import Image2 from "/Product/diningset2.jpg";
import Image5 from "/Product/MinimalistDesk.jpg";
import Image1 from "/Product/sofa.jpg";
import Image3 from "/Product/wardrobe1.jpg";

const NewArrivals = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Ensure it doesn't scroll beyond the left or right limit
      container.scrollLeft = Math.max(0, Math.min(container.scrollLeft + scrollOffset, maxScrollLeft));
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-orange-600 font-bold text-center mb-4 font-mono ">New Arrivals</h2>
        <p className="text-xl text-gray-700  text-center mb-8">
                Upgrade your dining experience with our finely crafted tables, chairs, and decor accents.
              </p>
  
        <div className="relative">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll(-200)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Scroll left"
          >
            ←
          </button>

          {/* Scrollable Product List (Hidden Scrollbar) */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-hidden scroll-smooth"
          >
            {[
              { id: 1, img: Image1, title: "Modern Sofa", price: "$599" },
              { id: 2, img: Image2, title: "Elegant Dining Table", price: "$799" },
              { id: 3, img: Image3, title: "Cozy Armchair", price: "$349" },
              { id: 4, img: Image4, title: "Stylish Bookshelf", price: "$249" },
              { id: 5, img: Image5, title: "Minimalist Desk", price: "$399" },
            ].map((product) => (
              <div key={product.id} className="flex-none w-64">
                <Link to={`/product/${product.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
                    <div className="relative h-64 w-64">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll(200)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
         <div className="flex items-center justify-center">
         <NavLink to="/">
              <button className="px-6 py-3 mt-8 text-white font-semibold text-xl bg-orange-400 hover:bg-orange-500 transition rounded-full">
                  Explore Now
               </button>
           </NavLink>
         </div>
    </section>
  );
};

export default NewArrivals;
