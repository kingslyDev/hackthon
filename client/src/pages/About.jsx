import React from "react";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero / Header Section */}
      <section className="text-center py-16 bg-[#5271FF] text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>

      {/* Images Section with Half Blue and Half White BG */}
      <section className="relative py-16 px-4">
        {/* Bagian atas background biru */}
        <div className="absolute inset-0 h-1/2 bg-[#5271FF] top-0 left-0" />

        {/* Bagian bawah background putih */}
        <div className="absolute inset-0 h-1/2 bg-white bottom-0 left-0" style={{top: '50%'}} />

        {/* Kontainer gambar, posisinya relative agar di atas background */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Team 1"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Team 2"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Team 3"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Team 4"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Idea Delivery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We make sure your idea & creation delivered properly
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
          <p>
            Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus. Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam nec porttitor erat, vel ullamcorper erat. Fusce euismod ipsum eget nunc pulvinar feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Empower Small Business Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://via.placeholder.com/500x350"
              alt="Founder"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <p className="text-gray-700 italic text-center mt-4">
              "Making an impact, together" - Socialy Founder
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">We empower small business owners</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <blockquote className="text-[#5271FF] font-semibold italic border-l-4 border-[#5271FF] pl-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Help Businesses Grow Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We help businesses to grow faster and bigger
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-[#5271FF] text-4xl mb-4">👥</div>
            <h3 className="font-semibold text-lg mb-2">Professional Team</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#5271FF] text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Target Oriented</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#5271FF] text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-lg mb-2">Success Guarantee</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
