// import { Link } from 'react-router-dom'
// import { PATHS } from "../constants/paths"
// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
//       <div className="flex justify-between items-center px-6 py-4">
//         <h1 className="font-bold text-xl">MyApp</h1>

//         <div className="flex gap-6">
//           <Link to={PATHS.HOME}>Home</Link>
//           <Link to={PATHS.ABOUT}>About</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../constants/PATHS";

const links = [
  { label: "Home", to: PATHS.HOME },
  { label: "About", to: PATHS.ABOUT },
  { label: "Activities & Experience", to: PATHS.ACTIVITIES },
  { label: "Itineraries & Services", to: PATHS.ITINERARIES },
  { label: "Map", to: PATHS.MAP },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [scrolled, setScrolled] = useState(false);

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
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        borderTop: "5px solid #dc2626",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.15)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1000,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        boxSizing: "border-box",
        transition: "box-shadow 0.3s ease",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          height: "80px",
          maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}>

          {/* Logo */}
          <Link to={PATHS.HOME} style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
              <span style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#9ca3af",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}>
                Explore Nepal
              </span>
              <span style={{
                fontSize: "clamp(18px, 2.5vw, 28px)",
                fontWeight: "900",
                color: "#1e3a5f",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                lineHeight: 1.2,
              }}>
                Everest Dudhkoshi
              </span>
              <span style={{
                fontSize: "clamp(9px, 1vw, 12px)",
                fontWeight: "800",
                color: "#dc2626",
                letterSpacing: "3px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                Cultural Trail
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}>
              {links.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    textDecoration: "none",
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    fontWeight: "600",
                    color: hovered === label ? "#ffffff" : "#1e3a5f",
                    backgroundColor: hovered === label ? "#dc2626" : "transparent",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.3px",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                background: "none",
                border: "2px solid #1e3a5f",
                borderRadius: "8px",
                padding: "8px 10px",
                cursor: "pointer",
                flexShrink: 0,
                marginLeft: "12px",
                width: "44px",
                height: "44px",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#1e3a5f",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#1e3a5f",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#1e3a5f",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          )}
        </div>

        {/* Mobile Side Drawer */}
        {isMobile && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 998,
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
                transition: "opacity 0.3s ease",
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Drawer Panel */}
            <div style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "min(80vw, 320px)",
              height: "100vh",
              backgroundColor: "#ffffff",
              boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 999,
              boxSizing: "border-box",
              overflowY: "auto",
            }}>

              {/* Drawer Header */}
              <div style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%)",
                padding: "32px 24px 24px",
                borderBottom: "3px solid #dc2626",
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}>
                  <div style={{ lineHeight: 1.3 }}>
                    <div style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}>
                      Explore Nepal
                    </div>
                    <div style={{
                      fontSize: "20px",
                      fontWeight: "900",
                      color: "#ffffff",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.3px",
                    }}>
                      Everest Dudhkoshi
                    </div>
                    <div style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: "#fca5a5",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}>
                      Cultural Trail
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "none",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      cursor: "pointer",
                      color: "#ffffff",
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div style={{
                padding: "16px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flex: 1,
              }}>
                <p style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#9ca3af",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  margin: "8px 0 12px 8px",
                }}>
                  Menu
                </p>

                {links.map(({ label, to }, index) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    style={{
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#1e3a5f",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#f8fafc",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#dc2626",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: "800",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {index + 1}
                    </span>
                    {label}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer */}
              <div style={{
                padding: "16px 24px",
                borderTop: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
              }}>
                <p style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "0.5px",
                }}>
                  🏔️ Discover the Himalayas
                </p>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: "80px" }} />
    </>
  );
}