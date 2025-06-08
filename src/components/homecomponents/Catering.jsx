import React from 'react'

const Catering = () => {
    const images = [
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Corporate" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Birthdays" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Weddings" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Socials" },
  ];
  return (
    <div className=' flex flex-col mx-85  mb-8 gap-5'>

        {/* hading */}
        <div className=''> 
            <h1 className='text-5xl italic text-gray-800 inline-block border-b-4 border-green-800 pb-2'>
                Catering Services
            </h1>
        </div>


        {/* discription */}
        <div>
            <p>Transform your events into unforgettable culinary experiences with our catering services! 
                <a href='#' className='text-orange-600'> Contact us</a> now for more information.</p>
        </div>

        {/* img div */}
         <div className="flex items-center justify-center p-4 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {images.map((img, index) => (
      <div key={index} className="text-center">
        {/* 👇 Added wrapper div to control zoom overflow */}
        <div className="w-72 h-58 mx-auto overflow-hidden rounded-lg shadow-md">
          <img
            src={img.src}
            alt={img.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-3xl"
            //  Removed mx-auto from here, now controlled by outer div
          />
        </div>
        <p className="mt-2 text-lg font-medium text-gray-800 mr-40">{img.name}</p>
      </div>
    ))}
  </div>
</div>


    </div>
  )
}

export default Catering

