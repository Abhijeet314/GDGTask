import React from 'react';

function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/mission.png"
            alt="Our Mission"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <div className="relative pl-6 md:pl-10 my-20">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500 rounded-e-full"></div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-md">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our mission involves community engagement, leadership development, building strong tech
                foundation, while enabling all tech enthusiasts to contribute to the global society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Perspective Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-8 md:space-x-reverse">
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/perspective.png"
            alt="Our Perspective"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Our Perspective
          </h2>
          <div className="w-16 h-1 bg-green-500 mb-4"></div>
          <div className="relative pl-6 md:pl-10">
            <div className="absolute top-0 left-0 w-2 h-full bg-green-500 rounded-s-xl"></div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-md">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We’re a community-driven initiative aiming to bridge the gap between research and practice,
                develop evolutionary thinking and network throughout the process. We believe in connecting
                fellow developers, spreading stimulative ideas and working for a solution-driven team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Keeps Us Going Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/idea.png"  
            alt="What Keeps Us Going"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
            What Keeps Us Going?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <div className="relative pl-6 md:pl-10">
            <div className="absolute top-0 right-0 w-2 h-full bg-yellow-500 rounded-e-full"></div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-md">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication,
                and leading with solutions is what helps us achieve new heights.
                The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve
                their skills and broaden their horizons of knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
