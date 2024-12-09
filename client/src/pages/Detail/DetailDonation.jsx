import React from 'react';
import logo from '../../assets/logos/NusantaraLog.png';
import detailimg from '../../assets/pwibogor.jpg';

const DetailDonation = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-50 to-blue-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg py-8 px-6 flex flex-col items-center">
        <div className="flex-shrink-0 mb-8">
          <img src={logo} alt="Nusantara Logo" className="w-full h-full object-contain rounded-full " />
        </div>
        <nav className="w-full">
          <ul className="space-y-6">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <span className="text-2xl">🧡</span>
                <span className="ml-3 text-lg">Donasi</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <span className="text-2xl">📦</span>
                <span className="ml-3 text-lg">Galang Dana</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <span className="text-2xl">👤</span>
                <span className="ml-3 text-lg">Akun</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          {/* Search Bar */}
          <div className="w-1/3">
            <input type="text" placeholder="Coba cari 'Bantuan Sosial'" className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          {/* Profile Icon */}
          <div>
            <button className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white shadow-lg hover:from-purple-500 hover:to-indigo-700 transition-transform transform hover:scale-105">👤</button>
          </div>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <section className="lg:col-span-8 bg-white rounded-2xl shadow-2xl p-6">
            <img src={detailimg} alt="Sagaranten Sukabumi" className="w-full h-64 object-cover rounded-xl mb-6" />
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">PWI Kota Bogor Siap Kirimkan Bantuan untuk Korban Banjir Bandang Sukabumi</h1>
            <p className="text-lg text-gray-600 mb-4">Rp52.278.000 terkumpul dari Rp100.000.000</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-indigo-600 h-4 rounded-full" style={{ width: '52%' }}></div>
            </div>
            <div className="flex justify-between text-gray-500 text-sm mb-6">
              <span>1209 Donasi</span>
              <span>18 hari</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-colors duration-200">Donasi Sekarang</button>
          </section>

          {/* Right Section */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Recommended Donation */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Rekomendasi Donasi</h2>
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">87 hari lagi</p>
                <h3 className="text-lg font-bold text-indigo-600 mt-2">Sedekah Jariyah Syekh Ali Jaber</h3>
              </div>
            </div>

            {/* Story Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Cerita Penggalangan Dana</h2>
              <p className="text-gray-600 mb-4">Musibah banjir bandang yang melanda wilayah Sukabumi baru-baru ini...</p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                Baca Selengkapnya
              </a>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Pesan Orang Dermawan</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-bold text-gray-800">Hamba Allah</p>
                <p className="text-gray-600 text-sm">Bismillah semoga membantu dan bermanfaat</p>
                <span className="text-xs text-gray-400">2 menit yang lalu</span>
              </div>
              {/* Additional comments can be added here */}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DetailDonation;
