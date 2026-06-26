// import { useState } from "react";

// const itineraries = [
//   {
//     id: 1,
//     title: "Itinerary 1",
//     duration: "6 Days",
//     tag: "Short Cultural Trek",
//     description: "A compact introduction to Lower Solukhumbu — culture, viewpoints, and waterfalls.",
//     days: [
//       { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and journey to Silguri, your gateway to the Dudhkoshi trail." },
//       { day: 2, title: "Silguri to Kudham Mid Camp", desc: "Trek via Ghumne Mera to reach Kudham Mid Camp, your overnight stop." },
//       { day: 3, title: "Kudham View Point → Yotelmya", desc: "Morning visit to the Kudham View Point, then descend to Yotelmya." },
//       { day: 4, title: "Yotelmya → Rappchha → Khastap", desc: "Wind through Rappchha before arriving at Khastap for the night." },
//       { day: 5, title: "Bhumesthan · Paasdha · Mahabhir → Silguri", desc: "Drive through Bhumesthan, visit Sundar Jharana waterfall and Mahabhir, return to Silguri or Salleri." },
//       { day: 6, title: "Drive to Kathmandu", desc: "Return journey to Kathmandu, carrying memories of the Solukhumbu hills." },
//     ],
//   },
//   {
//     id: 2,
//     title: "Itinerary 2",
//     duration: "8 Days",
//     tag: "Cultural Trail Explorer",
//     description: "A full traverse of the Dudhkoshi cultural trail, from ancient ridges to sacred temples.",
//     days: [
//       { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and travel to Silguri." },
//       { day: 2, title: "Silguri to Ghumne Mera", desc: "Trek to Ghumne Mera via Ratnangge." },
//       { day: 3, title: "Ghumne Mera → Kudham → Yotelmya → Khastap", desc: "Visit Kudham View Point then push on to Yotelmya and overnight at Khastap, Damku, or Thul Dungga." },
//       { day: 4, title: "Khastap/Damku → Juving via Andheri", desc: "Trek the Andheri route descending to Juving." },
//       { day: 5, title: "Juving → Solaban → Jaleswori Mandir → Deurali", desc: "Cross the hill and visit the sacred Jaleswori Mandir before reaching Deurali." },
//       { day: 6, title: "Deurali → Waku → Kanku → Bhumesthan → Losku", desc: "A long valley walk linking Waku, Kanku and Bhumesthan, ending at Losku." },
//       { day: 7, title: "Losku → Paasdha → Mahabhir → Silguri", desc: "Visit Sundar Jharana waterfall and Mahabhir Rock Climbing sport before returning to Silguri." },
//       { day: 8, title: "Silguri to Kathmandu", desc: "Drive back to Kathmandu." },
//     ],
//   },
//   {
//     id: 3,
//     title: "Itinerary 3",
//     duration: "8 Days",
//     tag: "Ridge & Valley Route",
//     description: "An alternate 8-day loop emphasising high ridges, Sherpa villages and river valleys.",
//     days: [
//       { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and travel to Silguri." },
//       { day: 2, title: "Silguri to Ghumne Mera", desc: "Trek to Ghumne Mera via Ratnangge." },
//       { day: 3, title: "Ghumne Mera → Yotelmya · Kudham View Point", desc: "Pause at Kudham View Point before arriving at Yotelmya." },
//       { day: 4, title: "Yotelmya → Juving → Bumburi", desc: "Descend through Juving and on to Bumburi." },
//       { day: 5, title: "Bumburi → Hill → Solaban", desc: "Climb to the hill above Bumburi and settle into Solaban." },
//       { day: 6, title: "Solaban → Deurali → Waku", desc: "Pass through Deurali and walk the gentle path to Waku." },
//       { day: 7, title: "Waku → Paasdha → Mahabhir → Silguri", desc: "Visit Sundar Jharana waterfall and Mahabhir Rock Climbing sport, then return to Silguri." },
//       { day: 8, title: "Drive to Kathmandu", desc: "Return to Kathmandu." },
//     ],
//   },
//   {
//     id: 4,
//     title: "Itinerary 4",
//     duration: "14 Days",
//     tag: "Mera Peak Expedition",
//     description: "The classic Mera Peak climb via the Dudhkoshi approach — summit at 6,476 m.",
//     days: [
//       { day: 1, title: "Kathmandu → Kaya Khet → Waku", desc: "Fly or drive to Kaya Khet and make your way to Waku." },
//       { day: 2, title: "Waku → Solaban via Deurali · Jaleswori Mandir", desc: "Trek to Solaban via the sacred Jaleswori Mandir and Deurali pass." },
//       { day: 3, title: "Solaban → Sibuje", desc: "Descend through rhododendron forest to Sibuje." },
//       { day: 4, title: "Sibuje → Chhatra Khola", desc: "Follow the river valley to Chhatra Khola." },
//       { day: 5, title: "Chhatra Khola → Kothe", desc: "Trek along the Hinku River to Kothe." },
//       { day: 6, title: "Kothe → Thangnak", desc: "Climb higher into the Hinku Valley, reaching Thangnak at ~4,350 m." },
//       { day: 7, title: "Thangnak → Khare", desc: "Ascend to Khare (5,045 m), base for Mera Peak." },
//       { day: 8, title: "Acclimatisation at Khare", desc: "Rest, explore, and prepare equipment for the summit push." },
//       { day: 9, title: "Khare → High Camp", desc: "Move to High Camp (~5,780 m) on the glacier." },
//       { day: 10, title: "Mera Summit → Back to Khare", desc: "Pre-dawn start for the summit (6,476 m). Descend to Khare for the night." },
//       { day: 11, title: "Khare → Taktho", desc: "Begin the return journey down to Taktho." },
//       { day: 12, title: "Taktho → Ramailo Dada", desc: "Trek to Ramailo Dada, a scenic ridge camp." },
//       { day: 13, title: "Ramailo Dada → Sibuje → Silguri", desc: "Final trekking day back to Sibuje, then drive to Silguri." },
//       { day: 14, title: "Silguri to Kathmandu", desc: "Drive back to Kathmandu." },
//     ],
//   },
//   {
//     id: 5,
//     title: "Itinerary 5",
//     duration: "13 Days",
//     tag: "Mera Peak — Fly-In Option",
//     description: "A faster Mera Peak route starting with a flight to Salleri, cutting two days of road travel.",
//     days: [
//       { day: 1, title: "Kathmandu → Salleri / Silguri", desc: "Fly to Salleri or drive to Silguri." },
//       { day: 2, title: "Drive to Sibuje", desc: "Drive to the trailhead at Sibuje." },
//       { day: 3, title: "Sibuje → Chhatra Khola", desc: "Trek into the Hinku Valley to Chhatra Khola." },
//       { day: 4, title: "Chhatra Khola → Kothe", desc: "Follow the Hinku River upstream to Kothe." },
//       { day: 5, title: "Kothe → Thangnak", desc: "Ascend to Thangnak (~4,350 m)." },
//       { day: 6, title: "Thangnak → Khare", desc: "Climb to Khare (5,045 m), base for Mera Peak." },
//       { day: 7, title: "Acclimatisation at Khare", desc: "Rest day — short hikes nearby to adjust to altitude." },
//       { day: 8, title: "Khare → High Camp", desc: "Move to High Camp on the glacier (~5,780 m)." },
//       { day: 9, title: "Mera Summit → Back to Khare", desc: "Summit push at dawn (6,476 m). Return to Khare." },
//       { day: 10, title: "Khare → Taktho", desc: "Descend to Taktho." },
//       { day: 11, title: "Taktho → Ramailo Dada", desc: "Trek to Ramailo Dada ridge camp." },
//       { day: 12, title: "Ramailo Dada → Sibuje → Silguri", desc: "Last trekking day — drive to Silguri." },
//       { day: 13, title: "Silguri to Kathmandu", desc: "Return to Kathmandu." },
//     ],
//   },
// ];

