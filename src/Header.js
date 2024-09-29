import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger and close button

function Header({ isDarkMode, onToggleDarkMode }) {
  const [moveRight, setMoveRight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the mobile menu

  const handleImageClick = () => {
    setMoveRight(!moveRight);
    onToggleDarkMode();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-300 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Left Side (Logo and GDG RCOEM) */}
        <div className="flex items-center">
          <img
            src="/images/gdglogo.png"
            alt="GDG Logo"
            className="h-7 w-15 mr-2"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">GDG RCOEM</span>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links - Hidden on small screens, visible on larger screens */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full bg-white dark:bg-gray-900 lg:bg-transparent dark:lg:bg-transparent lg:w-auto lg:py-0 py-4 lg:px-0 px-6 shadow-lg lg:shadow-none`}>
          <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 lg:inline">Home</a>
          <a href="#events" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 lg:inline">Events</a>
          <a href="#team" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 lg:inline">Team</a>
          <a href="#alumni" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 lg:inline">Alumni</a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 lg:inline">Contact</a>

          {/* Toggle Button */}
          <div
            className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-500 shadow-md mt-4 lg:mt-0"
          >
            {/* The image inside the oval */}
            <img
              src={moveRight ? '/images/moon3.webp' : '/images/sun.png'}
              alt="Toggle Icon"
              onClick={handleImageClick}
              className={`h-7 w-7 rounded-full absolute top-0.5 left-0.5 cursor-pointer transition-transform duration-500 transform 
              ${moveRight ? 'translate-x-8' : 'translate-x-0'}`}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
