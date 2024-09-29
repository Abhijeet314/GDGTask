import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-16 relative dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h2 className="text-gray-700 font-semibold text-xl dark:text-gray-300">Google Developer Groups</h2>
            <p className="text-blue-500">On Campus • Ramdeobaba University</p>
          </div>

          {/* Middle Divider */}
          <div className="hidden md:block h-16 border-l border-gray-600 mx-auto"></div>

          {/* Right section (Address and social links) */}
          <div className="md:flex flex-col items-end text-center md:text-right space-y-4 md:space-y-0 md:pl-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300">Shri Ramdeobaba College of Engineering and Management,</p>
              <p className="text-gray-600 dark:text-gray-300">Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013</p>
              <a href="mailto:dsc.rknec@gmail.com" className="text-blue-500">dsc.rknec@gmail.com</a>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="https://www.instagram.com/gdg_rbu/" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/company/gdsc-rcoem/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://x.com/gdsc_rcoem" className="text-gray-600 dark:text-gray-300 hover:text-blue-400">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section (image) */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/images/footer.png"
          alt="Colorful footer design"
          className="w-full max-h-20 object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
