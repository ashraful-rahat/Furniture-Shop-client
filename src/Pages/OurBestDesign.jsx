import { motion } from 'framer-motion';
import Image2 from "/Product/bestdesign.jpg";
import Image1 from "/Product/bestdesign2.jpg";

const OurBestDesign = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Best Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Product 1 */}
          <div className="relative group">
            <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${Image1})` }}>
              {/* Content Wrapper */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg flex justify-center items-end p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.5 } }}
              >
                <div className="text-center text-white">
                  {/* Title Animation */}
                  <motion.h3
                    className="text-3xl font-semibold mb-2"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    Modern Chair
                  </motion.h3>

                  {/* Description Animation */}
                  <motion.p
                    className="text-lg mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    Elegant and comfortable modern chair with ergonomic design.
                  </motion.p>

                  {/* Price Animation */}
                  <motion.p
                    className="text-xl font-semibold mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    $199.99
                  </motion.p>

                  {/* Button Animation */}
                  <motion.button
                    className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    exit={{ opacity: 0 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group">
            <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${Image2})` }}>
              {/* Content Wrapper */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg flex justify-center items-end p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.5 } }}
              >
                <div className="text-center text-white">
                  {/* Title Animation */}
                  <motion.h3
                    className="text-3xl font-semibold mb-2"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    Luxurious Sofa
                  </motion.h3>

                  {/* Description Animation */}
                  <motion.p
                    className="text-lg mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    Luxurious sofa with plush cushions for ultimate comfort.
                  </motion.p>

                  {/* Price Animation */}
                  <motion.p
                    className="text-xl font-semibold mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    exit={{ opacity: 0, y: 30 }}
                  >
                    $799.99
                  </motion.p>

                  {/* Button Animation */}
                  <motion.button
                    className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    exit={{ opacity: 0 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestDesign;
