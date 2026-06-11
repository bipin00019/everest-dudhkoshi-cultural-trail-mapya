import React from 'react';

const Homepage2 = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-gray-200 tracking-wide">
            About New Trail
          </h2>

          <p className="text-gray-300 leading-relaxed">
            A new trail, "Everest Dudhkoshi Cultural Trail" has been jointly explored and developed by 
            Mapya Dudhkoshi Rural Municipality (RM) and Trekking Agencies' Association of Nepal (TAAN), 
            with additional support from NTR/UNDP Sustainable Tourism for Livelihood Recovery Project (STLRP) 
            in the southern part of Solukhumbu district.
          </p>

          <p className="text-gray-300 leading-relaxed">
            The recently explored new trail not only serves as a short-days trekking destination for observing 
            the outstandingly beautiful forests, pasturelands, mountain range and peaks, including Mt. Everest, 
            and experiencing the rich culture and rituals of Khaling Rai and Sherpa, but also serves as a gateway 
            to Khumbu and Mera valley trek.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative flex items-center">
          <img 
            src="/images/himal.jpg"
            alt="Everest Mountain" 
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
          <div className="absolute bottom-4 left-4 text-orange-400 font-semibold text-lg">
            Trekking Sites
          </div>
        </div>

      </div>

    </div>
  );
};

export default Homepage2;
