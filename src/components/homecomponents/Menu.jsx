import React from 'react'


const Menu = () => {
    const images = [
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Image One" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Image Two" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Image Three" },
    { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", name: "Image Four" },
  ];
  return (
    <>
        <div className='m-10 '>

            {/* our menu and btn */}
            <div className='flex items-center justify-between'>

                <div>
                    <p className='border-b-4 border-green-900 inline-block pb-1 text-4xl font-bold'>Our Menu</p>
                    <span></span>
                </div>

                    {/* btn */}
                <div>
                    <button className='px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:scale-105 duration-300'>
                        <a href='#'>View Menu</a>
                    </button>
                </div>

            </div>

            {/* dishes */}
          <div className="flex items-center justify-center p-4 mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {images.map((img, index) => (
      <div key={index} className="text-center">
        {/*  Added wrapper div to control zoom overflow */}
        <div className="w-72 h-58 mx-auto overflow-hidden rounded-lg shadow-md">
          <img
            src={img.src}
            alt={img.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            //  Removed mx-auto from here, now controlled by outer div
          />
        </div>
        <p className="mt-2 text-lg font-medium text-gray-800">{img.name}</p>
      </div>
    ))}
  </div>
</div>


        </div>
    </>
  )
}

export default Menu