// import React from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';
// import homephoto from '/images/tent.jpg'; // Make sure the image is in src/assets/

// const Homepage1 = () => {
//   const handleContactClick = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${homephoto})` }}
//       >
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Hero Content */}
//         <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//             Everest Dudhkoshi
//             <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-300 mt-1 sm:mt-2">
//               Cultural Trail
//             </span>
//           </h1>
          
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
//             Discover the rich cultural heritage and breathtaking landscapes of the Everest region. 
//             Journey through ancient villages, meet local communities, and experience the 
//             spiritual heart of the Himalayas.
//           </p>

//           {/* Info Tags */}
//           <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300 mb-8 sm:mb-12">
//             <div className="flex items-center gap-1 sm:gap-2">
//               <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
//               <span>Everest Region</span>
//             </div>
//             <div className="flex items-center gap-1 sm:gap-2">
//               <span>•</span>
//               <span>Cultural Heritage</span>
//             </div>
//             <div className="flex items-center gap-1 sm:gap-2">
//               <span>•</span>
//               <span>Local Communities</span>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action Button */}
//         <div className="flex flex-col items-center gap-6">
//           <button
//             onClick={handleContactClick}
//             className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
//           >
//             <div className="flex items-center gap-3">
//               <Phone className="w-5 h-5" />
//               <span>Contact for Cultural Trail</span>
//             </div>
            
//             {/* Animated background effect */}
//             <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//           </button>

//           {/* Additional contact info */}
//           <div className="flex flex-col sm:flex-row gap-4 text-white text-sm opacity-80">
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>info@everesttrail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>+977-123-456-789</span>
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Homepage1;


import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import homephoto from '/images/tent.jpg'; 
import mountains from '/images/mountains.jpg';
import hills from '/images/Hills.jpg';
import himalayas from '/images/himalayas.jpg'

const Homepage1 = () => {
  // Array of background images - you can replace these with your actual image paths
  const backgroundImages = [
    homephoto, // Your original tent image
    mountains, // Add your second image here
    hills, // Add your third image here
    himalayas, // Add your fourth image here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [backgroundImages.length]);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Everest Dudhkoshi
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-300 mt-1 sm:mt-2">
              Cultural Trail
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-lg">
            Discover the rich cultural heritage and breathtaking landscapes of the Everest region. 
            Journey through ancient villages, meet local communities, and experience the 
            spiritual heart of the Himalayas.
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300 mb-8 sm:mb-12">
            <div className="flex items-center gap-1 sm:gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Everest Region</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span>•</span>
              <span>Cultural Heritage</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span>•</span>
              <span>Local Communities</span>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleContactClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>Contact for Cultural Trail</span>
            </div>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          {/* Additional contact info */}
          <div className="flex flex-col sm:flex-row gap-4 text-white text-sm opacity-90 drop-shadow-md">
            <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>info@everesttrail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <Phone className="w-4 h-4" />
              <span>+977-9852827333
              
              </span>
            </div>
          </div>
        </div>

        
      </div>

      {/* Progress bar for current slide */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-75 ease-linear"
          style={{ 
            width: `${((currentImageIndex + 1) / backgroundImages.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default Homepage1;
