

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { PATHS } from "../constants/PATHS";

// // const links = [
// //   { label: "Home", to: PATHS.HOME },
// //   { label: "About", to: PATHS.ABOUT },
// //   { label: "Activities & Experience", to: PATHS.ACTIVITIES },
// //   { label: "Itineraries & Services", to: PATHS.ITINERARIES },
// //   { label: "Map", to: PATHS.MAP },
// // ];

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [hovered, setHovered] = useState(null);
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 1024);
// //       if (window.innerWidth >= 1024) setIsOpen(false);
// //     };
// //     const handleScroll = () => setScrolled(window.scrollY > 10);

// //     window.addEventListener("resize", handleResize);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     document.body.style.overflow = isOpen ? "hidden" : "";
// //     return () => { document.body.style.overflow = ""; };
// //   }, [isOpen]);

// //   return (
// //     <>
// //       <nav style={{
// //         position: "fixed",
// //         top: 0,
// //         left: 0,
// //         width: "100%",
// //         backgroundColor: "#ffffff",
// //         borderTop: "5px solid #dc2626",
// //         boxShadow: scrolled
// //           ? "0 4px 24px rgba(0,0,0,0.15)"
// //           : "0 2px 8px rgba(0,0,0,0.08)",
// //         zIndex: 1000,
// //         fontFamily: "'Segoe UI', system-ui, sans-serif",
// //         boxSizing: "border-box",
// //         transition: "box-shadow 0.3s ease",
// //       }}>
// //         <div style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //           padding: "0 40px",
// //           height: "80px",
// //           maxWidth: "1400px",
// //           margin: "0 auto",
// //           boxSizing: "border-box",
// //         }}>

// //           {/* Logo */}
// //           <Link to={PATHS.HOME} style={{ textDecoration: "none", flexShrink: 0 }}>
// //             <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
// //               <span style={{
// //                 fontSize: "10px",
// //                 fontWeight: "700",
// //                 color: "#9ca3af",
// //                 letterSpacing: "3px",
// //                 textTransform: "uppercase",
// //               }}>
// //                 Explore Nepal
// //               </span>
// //               <span style={{
// //                 fontSize: "clamp(18px, 2.5vw, 28px)",
// //                 fontWeight: "900",
// //                 color: "#1e3a5f",
// //                 letterSpacing: "0.5px",
// //                 whiteSpace: "nowrap",
// //                 lineHeight: 1.2,
// //               }}>
// //                 Everest Dudhkoshi Cultural Trail
// //               </span>
// //               <span style={{
// //                 fontSize: "clamp(9px, 1vw, 12px)",
// //                 fontWeight: "800",
// //                 color: "#dc2626",
// //                 letterSpacing: "3px",
// //                 textTransform: "uppercase",
// //                 whiteSpace: "nowrap",
// //               }}>
// //                 Lower Solukhumbu
// //               </span>
// //             </div>
// //           </Link>

// //           {/* Desktop Menu */}
// //           {!isMobile && (
// //             <div style={{
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "4px",
// //             }}>
// //               {links.map(({ label, to }) => (
// //                 <Link
// //                   key={label}
// //                   to={to}
// //                   onMouseEnter={() => setHovered(label)}
// //                   onMouseLeave={() => setHovered(null)}
// //                   style={{
// //                     textDecoration: "none",
// //                     fontSize: "clamp(12px, 1.1vw, 14px)",
// //                     fontWeight: "600",
// //                     color: hovered === label ? "#ffffff" : "#1e3a5f",
// //                     backgroundColor: hovered === label ? "#dc2626" : "transparent",
// //                     padding: "8px 14px",
// //                     borderRadius: "6px",
// //                     transition: "all 0.2s ease",
// //                     whiteSpace: "nowrap",
// //                     letterSpacing: "0.3px",
// //                   }}
// //                 >
// //                   {label}
// //                 </Link>
// //               ))}
// //             </div>
// //           )}