// const facilities = [
//   {
//     icon: "🏕️",
//     title: "Accommodation",
//     desc: "Homestays and small lodges offer basic but warm facilities. Local Kharka owners are upgrading traditional Goths (temporary huts) as trekking accommodation. Tented camp is required in a few remote locations.",
//   },
//   {
//     icon: "📶",
//     title: "Connectivity",
//     desc: "Mobile communication and 4G internet services are available throughout the trail. WiFi is available in select villages.",
//   },
//   {
//     icon: "🧭",
//     title: "Guides & Agencies",
//     desc: "A number of highly professional trekking agencies and guides from Mapya Dudhkoshi RM offer full trekking and guiding services, bookable from Kathmandu.",
//   },
// ];

// export default function TrekkingItineraries() {
//   const [activeItinerary, setActiveItinerary] = useState(0);
//   const [expandedDays, setExpandedDays] = useState({});

//   const current = itineraries[activeItinerary];

//   function toggleDay(day) {
//     setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;700&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         #trekking-itineraries {
//           background: #080c11;
//           color: #f0ece3;
//           font-family: 'Inter', sans-serif;
//           min-height: 100vh;
//         }

//         /* ── PAGE HEADER ── */
//         .ti-header {
//           position: relative;
//           padding: clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px) clamp(48px, 8vh, 80px);
//           border-bottom: 1px solid rgba(212,168,67,0.15);
//           overflow: hidden;
//         }
//         .ti-header::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: radial-gradient(ellipse 80% 60% at 10% 50%, rgba(212,168,67,0.06) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .ti-header-eyebrow {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           color: #d4a843;
//           margin-bottom: 18px;
//         }
//         .ti-header h1 {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(2.2rem, 5vw, 4.2rem);
//           font-weight: 900;
//           line-height: 1.05;
//           max-width: 700px;
//           margin-bottom: 20px;
//         }
//         .ti-header-sub {
//           font-size: clamp(0.85rem, 1.4vw, 1rem);
//           font-weight: 300;
//           color: rgba(240,236,227,0.65);
//           max-width: 520px;
//           line-height: 1.75;
//         }
//         .ti-header-accent {
//           position: absolute;
//           right: clamp(24px, 6vw, 96px);
//           top: 50%;
//           transform: translateY(-50%);
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(80px, 14vw, 160px);
//           font-weight: 900;
//           color: rgba(212,168,67,0.04);
//           pointer-events: none;
//           user-select: none;
//           line-height: 1;
//         }

//         /* ── LAYOUT ── */
//         .ti-body {
//           display: grid;
//           grid-template-columns: 280px 1fr;
//           min-height: 70vh;
//         }

