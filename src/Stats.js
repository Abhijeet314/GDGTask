import React from 'react';

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-around flex-wrap gap-8">
      <div className="stat-item flex flex-col items-center">
        <div className="relative w-36 h-36">
          <img
            src="/images/circle.png"
            alt="Years Circle"
            className="w-full h-full"
          />
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800 darkMode:text-white z-10">
            03+
          </span>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Years</p>
      </div>

      <div className="stat-item flex flex-col items-center">
        <div className="relative w-36 h-36">
          <img
            src="/images/circle.png"
            alt="Events Circle"
            className="w-full h-full"
          />
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800 darkMode:text-white z-10">
            10+
          </span>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Events</p>
      </div>

      <div className="stat-item flex flex-col items-center">
        <div className="relative w-36 h-36">
          <img
            src="/images/circle.png"
            alt="Community Members Circle"
            className="w-full h-full"
          />
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800 darkMode:text-white z-10">
            1K+
          </span>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Community Members</p>
      </div>

      <div className="stat-item flex flex-col items-center">
        <div className="relative w-36 h-36">
          <img
            src="/images/circle.png" 
            alt="Attendees Circle"
            className="w-full h-full"
          />
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800 darkMode:text-white z-10">
            200+
          </span>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Attendees</p>
      </div>
    </section>
  );
}

export default Stats;
