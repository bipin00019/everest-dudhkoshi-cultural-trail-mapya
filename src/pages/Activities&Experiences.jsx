

import React from "react";
import Canyoning from "../../public/images/canyoning.jpg";
import HoneyHunting from "../../public/images/honey_hunting.jpg";
import Cycling from "../../public/images/cycling.jpg";
import marathon from "../../public/images/marathon.JPG";
import RockClimbing from "../../public/images/rock_climbing.jpg";

const activities = [
  {
    id: "01",
    eyebrow: "Adventure",
    title: "Rock Climbing",
    image: RockClimbing,
    imageAlt: "Rock climbing at Khastap cliff face",
    body: "Important rock climbing sites include Khastap and Surimya/Sarima Maha Bhir — sheer cliff faces that challenge both beginner and experienced climbers against a backdrop of forested Himalayan hillsides.",
    tags: ["Khastap", "Surimya Maha Bhir", "All levels"],
  },
  {
    id: "02",
    eyebrow: "Water & Vertical",
    title: "Canyoning",
    image: Canyoning,
    imageAlt: "Canyoning through waterfalls in Solukhumbu",
    body: "The trail corridor is laced with powerful waterfalls whose gorges are ideal canyoning terrain. Descend through cascading chutes, natural water slides and narrow canyon slots carved by millennia of glacial melt.",
    tags: ["Waterfall descents", "Gorge traversal", "Seasonal"],
  },
  {
    id: "03",
    eyebrow: "Rare Craft",
    title: "Honey Hunting",
    image: HoneyHunting,
    imageAlt: "Traditional honey hunting on cliff face",
    body: "An ancient Himalayan practice still alive here. Potential sites include Surimya/Sarima Bhir, Jhyarlu Bhir, Chhapu Bhir, Leldham Kelde, Thanekhola Bhir, Thotne Ghat Bhir, Yaskom Bhir, and Pokhamdhi Bhir (Lemchi Kharka).",
    tags: ["Cliff harvests", "Traditional craft", "Lemchi Kharka"],
  },
  {
    id: "04",
    eyebrow: "Two Wheels",
    title: "Cycling",
    image: Cycling,
    imageAlt: "Cyclist on mountain trail with Himalayan backdrop",
    body: "Two cycling routes traverse the landscape. Route one links Silgudi Danda – Ratnange Danda – Kemje Danda – Ghumnemera – Kudham Camp – Yotelmya – Dilung – Khastap – Paasdha Jharna. Route two sweeps through Silgudi and Aran Danda – Solaaban – Deurali – Waku – Hill – Bumburi – Helku – Geku Kharka.",
    tags: ["2 mapped routes", "Mountain terrain", "Panorama riding"],
  },
  {
    id: "05",
    eyebrow: "Ultra Running",
    title: "Everest View Trail Marathon",
    image: marathon,
    imageAlt: "Runners on the Everest View Trail Marathon route",
    body: "A 47 km marathon route designed and successfully tested, linking Korku Stadium – Maha Bhir – Silgudi – Ghumnemera – Kudham – Yotelmya – Dilung – Khastap. The route passes through vast rhododendron forests, mixed dense forests, and alpine pastures with panoramic views of Mt. Everest and surrounding peaks.",
    tags: ["47 km route", "Rhododendron forest", "Mt. Everest views"],
  },
];

