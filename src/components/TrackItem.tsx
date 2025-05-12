"use client";
import { motion } from 'framer-motion'; // Correct import for framer-motion
import Footer from './Footer';

const TrackItem = () => {
  return (
    <>
     <motion.section
      id="track-item"
      className="w-full h-screen flex flex-col items-end justify-center bg-cover bg-center text-white bg-gray-300"
      style={{ backgroundImage: "url('https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/Food%20Delivery.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-4xl font-semibold mb-6 text-center text-shadow-lg text-gray-800 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Track Your Order
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-8" // Adjusted layout and width
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <input
          type="text"
          placeholder="Enter your order ID"
          className="p-3 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white bg-opacity-80 shadow-lg"
        />
        <motion.button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-lg w-full mt-4 transition ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Track
        </motion.button>
      </motion.div>
    </motion.section>
    </>
   
  );
};

export default TrackItem;
