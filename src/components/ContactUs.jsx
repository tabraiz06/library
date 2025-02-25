import React from 'react'

const ContactUs = () => {
   return (
     <section
       id="contact"
       className="p-8 flex flex-col md:flex-row items-center bg-gray-100"
     >
       <div className="md:w-1/2">
         <img
           src="https://nrdcindia.com/uploads/images/1568886999Conatct2.jpg"
           alt="Contact Us"
           className="rounded-lg shadow-md w-full"
         />
       </div>
       <div className="md:w-1/2 md:pl-8">
         <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
           Contact Us
         </h2>
         <form className="bg-white p-6 rounded-lg shadow-md">
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">
               Name
             </label>
             <input
               type="text"
               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Enter your name"
             />
           </div>
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">
               Email
             </label>
             <input
               type="email"
               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Enter your email"
             />
           </div>
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">
               Message
             </label>
             <textarea
               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Enter your message"
               rows="4"
             ></textarea>
           </div>
           <button
             type="submit"
             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
           >
             Send Message
           </button>
         </form>
       </div>
     </section>
   );
}

export default ContactUs
