import React from 'react';

export default function Homepage5() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Title Section */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-4">
          Tourist Services
        </h1>
        <h2 className="text-xl lg:text-2xl font-light text-gray-300 tracking-wider">
          & Cultural Experiences
        </h2>
        <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 space-y-20 pb-20">
       
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/temple.jpg"
              alt="Temple and cultural site"
              className="w-full h-80 object-cover rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
            />
          </div>
         
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg lg:w-1/2 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-purple-400 font-medium text-sm uppercase tracking-wide">Accommodation</span>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              As a newly explored cultural and eco-trail, visitors rely on basic accommodation offered by homestays and small lodges. Local Kha owners are gradually upgrading their traditional homes into tourist-ready accommodations.
            </p>
          </div>
        </div>

        {/* Section 2 - Reversed */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/sherpa.jpg"
              alt="Sherpa wearing traditional attire"
              className="w-full h-80 object-cover rounded-xl border border-orange-500/30 shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
            />
          </div>
         
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg lg:w-1/2 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-orange-400 font-medium text-sm uppercase tracking-wide">Professional Guides</span>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              Mobile communication and 4G internet are available in only a few villages. Professional trekking guides and agencies from Mapya Dudhkoshi RM offer expert services, mostly operating from Kathmandu.
            </p>
          </div>
        </div>

        {/* Featured Section - Cultural Dance */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/3">
              <img
                src="/images/culturaldance.jpg"
                alt="Colorful cultural dance performance"
                className="w-full h-96 object-cover rounded-xl border-2 border-orange-500/50 shadow-xl"
              />
            </div>
           
            <div className="lg:w-1/3 space-y-6">
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-orange-400 font-medium text-sm uppercase tracking-wide">Featured Experience</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Cultural Dance & Expression
                </h2>
              </div>
             
              <p className="text-gray-300 leading-relaxed">
                The cultural dance of the region is a vibrant expression of tradition and identity, often performed during festivals and village celebrations. It reflects the spiritual and communal values of the Himalayan people, connecting visitors to their centuries-old heritage through rhythm and movement.
              </p>
             
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                  Traditional
                </span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  Authentic
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Section - Cultural Heritage */}
        <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Complete Cultural Immersion
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>
         
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg leading-relaxed">
            <div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  Experience authentic cultural homestays, traditional costumes, and artistic practices. Witness local festivals, admire traditional craftsmanship, and enjoy organic food and beverages made by local communities.
                </p>
              </div>
            </div>
           
            <div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  Observe the Waas festival of the Khaling Rais, visit ancient Buddhist monasteries, and immerse yourself in the living cultural and spiritual traditions of the Himalayan foothills.
                </p>
              </div>
            </div>
          </div>
         
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['🏠 Homestays', '🎭 Festivals', '🏛️ Monasteries', '🍃 Organic Food'].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center border border-gray-600 hover:border-purple-500/50 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
