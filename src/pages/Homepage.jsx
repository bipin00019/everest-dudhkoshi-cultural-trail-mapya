

import { useState, useEffect } from "react";
import Tent from '../../public/images/tent.jpg';
import Hills from '../../public/images/Hills.jpg';
import Himalayas from '../../public/images/himalayas.jpg';
import Dada from '../../public/images/dada.jpg';
import Mountain from '../../public/images/mountain.jpg';

const slides = [
  {
    img: Tent,
    headline: "Sleep Under Himalayan Stars",
    sub: "Camp in the heart of the Solukhumbu wilderness",
  },
  {
    img: Hills,
    headline: "Rolling Hills of Lower Solukhumbu",
    sub: "Nepal's best-kept trekking secret awaits you",
  },
  {
    img: Himalayas,
    headline: "Everest Dudhkoshi Cultural Trail",
    sub: "Follow the river that flows from the roof of the world",
  },
  {
    img: Dada,
    headline: "Ancient Ridges, Living Culture",
    sub: "Walk the trails of Sherpa ancestors through Lower Solukhumbu, Nepal",
  },
  {
    img: Mountain,
    headline: "Summit Your Greatest Journey",
    sub: "Every step on the Dudhkoshi Trail brings Everest closer",
  },
];

export default function Homepage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("in");

  useEffect(() => {
    const interval = setInterval(() => {
      triggerSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  function triggerSlide(next) {
    setAnimating(true);
    setDirection("out");
    setTimeout(() => {
      setCurrent(next);
      setDirection("in");
      setTimeout(() => setAnimating(false), 800);
    }, 600);
  }

  const slide = slides[current];
  const state = animating ? direction : "in";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500&display=swap');

        #home {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .hero-wrapper {
          position: relative;
          width: 100%;
          /* full viewport height — navbar is fixed so hero sits behind it,
             then we offset with a padding-top trick via the bg cover */
          height: 100vh;
          min-height: 500px;
          overflow: hidden;
        }

        .slide-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 0.8s ease, transform 1.2s ease;
          will-change: opacity, transform;
        }
        .slide-bg.out { opacity: 0; transform: scale(1.06); }
        .slide-bg.in  { opacity: 1; transform: scale(1); }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.38) 45%,
            rgba(8,12,17,0.88) 100%
          );
          pointer-events: none;
        }

        /* Thin gold vertical accent line — signature detail */
        .hero-accent-line {
          position: absolute;
          left: clamp(20px, 5vw, 72px);
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: clamp(60px, 12vh, 120px);
          background: linear-gradient(to bottom, transparent, #d4a843, transparent);
          opacity: 0.7;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 clamp(24px, 6vw, 96px) clamp(60px, 10vh, 120px);
        }

        .hero-tag {
          font-family: 'Inter', sans-serif;
          font-size: clamp(9px, 1vw, 11px);
          font-weight: 700;
          color: #d4a843;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 14px;
          transition: opacity 0.5s ease 0s, transform 0.5s ease 0s;
        }
        .hero-tag.out { opacity: 0; transform: translateY(14px); }
        .hero-tag.in  { opacity: 1; transform: translateY(0); }

        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5.5vw, 5rem);
          font-weight: 900;
          line-height: 1.06;
          color: #fff;
          max-width: 820px;
          margin: 0 0 18px 0;
          transition: opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s;
        }
        .hero-headline.out { opacity: 0; transform: translateY(24px); }
        .hero-headline.in  { opacity: 1; transform: translateY(0); }

        .hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.5vw, 1.05rem);
          font-weight: 300;
          color: rgba(255,255,255,0.78);
          max-width: 480px;
          line-height: 1.7;
          margin: 0 0 32px 0;
          transition: opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s;
        }
        .hero-sub.out { opacity: 0; transform: translateY(18px); }
        .hero-sub.in  { opacity: 1; transform: translateY(0); }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1.5px solid #d4a843;
          color: #d4a843;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s;
          width: fit-content;
        }
        .hero-cta:hover { background: #d4a843; color: #080c11; }
        .hero-cta.out { opacity: 0; transform: translateY(14px); }
        .hero-cta.in  { opacity: 1; transform: translateY(0); }

        .hero-dots {
          position: absolute;
          bottom: clamp(20px, 3.5vh, 40px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .hero-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s, width 0.3s;
          flex-shrink: 0;
        }
        .hero-dot.active {
          background: #d4a843;
          width: 22px;
          border-radius: 4px;
          transform: none;
        }
        .hero-dot:hover:not(.active) { background: rgba(255,255,255,0.6); }

        .hero-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: #d4a843;
          animation: hprogress 5s linear infinite;
        }
        @keyframes hprogress { from { width: 0% } to { width: 100% } }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          right: clamp(20px, 3vw, 48px);
          bottom: clamp(40px, 8vh, 90px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
        }
        .hero-scroll-text {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #f0ece3;
          letter-spacing: 3px;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #d4a843, transparent);
          animation: scrollpulse 1.8s ease-in-out infinite;
        }
        @keyframes scrollpulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        @media (max-width: 480px) {
          .hero-content { padding: 0 20px 64px; }
          .hero-scroll { display: none; }
          .hero-accent-line { display: none; }
        }
      `}</style>

      <section id="home">
        <div className="hero-wrapper">
          {/* Background image */}
          <div
            className={`slide-bg ${state}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />

          {/* Gradient overlay */}
          <div className="hero-overlay" />

          {/* Gold accent line */}
          <div className="hero-accent-line" />

          {/* Main content */}
          <div className="hero-content">
            {/* <span className={`hero-tag ${state}`}>Lower Solukhumbu · Nepal</span> */}
            <h1 className={`hero-headline ${state}`}>{slide.headline}</h1>
            <p className={`hero-sub ${state}`}>{slide.sub}</p>
            {/* <button
              className={`hero-cta ${state}`}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discover the Trail
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}
          </div>

          {/* Slide dots */}
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === current ? "active" : ""}`}
                onClick={() => triggerSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="hero-progress" key={current} />

          {/* Scroll cue
          <div className="hero-scroll">
            <span className="hero-scroll-text">Scroll</span>
            <div className="hero-scroll-line" />
          </div> */}
        </div>
      </section>
    </>
  );
}

// import { useState, useEffect } from "react";
// import Tent from '../../public/images/tent.jpg';
// import Hills from '../../public/images/Hills.jpg';
// import Himalayas from '../../public/images/himalayas.jpg';
// import Dada from '../../public/images/dada.jpg';
// import Mountain from '../../public/images/mountain.jpg';

// const slides = [
//   {
//     img: Tent,
//     headline: "Sleep Under Himalayan Stars",
//     sub: "Camp in the heart of the Solukhumbu wilderness",
//     pos: "center center",
//   },
//   {
//     img: Hills,
//     headline: "Rolling Hills of Lower Solukhumbu",
//     sub: "Nepal's best-kept trekking secret awaits you",
//     pos: "center 40%",
//   },
//   {
//     img: Himalayas,
//     headline: "Everest Dudhkoshi Cultural Trail",
//     sub: "Follow the river that flows from the roof of the world",
//     pos: "center 30%",
//   },
//   {
//     img: Dada,
//     headline: "Ancient Ridges, Living Culture",
//     sub: "Walk the trails of Sherpa ancestors through Lower Solukhumbu, Nepal",
//     pos: "center 35%",
//   },
//   {
//     img: Mountain,
//     headline: "Summit Your Greatest Journey",
//     sub: "Every step on the Dudhkoshi Trail brings Everest closer",
//     pos: "center 25%",
//   },
// ];

// export default function Homepage() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState("in");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       triggerSlide((current + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [current]);

//   function triggerSlide(next) {
//     setAnimating(true);
//     setDirection("out");
//     setTimeout(() => {
//       setCurrent(next);
//       setDirection("in");
//       setTimeout(() => setAnimating(false), 800);
//     }, 600);
//   }

//   const slide = slides[current];
//   const state = animating ? direction : "in";

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500&display=swap');

//         * { box-sizing: border-box; }

//         #home {
//           display: block;
//           width: 100%;
//           margin: 0;
//           padding: 0;
//         }

//         .hero-wrapper {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           height: 100svh;
//           overflow: hidden;
//           background: #080c11;
//         }

//         .slide-bg {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: opacity 0.8s ease, transform 1.2s ease;
//           will-change: opacity, transform;
//           display: block;
//         }
//         .slide-bg.out { opacity: 0; transform: scale(1.06); }
//         .slide-bg.in  { opacity: 1; transform: scale(1); }

//         /* Deep gradient — heavier at bottom for text legibility */
//         .hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.08) 0%,
//             rgba(0,0,0,0.10) 30%,
//             rgba(8,12,17,0.65) 60%,
//             rgba(8,12,17,0.96) 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }

//         .hero-accent-line {
//           position: absolute;
//           left: clamp(20px, 5vw, 72px);
//           top: 50%;
//           transform: translateY(-50%);
//           width: 2px;
//           height: clamp(60px, 12vh, 120px);
//           background: linear-gradient(to bottom, transparent, #d4a843, transparent);
//           opacity: 0.7;
//           z-index: 2;
//         }

//         .hero-content {
//           position: absolute;
//           inset: 0;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           padding: 0 clamp(24px, 6vw, 96px) clamp(56px, 10vh, 120px);
//           z-index: 2;
//         }

//         .hero-label {
//           font-family: 'Inter', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           color: #d4a843;
//           letter-spacing: 3.5px;
//           text-transform: uppercase;
//           margin: 0 0 12px 0;
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
//         .hero-label.out { opacity: 0; transform: translateY(10px); }
//         .hero-label.in  { opacity: 1; transform: translateY(0); }

//         .hero-headline {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(2rem, 5.5vw, 5rem);
//           font-weight: 900;
//           line-height: 1.06;
//           color: #fff;
//           max-width: 820px;
//           margin: 0 0 14px 0;
//           transition: opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s;
//         }
//         .hero-headline.out { opacity: 0; transform: translateY(24px); }
//         .hero-headline.in  { opacity: 1; transform: translateY(0); }

//         .hero-sub {
//           font-family: 'Inter', sans-serif;
//           font-size: clamp(0.85rem, 1.5vw, 1.05rem);
//           font-weight: 300;
//           color: rgba(255,255,255,0.72);
//           max-width: 480px;
//           line-height: 1.65;
//           margin: 0;
//           transition: opacity 0.7s ease 0.16s, transform 0.7s ease 0.16s;
//         }
//         .hero-sub.out { opacity: 0; transform: translateY(18px); }
//         .hero-sub.in  { opacity: 1; transform: translateY(0); }

//         /* Dots + counter row */
//         .hero-bottom {
//           position: absolute;
//           bottom: 0;
//           left: 0; right: 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 clamp(24px, 6vw, 96px) clamp(18px, 3.5vh, 32px);
//           z-index: 3;
//         }

//         .hero-counter {
//           font-family: 'Inter', sans-serif;
//           font-size: 11px;
//           font-weight: 500;
//           color: rgba(255,255,255,0.35);
//           letter-spacing: 1px;
//         }
//         .hero-counter em {
//           font-style: normal;
//           color: #d4a843;
//         }

//         .hero-dots {
//           display: flex;
//           gap: 8px;
//           align-items: center;
//         }

//         .hero-dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.28);
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           transition: background 0.3s, width 0.3s;
//           flex-shrink: 0;
//         }
//         .hero-dot.active {
//           background: #d4a843;
//           width: 22px;
//           border-radius: 4px;
//         }
//         .hero-dot:hover:not(.active) { background: rgba(255,255,255,0.55); }

//         .hero-progress {
//           position: absolute;
//           bottom: 0; left: 0;
//           height: 2px;
//           background: #d4a843;
//           animation: hprogress 5s linear infinite;
//           z-index: 4;
//         }
//         @keyframes hprogress { from { width: 0% } to { width: 100% } }

//         /* ── MOBILE only tweaks ── */
//         @media (max-width: 480px) {
//           .hero-accent-line { display: none; }

//           .hero-content {
//             /* tighter bottom padding — dots row handles spacing */
//             padding: 0 20px 80px;
//           }

//           .hero-label {
//             font-size: 9px;
//             letter-spacing: 3px;
//             margin-bottom: 10px;
//           }

//           .hero-headline {
//             font-size: clamp(1.6rem, 8vw, 2.2rem);
//             line-height: 1.1;
//             margin-bottom: 10px;
//           }

//           .hero-sub {
//             font-size: 13px;
//             line-height: 1.6;
//             color: rgba(255,255,255,0.68);
//           }

//           .hero-bottom {
//             padding: 0 20px 16px;
//           }
//         }
//       `}</style>

