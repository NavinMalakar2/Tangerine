import React from 'react'

const Flavors = () => {
  return (
     <div className="relative bg-white  flex  items-center justify-between overflow-hidden   max-w-7xl  mr-0 mt-12 ">
      

      {/* left Side (Green Curved Box) */}
      <div className=" w-[40%] h-[600px] bg-orange-300 rounded-r-[60px] z-0 mr-30"> 

      {/* Image Overlay */}
      <div className="absolute right-[50%] top-[50%] translate-y-[-50%] z-20 rounded-3xl overflow-hidden shadow-lg w-[600px]">
        <img
          src={"../../../public/img/logo.jpg"}
          alt="restaurant"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      </div>

      {/* right Side */}
      <div className="w-1/4 z-10 mr-70">
        <h1 className="text-4xl font-bold font-serif text-black mb-2  ">
          <span className="border-b-4 border-green-900 inline-block pb-1">Filipino Flavors</span>
        </h1>
        <p className="text-black text-lg leading-relaxed mt-4">
          We take pride in crafting dishes that celebrate the vibrant and diverse culinary traditions of the Philippines. Our commitment to authenticity shines through in every bite, making each meal a journey through the heart of Filipino cuisine. Join us in savoring these time-honored flavors as we prepare to bring the essence of the Philippines to your table!
        </p>
        <button className="mt-6 px-5 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:scale-105 duration-300">
          Order Now
        </button>
      </div>
       
      
    </div>
  )
}

export default Flavors




