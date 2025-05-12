'use client';

import React from 'react';

const About = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Pizza Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-start px-6 md:px-20 text-white animate-fade-in">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Greatest Briyani Ever</h1>
          <p className="text-xl md:text-2xl mb-6">Ready in 60 seconds</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition transform hover:scale-105 hover:shadow-lg">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
