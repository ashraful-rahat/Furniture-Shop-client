
import { FaHeart, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   
      <div>
         <nav className="bg-[#F07F14] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Logo and Name */}
        <div className="flex items-center space-x-2">
          <FaShoppingBag className="text-2xl text-white" />
          <span className="text-xl font-bold">E-COMMERCE</span>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden sm:block flex-grow max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <IoSearchOutline className="text-gray-600 hover:text-gray-800 transition-colors" />
            </button>
          </div>
        </div>

        {/* Right side - Wishlist and Cart */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-200 transition-colors" aria-label="Wishlist">
            <FaHeart />
          </button>
          <Link to='/cart' className="hover:text-gray-200 transition-colors" aria-label="Shopping Cart">
            <FaShoppingCart  size={20}/>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 pr-10 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <IoSearchOutline className="text-gray-600 hover:text-gray-800 transition-colors" />
          </button>
        </div>
      </div>    
    </nav>
    <div className="container mx-auto  ">
  <div className='bg-white text-xl  '>
    <ul className="flex items-center  justify-center space-x-10 p-4 ">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-gray-900"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/furniture"
          className={({ isActive }) =>
            isActive ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-gray-900"
          }
        >
          Furniture
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-gray-900"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-gray-900"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
</div>

    </div>
  )
}

export default Navbar;

