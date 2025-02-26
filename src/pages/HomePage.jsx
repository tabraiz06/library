import React from "react";

import { RiWhatsappFill } from "react-icons/ri";

import MainSection from "../components/MainSection";
import FacilitiesSection from "../components/Facilities";
import About from "../components/About";

import ContactUs from "../components/ContactUs";


const HomePage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917631020507"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      "Hello! I am interested in your library. Is there any sheat available."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-900">
 
      <main className="flex-1">
        <MainSection />
        <FacilitiesSection />
        <About />
        
        <ContactUs />
        <RiWhatsappFill
          className="fixed right-6 top-[80%] text-5xl text-green-500 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-green-600"
          onClick={handleWhatsAppRedirect}
        />
      </main>
     
    </div>
  );
};

export default HomePage;
