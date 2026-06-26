import MapImage from "../../public/images/map.png";

export default function MapSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;700&display=swap');

        #map {
          background: #080c11;
          color: #f0ece3;
          font-family: 'Inter', sans-serif;
          padding-top: 86px;
        }

        /* ── HEADER ── */
        .map-header {
          position: relative;
          padding: clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px) clamp(36px, 5vh, 64px);
          border-bottom: 1px solid rgba(212,168,67,0.15);
          overflow: hidden;
        }
        .map-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 90% 50%, rgba(212,168,67,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .map-eyebrow {
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
        .map-eyebrow::before {
          content: '';
          display: block;
          width: 20px; height: 2px;
          background: #d4a843;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .map-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.06;
          max-width: 600px;
          margin-bottom: 16px;
        }
        .map-header-sub {
          font-size: clamp(0.83rem, 1.4vw, 0.98rem);
          font-weight: 300;
          color: rgba(240,236,227,0.55);
          max-width: 480px;
          line-height: 1.75;
        }
        .map-header-watermark {
          position: absolute;
          right: clamp(16px, 5vw, 80px);
          bottom: -8px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(70px, 12vw, 140px);
          font-weight: 900;
          color: rgba(212,168,67,0.04);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        /* ── MAP BODY ── */
        .map-body {
          padding: clamp(32px, 5vw, 64px) clamp(24px, 6vw, 96px) clamp(48px, 8vh, 96px);
        }

        /* Gold-framed map */
        .map-frame {
          position: relative;
          border: 1px solid rgba(212,168,67,0.25);
          border-radius: 10px;
          overflow: hidden;
          background: #0a0f16;
          box-shadow:
            0 0 0 1px rgba(212,168,67,0.08),
            0 32px 80px rgba(0,0,0,0.7),
            inset 0 0 60px rgba(0,0,0,0.3);
        }

        /* Corner bracket accents */
        .map-frame::before,
        .map-frame::after {
          content: '';
          position: absolute;
          width: 28px; height: 28px;
          border-color: #d4a843;
          border-style: solid;
          z-index: 3;
          pointer-events: none;
          opacity: 0.6;
        }
        .map-frame::before {
          top: 12px; left: 12px;
          border-width: 2px 0 0 2px;
          border-radius: 3px 0 0 0;
        }
        .map-frame::after {
          bottom: 12px; right: 12px;
          border-width: 0 2px 2px 0;
          border-radius: 0 0 3px 0;
        }
        .map-corner-tr,
        .map-corner-bl {
          position: absolute;
          width: 28px; height: 28px;
          border-color: #d4a843;
          border-style: solid;
          z-index: 3;
          pointer-events: none;
          opacity: 0.6;
        }
        .map-corner-tr {
          top: 12px; right: 12px;
          border-width: 2px 2px 0 0;
          border-radius: 0 3px 0 0;
        }
        .map-corner-bl {
          bottom: 12px; left: 12px;
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 3px;
        }

        /* Edge vignette */
        .map-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 55%, rgba(8,12,17,0.5) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* Floating trail badge */
        .map-trail-badge {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          background: rgba(8,12,17,0.82);
          border: 1px solid rgba(212,168,67,0.3);
          border-radius: 20px;
          padding: 6px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }
        .map-trail-badge-dot {
          width: 6px; height: 6px;
          background: #d4a843;
          border-radius: 50%;
          animation: badge-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes badge-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
        .map-trail-badge-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #d4a843;
        }

        .map-img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          filter: brightness(0.93) contrast(1.05) saturate(0.95);
          transition: filter 0.4s ease;
        }
        .map-frame:hover .map-img {
          filter: brightness(1.03) contrast(1.04) saturate(1.05);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          #map { padding-top: 74px; }
        }
        @media (max-width: 768px) {
          .map-header { padding: 40px 20px 32px; }
          .map-header-watermark { display: none; }
          .map-body { padding: 20px 16px 48px; }
          .map-trail-badge { top: 10px; padding: 5px 12px; }
          .map-trail-badge-text { font-size: 9px; letter-spacing: 1.8px; }
        }
        @media (max-width: 480px) {
          .map-frame::before, .map-frame::after,
          .map-corner-tr, .map-corner-bl {
            width: 18px; height: 18px;
          }
          .map-trail-badge { display: none; }
        }
      `}</style>

      <section id="map">

        {/* ── Header ── */}
        <header className="map-header">
          <p className="map-eyebrow">Lower Solukhumbu · Nepal</p>
          <h1>Trail<br />Map</h1>
          <p className="map-header-sub">
            Explore the full Everest Dudhkoshi Cultural Trail — from the Silguri gateway through ancient ridges, sacred temples and up toward Mera Peak.
          </p>
          <span className="map-header-watermark" aria-hidden="true">Map</span>
        </header>

        {/* ── Map ── */}
        <div className="map-body">
          <div className="map-frame">
            <span className="map-corner-tr" aria-hidden="true" />
            <span className="map-corner-bl" aria-hidden="true" />
            <div className="map-vignette" aria-hidden="true" />
            <div className="map-trail-badge" aria-hidden="true">
              <span className="map-trail-badge-dot" />
              <span className="map-trail-badge-text">Everest Dudhkoshi Cultural Trail</span>
            </div>
            <img
              src={MapImage}
              alt="Everest Dudhkoshi Cultural Trail map showing Lower Solukhumbu trekking routes"
              className="map-img"
            />
          </div>
        </div>

      </section>
    </>
  );
}