//         /* ── SIDEBAR ── */
//         .ti-sidebar {
//           border-right: 1px solid rgba(212,168,67,0.12);
//           padding: 40px 0;
//           position: sticky;
//           top: 0;
//           height: fit-content;
//         }
//         .ti-sidebar-label {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: rgba(240,236,227,0.35);
//           padding: 0 28px;
//           margin-bottom: 20px;
//         }
//         .ti-sidebar-btn {
//           display: block;
//           width: 100%;
//           text-align: left;
//           background: none;
//           border: none;
//           padding: 16px 28px;
//           cursor: pointer;
//           position: relative;
//           transition: background 0.2s;
//           border-left: 2px solid transparent;
//         }
//         .ti-sidebar-btn:hover {
//           background: rgba(212,168,67,0.04);
//         }
//         .ti-sidebar-btn.active {
//           border-left-color: #d4a843;
//           background: rgba(212,168,67,0.06);
//         }
//         .ti-sidebar-btn-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 1rem;
//           font-weight: 700;
//           color: #f0ece3;
//           display: block;
//           margin-bottom: 4px;
//           transition: color 0.2s;
//         }
//         .ti-sidebar-btn.active .ti-sidebar-btn-title { color: #d4a843; }
//         .ti-sidebar-btn-meta {
//           font-size: 11px;
//           font-weight: 400;
//           color: rgba(240,236,227,0.4);
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .ti-sidebar-btn-tag {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           color: rgba(212,168,67,0.6);
//           background: rgba(212,168,67,0.08);
//           padding: 2px 7px;
//           border-radius: 2px;
//         }

//         /* ── MAIN PANEL ── */
//         .ti-main {
//           padding: clamp(32px, 5vw, 64px) clamp(24px, 5vw, 72px);
//         }
//         .ti-itinerary-header {
//           margin-bottom: 40px;
//           padding-bottom: 28px;
//           border-bottom: 1px solid rgba(212,168,67,0.1);
//         }
//         .ti-itinerary-header h2 {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(1.6rem, 3vw, 2.4rem);
//           font-weight: 900;
//           line-height: 1.1;
//           margin-bottom: 10px;
//         }
//         .ti-itinerary-desc {
//           font-size: 0.9rem;
//           font-weight: 300;
//           color: rgba(240,236,227,0.6);
//           line-height: 1.7;
//           max-width: 520px;
//         }
//         .ti-pills {
//           display: flex;
//           gap: 10px;
//           margin-top: 16px;
//           flex-wrap: wrap;
//         }
//         .ti-pill {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           padding: 5px 12px;
//           border-radius: 2px;
//         }
//         .ti-pill-gold {
//           background: rgba(212,168,67,0.12);
//           color: #d4a843;
//           border: 1px solid rgba(212,168,67,0.25);
//         }
//         .ti-pill-dim {
//           background: rgba(255,255,255,0.05);
//           color: rgba(240,236,227,0.45);
//           border: 1px solid rgba(255,255,255,0.08);
//         }

//         /* ── DAY ACCORDION ── */
//         .ti-days {
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }
//         .ti-day {
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//         }
//         .ti-day-trigger {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           width: 100%;
//           background: none;
//           border: none;
//           padding: 18px 0;
//           cursor: pointer;
//           text-align: left;
//           transition: background 0.18s;
//         }
//         .ti-day-trigger:hover { background: rgba(212,168,67,0.03); }
//         .ti-day-num {
//           font-family: 'Playfair Display', serif;
//           font-size: 1rem;
//           font-weight: 700;
//           color: #d4a843;
//           min-width: 44px;
//           text-align: right;
//           opacity: 0.65;
//           flex-shrink: 0;
//         }
//         .ti-day-line {
//           width: 1px;
//           height: 24px;
//           background: rgba(212,168,67,0.25);
//           flex-shrink: 0;
//         }
//         .ti-day-title {
//           font-family: 'Inter', sans-serif;
//           font-size: 0.92rem;
//           font-weight: 500;
//           color: #f0ece3;
//           flex: 1;
//         }
//         .ti-day-chevron {
//           width: 16px;
//           height: 16px;
//           color: rgba(212,168,67,0.45);
//           transition: transform 0.25s;
//           flex-shrink: 0;
//         }
//         .ti-day-chevron.open { transform: rotate(180deg); }
//         .ti-day-body {
//           overflow: hidden;
//           max-height: 0;
//           transition: max-height 0.35s ease, opacity 0.3s ease;
//           opacity: 0;
//           padding-left: 62px;
//         }
//         .ti-day-body.open {
//           max-height: 200px;
//           opacity: 1;
//           padding-bottom: 16px;
//         }
//         .ti-day-body p {
//           font-size: 0.85rem;
//           font-weight: 300;
//           color: rgba(240,236,227,0.55);
//           line-height: 1.75;
//           max-width: 520px;
//         }

