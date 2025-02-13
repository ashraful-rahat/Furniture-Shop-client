import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const FurnitureDetails = () => {
    const { id } = useParams();
    const axiosPublic = UseAxiosPublic();
    const [furniture, setFurniture] = useState(null);

    useEffect(() => {
        axiosPublic.get(`/furniture/${id}`)
            .then(response => setFurniture(response.data));
    }, [axiosPublic, id]);

    if (!furniture) return <p className="text-center text-xl py-10">Loading...</p>;

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden" style={{ fontFamily: `"Plus Jakarta Sans", "Noto Sans", sans-serif` }}>
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3ece7] px-10 py-4">
                    <div className="flex items-center gap-4 text-[#1b130e]">
                        <div className="size-5">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#1b130e] text-lg font-bold tracking-[-0.015em]">Modern Home</h2>
                    </div>
                </header>

                {/* Content */}
                <div className="flex flex-1 justify-center py-6 px-8">
                    <div className="layout-content-container flex flex-col max-w-[900px] flex-1">
                        <h2 className="text-[#1b130e] text-2xl font-bold px-4 pb-4 pt-5">{furniture.name}</h2>
                        
                        {/* Image Section */}
                        <div className="p-4 flex justify-center">
                            <img src={furniture.image} alt={furniture.name} className="w-96 h-96 object-cover rounded-xl shadow-md" />
                        </div>

                        {/* Furniture Details */}
                        <div className="px-6">
                            <p className="text-[#1b130e] text-lg leading-relaxed pb-4">{furniture.description}</p>

                            <div className="grid grid-cols-2 gap-6 text-lg">
                                <div>
                                    <h3 className="font-semibold text-[#1b130e]">Size</h3>
                                    <p className="text-[#976b4e]">{furniture.size}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1b130e]">Material</h3>
                                    <p className="text-[#976b4e]">{furniture.material}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1b130e]">Weight Limit</h3>
                                    <p className="text-[#976b4e]">{furniture.weight_limit}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1b130e]">Price</h3>
                                    <p className="text-[#e66b19] font-semibold">${furniture.price}</p>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="flex justify-center mt-6">
                                <button className="w-full max-w-[300px] h-12 rounded-xl bg-[#e66b19] text-white text-lg font-semibold tracking-wide shadow-md hover:bg-[#c75a14] transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureDetails;
