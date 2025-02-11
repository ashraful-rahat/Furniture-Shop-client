import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Image6 from '/Product/chair1.jpg';
import Image1 from '/Product/most.jpg';
import Image2 from '/Product/most1.jpg';

const Practice = () => {
    const [selectedFaq, setSelectedFaq] = useState(null);

    return (
        <div className="flex justify-center items-center p-6">
            <div className="w-full max-w-7xl flex">
                {/* Left Side - Image Section */}
                <div className="flex-shrink-0 w-64 h-64 mr-8">
                    <AnimatePresence exitBeforeEnter>
                        <motion.img
                            key={selectedFaq} // This will trigger re-animation when changing the FAQ
                            src={
                                selectedFaq === 'Advanced Analytics'
                                    ? Image1
                                    : selectedFaq === 'SEO Optimization'
                                    ? Image2
                                    : selectedFaq === 'Social Media Marketing'
                                    ? Image6
                                    : '/images/default.png'
                            }
                            alt="FAQ"
                            className="w-80 h-100 object-cover rounded-lg shadow-lg"
                            initial={{  scale: 1 }}
                            animate={{ opacity: 10, scale: 1 }}
                            // exit={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Right Side - FAQ Titles */}
                <div className="space-y-6 w-full">
                    {/* Advanced Analytics FAQ */}
                    <motion.div
                        className="cursor-pointer p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all"
                        onClick={() => setSelectedFaq('Advanced Analytics')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-600">Advanced Analytics</h3>
                        {selectedFaq === 'Advanced Analytics' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}
                                className="mt-2 text-sm text-gray-600"
                            >
                                <p>Services: Data Analysis, Reporting, Machine Learning</p>
                                <div className="mt-4 text-sm text-gray-600">
                                    <strong>Additional Services:</strong>
                                    <div className="flex space-x-4 mt-2">
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Banner Design
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Graphic Design
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            UI/UX Design
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* SEO Optimization FAQ */}
                    <motion.div
                        className="cursor-pointer p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all"
                        onClick={() => setSelectedFaq('SEO Optimization')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-600">SEO Optimization</h3>
                        {selectedFaq === 'SEO Optimization' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}
                                className="mt-2 text-sm text-gray-600"
                            >
                                <p>Services: On-page SEO, Keyword Research, Link Building</p>
                                <div className="mt-4 text-sm text-gray-600">
                                    <strong>Additional Services:</strong>
                                    <div className="flex space-x-4 mt-2">
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            SEO Tools
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            SEO Audits
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Content Optimization
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Social Media Marketing FAQ */}
                    <motion.div
                        className="cursor-pointer p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all"
                        onClick={() => setSelectedFaq('Social Media Marketing')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-600">Social Media Marketing</h3>
                        {selectedFaq === 'Social Media Marketing' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}
                                className="mt-2 text-sm text-gray-600"
                            >
                                <p>Services: Campaign Management, Social Ads, Content Creation</p>
                                <div className="mt-4 text-sm text-gray-600">
                                    <strong>Additional Services:</strong>
                                    <div className="flex space-x-4 mt-2">
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Social Media Strategy
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Branding
                                        </motion.button>
                                        <motion.button
                                            className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Influencer Marketing
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Practice;