// //           {/* Hamburger Button */}
// //           {isMobile && (
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 gap: "5px",
// //                 background: "none",
// //                 border: "2px solid #1e3a5f",
// //                 borderRadius: "8px",
// //                 padding: "8px 10px",
// //                 cursor: "pointer",
// //                 flexShrink: 0,
// //                 marginLeft: "12px",
// //                 width: "44px",
// //                 height: "44px",
// //                 transition: "all 0.2s ease",
// //               }}
// //             >
// //               <span style={{
// //                 display: "block",
// //                 width: "20px",
// //                 height: "2px",
// //                 backgroundColor: "#1e3a5f",
// //                 borderRadius: "2px",
// //                 transition: "all 0.3s ease",
// //                 transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
// //               }} />
// //               <span style={{
// //                 display: "block",
// //                 width: "20px",
// //                 height: "2px",
// //                 backgroundColor: "#1e3a5f",
// //                 borderRadius: "2px",
// //                 transition: "all 0.3s ease",
// //                 opacity: isOpen ? 0 : 1,
// //               }} />
// //               <span style={{
// //                 display: "block",
// //                 width: "20px",
// //                 height: "2px",
// //                 backgroundColor: "#1e3a5f",
// //                 borderRadius: "2px",
// //                 transition: "all 0.3s ease",
// //                 transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
// //               }} />
// //             </button>
// //           )}
// //         </div>

// //         {/* Mobile Side Drawer */}
// //         {isMobile && (
// //           <>
// //             {/* Overlay */}
// //             <div
// //               onClick={() => setIsOpen(false)}
// //               style={{
// //                 position: "fixed",
// //                 top: 0,
// //                 left: 0,
// //                 width: "100%",
// //                 height: "100vh",
// //                 backgroundColor: "rgba(0,0,0,0.5)",
// //                 zIndex: 998,
// //                 opacity: isOpen ? 1 : 0,
// //                 pointerEvents: isOpen ? "auto" : "none",
// //                 transition: "opacity 0.3s ease",
// //                 backdropFilter: "blur(2px)",
// //               }}
// //             />

// //             {/* Drawer Panel */}
// //             <div style={{
// //               position: "fixed",
// //               top: 0,
// //               right: 0,
// //               width: "min(80vw, 320px)",
// //               height: "100vh",
// //               backgroundColor: "#ffffff",
// //               boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
// //               padding: "0",
// //               display: "flex",
// //               flexDirection: "column",
// //               transform: isOpen ? "translateX(0)" : "translateX(100%)",
// //               transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
// //               zIndex: 999,
// //               boxSizing: "border-box",
// //               overflowY: "auto",
// //             }}>

// //               {/* Drawer Header */}
// //               <div style={{
// //                 background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%)",
// //                 padding: "32px 24px 24px",
// //                 borderBottom: "3px solid #dc2626",
// //               }}>
// //                 <div style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   alignItems: "flex-start",
// //                   marginBottom: "8px",
// //                 }}>
// //                   <div style={{ lineHeight: 1.3 }}>
// //                     <div style={{
// //                       fontSize: "9px",
// //                       fontWeight: "700",
// //                       color: "rgba(255,255,255,0.6)",
// //                       letterSpacing: "3px",
// //                       textTransform: "uppercase",
// //                       marginBottom: "4px",
// //                     }}>
// //                       Explore Nepal
// //                     </div>
// //                     <div style={{
// //                       fontSize: "20px",
// //                       fontWeight: "900",
// //                       color: "#ffffff",
// //                       whiteSpace: "nowrap",
// //                       letterSpacing: "0.3px",
// //                     }}>
// //                       Everest Dudhkoshi
// //                     </div>
// //                     <div style={{
// //                       fontSize: "10px",
// //                       fontWeight: "800",
// //                       color: "#fca5a5",
// //                       letterSpacing: "3px",
// //                       textTransform: "uppercase",
// //                       whiteSpace: "nowrap",
// //                     }}>
// //                       Cultural Trail
// //                     </div>
// //                   </div>

