// src/components/Waves.js
import React from 'react';

const Waves = () => {
  return (
    <div className="w-full">
      <svg className="w-full h-24" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#5271ff"
          fillOpacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Waves;