//         /* ── FACILITIES ── */
//         .ti-facilities {
//           background: rgba(212,168,67,0.03);
//           border-top: 1px solid rgba(212,168,67,0.12);
//           padding: clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px);
//         }
//         .ti-facilities-eyebrow {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           color: #d4a843;
//           margin-bottom: 14px;
//         }
//         .ti-facilities h2 {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(1.6rem, 3vw, 2.4rem);
//           font-weight: 900;
//           margin-bottom: 48px;
//           max-width: 500px;
//           line-height: 1.12;
//         }
//         .ti-fac-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//           gap: 32px;
//         }
//         .ti-fac-card {
//           border: 1px solid rgba(212,168,67,0.12);
//           border-radius: 6px;
//           padding: 28px 24px;
//           background: rgba(255,255,255,0.02);
//           transition: border-color 0.25s, background 0.25s;
//         }
//         .ti-fac-card:hover {
//           border-color: rgba(212,168,67,0.3);
//           background: rgba(212,168,67,0.04);
//         }
//         .ti-fac-icon {
//           font-size: 1.6rem;
//           margin-bottom: 14px;
//           display: block;
//         }
//         .ti-fac-card h3 {
//           font-family: 'Playfair Display', serif;
//           font-size: 1.1rem;
//           font-weight: 700;
//           margin-bottom: 10px;
//           color: #f0ece3;
//         }
//         .ti-fac-card p {
//           font-size: 0.83rem;
//           font-weight: 300;
//           color: rgba(240,236,227,0.55);
//           line-height: 1.75;
//         }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 768px) {
//           .ti-body { grid-template-columns: 1fr; }
//           .ti-sidebar {
//             position: static;
//             border-right: none;
//             border-bottom: 1px solid rgba(212,168,67,0.12);
//             padding: 24px 0;
//             display: flex;
//             overflow-x: auto;
//             gap: 0;
//           }
//           .ti-sidebar-label { display: none; }
//           .ti-sidebar-btn {
//             flex-shrink: 0;
//             padding: 12px 20px;
//             border-left: none;
//             border-bottom: 2px solid transparent;
//           }
//           .ti-sidebar-btn.active { border-bottom-color: #d4a843; border-left: none; }
//           .ti-sidebar-btn-title { font-size: 0.88rem; }
//           .ti-header-accent { display: none; }
//         }
//         @media (max-width: 480px) {
//           .ti-main { padding: 28px 20px; }
//           .ti-facilities { padding: 40px 20px; }
//           .ti-day-body { padding-left: 38px; }
//         }
//       `}</style>

//       <div id="trekking-itineraries">

//         {/* ── Header ── */}
//         <header className="ti-header">
//           <p className="ti-header-eyebrow">Everest Dudhkoshi Cultural Trail</p>
//           <h1>Trekking<br />Itineraries</h1>
//           <p className="ti-header-sub">
//             From 6-day cultural immersions to 14-day Mera Peak expeditions — choose the journey that calls to you.
//           </p>
//           <span className="ti-header-accent" aria-hidden="true">Trek</span>
//         </header>

//         {/* ── Body: Sidebar + Main ── */}
//         <div className="ti-body">

//           {/* Sidebar */}
//           <nav className="ti-sidebar" aria-label="Itinerary selection">
//             <p className="ti-sidebar-label">Choose Route</p>
//             {itineraries.map((itin, i) => (
//               <button
//                 key={itin.id}
//                 className={`ti-sidebar-btn ${i === activeItinerary ? "active" : ""}`}
//                 onClick={() => { setActiveItinerary(i); setExpandedDays({}); }}
//               >
//                 <span className="ti-sidebar-btn-title">{itin.title}</span>
//                 <span className="ti-sidebar-btn-meta">
//                   {itin.duration}
//                   <span className="ti-sidebar-btn-tag">{itin.tag}</span>
//                 </span>
//               </button>
//             ))}
//           </nav>

//           {/* Main panel */}
//           <main className="ti-main">
//             <div className="ti-itinerary-header">
//               <h2>{current.title}: {current.tag}</h2>
//               <p className="ti-itinerary-desc">{current.description}</p>
//               <div className="ti-pills">
//                 <span className="ti-pill ti-pill-gold">{current.duration}</span>
//                 <span className="ti-pill ti-pill-dim">{current.days.length} days</span>
//                 <span className="ti-pill ti-pill-dim">Lower Solukhumbu · Nepal</span>
//               </div>
//             </div>

//             <div className="ti-days">
//               {current.days.map((d) => {
//                 const isOpen = !!expandedDays[d.day];
//                 return (
//                   <div className="ti-day" key={d.day}>
//                     <button
//                       className="ti-day-trigger"
//                       onClick={() => toggleDay(d.day)}
//                       aria-expanded={isOpen}
//                     >
//                       <span className="ti-day-num">Day {d.day}</span>
//                       <span className="ti-day-line" aria-hidden="true" />
//                       <span className="ti-day-title">{d.title}</span>
//                       <svg
//                         className={`ti-day-chevron ${isOpen ? "open" : ""}`}
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         aria-hidden="true"
//                       >
//                         <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </button>
//                     <div className={`ti-day-body ${isOpen ? "open" : ""}`}>
//                       <p>{d.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </main>
//         </div>

//         {/* ── Facilities ── */}
//         <section className="ti-facilities">
//           <p className="ti-facilities-eyebrow">On the Trail</p>
//           <h2>Tourist Services<br />&amp; Facilities</h2>
//           <div className="ti-fac-grid">
//             {facilities.map((f) => (
//               <div className="ti-fac-card" key={f.title}>
//                 <span className="ti-fac-icon">{f.icon}</span>
//                 <h3>{f.title}</h3>
//                 <p>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </>
//   );
// }

import { useState } from "react";