export default function ActivitiesAndExperiences() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');

        #activities {
          background: #080c11;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* ── Header ── */
        .act-header {
          width: 100%;
          background: linear-gradient(135deg, #0d1520 0%, #111c2e 50%, #080c11 100%);
          padding: clamp(72px, 12vw, 140px) clamp(24px, 6vw, 96px) clamp(48px, 8vw, 96px);
          position: relative;
          overflow: hidden;
        }

        .act-header::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .act-header-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: end;
        }

        .act-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #d4a843;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .act-eyebrow-line {
          display: block;
          width: 28px; height: 2px;
          background: #d4a843;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .act-header-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.06;
          color: #f0ece3;
          margin: 0 0 20px;
        }
        .act-header-title em {
          font-style: italic;
          color: #d4a843;
        }

        .act-header-rule {
          width: 56px; height: 2px;
          background: linear-gradient(to right, #d4a843, transparent);
          border: none;
          margin-bottom: 24px;
        }

        .act-header-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.88rem, 1.1vw, 0.97rem);
          font-weight: 300;
          color: rgba(240,236,227,0.65);
          line-height: 1.9;
          margin: 0;
        }
        .act-header-body strong {
          font-weight: 500;
          color: rgba(240,236,227,0.88);
        }

        /* right side stat grid */
        .act-header-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .act-stat-card {
          background: rgba(212,168,67,0.06);
          border: 1px solid rgba(212,168,67,0.18);
          border-radius: 12px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .act-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 900;
          color: #d4a843;
          line-height: 1;
        }

        .act-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: rgba(240,236,227,0.4);
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .act-stat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: rgba(240,236,227,0.5);
          line-height: 1.5;
          margin-top: 2px;
        }

        /* ── Activities list ── */
        .act-list {
          max-width: 1280px;
          margin: 0 auto;
          padding: clamp(48px, 8vw, 96px) clamp(24px, 6vw, 96px);
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .act-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: center;
          padding: clamp(48px, 7vw, 80px) 0;
          border-bottom: 1px solid rgba(212,168,67,0.1);
          position: relative;
        }
        .act-item:first-child {
          padding-top: 0;
        }
        .act-item:last-child {
          border-bottom: none;
        }

        /* alternate image left/right */
        .act-item:nth-child(even) .act-item-img-wrap {
          order: -1;
        }

        .act-item-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .act-item-img-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          border: 1.5px solid rgba(212,168,67,0.22);
          z-index: 2;
          pointer-events: none;
        }

        .act-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .act-item-img-wrap:hover .act-item-img {
          transform: scale(1.04);
        }

        .act-item-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,12,17,0.3) 0%, transparent 60%);
          z-index: 1;
          pointer-events: none;
        }

        /* id badge on image */
        .act-item-id {
          position: absolute;
          top: 16px; left: 16px;
          z-index: 3;
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 900;
          color: rgba(212,168,67,0.18);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* text side */
        .act-item-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .act-item-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: rgba(212,168,67,0.7);
          letter-spacing: 3.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .act-item-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          font-weight: 900;
          color: #f0ece3;
          line-height: 1.08;
          margin: 0 0 18px;
        }

        .act-item-rule {
          width: 40px; height: 1.5px;
          background: #d4a843;
          border: none;
          margin-bottom: 20px;
        }

        .act-item-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.87rem, 1.05vw, 0.96rem);
          font-weight: 300;
          color: rgba(240,236,227,0.62);
          line-height: 1.92;
          margin: 0 0 24px;
        }

        .act-item-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .act-item-tag {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: rgba(212,168,67,0.8);
          letter-spacing: 1.2px;
          text-transform: uppercase;
          background: rgba(212,168,67,0.07);
          border: 1px solid rgba(212,168,67,0.2);
          border-radius: 4px;
          padding: 5px 10px;
        }

        /* ── Cultural intro strip ── */
        .act-culture-strip {
          background: #0a0e15;
          border-top: 1px solid rgba(212,168,67,0.1);
          border-bottom: 1px solid rgba(212,168,67,0.1);
          padding: clamp(40px, 6vw, 72px) clamp(24px, 6vw, 96px);
        }

        .act-culture-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: start;
        }

        .act-culture-label-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .act-culture-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: rgba(212,168,67,0.6);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .act-culture-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 2vw, 1.8rem);
          font-weight: 700;
          color: #f0ece3;
          line-height: 1.2;
        }

        .act-culture-divider {
          width: 32px; height: 1.5px;
          background: #d4a843;
          border: none;
        }

        .act-culture-body-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 40px;
        }

        .act-culture-para {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(240,236,227,0.55);
          line-height: 1.8;
          margin: 0;
        }
        .act-culture-para strong {
          font-weight: 500;
          color: rgba(240,236,227,0.75);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .act-header-inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .act-header-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .act-item {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .act-item:nth-child(even) .act-item-img-wrap {
            order: 0;
          }
          .act-culture-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .act-culture-body-col {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 580px) {
          .act-header {
            padding: 56px 20px 48px;
          }
          .act-list {
            padding: 36px 20px;
          }
          .act-culture-strip {
            padding: 36px 20px;
          }
          .act-header-stats {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .act-item-img-wrap {
            aspect-ratio: 3 / 2;
          }
        }
      `}</style>

      <section id="activities">

        {/* ── Header ── */}
        <div className="act-header">
          <div className="act-header-inner">
            <div>
              <span className="act-eyebrow">
                <span className="act-eyebrow-line" />
                What To Do Here
              </span>
              <h2 className="act-header-title">
                Activities &amp;<br />
                <em>Experiences</em>
              </h2>
              <hr className="act-header-rule" />
              <p className="act-header-body">
                The new trail offers a variety of tourist activities ranging from
                <strong> hiking, trekking and wilderness walks</strong> to{" "}
                <strong>cultural tours, pilgrimage and spiritual activities</strong>.
                Authentic living culture, traditional costume, artistic and folkloric
                practices, local festivals, skillful craftsmanship, traditional farming
                practices, and locally produced organic food can all be experienced in
                the cultural homestays and rural settlements.
              </p>
            </div>
            <div className="act-header-stats">
              <div className="act-stat-card">
                <span className="act-stat-num">29+</span>
                <span className="act-stat-label">Himalayan peaks</span>
                <span className="act-stat-desc">Visible from key viewpoints including Mt. Everest</span>
              </div>
              <div className="act-stat-card">
                <span className="act-stat-num">47km</span>
                <span className="act-stat-label">Marathon route</span>
                <span className="act-stat-desc">Everest View Trail Marathon through rhododendron forests</span>
              </div>
              <div className="act-stat-card">
                <span className="act-stat-num">100+</span>
                <span className="act-stat-label">Bird species</span>
                <span className="act-stat-desc">Including rare and endangered species for birdlife enthusiasts</span>
              </div>
              <div className="act-stat-card">
                <span className="act-stat-num">16th c.</span>
                <span className="act-stat-label">Juve Gompa</span>
                <span className="act-stat-desc">Ancient Buddhist monastery open to visitors and pilgrims</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cultural strip ── */}
        <div className="act-culture-strip">
          <div className="act-culture-inner">
            <div className="act-culture-label-col">
              <span className="act-culture-eyebrow">Living Heritage</span>
              <h3 className="act-culture-title">Culture &amp; Community</h3>
              <hr className="act-culture-divider" />
            </div>
            <div className="act-culture-body-col">
              <p className="act-culture-para">
                Lying in the Dudhkoshi River basin, the area is believed to be the ancestral home of
                <strong> Khaling Rai</strong> — Mapya and Dikpya being considered the ancestors. Other major
                ethnic settlements include Sherpa, Magar, Tamang, Kshetri, Hill Brahman, Newar, and Dalit communities.
              </p>
              <p className="act-culture-para">
                Observing the <strong>Waas festival</strong> of Khaling Rais and Rai Bijuwa (Shaman) performances,
                visiting <strong>Rapchha Cultural Chindo Park</strong> and Bhume Thans give visitors deep insight
                into Khaling Rai culture. The 16th-century <strong>Juve Purano Gompa</strong> is a spiritual landmark for Buddhist pilgrims.
              </p>
            </div>
          </div>
        </div>

        {/* ── Activity cards ── */}
        <div className="act-list">
          {activities.map((act) => (
            <div className="act-item" key={act.id}>
              <div className="act-item-img-wrap">
                <img
                  src={act.image}
                  alt={act.imageAlt}
                  className="act-item-img"
                />
                <div className="act-item-img-overlay" />
                <span className="act-item-id">{act.id}</span>
              </div>

              <div className="act-item-text">
                <p className="act-item-eyebrow">{act.eyebrow}</p>
                <h3 className="act-item-title">{act.title}</h3>
                <hr className="act-item-rule" />
                <p className="act-item-body">{act.body}</p>
                <div className="act-item-tags">
                  {act.tags.map((tag) => (
                    <span className="act-item-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}