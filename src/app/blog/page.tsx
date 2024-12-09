

// import Feature from '@/components/Feature';
// import React from 'react';

// const BlogPage = () => {
//     return (
//         <>
//          {/* Banner */}
//       <div className="relative flex items-center justify-center h-64 bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
//         <div className="absolute inset-0 opacity-50"></div>
//         <div className="relative z-10 text-center text-black">
//           <div className="mb-4">
//             <img src="/logo.png" alt="Logo" className="mx-auto h-12" />
//           </div>
//           <h1 className="text-3xl font-bold mb-2">Blog</h1>
//           <nav className="text-sm">
//             <a href="/" className="hover:underline">Home</a> &gt; <span>blog</span>
//           </nav>
//         </div>
//       </div>
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex flex-wrap -mx-4">
//                 {/* Main Content */}
//                 <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
//                     {/* Blog Post 1 */}
//                     <div className="mb-8">
//                         <img src="/blog1.png" alt="Blog Post 1" className="w-full h-64 object-cover mb-4" />
//                         <h2 className="text-2xl font-bold mb-2">Going all-in with millennial design</h2>
//                         <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
//                         <a href="/blog1.png" className="text-blue-500 hover:underline">Read more</a>
//                     </div>

//                     {/* Blog Post 2 */}
//                     <div className="mb-8">
//                         <img src="/blog2.png" alt="Blog Post 2" className="w-full h-64 object-cover mb-4" />
//                         <h2 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h2>
//                         <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
//                         <a href="/blog2.png" className="text-blue-500 hover:underline">Read more</a>
//                     </div>

//                     {/* Blog Post 3 */}
//                     <div className="mb-8">
//                         <img src="/blog3.png" alt="Blog Post 3" className="w-full h-64 object-cover mb-4" />
//                         <h2 className="text-2xl font-bold mb-2">Handmade pieces that took time to make</h2>
//                         <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
//                         <a href="/blog3.png" className="text-blue-500 hover:underline">Read more</a>
//                     </div>

//                     {/* Pagination */}
//                     <div className="flex justify-center">
//                         <a href="/blog/page-1" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600 ">1</a>
//                         <a href="/blog/page-2" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">2</a>
//                         <a href="/blog/page-3" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">3</a>
//                         <a href="/blog/page-2" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">Next</a>
//                     </div>
//                 </div>

//                 {/* Sidebar */} <div className="w-full lg:w-1/3 px-4"> {/* Search Bar */} <div className="mb-8">
//                      <input type="text" placeholder=" " className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
//                       </div> 
//                       {/* Categories */} <div className="mb-8"> <h3 className="text-xl font-bold mb-4">Categories</h3> 
//                       <ul> <li className="mb-2 flex justify-between"><a href="/category/color" className="text-gray-700 hover:underline">Color</a><span className="text-gray-500">2</span></li>
//                        <li className="mb-2 flex justify-between"><a href="/category/design" className="text-gray-700 hover:underline">Design</a><span className="text-gray-500">7</span></li> <li className="mb-2 flex justify-between"><a href="/category/hand-made" className="text-gray-700 hover:underline">Hand Made</a><span className="text-gray-500">9</span></li> 
//                       <li className="mb-2 flex justify-between"><a href="/category/ideas" className="text-gray-700 hover:underline">Ideas</a><span className="text-gray-500">5</span></li>
//                        <li className="mb-2 flex justify-between"><a href="/category/wood" className="text-gray-700 hover:underline">Wood</a><span className="text-gray-500">1</span></li> </ul> </div>



