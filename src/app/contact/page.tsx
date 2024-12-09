
// import Feature from '@/components/Feature';
// import React from 'react';
// import { FaMapMarkerAlt,FaPhoneAlt , FaFax, FaClock } from 'react-icons/fa';

// const ContactForm = () => {
//   return (
//     <>
//       {/* Banner */}
//       <div className="relative flex items-center justify-center h-64 bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
//         <div className="absolute inset-0 opacity-50"></div>
//         <div className="relative z-10 text-center text-black">
//           <div className="mb-4">
//             <img src="/logo.png" alt="Logo" className="mx-auto h-12" />
//           </div>
//           <h1 className="text-3xl font-bold mb-2">Contact</h1>
//           <nav className="text-sm">
//             <a href="/" className="hover:underline">Home</a> &gt; <span>Contact</span>
//           </nav>
//         </div>
//       </div>

//       {/* Centered Section */}

// {/* Centered Section */} <div className="text-center py-10 bg-gray-50"> <h2 className="text-xl font-bold mb-4">Get In Touch With Us</h2> <p className="text-gray-400 mb-4 mx-auto max-w-2xl">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p> </div>

//       {/* Contact Information and Form */}
//       <div className="flex flex-col md:flex-row justify-center items-start py-10 bg-gray-50">
//         {/* Contact Information */}
//         <div className="w-full md:w-1/3 p-4">
//           <div className="text-center md:text-left">
//             <div className="flex items-center mb-4">
//               <FaMapMarkerAlt className="text-gray-800 mr-2" />
//               <div>
//                 <h4 className="text-black font-bold">Address:</h4>
//                 <p className="text-gray-600">203, Envato Labs, Smith St, Melbourne, Victoria 3000, Australia</p>
//               </div>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaPhoneAlt  className="text-gray-800 mr-2" />
//               <div>
//                 <h4 className="text-black font-bold">Phone:</h4>
//                 <p className="text-gray-600">Mobile: +61 (0) 3 8376 6284</p>
//                 <p className="text-gray-600">Fax: +61 (0) 3 8376 6284</p>
//               </div>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaClock className="text-gray-800 mr-2" />
//               <div>
//                 <h4 className="text-black font-bold">Working Time:</h4>
//                 <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
//                 <p className="text-gray-600">Saturday - Sunday: 10:00 - 17:00</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="w-full md:w-2/3 p-4">
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Your name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Your name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email address
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Your email"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
//                 Subject
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="subject"
//                 type="text"
//                 placeholder="Subject"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 placeholder="Your message"
//                 rows={5}
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-yellow-600 hover:bg-orange-200 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Feature />
//     </>
//   );
// };

// export default ContactForm;


import Feature from '@/components/Feature';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <>
      {/* Banner */}
      <div className="relative flex items-center justify-center h-64 bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 text-center text-black">
          <div className="mb-4">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" className="mx-auto h-12" width={100} height={40} />
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-2">Contact</h1>
          <nav className="text-sm">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Contact</span>
          </nav>
        </div>
      </div>

      {/* Centered Section */}
      <div className="text-center py-10 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-400 mb-4 mx-auto max-w-2xl">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="flex flex-col md:flex-row justify-center items-start py-10 bg-gray-50">
        {/* Contact Information */}
        <div className="w-full md:w-1/3 p-4">
          <div className="text-center md:text-left">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-800 mr-2" />
              <div>
                <h4 className="text-black font-bold">Address:</h4>
                <p className="text-gray-600">203, Envato Labs, Smith St, Melbourne, Victoria 3000, Australia</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-gray-800 mr-2" />
              <div>
                <h4 className="text-black font-bold">Phone:</h4>
                <p className="text-gray-600">Mobile: +61 (0) 3 8376 6284</p>
                <p className="text-gray-600">Fax: +61 (0) 3 8376 6284</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-gray-800 mr-2" />
              <div>
                <h4 className="text-black font-bold">Working Time:</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-4">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Your name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows={5}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-600 hover:bg-orange-200 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Feature />
    </>
  );
};

export default ContactForm;
