// import React from 'react'

// import { Facebook, Instagram,  Mail} from 'lucide-react';

// const Footer = () => {
//   return (
//     <>
//     <div className=' bg-black   p-10'>

//         {/* top side  */}
//         <div className=' flex justify-between items-center'>
//             {/* div left side */}
//             <div className='flex  flex-col gap-3 mb-8'>
//                 <div className=" flex items-center  gap-5"> 
//                 <img src="../../../public/img/weblogo.jpg" alt="Logo" className=" rounded-full w-8"/> 
//                 <samp className="text-white text-cente text-2xl font-bold ">Tangerine</samp>
//                 </div>
//                 <p className='text-white'>123 King St W Toronto, CA A1B 2C3(123) 456-7890</p>
//             </div>

//             {/* div right side */}
//             <div className='flex flex-col  gap-2 mb-8 '>
//                  <div className="flex items-center  gap-8 text-white text-center  text-lg  [&>a]:hover:text-orange-500 [&>a]:transition-all [&>a]:duration-300 [&>div]:hover:bg-amber-600 [&>div]:hover:border-white">
//                     <a  href="#">About</a>
//                     <a  href="#">Menu</a>
//                     <a  href="#">Contact</a>
//                     <a  href="#">Order Online</a>
//                 </div>
//                 <div className='flex  text-white gap-3 ml-65 [&>div]:hover:bg-amber-600 '>
//                     {/* mail icon */}
//                     <div className=" p-1 rounded-full border ">
//                         <a href='#'><Mail size={18} /></a>
//                     </div>
//                      {/* Facebook Icon */}
//                     <div className=" p-1 rounded-full border">
//                         <a href='#'><Facebook size={18} /></a>
//                     </div>
//                     {/* Instragram icon */}
//                     <div className=" p-1 rounded-full border">
//                         <a href='#'><Instagram size={18} /></a>
//                     </div>
//             </div>
//             </div>

        
//         </div>

//         {/* hr line  */}
//         <hr className=' text-gray-400'/>

//             {/* bootm side */}
//             <div className='flex justify-between items-center mt-5'>
//                  {/* div left side */}
//             <div>
//                 <p className='text-white text-lg'>© 2023 Tangerine Filipino Restaurant</p>
//             </div>

//             {/* div right side */}
//             <div>
//                 <p className='text-white text-lg'>Template Designed by Oscar Chen</p>
//             </div>

//             </div>
//     </div>
//     </>
//   )
// }

// export default Footer


import React from 'react'
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black p-10">

      {/* Top Side */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-8">
        {/* Left side */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-5">
            <img src="../../../public/img/weblogo.jpg" alt="Logo" className="rounded-full w-8" />
            <span className="text-white text-2xl font-bold">Tangerine</span>
          </div>
          <p className="text-white">123 King St W Toronto, CA A1B 2C3 (123) 456-7890</p>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-8 text-white text-lg
            [&>a]:hover:text-orange-500 [&>a]:transition-all [&>a]:duration-300">
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Contact</a>
            <a href="#">Order Online</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2 text-white">
            <div className="p-1 rounded-full border hover:bg-amber-600 transition duration-300">
              <a href="#"><Mail size={18} /></a>
            </div>
            <div className="p-1 rounded-full border hover:bg-amber-600 transition duration-300">
              <a href="#"><Facebook size={18} /></a>
            </div>
            <div className="p-1 rounded-full border hover:bg-amber-600 transition duration-300">
              <a href="#"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-400 mb-5" />

      {/* Bottom Side */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-white text-lg text-center md:text-left">© 2023 Tangerine Filipino Restaurant</p>
        {/* Right */}
        <p className="text-white text-lg text-center md:text-right">Template Designed by Oscar Chen</p>
      </div>
    </div>
  )
}

export default Footer;