// //                   {/* Close Button */}
// //                   <button
// //                     onClick={() => setIsOpen(false)}
// //                     style={{
// //                       background: "rgba(255,255,255,0.15)",
// //                       border: "none",
// //                       borderRadius: "50%",
// //                       width: "36px",
// //                       height: "36px",
// //                       cursor: "pointer",
// //                       color: "#ffffff",
// //                       fontSize: "18px",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       flexShrink: 0,
// //                       marginLeft: "12px",
// //                     }}
// //                   >
// //                     ✕
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Nav Links */}
// //               <div style={{
// //                 padding: "16px 16px",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: "6px",
// //                 flex: 1,
// //               }}>
// //                 <p style={{
// //                   fontSize: "10px",
// //                   fontWeight: "700",
// //                   color: "#9ca3af",
// //                   letterSpacing: "2.5px",
// //                   textTransform: "uppercase",
// //                   margin: "8px 0 12px 8px",
// //                 }}>
// //                   Menu
// //                 </p>

// //                 {links.map(({ label, to }, index) => (
// //                   <Link
// //                     key={label}
// //                     to={to}
// //                     onClick={() => setIsOpen(false)}
// //                     style={{
// //                       textDecoration: "none",
// //                       fontSize: "15px",
// //                       fontWeight: "600",
// //                       color: "#1e3a5f",
// //                       padding: "14px 18px",
// //                       borderRadius: "10px",
// //                       backgroundColor: "#f8fafc",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       gap: "12px",
// //                       border: "1px solid #e2e8f0",
// //                       transition: "all 0.2s ease",
// //                     }}
// //                   >
// //                     <span style={{
// //                       width: "28px",
// //                       height: "28px",
// //                       borderRadius: "50%",
// //                       backgroundColor: "#dc2626",
// //                       color: "#ffffff",
// //                       fontSize: "11px",
// //                       fontWeight: "800",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       flexShrink: 0,
// //                     }}>
// //                       {index + 1}
// //                     </span>
// //                     {label}
// //                   </Link>
// //                 ))}
// //               </div>

// //               {/* Drawer Footer */}
// //               <div style={{
// //                 padding: "16px 24px",
// //                 borderTop: "1px solid #e2e8f0",
// //                 backgroundColor: "#f8fafc",
// //               }}>
// //                 <p style={{
// //                   fontSize: "11px",
// //                   color: "#9ca3af",
// //                   textAlign: "center",
// //                   margin: 0,
// //                   letterSpacing: "0.5px",
// //                 }}>
// //                   🏔️ Discover the Himalayas
// //                 </p>
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </nav>

// //       {/* Spacer */}
// //       <div style={{ height: "80px" }} />
// //     </>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { PATHS } from "../constants/PATHS";

// const links = [
//   { label: "Home", to: PATHS.HOME },
//   { label: "About", to: `${PATHS.ABOUT}#about` },
//   { label: "Activities & Experience", to: PATHS.ACTIVITIES },
//   { label: "Itineraries & Services", to: PATHS.ITINERARIES },
//   { label: "Map", to: PATHS.MAP },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hovered, setHovered] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [scrolled, setScrolled] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

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
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isOpen]);

//   function handleNavClick(link) {
//     setIsOpen(false);
//     if (link && link.to) navigate(link.to);
//   }

//   const isActive = (to) => {
//     if (!to) return false;
//     return location.pathname === to.split("#")[0];
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Inter:wght@400;500;600;700&display=swap');

//         .nav-root {
//           position: fixed;
//           top: 0; left: 0;
//           width: 100%;
//           border-top: 3px solid #d4a843;
//           border-bottom: 1px solid rgba(212,168,67,0.18);
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           z-index: 1000;
//           font-family: 'Inter', system-ui, sans-serif;
//           box-sizing: border-box;
//           transition: background 0.4s ease, box-shadow 0.4s ease;
//         }

