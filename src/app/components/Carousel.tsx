'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import banner1 from '@/public/banner.jpg';
import banner2 from '@/public/banner-2.jpg';
import banner3 from '@/public/banner-3.jpg';
import banner4 from '@/public/banner-4.jpg';

// const Carousel = () => {
//   const banners=[banner1,banner2,banner3,banner4]
//   return (
//     <div className="w-full h-full md:h-96 overflow-hidden relative rounded-lg">
// {
//   banners.map((img,index)=>(
//     <Image key={index} src={img} alt={`banner-${index+1}`} className='absolute inset-0 w-full h-full object-cover' priority={index===0}/>
//   ))
// }
//     </div>
//   )
//   // // return (
//   // //   <div
//   // //     id="controls-carousel"
//   // //     className="relative w-full"
//   // //     data-carousel="static"
//   // //   >
//   // //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//   // //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
//   // //         <Image
//   // //           src={banner1}
//   // //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//   // //           alt="banner-1"
//   // //         />
//   // //       </div>

//   // //       <div
//   // //         className="hidden duration-700 ease-in-out"
//   // //         data-carousel-item="active"
//   // //       >
//   // //         <Image
//   // //           src={banner2}
//   // //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//   // //           alt="banner-2"
//   // //         />
//   // //       </div>

//   // //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
//   // //         <Image
//   // //           src={banner3}
//   // //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//   // //           alt="banner-3"
//   // //         />
//   // //       </div>

//   // //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
//   // //         <Image
//   // //           src={banner4}
//   // //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//   // //           alt="banner-4"
//   // //         />
//   // //       </div>
//   // //     </div>

//   //     <button
//   //       type="button"
//   //       className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//   //       data-carousel-prev
//   //     >
//   //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//   //         <svg
//   //           className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//   //           aria-hidden="true"
//   //           xmlns="http://www.w3.org/2000/svg"
//   //           fill="none"
//   //           viewBox="0 0 6 10"
//   //         >
//   //           <path
//   //             stroke="currentColor"
//   //             strokeLinecap="round"
//   //             strokeLinejoin="round"
//   //             strokeWidth="2"
//   //             d="M5 1 1 5l4 4"
//   //           />
//   //         </svg>
//   //         <span className="sr-only">Previous</span>
//   //       </span>
//   //     </button>
//   //     <button
//   //       type="button"
//   //       className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//   //       data-carousel-next
//   //     >
//   //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//   //         <svg
//   //           className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//   //           aria-hidden="true"
//   //           xmlns="http://www.w3.org/2000/svg"
//   //           fill="none"
//   //           viewBox="0 0 6 10"
//   //         >
//   //           <path
//   //             stroke="currentColor"
//   //             strokeLinecap="round"
//   //             strokeLinejoin="round"
//   //             strokeWidth="2"
//   //             d="m1 9 4-4-4-4"
//   //           />
//   //         </svg>
//   //         <span className="sr-only">Next</span>
//   //       </span>
//   //     </button>
//   //   </div>
//   // );
// };
const Carousel = () => {
  const banners = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* تصاویر */}
      <div className="relative h-56 md:h-100">
        {banners.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={`banner-${index + 1}`}
              fill
              className="w-full h-full"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* دکمه قبلی */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* دکمه بعدی */}
      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* نقاط پایین (indicator) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
