

// import { useState, useEffect } from "react";

// const links = [
//   { label: "Home", href: "home" },
//   { label: "About", href: "about" },
//   { label: "Activities & Experience", href: "activities" },
//   { label: "Itineraries & Services", href: "itineraries" },
//   { label: "Map", href: "map" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hovered, setHovered] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) setIsOpen(false);
//     };
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const sectionIds = links.map((l) => l.href);
//     const observers = [];
//     sectionIds.forEach((id) => {
//       const el = document.getElementById(id);
//       if (!el) return;
//       const obs = new IntersectionObserver(
//         ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
//         { threshold: 0.4 }
//       );
//       obs.observe(el);
//       observers.push(obs);
//     });
//     return () => observers.forEach((obs) => obs.disconnect());
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isOpen]);

//   function scrollToSection(href) {
//     setIsOpen(false);
//     const el = document.getElementById(href);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap');

//         *, *::before, *::after { box-sizing: border-box; }

//         /* ───────────────── NAV ROOT ───────────────── */
//         .nav-root {
//           position: fixed;
//           top: 0; left: 0;
//           width: 100%;
//           border-top: 3px solid #d4a843;
//           border-bottom: 1px solid rgba(212,168,67,0.28);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           z-index: 1000;
//           font-family: 'Inter', system-ui, sans-serif;
//           transition: background 0.4s ease, box-shadow 0.4s ease;
//         }

//         .nav-inner {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0 clamp(16px, 4vw, 52px);
//           height: 86px;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         /* ───────────────── LOGO ───────────────── */
//         .logo-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 6px 0;
//           flex-shrink: 0;
//           text-align: left;
//           display: flex;
//           flex-direction: column;
//           gap: 3px;
//           max-width: 340px;
//         }

//         /* "Explore Nepal" label — bright gold, fully visible */
//         .logo-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: clamp(9px, 0.85vw, 11px);
//           font-weight: 800;
//           color: #f0c040;
//           letter-spacing: 3.5px;
//           text-transform: uppercase;
//         }
//         .logo-eyebrow-line {
//           display: block;
//           width: 20px;
//           height: 2px;
//           background: #f0c040;
//           border-radius: 2px;
//           flex-shrink: 0;
//         }

//         /* "Everest Dudhkoshi" — large gold gradient */
//         .logo-main {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(22px, 2.6vw, 32px);
//           font-weight: 900;
//           background: linear-gradient(110deg, #fff0b3 0%, #f5d98b 25%, #d4a843 55%, #e8c46a 78%, #c49030 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           white-space: nowrap;
//           line-height: 1.08;
//           display: block;
//           letter-spacing: 0.3px;
//           filter: drop-shadow(0 1px 10px rgba(212,168,67,0.35));
//         }

//         /* "Cultural Trail · Lower Solukhumbu" — now bright white, not gray */
//         .logo-divider {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 1px;
//         }
//         .logo-divider-line {
//           flex: 1;
//           height: 1px;
//           background: linear-gradient(90deg, rgba(212,168,67,0.7), rgba(212,168,67,0.05));
//           max-width: 36px;
//         }
//         .logo-sub {
//           font-size: clamp(9px, 0.8vw, 10.5px);
//           font-weight: 700;
//           color: #e8e2d5;
//           letter-spacing: 2.5px;
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         /* hover states */
//         .logo-btn:hover .logo-main {
//           background: linear-gradient(110deg, #ffffff 0%, #fff5cc 20%, #f5d98b 45%, #d4a843 70%, #e8c46a 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           filter: drop-shadow(0 2px 14px rgba(212,168,67,0.5));
//         }
//         .logo-btn:hover .logo-sub  { color: #ffffff; }
//         .logo-btn:hover .logo-eyebrow { color: #ffd84d; }

//         /* ───────────────── DESKTOP NAV LINKS ───────────────── */
//         .desktop-menu {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//         }

