// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { motion } from "framer-motion"; // Import Framer Motion
import { NavLink } from "react-router-dom";
import Image1 from "/images/banner2.jpg";
import Image2 from "/images/banner3.jpg";
import Image3 from "/images/banner4.jpg";

// Animation variants
const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

const buttonHover = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const Carousel = () => {
  return (
    <div>
      <Swiper className="mySwiper container mx-auto relative z-10">
        {/* Slide 1 */}
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src={Image1}
              className="w-full h-[400px] lg:h-[500px] object-cover"
              alt="Dining Room Furniture"
              variants={slideIn}
            />
            <motion.div
              variants={textFadeUp}
              className="absolute top-[30%] left-[3rem] text-white max-w-lg"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-orange-500">Welcome To Furniture World</h2>
              <h2 className="text-3xl lg:text-5xl font-bold">Stylish Dining Rooms</h2>
              <p className="text-lg">Dine in Elegance & Comfort</p>
              <p className="text-sm lg:mb-6">
                Upgrade your dining experience with our finely crafted tables, chairs, and decor accents.
              </p>
              <NavLink to="/shop">
                <motion.button
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-2 bg-green-600 hover:bg-green-800 transition rounded-full"
                >
                  Explore Now
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src={Image2}
              className="w-full h-[400px] lg:h-[500px] object-cover"
              alt="Living Room Furniture"
              variants={slideIn}
            />
            <motion.div
              variants={textFadeUp}
              className="absolute top-[30%] left-[3rem] text-white max-w-lg"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-orange-400">Welcome To Furniture World</h2>
              <h2 className="text-3xl lg:text-5xl font-bold">Elegant Living Room</h2>
              <p className="text-lg">Transform Your Space with Style</p>
              <p className="text-sm lg:mb-6">
                Upgrade your living space with our premium sofas, coffee tables, and decor accents.
              </p>
              <NavLink to="/shop">
                <motion.button
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-2 bg-green-600 hover:bg-green-800 transition rounded-full"
                >
                  Explore Now
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src={Image3}
              className="w-full h-[400px] lg:h-[500px] object-cover"
              alt="Bedroom Furniture"
              variants={slideIn}
            />
            <motion.div
              variants={textFadeUp}
              className="absolute top-[30%] left-[3rem] text-white max-w-lg"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-orange-400">Welcome To Furniture World</h2>
              <h2 className="text-3xl lg:text-5xl font-bold">Luxury Bedroom Sets</h2>
              <p className="text-lg">Perfect Comfort & Timeless Design</p>
              <p className="text-sm lg:mb-6">
                Upgrade your bedroom with elegant beds, nightstands, and premium decor.
              </p>
              <NavLink to="/shop">
                <motion.button
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-2 bg-green-600 hover:bg-green-800 transition rounded-full"
                >
                  Explore Now
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