//       <section id="home">
//         <div className="hero-wrapper">

//           {/* Full-screen cover image — always covers, no gaps */}
//           <img
//             key={current}
//             src={slide.img}
//             alt={slide.headline}
//             className={`slide-bg ${state}`}
//             style={{ objectPosition: slide.pos }}
//           />

//           {/* Deep bottom-heavy overlay */}
//           <div className="hero-overlay" />

//           {/* Gold accent line (desktop) */}
//           <div className="hero-accent-line" />

//           {/* Text content — bottom-anchored, same on mobile & desktop */}
//           <div className="hero-content">
//             <p className={`hero-label ${state}`}>Lower Solukhumbu · Nepal</p>
//             <h1 className={`hero-headline ${state}`}>{slide.headline}</h1>
//             <p className={`hero-sub ${state}`}>{slide.sub}</p>
//           </div>

//           {/* Counter + dots */}
//           <div className="hero-bottom">
//             <span className="hero-counter">
//               <em>{String(current + 1).padStart(2, "0")}</em>
//               {" / "}
//               {String(slides.length).padStart(2, "0")}
//             </span>
//             <div className="hero-dots">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`hero-dot ${i === current ? "active" : ""}`}
//                   onClick={() => triggerSlide(i)}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div className="hero-progress" key={`p-${current}`} />
//         </div>
//       </section>
//     </>
//   );
// }