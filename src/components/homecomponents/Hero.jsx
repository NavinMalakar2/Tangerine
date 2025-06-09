
const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-white space-y-6 px-4 text-center">
        {/* Company Name */}
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-memo italic text-white">
            Tangerine
          </h1>
        </div>

        {/* Tagline */}
        <div>
          <p className="text-sm sm:text-base md:text-lg tracking-wide uppercase">
            AUTHENTIC FAMILY STYLE FILIPINO CUISINE
          </p>
        </div>

        {/* Availability */}
        <div>
          <p className="text-xs sm:text-sm text-gray-300">
            Available for Takeout & Delivery
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Order Now
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
