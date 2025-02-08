import { useEffect, useState } from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Furniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const axios = UseAxiosPublic();

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        console.log("Fetching furniture data from API...");
        const response = await axios.get("/furniture");
        console.log("Furniture data received:", response.data);
        setFurniture(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching furniture:", err.response ? err.response.data : err.message);
        setError("Failed to fetch furniture.");
        setLoading(false);
      }
    };

    fetchFurniture();
  }, [axios]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Furniture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {furniture.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Size:</span> {item.size}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Price:</span> {item.price}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Description:</span> {item.description}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Material:</span> {item.material}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Weight Limit:</span> {item.weight_limit}
              </p>
              <div className="flex gap-2 mt-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                  <FaEye /> View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
