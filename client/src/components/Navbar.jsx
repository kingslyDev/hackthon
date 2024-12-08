// src/components/Navbar.js
import React from 'react';
import logo from '../assets/logos/nusantara.svg';

const Navbar = () => {
  return (
    <nav className="mt-10 mb-1 container max-w-[1130px] mx-auto flex items-center justify-between bg-[#5271ff] p-5 rounded-3xl shadow-md h-28">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Nusantara Logo" className="w-40 h-40 object-contain rounded-full border-2 border-[#5271ff] shadow-lg" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8">
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-[#FFC736]">
          <a href="/">Home</a>
        </li>
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
          <a href="/about">About Us</a>
        </li>
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
          <a href="#">Testimonials</a>
        </li>
      </ul>

      {/* Sign In Button */}
      <div className="flex items-center gap-3">
        <a href="#" className="px-6 py-3 bg-white text-[#5271ff] rounded-full font-semibold hover:bg-[#f0f0f0] transition-colors duration-300">
          Connect Wallet
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
