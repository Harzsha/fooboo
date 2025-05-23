"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap fixed w-full z-50">
      <section className="relative mx-auto w-full">
        {/* Navbar */}
        <nav className={`flex justify-between ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/90 backdrop-blur-sm'} text-white w-full transition-all duration-300`}>
          <div className="px-5 xl:px-12 py-4 flex w-full items-center justify-between">
            <div className="flex items-center">
              <a className="text-2xl sm:text-3xl font-bold font-heading hover:text-gray-300 transition-colors" href="#">
                Foo-Boo.
              </a>
            </div>

            {/* Nav Links - Desktop */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-8 lg:space-x-12">
              <li><a className="hover:text-gray-200 transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-gray-200 transition-colors" href="#menu">Menu</a></li>
              <li><a className="hover:text-gray-200 transition-colors" href="#track-item">Track order</a></li>
              <li><a className="hover:text-gray-200 transition-colors" href="#footer">Contact Us</a></li>
            </ul>

            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <a className="hover:text-gray-200 transition-colors" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              <a className="flex items-center hover:text-gray-200 transition-colors relative" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 
                    2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
              <a className="flex items-center hover:text-gray-200 transition-colors" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 
                    0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 
                    0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            {/* Hamburger Icon - Mobile */}
            <div className="xl:hidden md:hidden flex items-center">
              <button
                className="p-2 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Side Panel */}
        <div className={`fixed inset-0 z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-blend-luminosity/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Side Panel */}
          <div className={`fixed top-0 right-0 w-80 h-full bg-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  className="p-2 rounded-md hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 mt-8 space-y-6">
                <a 
                  className="block py-3 px-4 rounded-lg hover:bg-blue-300 transition-colors font-medium text-lg"
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  className="block py-3 px-4 rounded-lg hover:bg-blue-300 transition-colors font-medium text-lg"
                  href="#menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menu
                </a>
                <a 
                  className="block py-3 px-4 rounded-lg hover:bg-blue-300 transition-colors font-medium text-lg"
                  href="#track-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Track order
                </a>
                <a 
                  className="block py-3 px-4 rounded-lg hover:bg-blue-300 transition-colors font-medium text-lg"
                  href="#footer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </nav>

              {/* Mobile Icons */}
              <div className="flex items-center justify-center space-x-8 pt-8 pb-6 border-t border-gray-700">
                <a className="hover:text-red-600 transition-colors p-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
                <a className="flex items-center hover:text-red-600 transition-colors relative p-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                      2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 
                      2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-2 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                <a className="flex items-center hover:text-red-600 transition-colors p-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 
                      0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 
                      0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;