//         .nav-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-family: 'Inter', sans-serif;
//           font-size: clamp(11px, 1vw, 13px);
//           font-weight: 700;
//           letter-spacing: 0.7px;
//           text-transform: uppercase;
//           padding: 8px 14px;
//           border-radius: 6px;
//           white-space: nowrap;
//           position: relative;
//           transition: color 0.2s ease, background 0.2s ease;
//         }
//         .nav-btn::after {
//           content: '';
//           position: absolute;
//           bottom: 4px; left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           width: 50%;
//           height: 1.5px;
//           background: #d4a843;
//           border-radius: 2px;
//           transition: transform 0.25s ease;
//         }
//         .nav-btn:hover { background: rgba(212,168,67,0.09); }
//         .nav-btn:hover::after,
//         .nav-btn.active::after { transform: translateX(-50%) scaleX(1); }

//         /* ───────────────── HAMBURGER ───────────────── */
//         .hamburger {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 5px;
//           background: rgba(212,168,67,0.12);
//           border: 1.5px solid rgba(212,168,67,0.5);
//           border-radius: 10px;
//           width: 46px; height: 46px;
//           cursor: pointer;
//           flex-shrink: 0;
//           transition: background 0.2s ease, border-color 0.2s ease;
//         }
//         .hamburger:hover {
//           background: rgba(212,168,67,0.22);
//           border-color: #d4a843;
//         }
//         .hbar {
//           display: block;
//           width: 22px; height: 2px;
//           background: #f0c040;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//         }

//         /* ───────────────── MOBILE TOP-BAR LOGO SIZING ───────────────── */
//         @media (max-width: 1023px) {
//           .nav-inner   { height: 74px; padding: 0 16px; }
//           .logo-main   { font-size: clamp(20px, 6vw, 26px) !important; }
//           .logo-eyebrow{ font-size: clamp(9px, 2.6vw, 11px) !important; }
//           .logo-sub    { font-size: clamp(8.5px, 2.3vw, 10px) !important; letter-spacing: 1.8px; }
//         }

//         /* ───────────────── DRAWER OVERLAY ───────────────── */
//         .drawer-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.7);
//           backdrop-filter: blur(5px);
//           z-index: 998;
//           transition: opacity 0.3s ease;
//         }

//         /* ───────────────── DRAWER PANEL ───────────────── */
//         .drawer {
//           position: fixed;
//           top: 0; right: 0;
//           width: min(88vw, 320px);
//           height: 100dvh;
//           background: #07090e;
//           border-left: 1px solid rgba(212,168,67,0.25);
//           display: flex;
//           flex-direction: column;
//           transition: transform 0.36s cubic-bezier(0.4,0,0.2,1);
//           z-index: 999;
//           overflow-y: auto;
//         }

//         /* ───────────────── DRAWER HEADER ───────────────── */
//         .drawer-header {
//           padding: 30px 22px 22px;
//           border-bottom: 1px solid rgba(212,168,67,0.18);
//           background: linear-gradient(150deg, #111927 0%, #07090e 100%);
//           flex-shrink: 0;
//         }
//         .drawer-header-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           gap: 12px;
//         }
//         .drawer-logo-wrap {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "Explore Nepal" inside drawer — bright gold */
//         .drawer-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           font-size: 11px;
//           font-weight: 800;
//           color: #f0c040;
//           letter-spacing: 3.5px;
//           text-transform: uppercase;
//         }
//         .drawer-eyebrow-line {
//           display: block;
//           width: 16px; height: 2px;
//           background: #f0c040;
//           border-radius: 2px;
//           flex-shrink: 0;
//         }

//         /* "Everest Dudhkoshi" inside drawer — big, gold shimmer */
//         .drawer-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(26px, 7.5vw, 32px);
//           font-weight: 900;
//           line-height: 1.05;
//           background: linear-gradient(110deg, #fff0b3 0%, #f5d98b 25%, #d4a843 55%, #e8c46a 82%, #b8871f 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           filter: drop-shadow(0 2px 10px rgba(212,168,67,0.35));
//           letter-spacing: 0.3px;
//         }

//         /* "Cultural Trail…" inside drawer — bright white, fully readable */
//         .drawer-subtitle {
//           font-size: clamp(10.5px, 3vw, 12.5px);
//           font-weight: 700;
//           color: #ddd8cc;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//         }

