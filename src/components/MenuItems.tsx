'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BiryaniItem {
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

const biryaniMenu: BiryaniItem[] = [
  {
    name: 'Hyderabadi Biryani',
    description: 'Aromatic basmati rice cooked with tender meat & spices.',
    price: '$12',
    rating: 4.8,
    image: 'https://b.zmtcdn.com/data/dish_photos/173/29253522c2186e61945eeb6043bca173.jpeg',
  },
  {
    name: 'Lucknowi Biryani',
    description: 'Subtle flavors with slow-cooked saffron and herbs.',
    price: '$11',
    rating: 4.6,
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/oaglaambyio5k6jvf7tx',
  },
  {
    name: 'Kolkata Biryani',
    description: 'Mildly spiced with boiled egg & potato combo.',
    price: '$10',
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJItmSJfoGz-1aQEIFgo6k5rKjB7c_D0252A&s',
  },
  {
    name: 'Ambur Biryani',
    description: 'South Indian spicy biryani with distinct flavors.',
    price: '$11',
    rating: 4.7,
    image: 'https://yellowchilis.com/wp-content/uploads/2020/12/ambur-special-chicken-biryani-star-biryani-1.jpg',
  },
  {
    name: 'Mughlai Biryani',
    description: 'Rich and royal with nuts, cream, and ghee.',
    price: '$13',
    rating: 4.9,
    image: 'https://www.ruchifoodline.com/recipes//cdn/recipes/chicken-biryani.jpg',
  },
  {
    name: 'Paneer Biryani',
    description: 'Perfect vegetarian blend of spices and paneer.',
    price: '$9',
    rating: 4.4,
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg',
  },
];

const MenuItems = () => {
  return (
    <section id="menu" className="pb-16 px-6 bg-gradient-to-b pt-24 from-yellow-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">Our Biryani Menu</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {biryaniMenu.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-yellow-400 transition-all duration-300 border border-yellow-100 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl w-full h-48 object-cover mb-4 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-yellow-900 mb-1">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-yellow-700">{item.price}</span>
              <span className="text-sm text-yellow-600">⭐ {item.rating.toFixed(1)}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
