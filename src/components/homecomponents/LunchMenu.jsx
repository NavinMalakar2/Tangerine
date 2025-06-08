import React from 'react'

const LunchMenu = () => {
  return (
     <div className="bg-gray-200 p-8 m-5 rounded-4xl">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">DAILY LUNCH SPECIALS!</h2>

      {/* Paragraph */}
      <p className="mb-4 text-gray-700">
        Embark on a flavorful journey during your lunch break with our DAILY lunch specials! From 11AM - 3PM.
        <br />
        <br />
        Our lunch specials include:
      </p>

      {/* Unordered List */}
      <ul className="list-disc list-inside mb-6 text-gray-800 space-y-1">
        <li>Chicken Adobo</li>
        <li>Pork Sinigang</li>
        <li>Pancit Canton</li>
        <li>Beef Kare-Kare</li>
        <li>Bangusilog</li>
      </ul>

      {/* Button */}
      <button className="bg-black text-white px-6 py-2 rounded-4xl hover:bg-gray-800 transition mb-8">
        View Menu
      </button>

      {/* Images section */}
      <div className="flex gap-5 h-[480px]">
        {/* Left side - 1 image (full height) */}
        {/* <div className="flex-1 overflow-hidden rounded-2xl border relative">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
            alt="Lunch Special 1"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div> */}

<div className="flex-1 relative   overflow-visible ">
  <img
    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
    alt="Lunch Special 1"
    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-4xl"
  />

  {/* Sun-like Price Circle */}
  <div
    className="
      absolute
      -top-10       /* Raise circle above image */
      right-6       /* Give margin from right edge */
      bg-orange-500
      text-white
      text-sm
      font-semibold
      rounded-full
      w-16
      h-16
      flex
      items-center
      justify-center
      border-4
      border-orange-300
      shadow-lg
      ring-4
      ring-orange-400
      ring-opacity-50
      cursor-default
      sun-price-circle
    "
  >
    $12.99
  </div>
</div>


         
        

        {/* Right side - 2 images stacked vertically, each half height */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex-1 overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
              alt="Lunch Special 2"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-4xl border"
            />
          </div>
          <div className="flex-1 overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
              alt="Lunch Special 3"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LunchMenu;