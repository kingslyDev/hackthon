// src/pages/Homepagep.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Homepagep = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-blue-100">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="bg-[#627eff]">
        <HeroSection />
      </div>

      {/* Konten lainnya */}
      <div className="h-[200vh]">halo</div>
    </div>
  );
};

export default Homepagep;
