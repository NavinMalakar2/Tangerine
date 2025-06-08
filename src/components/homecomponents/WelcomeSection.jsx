const WelcomeSection = ()=>{
    return (
        <>
   <div className="relative bg-white  flex items-center justify-between overflow-hidden   max-w-7xl ml-20  ">
      {/* Left Side */}
      <div className="w-1/4 z-10 ">
        <h1 className="text-4xl font-bold font-serif text-black mb-2">
          <span className="border-b-4 border-green-900 inline-block pb-1">Welcome</span>
        </h1>
        <p className="text-black text-lg leading-relaxed mt-4">
          Welcome to our family-owned Filipino cuisine restaurant, where we invite you to savor
          the heartwarming flavors of the Philippines. Our commitment to quality and tradition
          means that every meal is crafted with care, using time-honored recipes and the freshest
          ingredients available. We invite you to join us in celebrating the warmth of family, the
          richness of culture, and the delight of Filipino cuisine!
        </p>
        <button className="mt-6 px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:scale-105 duration-300">
          Our History
        </button>
      </div>

      {/* Right Side (Green Curved Box) */}
     
      <div className=" w-[45%] h-[600px] bg-green-300 rounded-l-[60px] z-0 mr-0">

      {/* Image Overlay */}
      <div className="absolute right-[25%] top-[50%] translate-y-[-50%] z-20 rounded-3xl overflow-hidden shadow-lg w-[600px]">
        <img
          src={"../../../public/img/logo.jpg"}
          alt="restaurant"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      </div>
    

    </div>
        </>
    )
}
export default WelcomeSection;




// Responshiv code

// const WelcomeSection = () => {
//   return (
//     <>
//       <div className="relative bg-white flex flex-col lg:flex-row items-center justify-between overflow-hidden max-w-7xl mx-auto px-4 py-12">
//         {/* Left Side */}
//         <div className="w-full lg:w-1/2 z-10 lg-8 md:mb-0 text-center lg:text-left">
//           <h1 className="text-3xl sm:text-4xl font-bold font-serif text-black mb-2">
//             <span className="border-b-4 border-green-900 inline-block pb-1">Welcome</span>
//           </h1>
//           <p className="text-black text-base sm:text-lg leading-relaxed mt-4">
//             Welcome to our family-owned Filipino cuisine restaurant, where we invite you to savor
//             the heartwarming flavors of the Philippines. Our commitment to quality and tradition
//             means that every meal is crafted with care, using time-honored recipes and the freshest
//             ingredients available. We invite you to join us in celebrating the warmth of family, the
//             richness of culture, and the delight of Filipino cuisine!
//           </p>
//           <button className="mt-6 px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:scale-105 duration-300">
//             Our History
//           </button>
//         </div>

//         {/* Right Side (Green Curved Box) */}
//         <div className="relative w-full lg:w-[45%] h-[250px] lg:h-[500px] bg-green-300 rounded-l-[40px] lg:rounded-l-[60px] flex items-center justify-center">
//           {/* Image Overlay */}
//           <div className="absolute top-1/2 transform -translate-y-1/2 right-1/2 lg:right-[20%] translate-x-1/2 lg:translate-x-0 z-20 w-[250px] md:w-[350px] lg:w-[500px] rounded-3xl overflow-hidden shadow-lg">
//             <img
//               src="../../../public/img/logo.jpg"
//               alt="restaurant"
//               className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WelcomeSection;
