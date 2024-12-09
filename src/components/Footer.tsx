

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* Company Info */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h2 className="text-xl font-bold mb-4">Funiro</h2>
//             <p className='text-gray-400'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
//           </div>

//           {/* Links */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h2 className="text-xl mb-4 text-gray-400">Links</h2>
//             <ul>
//               <li className="mb-4"><a href="/" className="hover:underline text-black">Home</a></li>
//               <li className="mb-4"><a href="/shop" className="hover:underline text-black">Shop</a></li>
//               <li className="mb-4"><a href="/about" className="hover:underline text-black">About</a></li>
//               <li className="mb-4"><a href="/contact" className="hover:underline text-black">Contact</a></li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h2 className="text-xl text-gray-400 mb-4">Help</h2>
//             <ul>
//               <li className="mb-4"><a href="/payment-options" className="hover:underline text-black">Payment Options</a></li>
//               <li className="mb-4"><a href="/returns" className="hover:underline text-black">Returns</a></li>
//               <li className="mb-4"><a href="/privacy-policies" className="hover:underline text-black">Privacy Policies</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h2 className="text-xl mb-4 text-gray-400">Newsletter</h2>
//             <form className="flex flex-col md:flex-row items-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full md:w-auto flex-grow px-4 py-2 mb-6 md:mb-0 md:mr-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-black rounded hover:bg-yellow-600 underline"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-8 text-center">
//           <p>&copy; 2023 Funiro. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Funiro</h2>
            <p className="text-gray-400">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl mb-4 text-gray-400">Links</h2>
            <ul>
              <li className="mb-4"><Link href="/" className="hover:underline text-black">Home</Link></li>
              <li className="mb-4"><Link href="/shop" className="hover:underline text-black">Shop</Link></li>
              <li className="mb-4"><Link href="/about" className="hover:underline text-black">About</Link></li>
              <li className="mb-4"><Link href="/contact" className="hover:underline text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl text-gray-400 mb-4">Help</h2>
            <ul>
              <li className="mb-4"><Link href="/payment-options" className="hover:underline text-black">Payment Options</Link></li>
              <li className="mb-4"><Link href="/returns" className="hover:underline text-black">Returns</Link></li>
              <li className="mb-4"><Link href="/privacy-policies" className="hover:underline text-black">Privacy Policies</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl mb-4 text-gray-400">Newsletter</h2>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto flex-grow px-4 py-2 mb-6 md:mb-0 md:mr-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-black rounded hover:bg-yellow-600 underline"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
