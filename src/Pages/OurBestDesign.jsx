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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg flex justify-center items-end p-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-semibold mb-2">Modern Chair</h3>
                  <p className="text-lg mb-4">
                    Elegant and comfortable modern chair with ergonomic design.
                  </p>
                  <p className="text-xl font-semibold mb-4">$199.99</p>
                  <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group">
            <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${Image2})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg flex justify-center items-end p-8">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-semibold mb-2">Luxurious Sofa</h3>
                  <p className="text-lg mb-4">
                    Luxurious sofa with plush cushions for ultimate comfort.
                  </p>
                  <p className="text-xl font-semibold mb-4">$799.99</p>
                  <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestDesign;
