"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer id="footer"
      className="bg-gradient-to-r from-yellow-800 via-red-700 to-yellow-900 text-white py-10 px-6 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Brand */}
        <div>
          <h2 className="text-3xl font-bold">🔥 Biryani Bliss</h2>
          <p className="mt-2 text-sm text-gray-300">Savor the authentic taste of spices in every bite.</p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#menu" className="hover:text-yellow-300 transition">Menu</a></li>
            <li><a href="#track-item" className="hover:text-yellow-300 transition">Track Order</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
          </ul>
        </div>

        {/* Right - Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FaEnvelope /> support@biryaniapp.com</p>
          </div>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Biryani Bliss. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
