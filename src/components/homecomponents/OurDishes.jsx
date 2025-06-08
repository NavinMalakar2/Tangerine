import React from 'react'
import Masonry from "react-masonry-css";

const images = [
  { src: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", },
  { src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",  },
  { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",  },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",  },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",  },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",  },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

const OurDishes = () => {
  
  return (
    <>
        <div className='m-10 '>

            {/* our menu and btn */}
            <div className='flex items-center justify-between'>

                <div>
                    <p className='border-b-4 border-green-900 inline-block pb-1 text-4xl font-bold'>Our Dishes</p>
                    <span></span>
                </div>

                    {/* btn */}
                <div>
                    <button className='px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:scale-105 duration-300'>
                        <a href='#'>View Instragram</a>
                    </button>
                </div>

            </div>

            {/* dishes */}
                <div className="p-6 mt-10 max-w-6xl mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4"
      >
        {images.map((img, index) => (
          <div key={index} className="mb-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="mt-2 text-center text-lg font-medium text-gray-800">
              {img.name}
            </p>
          </div>
        ))}
      </Masonry>
    </div>


        </div>
    </>
  )
}

export default OurDishes