import React from 'react';

const Homepage3 = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">

      {/* Title Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wide">
          Key Tourist Activities & Experiences
        </h1>
      </div>

      {/* Content Section with Image */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-stretch">

        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <p>
            The new trail offers a variety of tourist activities including hiking, trekking and wilderness walks, cultural tours, pilgrimage and spiritual experiences.
          </p>

          <p>
            Lying in the Dudhkoshi River basin, the Mapya Dudhkoshi Rural Municipality is believed to have been the ancestral place of Khaling Rai; Mapya and Dikpya being considered to be the ancestors.
          </p>

          <p>
            Other major ethnic settlements of the area include Sherpa, Magar, Tamang, Kshetri, Hill Brahman, Newar, Dalit etc. Authentic living culture, traditional costume, artistic and folkloric practices, local festivals/feasts, traditional artistic designs, skillful craftsmanship, traditional farming practices, locally produced organic food and beverages etc. can be experienced in the cultural homestays and rural settlements.
          </p>

          <p>
            Observing the Waas festival of Khaling Rais and Rai Bijuwa (Shaman) performances, visiting Rapchha Cultural Chindo Park, and Bhume Thans give visitors the deep insight of the Khaling Rai culture. Visiting the Himalayan Buddhist communities and age-old Buddhist monasteries such as Juve Purano Gompa, founded around 16th century is an added advantage for the visitors and pilgrims in the area.
          </p>

          <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition">
            Read More..
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <div className="h-full">
            <img
              src="/images/mnt.jpg"
              alt="Tourist activities in the region"
              className="h-full w-full object-cover rounded-xl shadow-lg border-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage3;
