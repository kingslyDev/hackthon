import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Donations from '@/components/Cardhome/Donations';
import TopAds from '@/components/Cardhome/TopAds';

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

      {/* Donations dan TopAds tanpa jeda */}
      <div>
        <Donations />
        <TopAds />
      </div>
    </div>
  );
};

export default Homepagep;
