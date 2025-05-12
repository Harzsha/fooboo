'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1675865717689-a612f9a725c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHMlMjBub24lMjB2ZWd8ZW58MHx8MHx8fDA%3D",
"https://media.istockphoto.com/id/1309554566/photo/spicy-gravy-chicken-served-in-a-bowl-with-chapati.webp?a=1&b=1&s=612x612&w=0&k=20&c=j1XJ2ABhcB75UOpLB00I3H2-lNuM-OWjNOG8XimpT6M=",
"https://media.istockphoto.com/id/1183779071/photo/tasty-and-spicy-fish-fry-from-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=c2rNBjq2AEnX1rs5na461vBFhGUwrMY3v5BkoBuKcm0=",
"https://media.istockphoto.com/id/2191209219/photo/authentic-maharashtrian-cuisine-delicious-mutton-curry-that-many-locals-love-maharashtra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=bUF0ES6EW4OfytU3WC2WXLrmw54aJgaV-hyxRpptyTY="
];

const CarouselSection = () => {
  return (
    <div className="relative w-full h-screen max-w-5xl pt-24 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg h-64 md:h-96"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
