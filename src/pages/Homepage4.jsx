import React, { useState } from 'react';
import { ChevronRight, Mountain, Users, Clock, MapPin, Star, ArrowUp } from 'lucide-react';

const Homepage4 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const activities = [
    {
      id: 1,
      title: "Rock Climbing Sites",
      emoji: "🧗‍♂️",
      image: "/images/rockclimbing.jpg",
      description: "Challenge yourself on Nepal's most thrilling rock faces with breathtaking mountain views.",
      mainSites: ["Khastap", "Surimya/Sarima Maha Bhir"],
      potentialSites: ["Paadsha/Sundar", "Pyalyamku", "Panchpokhari waterfalls"],
      difficulty: "Advanced",
      duration: "4-8 hours",
      bestTime: "Oct-May",
      gradient: "from-red-600 to-orange-500"
    },
    {
      id: 2,
      title: "Honey Hunting",
      emoji: "🍯",
      image: "/images/madhoney.jpg",
      description: "Experience the ancient tradition of cliff honey hunting with local experts in pristine natural settings.",
      mainSites: ["Surimya/Sarima Bhir", "Jhyarlu Bhir", "Chhapu Bhir"],
      potentialSites: ["Leildham Kelde-Thanekhola Bhir", "Thotne Ghat Bhir", "Yaskom Bhir", "Pokhamdhi Bhir (Lemchi Kharka)"],
      difficulty: "Expert",
      duration: "6-10 hours",
      bestTime: "Mar-Jun",
      gradient: "from-amber-600 to-yellow-500"
    }
  ];

  const additionalActivities = [
    {
      title: "Cultural Dance Performances",
      emoji: "💃",
      description: "Immerse yourself in traditional Sherpa and local cultural performances",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Mountain Photography",
      emoji: "📸",
      description: "Capture stunning landscapes and wildlife in their natural habitat",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Traditional Craft Workshops",
      emoji: "🎨",
      description: "Learn ancient crafting techniques from local artisans",
      gradient: "from-green-600 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-64 lg:h-80 overflow-hidden">
        <img
          src="/images/culturaldance.jpg"
          alt="Adventure Activities"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-wider drop-shadow-lg">
                Adventure & Cultural
                <span className="block text-orange-400 text-3xl lg:text-5xl mt-2">
                  Experiences
                </span>
              </h1>
              <div className="flex justify-center gap-6 text-sm lg:text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  <span>Epic Heights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Authentic Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Activities */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 relative z-10">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            onMouseEnter={() => setHoveredCard(activity.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <img
                src={activity.image}
                alt={activity.title}
                className={`relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-700 transform transition-all duration-500 ${
                  hoveredCard === activity.id ? 'scale-105 border-orange-400 shadow-orange-500/25' : 'hover:scale-102'
                }`}
              />
              
              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-gray-600">
                <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                  <span className="text-2xl">{activity.emoji}</span>
                  <span>{activity.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className={`text-3xl lg:text-4xl font-bold font-serif bg-gradient-to-r ${activity.gradient} bg-clip-text text-transparent flex items-center gap-3`}>
                  {activity.title}
                  <span className="text-4xl animate-bounce">{activity.emoji}</span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Activity Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-orange-400/50 transition-colors">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold text-sm">Duration</span>
                  </div>
                  <p className="text-gray-300 text-sm">{activity.duration}</p>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-orange-400/50 transition-colors">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Mountain className="w-4 h-4" />
                    <span className="font-semibold text-sm">Best Time</span>
                  </div>
                  <p className="text-gray-300 text-sm">{activity.bestTime}</p>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-orange-400/50 transition-colors">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold text-sm">Level</span>
                  </div>
                  <p className="text-gray-300 text-sm">{activity.difficulty}</p>
                </div>
              </div>

              {/* Main Sites */}
              <div className="space-y-3">
                <h3 className="text-orange-400 font-bold text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Primary Locations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activity.mainSites.map((site, idx) => (
                    <span key={idx} className={`px-4 py-2 bg-gradient-to-r ${activity.gradient} rounded-full text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}>
                      {site}
                    </span>
                  ))}
                </div>
              </div>

              {/* Potential Sites */}
              <div className="space-y-3">
                <h3 className="text-gray-400 font-bold text-lg">Additional Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {activity.potentialSites.map((site, idx) => (
                    <span key={idx} className="px-3 py-2 bg-gray-700/70 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-orange-400 hover:text-orange-400 transition-colors duration-200">
                      {site}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Activities Section */}
        <div className="text-center space-y-12 pt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>{showMore ? 'Show Less' : 'Discover More Adventures'}</span>
            <ChevronRight className={`w-5 h-5 transform transition-transform duration-300 ${showMore ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>

          {/* Expandable Additional Activities */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 overflow-hidden ${
            showMore ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {additionalActivities.map((activity, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-400/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                  {activity.emoji}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 pt-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for Your Next <span className="text-orange-400">Adventure?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join us for unforgettable experiences that blend thrilling adventures with rich cultural heritage in the heart of the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Your Adventure
            </button>
            <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl">
              View All Activities
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Homepage4;