//         .nav-inner {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0 clamp(16px, 4vw, 48px);
//           height: 80px;
//           max-width: 1400px;
//           margin: 0 auto;
//           box-sizing: border-box;
//         }

//         .logo-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           flex-shrink: 0;
//           text-align: left;
//         }

//         .logo-eyebrow {
//           font-size: 9px;
//           font-weight: 700;
//           color: #d4a843;
//           letter-spacing: 3.5px;
//           text-transform: uppercase;
//           display: block;
//         }

//         .logo-main {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(15px, 2vw, 22px);
//           font-weight: 900;
//           color: #f0ece3;
//           white-space: nowrap;
//           line-height: 1.15;
//           display: block;
//         }

//         .logo-sub {
//           font-size: clamp(8px, 0.85vw, 10px);
//           font-weight: 700;
//           color: rgba(240,236,227,0.4);
//           letter-spacing: 2.5px;
//           text-transform: uppercase;
//           white-space: nowrap;
//           display: block;
//         }

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
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           padding: 8px 13px;
//           border-radius: 5px;
//           white-space: nowrap;
//           position: relative;
//           transition: color 0.22s ease;
//         }

//         .nav-btn::after {
//           content: '';
//           position: absolute;
//           bottom: 5px; left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           width: 55%;
//           height: 1.5px;
//           background: #d4a843;
//           border-radius: 2px;
//           transition: transform 0.25s ease;
//         }

//         .nav-btn:hover::after,
//         .nav-btn.active::after {
//           transform: translateX(-50%) scaleX(1);
//         }

//         .hamburger {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 5px;
//           background: rgba(212,168,67,0.08);
//           border: 1px solid rgba(212,168,67,0.3);
//           border-radius: 8px;
//           width: 44px; height: 44px;
//           cursor: pointer;
//           flex-shrink: 0;
//         }

//         .hbar {
//           display: block;
//           width: 22px; height: 2px;
//           background: #d4a843;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//         }

//         .drawer-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.6);
//           backdrop-filter: blur(4px);
//           z-index: 998;
//           transition: opacity 0.3s ease;
//         }

//         .drawer {
//           position: fixed;
//           top: 0; right: 0;
//           width: min(82vw, 300px);
//           height: 100vh;
//           background: #0d1117;
//           border-left: 1px solid rgba(212,168,67,0.18);
//           display: flex;
//           flex-direction: column;
//           transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
//           z-index: 999;
//           overflow-y: auto;
//         }

//         .drawer-header {
//           padding: 28px 22px 20px;
//           border-bottom: 1px solid rgba(212,168,67,0.18);
//           background: linear-gradient(160deg, #141c28 0%, #0d1117 100%);
//         }

//         .drawer-header-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//         }

//         .drawer-close {
//           background: rgba(212,168,67,0.1);
//           border: 1px solid rgba(212,168,67,0.28);
//           border-radius: 50%;
//           width: 34px; height: 34px;
//           cursor: pointer;
//           color: #d4a843;
//           font-size: 16px;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//         }

//         .drawer-nav {
//           padding: 18px 14px;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           flex: 1;
//         }

//         .drawer-label {
//           font-size: 9px;
//           font-weight: 700;
//           color: rgba(212,168,67,0.55);
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           margin: 0 0 12px 8px;
//         }

//         .drawer-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-family: 'Inter', sans-serif;
//           width: 100%;
//           text-align: left;
//           display: flex;
//           align-items: center;
//           gap: 13px;
//           font-size: 15px;
//           font-weight: 600;
//           padding: 13px 16px;
//           border-radius: 10px;
//           transition: all 0.2s ease;
//           letter-spacing: 0.2px;
//         }

//         .drawer-btn:hover {
//           background: rgba(212,168,67,0.08);
//           color: #d4a843 !important;
//         }

//         .drawer-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           flex-shrink: 0;
//           transition: background 0.2s;
//         }

//         .drawer-footer {
//           padding: 16px 24px;
//           border-top: 1px solid rgba(212,168,67,0.12);
//           background: rgba(212,168,67,0.03);
//         }

