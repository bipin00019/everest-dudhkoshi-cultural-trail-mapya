

// import { useState, useEffect } from "react";
// import Tent from '../../public/images/tent.jpg'
// import Hills from '../../public/images/Hills.jpg'
// import Himalayas from '../../public/images/himalayas.jpg'
// import Dada from '../../public/images/dada.jpg'
// import Mountain from '../../public/images/mountain.jpg'

// const slides = [
//   {
//     img: Tent,
//     headline: "Sleep Under Himalayan Stars",
//     sub: "Camp in the heart of the Solukhumbu wilderness",
//   },
//   {
//     img: Hills,
//     headline: "Rolling Hills of Lower Solukhumbu",
//     sub: "Nepal's best-kept trekking secret awaits you",
//   },
//   {
//     img: Himalayas,
//     headline: "Everest Dudhkoshi Cultural Trail",
//     sub: "Follow the river that flows from the roof of the world",
//   },
//   {
//     img: Dada,
//     headline: "Ancient Ridges, Living Culture",
//     sub: "Walk the trails of Sherpa ancestors through Lower Solukhumbu, Nepal",
//   },
//   {
//     img: Mountain,
//     headline: "Summit Your Greatest Journey",
//     sub: "Every step on the Dudhkoshi Trail brings Everest closer",
//   },
// ];

// export default function Homepage() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState("in");
//   const [navHeight, setNavHeight] = useState(64);

//   useEffect(() => {
//     // Auto-detect navbar height
//     const nav = document.querySelector('nav, header, [class*="navbar"], [class*="nav-bar"], [class*="Navbar"], [class*="Header"]');
//     if (nav) {
//       setNavHeight(nav.offsetHeight);
//     }
//   }, []);

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

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500&display=swap');

//         *, *::before, *::after {
//           box-sizing: border-box;
//         }

//         .hero-wrapper {
//           position: relative;
//           /* Break out of any parent container padding/margin */
//           width: 100vw;
//           left: 50%;
//           transform: translateX(-50%);
//           /* Fill remaining viewport below navbar */
//           height: calc(100vh - ${navHeight}px);
//           min-height: 400px;
//           overflow: hidden;
//           font-family: 'Inter', sans-serif;
//           display: block;
//           margin: 0;
//           padding: 0;
//         }

//         .slide-bg {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           transition: opacity 0.8s ease, transform 1.2s ease;
//           will-change: opacity, transform;
//         }

//         .slide-bg.out {
//           opacity: 0;
//           transform: scale(1.06);
//         }

//         .slide-bg.in {
//           opacity: 1;
//           transform: scale(1);
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.10) 0%,
//             rgba(0,0,0,0.45) 50%,
//             rgba(0,0,0,0.75) 100%
//           );
//           pointer-events: none;
//         }

//         .hero-content {
//           position: absolute;
//           inset: 0;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           padding: clamp(16px, 4vw, 72px);
//           padding-bottom: clamp(52px, 10vh, 110px);
//         }

//         .headline {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(1.6rem, 5vw, 4.5rem);
//           font-weight: 900;
//           line-height: 1.08;
//           color: #ffffff;
//           max-width: 820px;
//           margin: 0 0 14px 0;
//           transition: opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s;
//         }

//         .headline.out { opacity: 0; transform: translateY(22px); }
//         .headline.in  { opacity: 1; transform: translateY(0); }

//         .subline {
//           font-size: clamp(0.85rem, 1.6vw, 1.1rem);
//           font-weight: 300;
//           color: rgba(255,255,255,0.82);
//           max-width: 520px;
//           line-height: 1.65;
//           margin: 0;
//           transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
//         }

//         .subline.out { opacity: 0; transform: translateY(18px); }
//         .subline.in  { opacity: 1; transform: translateY(0); }

//         .dots {
//           position: absolute;
//           bottom: clamp(14px, 3vh, 32px);
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           align-items: center;
//         }

//         .dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.35);
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           transition: background 0.3s, transform 0.3s;
//           flex-shrink: 0;
//         }

//         .dot.active {
//           background: #f0c060;
//           transform: scale(1.5);
//         }

//         .dot:hover:not(.active) {
//           background: rgba(255,255,255,0.65);
//         }

//         .progress-bar {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 3px;
//           background: #f0c060;
//           animation: progress 5s linear infinite;
//         }

//         @keyframes progress {
//           from { width: 0%; }
//           to   { width: 100%; }
//         }

//         /* Responsive tweaks */
//         @media (max-width: 480px) {
//           .hero-content {
//             padding: 16px;
//             padding-bottom: 56px;
//           }
//         }
//       `}</style>

//       <div className="hero-wrapper">
//         <div
//           className={`slide-bg ${animating ? direction : "in"}`}
//           style={{ backgroundImage: `url(${slide.img})` }}
//         />

//         <div className="overlay" />

//         <div className="hero-content">
//           <h1 className={`headline ${animating ? direction : "in"}`}>
//             {slide.headline}
//           </h1>
//           <p className={`subline ${animating ? direction : "in"}`}>
//             {slide.sub}
//           </p>
//         </div>

//         <div className="dots">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               className={`dot ${i === current ? "active" : ""}`}
//               onClick={() => triggerSlide(i)}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>

//         <div className="progress-bar" key={current} />
//       </div>
//     </>
//   );
// }

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