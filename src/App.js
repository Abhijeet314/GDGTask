import React, { useState } from 'react';
import './App.css';
import './tailwind.css';
import Header from './Header';
import HeroSection from './HeroSection';
import '@fortawesome/fontawesome-free/css/all.min.css'; // font awesome for chevron down icons
import Mission from './Mission';
import Stats from './Stats';
import Technologies from './Technologies';
import FAQS from './FAQS';
import Footer from './Footer';

function App() {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // applying isDarkMode state
    <div className={`${isDarkMode ? 'dark' : ''}`}>

      <div className="App bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {/* Header component */}
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        {/* Other components */}
        <HeroSection />
        <Mission />
        <Stats />
        <Technologies />
        <FAQS />
        <Footer />
      </div>
    </div>
  );
}

export default App;