//                     {/* Recent Posts */}
//                     <div>
//                         <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
//                         <ul>
//                             <li className="mb-4 flex items-center">
//                                 <img src="/bside1.png" alt="Recent Post 1" className="w-16 h-16 object-cover mr-4" />
//                                 <div>
//                                     <a href="/blog/post-1" className="text-gray-700 hover:underline">Going all-in with millennial design</a>
//                                     <p className="text-gray-500 text-sm">03 Aug 2022</p>
//                                 </div>
//                             </li>
//                             <li className="mb-4 flex items-center">
//                                 <img src="/bside2.png" alt="Recent Post 2" className="w-16 h-16 object-cover mr-4" />
//                                 <div>
//                                     <a href="/blog/post-2" className="text-gray-700 hover:underline">Exploring new ways of decorating</a>
//                                     <p className="text-gray-500 text-sm">03 Aug 2022</p>
//                                 </div>
//                             </li>
//                             <li className="mb-4 flex items-center">
//                                 <img src="/bside3.png" alt="Recent Post 3" className="w-16 h-16 object-cover mr-4" />
//                                 <div>
//                                     <a href="/blog/post-3" className="text-gray-700 hover:underline">Handmade pieces that took time to make</a>
//                                     <p className="text-gray-500 text-sm">03 Aug 2022</p>
//                                 </div>
//                             </li>
//                             <li className="mb-4 flex items-center">
//                                 <img src="/bside4.png" alt="Recent Post 4" className="w-16 h-16 object-cover mr-4" />
//                                 <div>
//                                     <a href="/blog/post-4" className="text-gray-700 hover:underline">Modern home in Milan</a>
//                                     <p className="text-gray-500 text-sm">03 Aug 2022</p>
//                                 </div>
//                             </li>
//                             <li className="mb-4 flex items-center">
//                                 <img src="/bside5.png" alt="Recent Post 5" className="w-16 h-16 object-cover mr-4" />
//                                 <div>
//                                     <a href="/blog/post-5" className="text-gray-700 hover:underline">Colorful office redesign</a>
//                                     <p className="text-gray-500 text-sm">03 Aug 2022</p>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <Feature/>

//         </>
//     );
// };

// export default BlogPage;

import Feature from '@/components/Feature';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
    return (
        <>
         {/* Banner */}
      <div className="relative flex items-center justify-center h-64 bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 text-center text-black">
          <div className="mb-4">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="mx-auto h-12" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <nav className="text-sm">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>blog</span>
          </nav>
        </div>
      </div>
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                {/* Main Content */}
                <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                    {/* Blog Post 1 */}
                    <div className="mb-8">
                        <Image src="/blog1.png" alt="Blog Post 1" width={800} height={400} className="w-full h-64 object-cover mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Going all-in with millennial design</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <Link href="/blog1.png" className="text-blue-500 hover:underline">Read more</Link>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="mb-8">
                        <Image src="/blog2.png" alt="Blog Post 2" width={800} height={400} className="w-full h-64 object-cover mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <Link href="/blog2.png" className="text-blue-500 hover:underline">Read more</Link>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="mb-8">
                        <Image src="/blog3.png" alt="Blog Post 3" width={800} height={400} className="w-full h-64 object-cover mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Handmade pieces that took time to make</h2>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <Link href="/blog3.png" className="text-blue-500 hover:underline">Read more</Link>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center">
                        <Link href="/blog/page-1" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">1</Link>
                        <Link href="/blog/page-2" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">2</Link>
                        <Link href="/blog/page-3" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">3</Link>
                        <Link href="/blog/page-2" className="px-4 py-2 mx-1 bg-orange-200 text-gray-700 rounded hover:bg-yellow-600">Next</Link>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3 px-4">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <input type="text" placeholder=" " className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Categories</h3>
                        <ul>
                            <li className="mb-2 flex justify-between"><Link href="/category/color" className="text-gray-700 hover:underline">Color</Link><span className="text-gray-500">2</span></li>
                            <li className="mb-2 flex justify-between"><Link href="/category/design" className="text-gray-700 hover:underline">Design</Link><span className="text-gray-500">7</span></li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                        <ul>
                            <li className="mb-4 flex items-center">
                                <Image src="/bside1.png" alt="Recent Post 1" width={64} height={64} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <Link href="/blog/post-1" className="text-gray-700 hover:underline">Going all-in with millennial design</Link>
                                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Feature/>

        </>
    );
};

export default BlogPage;
