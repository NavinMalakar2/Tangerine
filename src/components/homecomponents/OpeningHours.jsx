import React from 'react'


const openingHours = [
  { day: "Monday", status: "Closed" },
  { day: "Tuesday", status: "11AM - 9PM" },
  { day: "Wednesday", status: "11AM - 9PM" },
  { day: "Thursday", status: "11AM - 9PM" },
  { day: "Friday", status: "11AM - 9PM" },
  { day: "Saturday", status: "11AM - 9PM" },
  { day: "Sunday", status: "11AM - 9PM" },
];


const OpeningHours = () => {
  return (
    <>
        <div className="relative bg-white  flex items-center  justify-between overflow-hidden   max-w-7xl  mr-0 mt-12 mb-10">
      

      {/* left Side (Green Curved Box) */}
      <div className=" w-[40%] h-[600px] bg-orange-300 rounded-r-[60px] z-0 mr-30">
        {/* Image Overlay */}
      <div className="absolute right-[50%] top-[50%] translate-y-[-50%] z-20  overflow-hidden shadow-lg w-[600px]">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs93yGxdB9pS_lniOca2lN71kmb3ZsQTX4nQ&s"}
          alt="restaurant"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-4xl"
        />
      </div>
      </div>

      {/* right Side */}
      <div className="w-1/4 z-10 mr-70">
        <h1 className="text-4xl font-bold font-serif text-black mb-2  ">
          <span className="border-b-4 border-green-900 inline-block pb-1">Join Us Now</span>
        </h1>
        <p className="text-black text-lg leading-relaxed mt-4 font-semibold">
         Opening Hours
         </p>


         <div className=" max-w-md mx-auto">
    

      {openingHours.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 "
        >
          <span className="text-green-900 font-medium w-1/3">{item.day}</span>
          
          {/* Divider line */}
          <div className="flex-1 h-[1px] bg-gray-300 mx-4" />

          <span
            className={`text-sm ${
              item.status === "Closed" ? "text-black font-semibold" : "text-black font-bold"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>



        <button className="mt-6 px-5 py-2 bg-orange-400 text-white rounded-full font-semibold shadow hover:scale-105 duration-300">
          Order Now
        </button>
      </div>

      

    </div>
    </>
  )
}

export default OpeningHours