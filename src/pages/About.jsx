export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');

        #about {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
          background: #080c11;
        }

        /* ── Hero banner that bleeds full width ── */
        .about-banner {
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #0d1520 0%, #111c2e 50%, #080c11 100%);
          overflow: hidden;
          padding: clamp(72px, 12vw, 140px) clamp(24px, 6vw, 96px) clamp(64px, 10vw, 120px);
        }

        /* Full-bleed mountain silhouette at bottom */
        .about-banner::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 120px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'%3E%3Cpath d='M0,120 L0,80 L120,30 L240,65 L360,10 L480,50 L600,20 L720,60 L840,15 L960,55 L1080,25 L1200,60 L1320,30 L1440,70 L1440,120 Z' fill='%23080c11'/%3E%3C/svg%3E") no-repeat bottom/cover;
          pointer-events: none;
        }

        .about-banner-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 820px) {
          .about-banner-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* ── Left: Text block ── */
        .about-eyebrow {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #d4a843;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 20px;
          padding: 6px 12px;
          border: 1px solid rgba(212,168,67,0.3);
          border-radius: 3px;
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.06;
          color: #f0ece3;
          margin: 0 0 24px 0;
        }
        .about-title em {
          font-style: italic;
          color: #d4a843;
        }

        .about-rule {
          width: 56px;
          height: 2px;
          background: linear-gradient(to right, #d4a843, transparent);
          border: none;
          margin-bottom: 28px;
        }

        .about-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          font-weight: 300;
          color: rgba(240,236,227,0.68);
          line-height: 1.9;
          margin-bottom: 20px;
        }

        .about-body:last-of-type { margin-bottom: 0; }

        /* ── Right: Visual card grid ── */
        .about-visual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 12px;
        }

        .about-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,168,67,0.14);
          border-radius: 12px;
          padding: 28px 22px;
          transition: border-color 0.25s, background 0.25s;
        }
        .about-card:hover {
          border-color: rgba(212,168,67,0.4);
          background: rgba(212,168,67,0.05);
        }

        .about-card.wide {
          grid-column: span 2;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 28px;
        }

        .card-icon {
          font-size: 1.8rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .card-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 900;
          color: #d4a843;
          line-height: 1;
          margin-bottom: 4px;
        }

        .card-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(240,236,227,0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,236,227,0.6);
          line-height: 1.6;
          margin-top: 4px;
        }

        /* ── Values strip — full bleed below ── */
        .about-strip {
          width: 100%;
          background: #0a0e15;
          border-top: 1px solid rgba(212,168,67,0.1);
          border-bottom: 1px solid rgba(212,168,67,0.1);
          padding: clamp(40px, 6vw, 72px) clamp(24px, 6vw, 96px);
        }

        .about-strip-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(24px, 4vw, 56px);
        }

        @media (max-width: 640px) {
          .about-strip-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .strip-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .strip-item-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: rgba(212,168,67,0.6);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .strip-item-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 700;
          color: #f0ece3;
        }

        .strip-item-body {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(240,236,227,0.55);
          line-height: 1.75;
        }

        .strip-divider {
          width: 32px;
          height: 1.5px;
          background: #d4a843;
          border: none;
          margin-bottom: 4px;
        }
      `}</style>

      <section id="about">

        {/* ── Main banner ── */}
        <div className="about-banner">
          <div className="about-banner-inner">

            {/* Left text */}
            <div>
              <span className="about-eyebrow">Our Story</span>
              <h2 className="about-title">
                Rooted in the<br />
                <em>Solukhumbu</em> Valley
              </h2>
              <hr className="about-rule" />
              <p className="about-body">
                The Everest Dudhkoshi Cultural Trail winds through the lower reaches of Solukhumbu —
                a region long overshadowed by the crowds heading to Base Camp. The real story of Nepal
                lives here: in Sherpa villages, prayer flags strung between rhododendron forests, and
                the Dudhkoshi River rushing below ancient ridgelines.
              </p>
              <p className="about-body">
                Founded by local guides with deep roots in the region, our mission is to connect
                travellers with the living culture of Lower Solukhumbu while supporting the
                communities that have called these mountains home for generations.
              </p>
            </div>

            {/* Right card grid */}
            <div className="about-visual">
              <div className="about-card">
                <div className="card-num">12+</div>
                <div className="card-label">Years guiding</div>
              </div>
              <div className="about-card">
                <div className="card-num">3,400m</div>
                <div className="card-label">Max altitude</div>
              </div>
              <div className="about-card">
                <div className="card-num">8</div>
                <div className="card-label">Village stays</div>
              </div>
              <div className="about-card">
                <div className="card-num">100%</div>
                <div className="card-label">Local team</div>
              </div>
              <div className="about-card wide">
                <span className="card-icon">🏔️</span>
                <div>
                  <div className="card-label" style={{ marginBottom: "6px" }}>Lower Solukhumbu · Nepal</div>
                  <div className="card-desc">
                    A trail less travelled — connecting ancient villages from Salleri to the Dudhkoshi gorge.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Values strip ── */}
        <div className="about-strip">
          <div className="about-strip-inner">
            <div className="strip-item">
              <hr className="strip-divider" />
              <span className="strip-item-eyebrow">Community First</span>
              <h3 className="strip-item-title">Built by locals,<br />for the world</h3>
              <p className="strip-item-body">
                Every guide, cook, and porter on our team comes from the villages you'll sleep in.
                Your journey directly sustains the people who live it year-round.
              </p>
            </div>
            <div className="strip-item">
              <hr className="strip-divider" />
              <span className="strip-item-eyebrow">Slow Travel</span>
              <h3 className="strip-item-title">Walk at the pace<br />of the mountains</h3>
              <p className="strip-item-body">
                We design itineraries around the rhythm of village life — no rushing, no crowds.
                Arrive at a teahouse before dusk. Share dal bhat. Watch the peaks turn pink.
              </p>
            </div>
            <div className="strip-item">
              <hr className="strip-divider" />
              <span className="strip-item-eyebrow">Leave Lightly</span>
              <h3 className="strip-item-title">Trails protected<br />for generations</h3>
              <p className="strip-item-body">
                We follow strict low-impact principles, carry out all waste, and contribute a
                portion of every booking to trail maintenance and reforestation.
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}