// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className=" text-black py-4 px-8 flex justify-between items-center fixed top-0 z-50 w-full bg-white shadow-md ">
      <div className="text-2xl font-bold">StudySpace</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Admission
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:text-blue-500">
              Contact Us
            </a>
          </li>
          <li>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
              Admin Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
