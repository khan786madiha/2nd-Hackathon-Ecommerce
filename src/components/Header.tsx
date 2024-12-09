

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-sm border-b mx-auto flex items-center justify-between w-full px-8 py-4">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src="/logo.png" alt="Logo" className="h-10 w-15" />
//         <div className="text-2xl font-bold text-black ml-2">
//           <a href="/">Funiro</a>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="hidden md:flex space-x-8 items-center">
//         <a href="/" className="text-gray-700 hover:text-black font-medium">Home</a>
//         <a href="/shop" className="text-gray-700 hover:text-black font-medium">Shop</a>
//         <a href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</a>
//         <a href="/contact" className="text-gray-700 hover:text-black font-medium">Contact</a>
//       </nav>

//       {/* Icons */}
//       <div className="flex items-center space-x-6">
//         <img src="/icons/user.png" alt="User" className="h-6 w-6 text-gray-700 hover:text-black" />
//         <img src="/icons/search.png" alt="Search" className="h-6 w-6 text-gray-700 hover:text-black" />
//         <img src="/icons/navheart.png" alt="Heart" className="h-6 w-6 text-gray-700 hover:text-black" />
//         <img src="/icons/cart.png" alt="Cart" className="h-6 w-6 text-gray-700 hover:text-black" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex items-center justify-between w-full px-6 md:px-8 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
        <div className="text-2xl font-bold text-black ml-2">
          <Link href="/">Funiro</Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
        <Link href="/" className="text-gray-700 hover:text-black font-medium transition-all">
          Home
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-black font-medium transition-all">
          Shop
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-black font-medium transition-all">
          Blog
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-black font-medium transition-all">
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Image src="/icons/user.png" alt="User Icon" width={24} height={24} className="cursor-pointer hover:opacity-80" />
        <Image src="/icons/search.png" alt="Search Icon" width={24} height={24} className="cursor-pointer hover:opacity-80" />
        <Image src="/icons/navheart.png" alt="Heart Icon" width={24} height={24} className="cursor-pointer hover:opacity-80" />
        <Image src="/icons/cart.png" alt="Cart Icon" width={24} height={24} className="cursor-pointer hover:opacity-80" />
      </div>
    </header>
  );
};

export default Header;