//         .drawer-footer-text {
//           font-size: 11px;
//           color: rgba(240,236,227,0.3);
//           text-align: center;
//           letter-spacing: 0.5px;
//           margin: 0;
//         }
//       `}</style>

//       <nav
//         className="nav-root"
//         style={{
//           backgroundColor: scrolled ? "rgba(8,12,17,0.97)" : "rgba(8,12,17,0.88)",
//           boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.7)" : "none",
//         }}
//       >
//         <div className="nav-inner">

//           {/* Logo */}
//           <button className="logo-btn" onClick={() => navigate(PATHS.HOME)}>
//             <span className="logo-eyebrow">Explore Nepal</span>
//             <span className="logo-main">Everest Dudhkoshi</span>
//             <span className="logo-sub">Cultural Trail · Lower Solukhumbu</span>
//           </button>

//           {/* Desktop */}
//           {!isMobile && (
//             <div className="desktop-menu">
//               {links.map((link) => (
//                 <button
//                   key={link.label}
//                   className={`nav-btn ${isActive(link.to) ? "active" : ""}`}
//                   style={{
//                     color: isActive(link.to)
//                       ? "#d4a843"
//                       : hovered === link.label
//                       ? "#f0ece3"
//                       : "rgba(240,236,227,0.65)",
//                   }}
//                   onMouseEnter={() => setHovered(link.label)}
//                   onMouseLeave={() => setHovered(null)}
//                   onClick={() => handleNavClick(link)}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Hamburger */}
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

//         {/* Mobile Drawer */}
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
//               <div className="drawer-header">
//                 <div className="drawer-header-row">
//                   <div>
//                     <div style={{ fontSize: "9px", fontWeight: 700, color: "#d4a843", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "4px" }}>
//                       Explore Nepal
//                     </div>
//                     <div style={{ fontSize: "19px", fontWeight: 900, color: "#f0ece3", fontFamily: "'Playfair Display', serif" }}>
//                       Everest Dudhkoshi
//                     </div>
//                     <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(240,236,227,0.38)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "2px" }}>
//                       Cultural Trail
//                     </div>
//                   </div>
//                   <button className="drawer-close" onClick={() => setIsOpen(false)}>✕</button>
//                 </div>
//               </div>

//               <div className="drawer-nav">
//                 <p className="drawer-label">Navigation</p>
//                 {links.map((link) => (
//                   <button
//                     key={link.label}
//                     className="drawer-btn"
//                     style={{ color: isActive(link.to) ? "#d4a843" : "rgba(240,236,227,0.78)" }}
//                     onClick={() => handleNavClick(link)}
//                   >
//                     <span
//                       className="drawer-dot"
//                       style={{ background: isActive(link.to) ? "#d4a843" : "rgba(212,168,67,0.28)" }}
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

