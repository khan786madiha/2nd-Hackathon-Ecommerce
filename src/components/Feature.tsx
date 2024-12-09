

// import React from 'react';

// const Feature = () => {
//   return (
//     <div className="flex justify-center items-center py-10 bg-orange-100">
//       <div className="max-w-6xl flex gap-6 justify-center">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/trophy.png" alt="High Quality" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">High Quality</h3>
//           <p className="text-gray-600">Crafted from top materials</p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/guarantee.png" alt="Warranty Protection" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">Warranty Protection</h3>
//           <p className="text-gray-600">Over 2 years</p>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/shipping.png" alt="Free Shipping" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">Free Shipping</h3>
//           <p className="text-gray-600">Order over $150</p>
//         </div>

//         {/* Feature 4 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/support.svg" alt="24/7 Support" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">24/7 Support</h3>
//           <p className="text-gray-600">Dedicated support</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;

// import React from 'react';

// const Feature = () => {
//   return (
//     <div className="flex justify-center items-center py-10 bg-orange-100">
//       <div className="max-w-6xl flex gap-6 justify-center">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/trophy.png" alt="High Quality" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">High Quality</h3>
//           <p className="text-gray-600">Crafted from top materials</p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/guarantee.png" alt="Warranty Protection" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">Warranty Protection</h3>
//           <p className="text-gray-600">Over 2 years</p>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/shipping.png" alt="Free Shipping" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">Free Shipping</h3>
//           <p className="text-gray-600">Order over $150</p>
//         </div>

//         {/* Feature 4 */}
//         <div className="flex flex-col items-center text-center p-4">
//           <img src="/support.svg" alt="24/7 Support" className="h-12 mb-2" />
//           <h3 className="text-xl font-semibold">24/7 Support</h3>
//           <p className="text-gray-600">Dedicated support</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;

import Image from 'next/image';

const Feature = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-orange-100">
      <div className="max-w-6xl flex gap-6 justify-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-4">
          <Image src="/trophy.png" alt="High Quality" width={48} height={48} />
          <h3 className="text-xl font-semibold">High Quality</h3>
          <p className="text-gray-600">Crafted from top materials</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-4">
          <Image src="/guarantee.png" alt="Warranty Protection" width={48} height={48} />
          <h3 className="text-xl font-semibold">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-4">
          <Image src="/shipping.png" alt="Free Shipping" width={48} height={48} />
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-gray-600">Order over $150</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center p-4">
          <Image src="/support.svg" alt="24/7 Support" width={48} height={48} />
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