const itineraries = [
  {
    id: 1,
    title: "Itinerary 1",
    duration: "6 Days",
    tag: "Short Cultural Trek",
    description: "A compact introduction to Lower Solukhumbu — culture, viewpoints, and waterfalls.",
    days: [
      { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and journey to Silguri, your gateway to the Dudhkoshi trail." },
      { day: 2, title: "Silguri → Kudham Mid Camp via Ghumne Mera", desc: "Trek via Ghumne Mera to reach Kudham Mid Camp, your overnight stop." },
      { day: 3, title: "Kudham View Point → Yotelmya", desc: "Morning visit to the Kudham View Point, then descend to Yotelmya." },
      { day: 4, title: "Yotelmya → Rappchha → Khastap", desc: "Wind through Rappchha before arriving at Khastap for the night." },
      { day: 5, title: "Bhumesthan · Paasdha (Sundar Jharana) · Mahabhir → Silguri", desc: "Drive through Bhumesthan, visit the Sundar Jharana waterfall and Mahabhir, then return to Silguri or Salleri." },
      { day: 6, title: "Drive to Kathmandu", desc: "Return journey to Kathmandu, carrying memories of the Solukhumbu hills." },
    ],
  },
  {
    id: 2,
    title: "Itinerary 2",
    duration: "8 Days",
    tag: "Cultural Trail Explorer",
    description: "A full traverse of the Dudhkoshi cultural trail, from ancient ridges to sacred temples.",
    days: [
      { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and travel to Silguri." },
      { day: 2, title: "Silguri → Ghumne Mera via Ratnangge", desc: "Trek to Ghumne Mera via Ratnangge." },
      { day: 3, title: "Ghumne Mera → Kudham View Point → Yotelmya → Khastap", desc: "Visit Kudham View Point then push on to Yotelmya and overnight at Khastap, Damku, or Thul Dungga." },
      { day: 4, title: "Khastap/Damku → Juving via Andheri", desc: "Trek the Andheri route descending to Juving." },
      { day: 5, title: "Juving → Hill → Solaban → Jaleswori Mandir → Deurali", desc: "Cross the hill, visit the sacred Jaleswori Mandir, and reach Deurali." },
      { day: 6, title: "Deurali → Waku → Kanku → Bhumesthan → Losku", desc: "A long valley walk linking Waku, Kanku and Bhumesthan, ending at Losku." },
      { day: 7, title: "Losku → Paasdha (Sundar Jharana) → Mahabhir → Silguri", desc: "Visit Sundar Jharana waterfall and Mahabhir Rock Climbing sport before returning to Silguri." },
      { day: 8, title: "Silguri to Kathmandu", desc: "Drive back to Kathmandu." },
    ],
  },
  {
    id: 3,
    title: "Itinerary 3",
    duration: "8 Days",
    tag: "Ridge & Valley Route",
    description: "An alternate 8-day loop emphasising high ridges, Sherpa villages and river valleys.",
    days: [
      { day: 1, title: "Kathmandu to Silguri", desc: "Depart Kathmandu and travel to Silguri." },
      { day: 2, title: "Silguri → Ghumne Mera via Ratnangge", desc: "Trek to Ghumne Mera via Ratnangge." },
      { day: 3, title: "Ghumne Mera → Yotelmya · Kudham View Point", desc: "Pause at Kudham View Point before arriving at Yotelmya." },
      { day: 4, title: "Yotelmya → Juving → Bumburi", desc: "Descend through Juving and on to Bumburi." },
      { day: 5, title: "Bumburi → Hill → Solaban", desc: "Climb to the hill above Bumburi and settle into Solaban." },
      { day: 6, title: "Solaban → Deurali → Waku", desc: "Pass through Deurali and walk the gentle path to Waku." },
      { day: 7, title: "Waku → Paasdha (Sundar Jharana) → Mahabhir → Silguri", desc: "Visit Sundar Jharana waterfall and enjoy Mahabhir Rock Climbing sport, then return to Silguri." },
      { day: 8, title: "Drive to Kathmandu", desc: "Return to Kathmandu." },
    ],
  },
  {
    id: 4,
    title: "Itinerary 4",
    duration: "14 Days",
    tag: "Mera Peak Expedition",
    description: "The classic Mera Peak climb via the Dudhkoshi approach — summit at 6,476 m.",
    days: [
      { day: 1, title: "Kathmandu → Kaya Khet → Waku", desc: "Fly or drive to Kaya Khet and make your way to Waku." },
      { day: 2, title: "Waku → Solaban via Deurali · Jaleswori Mandir", desc: "Trek to Solaban via the sacred Jaleswori Mandir and Deurali pass." },
      { day: 3, title: "Solaban → Sibuje", desc: "Descend through rhododendron forest to Sibuje." },
      { day: 4, title: "Sibuje → Chhatra Khola", desc: "Follow the river valley to Chhatra Khola." },
      { day: 5, title: "Chhatra Khola → Kothe", desc: "Trek along the Hinku River to Kothe." },
      { day: 6, title: "Kothe → Thangnak", desc: "Climb higher into the Hinku Valley, reaching Thangnak at ~4,350 m." },
      { day: 7, title: "Thangnak → Khare", desc: "Ascend to Khare (5,045 m), base for Mera Peak." },
      { day: 8, title: "Acclimatisation at Khare", desc: "Rest, explore, and prepare equipment for the summit push." },
      { day: 9, title: "Khare → High Camp", desc: "Move to High Camp (~5,780 m) on the glacier." },
      { day: 10, title: "Mera Summit → Back to Khare", desc: "Pre-dawn start for the summit (6,476 m). Descend to Khare for the night." },
      { day: 11, title: "Khare → Taktho", desc: "Begin the return journey down to Taktho." },
      { day: 12, title: "Taktho → Ramailo Dada", desc: "Trek to Ramailo Dada, a scenic ridge camp." },
      { day: 13, title: "Ramailo Dada → Sibuje → Silguri", desc: "Final trekking day back to Sibuje, then drive to Silguri." },
      { day: 14, title: "Silguri to Kathmandu", desc: "Drive back to Kathmandu." },
    ],
  },
  {
    id: 5,
    title: "Itinerary 5",
    duration: "13 Days",
    tag: "Mera Peak — Fly-In",
    description: "A faster Mera Peak route starting with a flight to Salleri, cutting road travel.",
    days: [
      { day: 1, title: "Kathmandu → Salleri / Silguri", desc: "Fly to Salleri or drive to Silguri." },
      { day: 2, title: "Drive to Sibuje", desc: "Drive to the trailhead at Sibuje." },
      { day: 3, title: "Sibuje → Chhatra Khola", desc: "Trek into the Hinku Valley to Chhatra Khola." },
      { day: 4, title: "Chhatra Khola → Kothe", desc: "Follow the Hinku River upstream to Kothe." },
      { day: 5, title: "Kothe → Thangnak", desc: "Ascend to Thangnak (~4,350 m)." },
      { day: 6, title: "Thangnak → Khare", desc: "Climb to Khare (5,045 m), base for Mera Peak." },
      { day: 7, title: "Acclimatisation at Khare", desc: "Rest day — short hikes nearby to adjust to altitude." },
      { day: 8, title: "Khare → High Camp", desc: "Move to High Camp on the glacier (~5,780 m)." },
      { day: 9, title: "Mera Summit → Back to Khare", desc: "Summit push at dawn (6,476 m). Return to Khare." },
      { day: 10, title: "Khare → Taktho", desc: "Descend to Taktho." },
      { day: 11, title: "Taktho → Ramailo Dada", desc: "Trek to Ramailo Dada ridge camp." },
      { day: 12, title: "Ramailo Dada → Sibuje → Silguri", desc: "Last trekking day — drive to Silguri." },
      { day: 13, title: "Silguri to Kathmandu", desc: "Return to Kathmandu." },
    ],
  },
];

const facilities = [
  {
    icon: "🏕️",
    title: "Accommodation",
    desc: "Homestays and small lodges offer basic but warm facilities. Local Kharka owners are upgrading traditional Goths (temporary huts) as trekking accommodation. Tented camp is required in a few remote locations.",
  },
  {
    icon: "📶",
    title: "Connectivity",
    desc: "Mobile communication and 4G internet services are available throughout the trail. WiFi is available in select villages only.",
  },
  {
    icon: "🧭",
    title: "Guides & Agencies",
    desc: "Highly professional trekking agencies and guides from Mapya Dudhkoshi RM offer full trekking and guiding services, bookable from Kathmandu.",
  },
];

export default function TrekkingItineraries() {
  const [activeItinerary, setActiveItinerary] = useState(0);
  const [expandedDays, setExpandedDays] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const current = itineraries[activeItinerary];

  function selectItinerary(i) {
    setActiveItinerary(i);
    setExpandedDays({});
    setMobileMenuOpen(false);
  }

  function toggleDay(day) {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;700&display=swap');

        #itineraries {
          background: #080c11;
          color: #f0ece3;
          font-family: 'Inter', sans-serif;
          /* Push content below fixed navbar (86px desktop / 74px mobile) */
          padding-top: 86px;
        }

        /* ─── PAGE HEADER ─── */
        .ti-header {
          position: relative;
          padding: clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px) clamp(40px, 6vh, 72px);
          border-bottom: 1px solid rgba(212,168,67,0.15);
          overflow: hidden;
        }
        .ti-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 10% 50%, rgba(212,168,67,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .ti-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d4a843;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ti-eyebrow::before {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: #d4a843;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ti-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          max-width: 680px;
          margin-bottom: 18px;
        }
        .ti-header-sub {
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          font-weight: 300;
          color: rgba(240,236,227,0.6);
          max-width: 500px;
          line-height: 1.75;
        }
        .ti-header-watermark {
          position: absolute;
          right: clamp(16px, 5vw, 80px);
          bottom: -10px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(70px, 13vw, 150px);
          font-weight: 900;
          color: rgba(212,168,67,0.04);
          pointer-events: none;
          user-select: none;
          line-height: 1;
          white-space: nowrap;
        }

        /* ─── MOBILE ROUTE PICKER ─── */
        .ti-mobile-picker {
          display: none;
          padding: 16px clamp(16px, 5vw, 32px);
          border-bottom: 1px solid rgba(212,168,67,0.12);
          position: relative;
        }
        .ti-mobile-picker-trigger {
          width: 100%;
          background: rgba(212,168,67,0.06);
          border: 1px solid rgba(212,168,67,0.25);
          border-radius: 8px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          gap: 12px;
        }
        .ti-mobile-picker-label {
          display: flex;
          flex-direction: column;
          gap: 3px;
          text-align: left;
        }
        .ti-mobile-picker-label span:first-child {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #d4a843;
        }
        .ti-mobile-picker-label span:last-child {
          font-size: 11px;
          color: rgba(240,236,227,0.5);
          font-weight: 400;
        }
        .ti-mobile-picker-arrow {
          color: #d4a843;
          font-size: 12px;
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .ti-mobile-picker-arrow.open { transform: rotate(180deg); }
        .ti-mobile-dropdown {
          position: absolute;
          top: calc(100% - 8px);
          left: clamp(16px, 5vw, 32px);
          right: clamp(16px, 5vw, 32px);
          background: #0e1219;
          border: 1px solid rgba(212,168,67,0.25);
          border-radius: 10px;
          z-index: 50;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }
        .ti-mobile-option {
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(212,168,67,0.08);
          padding: 14px 18px;
          cursor: pointer;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: background 0.18s;
        }
        .ti-mobile-option:last-child { border-bottom: none; }
        .ti-mobile-option:hover,
        .ti-mobile-option.active { background: rgba(212,168,67,0.08); }
        .ti-mobile-option-text span:first-child {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #f0ece3;
          display: block;
          margin-bottom: 2px;
        }
        .ti-mobile-option.active .ti-mobile-option-text span:first-child { color: #d4a843; }
        .ti-mobile-option-text span:last-child {
          font-size: 11px;
          color: rgba(240,236,227,0.4);
          font-weight: 400;
        }
        .ti-mobile-option-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(212,168,67,0.7);
          background: rgba(212,168,67,0.1);
          border: 1px solid rgba(212,168,67,0.2);
          padding: 3px 8px;
          border-radius: 3px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ─── BODY LAYOUT ─── */
        .ti-body {
          display: grid;
          grid-template-columns: 270px 1fr;
          align-items: start;
        }

        /* ─── SIDEBAR ─── */
        .ti-sidebar {
          border-right: 1px solid rgba(212,168,67,0.12);
          padding: 36px 0;
          position: sticky;
          top: 86px;
          max-height: calc(100vh - 86px);
          overflow-y: auto;
        }
        .ti-sidebar::-webkit-scrollbar { width: 3px; }
        .ti-sidebar::-webkit-scrollbar-track { background: transparent; }
        .ti-sidebar::-webkit-scrollbar-thumb { background: rgba(212,168,67,0.2); border-radius: 2px; }
        .ti-sidebar-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(240,236,227,0.3);
          padding: 0 24px;
          margin-bottom: 18px;
        }
        .ti-sidebar-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-left: 2px solid transparent;
          padding: 14px 24px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .ti-sidebar-btn:hover { background: rgba(212,168,67,0.04); }
        .ti-sidebar-btn.active {
          border-left-color: #d4a843;
          background: rgba(212,168,67,0.06);
        }
        .ti-sidebar-btn-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #f0ece3;
          display: block;
          margin-bottom: 5px;
          transition: color 0.2s;
        }
        .ti-sidebar-btn.active .ti-sidebar-btn-title { color: #d4a843; }
        .ti-sidebar-btn-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ti-sidebar-btn-dur {
          font-size: 11px;
          font-weight: 400;
          color: rgba(240,236,227,0.4);
        }
        .ti-sidebar-btn-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(212,168,67,0.65);
          background: rgba(212,168,67,0.08);
          padding: 2px 7px;
          border-radius: 2px;
        }

        /* ─── MAIN PANEL ─── */
        .ti-main {
          padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 64px);
          min-height: 60vh;
        }
        .ti-itin-header {
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(212,168,67,0.1);
        }
        .ti-itin-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 10px;
        }
        .ti-itin-desc {
          font-size: 0.88rem;
          font-weight: 300;
          color: rgba(240,236,227,0.55);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 14px;
        }
        .ti-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ti-pill {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 3px;
        }
        .ti-pill-gold {
          background: rgba(212,168,67,0.12);
          color: #d4a843;
          border: 1px solid rgba(212,168,67,0.25);
        }
        .ti-pill-dim {
          background: rgba(255,255,255,0.04);
          color: rgba(240,236,227,0.4);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* ─── DAY ACCORDION ─── */
        .ti-days { display: flex; flex-direction: column; }
        .ti-day { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .ti-day-trigger {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          background: none;
          border: none;
          padding: 16px 0;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s;
          border-radius: 4px;
        }
        .ti-day-trigger:hover { background: rgba(212,168,67,0.03); }
        .ti-day-num {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(212,168,67,0.55);
          min-width: 42px;
          text-align: right;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .ti-day-vline {
          width: 1px;
          height: 22px;
          background: rgba(212,168,67,0.2);
          flex-shrink: 0;
        }
        .ti-day-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: #f0ece3;
          flex: 1;
          line-height: 1.4;
        }
        .ti-day-chevron {
          width: 16px;
          height: 16px;
          color: rgba(212,168,67,0.4);
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .ti-day-chevron.open { transform: rotate(180deg); }
        .ti-day-body {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.32s ease, opacity 0.28s ease;
          padding-left: 58px;
        }
        .ti-day-body.open {
          max-height: 160px;
          opacity: 1;
          padding-bottom: 14px;
        }
        .ti-day-body p {
          font-size: 0.83rem;
          font-weight: 300;
          color: rgba(240,236,227,0.5);
          line-height: 1.8;
          max-width: 480px;
        }

        /* ─── FACILITIES ─── */
        .ti-facilities {
          border-top: 1px solid rgba(212,168,67,0.12);
          padding: clamp(48px, 8vh, 88px) clamp(24px, 6vw, 96px);
          background: rgba(212,168,67,0.02);
        }
        .ti-fac-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d4a843;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ti-fac-eyebrow::before {
          content: '';
          display: block;
          width: 20px; height: 2px;
          background: #d4a843;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ti-facilities h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 44px;
          max-width: 460px;
        }
        .ti-fac-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 24px;
        }
        .ti-fac-card {
          border: 1px solid rgba(212,168,67,0.12);
          border-radius: 8px;
          padding: 28px 22px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.25s, background 0.25s;
        }
        .ti-fac-card:hover {
          border-color: rgba(212,168,67,0.3);
          background: rgba(212,168,67,0.04);
        }
        .ti-fac-icon { font-size: 1.5rem; display: block; margin-bottom: 12px; }
        .ti-fac-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #f0ece3;
          margin-bottom: 10px;
        }
        .ti-fac-card p {
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(240,236,227,0.5);
          line-height: 1.78;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1023px) {
          #itineraries { padding-top: 74px; }
          .ti-sidebar { top: 74px; max-height: calc(100vh - 74px); }
        }

        @media (max-width: 768px) {
          .ti-mobile-picker { display: block; }
          .ti-body { grid-template-columns: 1fr; }
          .ti-sidebar { display: none; }
          .ti-main { padding: 28px 20px; }
          .ti-header-watermark { display: none; }
          .ti-header { padding: 40px 20px 36px; }
          .ti-facilities { padding: 44px 20px; }
        }

        @media (max-width: 480px) {
          .ti-day-body { padding-left: 40px; }
          .ti-day-num { min-width: 34px; font-size: 0.78rem; }
          .ti-day-title { font-size: 0.85rem; }
        }
      `}</style>

      <section id="itineraries">

        {/* ── Page Header ── */}
        <header className="ti-header">
          <p className="ti-eyebrow">Everest Dudhkoshi Cultural Trail</p>
          <h1>Trekking<br />Itineraries</h1>
          <p className="ti-header-sub">
            From 6-day cultural immersions to 14-day Mera Peak expeditions — the Dudhkoshi Trail offers a journey for every trekker.
          </p>
          <span className="ti-header-watermark" aria-hidden="true">Trek</span>
        </header>

        {/* ── Mobile Route Picker ── */}
        <div className="ti-mobile-picker">
          <button
            className="ti-mobile-picker-trigger"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="ti-mobile-picker-label">
              <span>{current.title}: {current.tag}</span>
              <span>{current.duration} · {current.days.length} days</span>
            </span>
            <span className={`ti-mobile-picker-arrow ${mobileMenuOpen ? "open" : ""}`}>▼</span>
          </button>

          {mobileMenuOpen && (
            <div className="ti-mobile-dropdown">
              {itineraries.map((itin, i) => (
                <button
                  key={itin.id}
                  className={`ti-mobile-option ${i === activeItinerary ? "active" : ""}`}
                  onClick={() => selectItinerary(i)}
                >
                  <span className="ti-mobile-option-text">
                    <span>{itin.title}</span>
                    <span>{itin.tag}</span>
                  </span>
                  <span className="ti-mobile-option-badge">{itin.duration}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div className="ti-body">

          {/* Desktop Sidebar */}
          <nav className="ti-sidebar" aria-label="Itinerary selection">
            <p className="ti-sidebar-label">Choose Route</p>
            {itineraries.map((itin, i) => (
              <button
                key={itin.id}
                className={`ti-sidebar-btn ${i === activeItinerary ? "active" : ""}`}
                onClick={() => selectItinerary(i)}
              >
                <span className="ti-sidebar-btn-title">{itin.title}</span>
                <span className="ti-sidebar-btn-row">
                  <span className="ti-sidebar-btn-dur">{itin.duration}</span>
                  <span className="ti-sidebar-btn-tag">{itin.tag}</span>
                </span>
              </button>
            ))}
          </nav>

          {/* Main Panel */}
          <main className="ti-main">
            <div className="ti-itin-header">
              <h2>{current.title}: {current.tag}</h2>
              <p className="ti-itin-desc">{current.description}</p>
              <div className="ti-pills">
                <span className="ti-pill ti-pill-gold">{current.duration}</span>
                <span className="ti-pill ti-pill-dim">{current.days.length} Days</span>
                <span className="ti-pill ti-pill-dim">Lower Solukhumbu · Nepal</span>
              </div>
            </div>

            <div className="ti-days">
              {current.days.map((d) => {
                const isOpen = !!expandedDays[d.day];
                return (
                  <div className="ti-day" key={d.day}>
                    <button
                      className="ti-day-trigger"
                      onClick={() => toggleDay(d.day)}
                      aria-expanded={isOpen}
                    >
                      <span className="ti-day-num">Day {d.day}</span>
                      <span className="ti-day-vline" aria-hidden="true" />
                      <span className="ti-day-title">{d.title}</span>
                      <svg className={`ti-day-chevron ${isOpen ? "open" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className={`ti-day-body ${isOpen ? "open" : ""}`}>
                      <p>{d.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>

        {/* ── Facilities ── */}
        <div className="ti-facilities">
          <p className="ti-fac-eyebrow">On the Trail</p>
          <h2>Tourist Services<br />&amp; Facilities</h2>
          <div className="ti-fac-grid">
            {facilities.map((f) => (
              <div className="ti-fac-card" key={f.title}>
                <span className="ti-fac-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}