//         /* pill tag */
//         .drawer-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           margin-top: 8px;
//           background: rgba(212,168,67,0.12);
//           border: 1px solid rgba(212,168,67,0.35);
//           border-radius: 20px;
//           padding: 5px 13px;
//           font-size: 10.5px;
//           font-weight: 700;
//           color: #f0c040;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//         }
//         .drawer-tag-dot {
//           width: 6px; height: 6px;
//           background: #f0c040;
//           border-radius: 50%;
//           animation: pulse-dot 2s ease-in-out infinite;
//         }
//         @keyframes pulse-dot {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50%       { opacity: 0.35; transform: scale(0.65); }
//         }

//         .drawer-close {
//           background: rgba(212,168,67,0.1);
//           border: 1.5px solid rgba(212,168,67,0.35);
//           border-radius: 50%;
//           width: 38px; height: 38px;
//           cursor: pointer;
//           color: #f0c040;
//           font-size: 16px;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//           transition: background 0.2s, border-color 0.2s;
//         }
//         .drawer-close:hover {
//           background: rgba(212,168,67,0.22);
//           border-color: #d4a843;
//         }

//         /* ───────────────── DRAWER NAV LINKS ───────────────── */
//         .drawer-nav {
//           padding: 20px 14px;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           flex: 1;
//         }

//         /* "Navigation" section label */
//         .drawer-nav-label {
//           font-size: 10px;
//           font-weight: 800;
//           color: rgba(212,168,67,0.7);
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           margin: 0 0 12px 10px;
//         }

//         .drawer-btn {
//           background: none;
//           border: 1px solid transparent;
//           cursor: pointer;
//           font-family: 'Inter', sans-serif;
//           width: 100%;
//           text-align: left;
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           /* brighter white default so text is clear */
//           font-size: clamp(15px, 4.5vw, 17px);
//           font-weight: 700;
//           padding: 15px 18px;
//           border-radius: 12px;
//           transition: all 0.2s ease;
//           letter-spacing: 0.15px;
//         }
//         .drawer-btn:hover {
//           background: rgba(212,168,67,0.1);
//           border-color: rgba(212,168,67,0.2);
//           color: #ffd84d !important;
//         }
//         .drawer-btn.drawer-btn-active {
//           background: rgba(212,168,67,0.12);
//           border-color: rgba(212,168,67,0.3);
//         }

//         .drawer-dot {
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           flex-shrink: 0;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .drawer-btn-active .drawer-dot { transform: scale(1.35); }

//         /* ───────────────── DRAWER FOOTER ───────────────── */
//         .drawer-footer {
//           padding: 18px 24px;
//           border-top: 1px solid rgba(212,168,67,0.14);
//           background: rgba(212,168,67,0.03);
//           flex-shrink: 0;
//         }
//         .drawer-footer-text {
//           font-size: 11px;
//           font-weight: 700;
//           /* lifted from 0.28 to 0.65 — clearly visible now */
//           color: rgba(232,226,213,0.65);
//           text-align: center;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           margin: 0;
//         }
//       `}</style>

//       <nav
//         className="nav-root"
//         style={{
//           backgroundColor: scrolled ? "rgba(5,8,13,0.98)" : "rgba(8,12,17,0.92)",
//           boxShadow: scrolled ? "0 8px 48px rgba(0,0,0,0.85)" : "none",
//         }}
//       >
//         <div className="nav-inner">

//           {/* ── Logo ── */}
//           <button className="logo-btn" onClick={() => scrollToSection("home")}>
//             <span className="logo-eyebrow">
//               <span className="logo-eyebrow-line" />
//               Explore Nepal
//             </span>
//             <span className="logo-main">Everest Dudhkoshi</span>
//             <span className="logo-divider">
//               <span className="logo-divider-line" />
//               <span className="logo-sub">Cultural Trail · Lower Solukhumbu</span>
//             </span>
//           </button>

