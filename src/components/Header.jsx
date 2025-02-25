import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-4 px-8 flex justify-between items-center fixed top-0 z-50 w-full shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-bold">StudySpace</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#admission"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Admission
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Contact Us
            </a>
          </li>
          <li>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "bg-white text-blue-600 hover:bg-gray-200"
                  : "bg-transparent text-white border border-white hover:bg-white hover:text-blue-600"
              }`}
            >
              Admin Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
