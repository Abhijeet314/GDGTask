import React from 'react';

const technologies = [
  { id: 1, name: 'Android', icon: '/images/android.png', color: 'red-400' },
  { id: 2, name: 'Flutter', icon: '/images/flutter.png', color: 'blue-400' },
  { id: 3, name: 'Cloud', icon: '/images/gcp.png', color: 'green-400' },
];

function Technologies() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Technologies</h2>
      <p className="text-center text-gray-600 mb-8 dark:text-white">
        Domains That Excite Us to Collaborate and Teach!
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap gap-16"> 
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className={`w-48 h-60 flex flex-col items-center justify-between p-4 rounded-xl shadow-md bg-white border-t-4 transition-all duration-300 hover:bg-${tech.color} hover:scale-105`}
          >
            <img src={tech.icon} alt={tech.name} className="w-20 h-20" />
            <p className="mt-4 text-xl font-semibold dark:text-black">{tech.name}</p>
            <button className="text-gray-600 text-2xl mt-4">↓</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;