//           {/* ── Desktop Nav ── */}
//           {!isMobile && (
//             <div className="desktop-menu">
//               {links.map((link) => (
//                 <button
//                   key={link.label}
//                   className={`nav-btn ${activeSection === link.href ? "active" : ""}`}
//                   style={{
//                     color:
//                       activeSection === link.href
//                         ? "#f0c040"
//                         : hovered === link.label
//                         ? "#ffffff"
//                         : "#d6d0c4",   /* was rgba(240,236,227,0.62) — now a solid warm white */
//                   }}
//                   onMouseEnter={() => setHovered(link.label)}
//                   onMouseLeave={() => setHovered(null)}
//                   onClick={() => scrollToSection(link.href)}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* ── Hamburger ── */}
//           {isMobile && (
//             <button
//               className="hamburger"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               <span className="hbar" style={{ transform: isOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
//               <span className="hbar" style={{ opacity: isOpen ? 0 : 1 }} />
//               <span className="hbar" style={{ transform: isOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
//             </button>
//           )}
//         </div>

//         {/* ── Mobile Drawer ── */}
//         {isMobile && (
//           <>
//             <div
//               className="drawer-overlay"
//               style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
//               onClick={() => setIsOpen(false)}
//             />
//             <div
//               className="drawer"
//               style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
//             >
//               {/* Drawer Header */}
//               <div className="drawer-header">
//                 <div className="drawer-header-row">
//                   <div className="drawer-logo-wrap">
//                     <span className="drawer-eyebrow">
//                       <span className="drawer-eyebrow-line" />
//                       Explore Nepal
//                     </span>
//                     <div className="drawer-title">Everest Dudhkoshi</div>
//                     <div className="drawer-subtitle">Cultural Trail · Lower Solukhumbu</div>
//                     <div className="drawer-tag">
//                       <span className="drawer-tag-dot" />
//                       Himalayan Adventure
//                     </div>
//                   </div>
//                   <button className="drawer-close" onClick={() => setIsOpen(false)}>✕</button>
//                 </div>
//               </div>

