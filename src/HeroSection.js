import React from 'react';

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 text-center">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Google Text */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span> Developer Groups
        </h1>
        
        {/* RBU Chapter text */}
        <h2
          style={{ color: 'rgba(100, 100, 100, 1)' }}
          className="text-2xl font-semibold mb-8"
        >
          RBU Chapter
        </h2>

        {/* GDG Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/OBJECTS.png"
            alt="Google Developer Groups"
            className="max-w-xs mx-auto"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Google Developer Groups are community groups for college and university students interested in Google developer technologies.
        </p>

        {/* Join Us Button */}
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 mb-8">
          JOIN US
        </button>

        {/* Chevron Down Icons */}
        <div className="flex flex-col justify-center items-center space-y-2 mb-8">
          <i className="fas fa-chevron-down text-gray-300 dark:text-gray-400 text-2xl"></i>
          <i className="fas fa-chevron-down text-gray-400 dark:text-gray-400 text-2xl"></i>
          <i className="fas fa-chevron-down text-gray-600 dark:text-gray-400 text-2xl"></i>
        </div>

        {/* Get To Know Us */}
        <p className="mt-8 text-xl font-sans font-bold text-gray-800 dark:text-gray-300 ">
          Get To Know Us!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
