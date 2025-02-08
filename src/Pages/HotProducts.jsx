
import Image1 from "/Product/remove.png";
import Image3 from "/Product/remove2.png";
const HotProducts = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="bg-gray-100 p-8 md:p-12 rounded-lg flex items-center justify-between relative">
    
    {/* Left Content Section */}
    <div className="flex-1">
      <span className="text-primary uppercase tracking-wider text-sm font-medium flex items-center gap-2">
        <div className="w-4 h-4 rotate-45 bg-primary/10" />
        Design your space
      </span>

      <h2 className="mt-6 text-4xl md:text-4xl font-serif font-bold leading-tight">
        Timeless Furniture, Timeless Comfort
      </h2>

      <p className="mt-6 text-3xl font-mono font-semibold">$ 12.00</p>

      <button className="mt-6 bg-[#A67B5B] hover:bg-[#8B6548] text-white px-8 py-2 rounded-md">
        Shop Now
      </button>
    </div>

    {/* Right Image Section with White Rounded Background */}
    <div className="flex-1 flex justify-end">
      <div className="bg-white rounded-full p-6 flex items-center justify-center w-54 h-54 shadow-md">
        <img
          src={Image1} // Make sure Image1 is properly imported
          alt="Sofa"
          width={360}
          height={160}
          className="object-contain"
        />
      </div>
    </div>
  </div>


<div className="bg-[#FDF6F0] p-8 md:p-12 rounded-lg flex items-center justify-between relative">
  {/* Left Content Section */}
  <div className="flex-1">
    <span className="text-primary uppercase tracking-wider text-sm font-medium flex items-center gap-2">
      <div className="w-4 h-4 rotate-45 bg-primary/10" />
      Elegance in every glow
    </span>

    <h2 className="mt-6 text-4xl md:text-4xl font-serif font-bold leading-tight">
      Shine
      <br />
      With Style
    </h2>

    <p className="mt-2 text-gray-600">In Online Purchase</p>

    <div className="mt-4 border border-dashed border-gray-400 p-4 inline-block">
      <p className="text-sm text-gray-600">Use Coupon Code:</p>
      <p className="font-mono font-semibold">FURNI24</p>
    </div>

    <button className="mt-6 bg-[#A67B5B] hover:bg-[#8B6548] text-white px-8 py-2 rounded-md">
      Shop Now
    </button>
  </div>

  {/* Right Image Section with White Rounded Background */}
  <div className="flex-1 flex justify-end">
    <div className="bg-white rounded-full p-4 flex items-center justify-center w-54 h-54 shadow-md">
      <img
        src={Image3} // Ensure Image3 is properly imported
        alt="Wardrobe"
        width={250}
        height={260}
        className="object-contain"
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default HotProducts;
