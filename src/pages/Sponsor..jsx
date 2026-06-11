import React from 'react';

const Sponsor = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image Header */}
      <div className="relative">
        <div
          className="h-80 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/beautiful-flowering-hillside-with-colorful-rhodode.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 text-center flex items-center justify-center h-full">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-4">
                Our Partners
              </h1>
              <h2 className="text-xl lg:text-2xl font-light text-gray-300 tracking-wider">
                & Supporters
              </h2>
              <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 space-y-20 py-20">
        
        {/* Developed & Promoted By Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-orange-600 px-8 py-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                Developed & Promoted By
              </h2>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Municipality Logo */}
              <div className="flex-shrink-0">
                
                <div className="w-30 h-30 bg-gradient-to-br  flex items-center justify-center border-2 shadow-lg overflow-hidden">
                    <img 
                    src="/images/logo.jpg" 
                    alt="My Logo" 
                    className="w-full h-full object-contain p-2"
                    />
                </div>


              </div>

              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  MAPYA DUDHKOSHI RURAL MUNICIPALITY
                </h3>
                <p className="text-orange-400 font-medium mb-4 tracking-wide">Khastap, Solukhumbu, Nepal</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">📞</span>
                    <span>9852827333, 9860875856</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✉️</span>
                    <span className="break-all">info@mapyadudhkoshimun.gov.np</span>
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <span className="text-purple-400">🌐</span>
                    <span>www.dudhkoshimun.gov.np</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAAN Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-60 h-60 bg-gradient-to-br  flex items-center justify-center ">
                    <img 
                    src="/images/Taan-logo.png" 
                    alt="My Logo" 
                    className="w-full h-full object-contain p-2"
                    />
                </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg lg:w-2/3 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-green-400 font-medium text-sm uppercase tracking-wide">Partner Association</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              TREKKING AGENCIES ASSOCIATION OF NEPAL
            </h3>
            <p className="text-orange-400 font-medium mb-4 tracking-wide">Maligaon, Kathmandu, Nepal</p>
            
            <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <span>977-1-4540920, 4540921</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <span>info@taan.org.np</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🌐</span>
                <span>www.taan.org.np</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📘</span>
                <span>www.facebook.com/taan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Support Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-purple-600 px-8 py-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                Technical Support & Promotion
              </h2>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Logos Column */}
              <div className="flex lg:flex-col gap-4 flex-row justify-center lg:justify-start">
                <div className="w-20 h-20 bg-gradient-to-br  flex items-center justify-center ">
                    <img 
                    src="/images/NTV-logo.png" 
                    alt="My Logo" 
                    className="w-full h-full object-contain p-2"
                    />
                </div>
                <div className="w-20 h-20 bg-gradient-to-br  flex items-center justify-center border-2 shadow-lg overflow-hidden">
                    <img 
                    src="/images/undp-logo.png" 
                    alt="My Logo" 
                    className="w-full h-full object-contain p-2"
                    />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  NEPAL TOURISM BOARD
                </h3>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  UNDP/SUSTAINABLE TOURISM FOR LIVELIHOOD RECOVERY PROJECT
                </h4>
                <p className="text-orange-400 font-medium mb-4 tracking-wide">Bhrikutimandap, Kathmandu, Nepal</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">📞</span>
                    <span>977-1-4256909</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✉️</span>
                    <span>info@ntb.org.np</span>
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <span className="text-blue-400">🌐</span>
                    <span>ntb.gov.np</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Values Section */}
        <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Partnership for Sustainable Tourism
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏛️', title: 'Government Support', desc: 'Local municipality backing' },
              { icon: '🤝', title: 'Industry Partnership', desc: 'Trekking association collaboration' },
              { icon: '🌍', title: 'International Aid', desc: 'UN development programs' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;