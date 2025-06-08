import React from 'react'

const SplitContainer = () => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Upper 50% image background */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>

      {/* Lower 50% black background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>

      {/* Content box centered */}
      <div className="relative bg-white rounded-3xl p-10 max-w-md w-68 shadow-lg text-center z-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-4 border-orange-500 inline-block pb-2">
          Order Online
        </h2>
        <p className="text-gray-700 mb-6">
          Craving Tangerine? Order now and experience our amazing Filipino cuisine right at your doorstep.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Click to Order
        </button>
      </div>
    </div>

  )
}

export default SplitContainer