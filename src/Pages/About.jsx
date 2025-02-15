const About = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 py-20 px-8 md:px-16 lg:px-32 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-black backdrop-blur-lg"></div>
            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-xl">About Us</h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
                    We are a dynamic team committed to excellence and innovation. Our goal is to craft seamless solutions that inspire and elevate businesses to new heights.
                </p>
                <div className="flex justify-center mt-8 space-x-4">
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition shadow-xl">
                        Learn More
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition shadow-xl">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="mt-16 flex justify-center relative z-10">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-white flex items-center justify-center shadow-2xl animate-bounce">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-600">🚀</span>
                </div>
            </div>
        </div>
    );
};

export default About;
