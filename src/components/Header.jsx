import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`py-4 px-8 flex justify-between items-center fixed top-0 z-50 w-full shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-bold">StudySpace</div>
      <button className="md:hidden text-white" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:space-x-6">
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