//               {/* Drawer Nav Links */}
//               <div className="drawer-nav">
//                 <p className="drawer-nav-label">Navigation</p>
//                 {links.map((link) => (
//                   <button
//                     key={link.label}
//                     className={`drawer-btn ${activeSection === link.href ? "drawer-btn-active" : ""}`}
//                     style={{
//                       color: activeSection === link.href ? "#f0c040" : "#e8e2d5",  /* bright warm white, not gray */
//                     }}
//                     onClick={() => scrollToSection(link.href)}
//                   >
//                     <span
//                       className="drawer-dot"
//                       style={{
//                         background: activeSection === link.href ? "#f0c040" : "rgba(212,168,67,0.55)",
//                       }}
//                     />
//                     {link.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="drawer-footer">
//                 <p className="drawer-footer-text">▲ Discover the Himalayas</p>
//               </div>
//             </div>
//           </>
//         )}
//       </nav>
//     </>
//   );
// }

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Activities & Experience", href: "activities" },
  { label: "Itineraries & Services", href: "itineraries" },
  { label: "Map", href: "map" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href);
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function scrollToSection(href) {
    setIsOpen(false);
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .nav-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          border-top: 3px solid #d4a843;
          border-bottom: 1px solid rgba(212,168,67,0.28);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          font-family: 'Inter', system-ui, sans-serif;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 clamp(16px, 4vw, 52px);
          height: 86px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ───────────────── LOGO ───────────────── */
        .logo-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 0;
          flex-shrink: 0;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          max-width: 340px;
        }

        .logo-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(9px, 0.85vw, 11px);
          font-weight: 800;
          color: #f0c040;
          letter-spacing: 3.5px;
          text-transform: uppercase;
        }
        .logo-eyebrow-line {
          display: block;
          width: 20px;
          height: 2px;
          background: #f0c040;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .logo-main {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 900;
          background: linear-gradient(110deg, #fff0b3 0%, #f5d98b 25%, #d4a843 55%, #e8c46a 78%, #c49030 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
          line-height: 1.08;
          display: block;
          letter-spacing: 0.3px;
          filter: drop-shadow(0 1px 10px rgba(212,168,67,0.35));
        }

        .logo-divider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 1px;
        }
        .logo-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(212,168,67,0.7), rgba(212,168,67,0.05));
          max-width: 36px;
        }
        .logo-sub {
          font-size: clamp(9px, 0.8vw, 10.5px);
          font-weight: 700;
          color: #e8e2d5;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .logo-btn:hover .logo-main {
          background: linear-gradient(110deg, #ffffff 0%, #fff5cc 20%, #f5d98b 45%, #d4a843 70%, #e8c46a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 2px 14px rgba(212,168,67,0.5));
        }
        .logo-btn:hover .logo-sub  { color: #ffffff; }
        .logo-btn:hover .logo-eyebrow { color: #ffd84d; }

        /* ───────────────── DESKTOP NAV LINKS ───────────────── */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 6px;
          white-space: nowrap;
          position: relative;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 50%;
          height: 1.5px;
          background: #d4a843;
          border-radius: 2px;
          transition: transform 0.25s ease;
        }
        .nav-btn.hoverable:hover { background: rgba(212,168,67,0.09); }
        .nav-btn.hoverable:hover::after { transform: translateX(-50%) scaleX(1); }

        /* ───────────────── HAMBURGER ───────────────── */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: rgba(212,168,67,0.12);
          border: 1.5px solid rgba(212,168,67,0.5);
          border-radius: 10px;
          width: 46px; height: 46px;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .hamburger:hover {
          background: rgba(212,168,67,0.22);
          border-color: #d4a843;
        }
        .hbar {
          display: block;
          width: 22px; height: 2px;
          background: #f0c040;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        @media (max-width: 1023px) {
          .nav-inner   { height: 74px; padding: 0 16px; }
          .logo-main   { font-size: clamp(20px, 6vw, 26px) !important; }
          .logo-eyebrow{ font-size: clamp(9px, 2.6vw, 11px) !important; }
          .logo-sub    { font-size: clamp(8.5px, 2.3vw, 10px) !important; letter-spacing: 1.8px; }
        }

        /* ───────────────── DRAWER OVERLAY ───────────────── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          z-index: 998;
          transition: opacity 0.3s ease;
        }

        /* ───────────────── DRAWER PANEL ───────────────── */
        .drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(88vw, 320px);
          height: 100dvh;
          background: #07090e;
          border-left: 1px solid rgba(212,168,67,0.25);
          display: flex;
          flex-direction: column;
          transition: transform 0.36s cubic-bezier(0.4,0,0.2,1);
          z-index: 999;
          overflow-y: auto;
        }

        .drawer-header {
          padding: 30px 22px 22px;
          border-bottom: 1px solid rgba(212,168,67,0.18);
          background: linear-gradient(150deg, #111927 0%, #07090e 100%);
          flex-shrink: 0;
        }
        .drawer-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .drawer-logo-wrap {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .drawer-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          color: #f0c040;
          letter-spacing: 3.5px;
          text-transform: uppercase;
        }
        .drawer-eyebrow-line {
          display: block;
          width: 16px; height: 2px;
          background: #f0c040;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .drawer-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 7.5vw, 32px);
          font-weight: 900;
          line-height: 1.05;
          background: linear-gradient(110deg, #fff0b3 0%, #f5d98b 25%, #d4a843 55%, #e8c46a 82%, #b8871f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 10px rgba(212,168,67,0.35));
          letter-spacing: 0.3px;
        }

        .drawer-subtitle {
          font-size: clamp(10.5px, 3vw, 12.5px);
          font-weight: 700;
          color: #ddd8cc;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .drawer-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 8px;
          background: rgba(212,168,67,0.12);
          border: 1px solid rgba(212,168,67,0.35);
          border-radius: 20px;
          padding: 5px 13px;
          font-size: 10.5px;
          font-weight: 700;
          color: #f0c040;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .drawer-tag-dot {
          width: 6px; height: 6px;
          background: #f0c040;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.65); }
        }

        .drawer-close {
          background: rgba(212,168,67,0.1);
          border: 1.5px solid rgba(212,168,67,0.35);
          border-radius: 50%;
          width: 38px; height: 38px;
          cursor: pointer;
          color: #f0c040;
          font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .drawer-close:hover {
          background: rgba(212,168,67,0.22);
          border-color: #d4a843;
        }

        .drawer-nav {
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .drawer-nav-label {
          font-size: 10px;
          font-weight: 800;
          color: rgba(212,168,67,0.7);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin: 0 0 12px 10px;
        }

        .drawer-btn {
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: clamp(15px, 4.5vw, 17px);
          font-weight: 700;
          color: #e8e2d5;
          padding: 15px 18px;
          border-radius: 12px;
          transition: all 0.2s ease;
          letter-spacing: 0.15px;
        }
        .drawer-btn.drawer-btn-active {
          background: rgba(212,168,67,0.12);
          border-color: rgba(212,168,67,0.3);
        }
        .drawer-btn.drawer-btn-hoverable:hover {
          background: rgba(212,168,67,0.1);
          border-color: rgba(212,168,67,0.2);
          color: #ffffff;
        }

        .drawer-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(212,168,67,0.55);
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .drawer-btn-active .drawer-dot { transform: scale(1.35); }

        .drawer-footer {
          padding: 18px 24px;
          border-top: 1px solid rgba(212,168,67,0.14);
          background: rgba(212,168,67,0.03);
          flex-shrink: 0;
        }
        .drawer-footer-text {
          font-size: 11px;
          font-weight: 700;
          color: rgba(232,226,213,0.65);
          text-align: center;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>

      <nav
        className="nav-root"
        style={{
          backgroundColor: scrolled ? "rgba(5,8,13,0.98)" : "rgba(8,12,17,0.92)",
          boxShadow: scrolled ? "0 8px 48px rgba(0,0,0,0.85)" : "none",
        }}
      >
        <div className="nav-inner">

          {/* ── Logo ── */}
          <button className="logo-btn" onClick={() => scrollToSection("home")}>
            <span className="logo-eyebrow">
              <span className="logo-eyebrow-line" />
              Explore Nepal
            </span>
            <span className="logo-main">Everest Dudhkoshi</span>
            <span className="logo-divider">
              <span className="logo-divider-line" />
              <span className="logo-sub">Cultural Trail · Lower Solukhumbu</span>
            </span>
          </button>

          {/* ── Desktop Nav ── */}
          {!isMobile && (
            <div className="desktop-menu">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.label}
                    className={`nav-btn ${isActive ? "" : "hoverable"}`}
                    style={{
                      color: hovered === link.label && !isActive
                        ? "#ffffff"
                        : "#d6d0c4",
                    }}
                    onMouseEnter={() => !isActive && setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* ── Hamburger ── */}
          {isMobile && (
            <button
              className="hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="hbar" style={{ transform: isOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span className="hbar" style={{ opacity: isOpen ? 0 : 1 }} />
              <span className="hbar" style={{ transform: isOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          )}
        </div>

        {/* ── Mobile Drawer ── */}
        {isMobile && (
          <>
            <div
              className="drawer-overlay"
              style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
              onClick={() => setIsOpen(false)}
            />
            <div
              className="drawer"
              style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
            >
              <div className="drawer-header">
                <div className="drawer-header-row">
                  <div className="drawer-logo-wrap">
                    <span className="drawer-eyebrow">
                      <span className="drawer-eyebrow-line" />
                      Explore Nepal
                    </span>
                    <div className="drawer-title">Everest Dudhkoshi</div>
                    <div className="drawer-subtitle">Cultural Trail · Lower Solukhumbu</div>
                    <div className="drawer-tag">
                      <span className="drawer-tag-dot" />
                      Himalayan Adventure
                    </div>
                  </div>
                  <button className="drawer-close" onClick={() => setIsOpen(false)}>✕</button>
                </div>
              </div>

              <div className="drawer-nav">
                <p className="drawer-nav-label">Navigation</p>
                {links.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.label}
                      className={`drawer-btn ${isActive ? "drawer-btn-active" : "drawer-btn-hoverable"}`}
                      onClick={() => scrollToSection(link.href)}
                    >
                      <span className="drawer-dot" />
                      {link.label}
                    </button>
                  );
                })}
              </div>

              <div className="drawer-footer">
                <p className="drawer-footer-text">▲ Discover the Himalayas</p>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}