//       <div style={{ height: "80px" }} />
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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function scrollToSection(href) {
    setIsOpen(false);
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Inter:wght@400;500;600;700&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          border-top: 3px solid #d4a843;
          border-bottom: 1px solid rgba(212,168,67,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
          font-family: 'Inter', system-ui, sans-serif;
          box-sizing: border-box;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 clamp(16px, 4vw, 48px);
          height: 80px;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .logo-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          text-align: left;
        }

        .logo-eyebrow {
          font-size: 9px;
          font-weight: 700;
          color: #d4a843;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          display: block;
        }

        .logo-main {
          font-family: 'Playfair Display', serif;
          font-size: clamp(15px, 2vw, 22px);
          font-weight: 900;
          color: #f0ece3;
          white-space: nowrap;
          line-height: 1.15;
          display: block;
        }

        .logo-sub {
          font-size: clamp(8px, 0.85vw, 10px);
          font-weight: 700;
          color: rgba(240,236,227,0.4);
          letter-spacing: 2.5px;
          text-transform: uppercase;
          white-space: nowrap;
          display: block;
        }

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
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 8px 13px;
          border-radius: 5px;
          white-space: nowrap;
          position: relative;
          transition: color 0.22s ease;
        }

        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 5px; left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 55%;
          height: 1.5px;
          background: #d4a843;
          border-radius: 2px;
          transition: transform 0.25s ease;
        }

        .nav-btn:hover::after,
        .nav-btn.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: rgba(212,168,67,0.08);
          border: 1px solid rgba(212,168,67,0.3);
          border-radius: 8px;
          width: 44px; height: 44px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .hbar {
          display: block;
          width: 22px; height: 2px;
          background: #d4a843;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 998;
          transition: opacity 0.3s ease;
        }

        .drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(82vw, 300px);
          height: 100vh;
          background: #0d1117;
          border-left: 1px solid rgba(212,168,67,0.18);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 999;
          overflow-y: auto;
        }

        .drawer-header {
          padding: 28px 22px 20px;
          border-bottom: 1px solid rgba(212,168,67,0.18);
          background: linear-gradient(160deg, #141c28 0%, #0d1117 100%);
        }

        .drawer-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .drawer-close {
          background: rgba(212,168,67,0.1);
          border: 1px solid rgba(212,168,67,0.28);
          border-radius: 50%;
          width: 34px; height: 34px;
          cursor: pointer;
          color: #d4a843;
          font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .drawer-nav {
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .drawer-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(212,168,67,0.55);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin: 0 0 12px 8px;
        }

        .drawer-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }

        .drawer-btn:hover {
          background: rgba(212,168,67,0.08);
          color: #d4a843 !important;
        }

        .drawer-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .drawer-footer {
          padding: 16px 24px;
          border-top: 1px solid rgba(212,168,67,0.12);
          background: rgba(212,168,67,0.03);
        }

        .drawer-footer-text {
          font-size: 11px;
          color: rgba(240,236,227,0.3);
          text-align: center;
          letter-spacing: 0.5px;
          margin: 0;
        }
      `}</style>

      <nav
        className="nav-root"
        style={{
          backgroundColor: scrolled ? "rgba(8,12,17,0.97)" : "rgba(8,12,17,0.88)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.7)" : "none",
        }}
      >
        <div className="nav-inner">

          {/* Logo */}
          <button className="logo-btn" onClick={() => scrollToSection("home")}>
            <span className="logo-eyebrow">Explore Nepal</span>
            <span className="logo-main">Everest Dudhkoshi</span>
            <span className="logo-sub">Cultural Trail · Lower Solukhumbu</span>
          </button>

          {/* Desktop */}
          {!isMobile && (
            <div className="desktop-menu">
              {links.map((link) => (
                <button
                  key={link.label}
                  className={`nav-btn ${activeSection === link.href ? "active" : ""}`}
                  style={{
                    color:
                      activeSection === link.href
                        ? "#d4a843"
                        : hovered === link.label
                        ? "#f0ece3"
                        : "rgba(240,236,227,0.65)",
                  }}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* Hamburger */}
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

        {/* Mobile Drawer */}
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
                  <div>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "#d4a843", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "4px" }}>
                      Explore Nepal
                    </div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#f0ece3", fontFamily: "'Playfair Display', serif" }}>
                      Everest Dudhkoshi
                    </div>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(240,236,227,0.38)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "2px" }}>
                      Cultural Trail
                    </div>
                  </div>
                  <button className="drawer-close" onClick={() => setIsOpen(false)}>✕</button>
                </div>
              </div>

              <div className="drawer-nav">
                <p className="drawer-label">Navigation</p>
                {links.map((link) => (
                  <button
                    key={link.label}
                    className="drawer-btn"
                    style={{ color: activeSection === link.href ? "#d4a843" : "rgba(240,236,227,0.78)" }}
                    onClick={() => scrollToSection(link.href)}
                  >
                    <span
                      className="drawer-dot"
                      style={{ background: activeSection === link.href ? "#d4a843" : "rgba(212,168,67,0.28)" }}
                    />
                    {link.label}
                  </button>
                ))}
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