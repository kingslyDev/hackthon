// src/components/Donations.js
import React from 'react';
import { FaShieldAlt, FaPercent, FaHandshake } from 'react-icons/fa';

const Donations = () => {
  return (
    <section className="relative bg-[#faa300] text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Overlapping White Card */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-xl p-8 z-10">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 text-center">Metode Pembayaran</h3>
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center mt-6 gap-8">
          <img src="/path/to/logo1.png" alt="Featured Logo 1" className="h-12 object-contain" />
          <img src="/path/to/logo2.png" alt="Featured Logo 2" className="h-12 object-contain" />
          <img src="/path/to/logo3.png" alt="Featured Logo 3" className="h-12 object-contain" />
          <img src="/path/to/logo4.png" alt="Featured Logo 4" className="h-12 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-0 text-center">
        <h2 className="mt-10 text-xl md:text-2xl font-semibold">Dipercaya lebih dari 1000 Penyumbang</h2>
        <h1 className="text-5xl md:text-6xl font-bold mt-4">Rp1.574 Milyar</h1>
        <p className="text-lg md:text-xl mt-2">Didirikan 2024</p>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {/* Feature Card 1 */}
          <div className="bg-[#4a90e2] rounded-lg p-6 text-left shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-white text-[#4a90e2] p-3 rounded-full">
                <FaShieldAlt className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="ml-4 text-lg font-semibold">Donasi terjaga</h4>
            </div>
            <p className="text-white">Donasi anda terjaga dan terjamin dengan memanfaatkan teknologi Web 3.0</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-[#4a90e2] rounded-lg p-6 text-left shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-white text-[#4a90e2] p-3 rounded-full">
                <FaPercent className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="ml-4 text-lg font-semibold">100% Sumbangan Tersalurkan</h4>
            </div>
            <p className="text-white">Partner serta dukungan para penyumbang merupakan modal dan alat nusantara bersama untuk berkomitmen berintegritas</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-[#4a90e2] rounded-lg p-6 text-left shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-white text-[#4a90e2] p-3 rounded-full">
                <FaHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="ml-4 text-lg font-semibold">Berpartner dengan 100+ lembaga</h4>
            </div>
            <p className="text-white">Nusantara Bersama berpartner dengan lebih dari 100 lembaga non-profit terpercaya </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
