import Image2 from "/Product/bestdesign.jpg";
import Image1 from "/Product/bestdesign2.jpg";

const OurBestDesign = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Best Designs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Product 1 */}
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
          <img src={Image1} alt="Best Design 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Modern Chair</h3>
            <p className="text-gray-600 mt-2">
              Elegant and comfortable modern chair with ergonomic design, perfect for any contemporary living room.
            </p>
            <p className="text-lg font-semibold text-gray-900 mt-4">$199.99</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
          <img src={Image2} alt="Best Design 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Luxurious Sofa</h3>
            <p className="text-gray-600 mt-2">
              A luxurious sofa that brings comfort and style to your living space with premium fabric and sleek design.
            </p>
            <p className="text-lg font-semibold text-gray-900 mt-4">$799.99</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestDesign;
