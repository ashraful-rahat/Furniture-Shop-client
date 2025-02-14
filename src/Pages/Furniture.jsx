import { useEffect, useState } from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Furniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = UseAxiosPublic();

  useEffect(() => {
    const fetchFurniture = async () => {
      const response = await axios.get("/furniture");
      setFurniture(response.data);
      setLoading(false);
    };
    fetchFurniture();
  }, [axios]);

  const handleAddToCart = async (item) => {
    const response = await axios.post("/products", item);
    if (response.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Product added to cart successfully!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-6">
        All Furniture
      </h1>
      <p className="text-xl text-gray-700 text-center mb-12">
        Upgrade your dining experience with our finely crafted tables, chairs,
        and decor accents.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {furniture.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transform hover:scale-100 transition-transform duration-300 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Size:</span> {item.size}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Price:</span> {item.price}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Description:</span>{" "}
                {item.description}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Material:</span> {item.material}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Weight Limit:</span>{" "}
                {item.weight_limit}
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-1.5 rounded-md text-sm hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md"
                >
                  <FaShoppingCart /> Add
                </button>
                <Link to={`/furniture/${item._id}`}>
                  <button className="flex items-center gap-1 bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-1.5 rounded-md text-sm hover:from-gray-600 hover:to-gray-800 transition duration-300 shadow-md">
                    <FaEye /> View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
