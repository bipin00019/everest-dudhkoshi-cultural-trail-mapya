import Himalayas from '../../public/images/himalayas.jpg';

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

        .about-banner {
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #0d1520 0%, #111c2e 50%, #080c11 100%);
          overflow: hidden;
          padding: clamp(72px, 12vw, 140px) clamp(24px, 6vw, 96px) clamp(64px, 10vw, 120px);
        }

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
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* ── Left text ── */
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
          font-size: clamp(2rem, 4.5vw, 3.4rem);
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

        /* Section sub-heading inside body */
        .about-section-label {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: rgba(212,168,67,0.7);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        .about-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.88rem, 1.15vw, 0.97rem);
          font-weight: 300;
          color: rgba(240,236,227,0.68);
          line-height: 1.95;
          margin: 0 0 18px 0;
        }
        .about-body:last-of-type { margin-bottom: 0; }

        /* Highlight key phrase */
        .about-body strong {
          font-weight: 500;
          color: rgba(240,236,227,0.88);
        }

        /* Thin divider between paragraphs */
        .about-inner-rule {
          width: 100%;
          height: 1px;
          background: rgba(212,168,67,0.1);
          border: none;
          margin: 24px 0;
        }

        /* Stat pills row */
        .about-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .about-stat-pill {
          display: flex;
          flex-direction: column;
          background: rgba(212,168,67,0.07);
          border: 1px solid rgba(212,168,67,0.2);
          border-radius: 8px;
          padding: 12px 18px;
          min-width: 90px;
        }

        .stat-pill-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #d4a843;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-pill-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: rgba(240,236,227,0.4);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* ── Right photo ── */
        .about-photo-wrap {
          position: sticky;
          top: 100px;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 16px;
          overflow: hidden;
        }

        .about-photo-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          border: 1.5px solid rgba(212,168,67,0.25);
          z-index: 2;
          pointer-events: none;
        }

        .about-photo-wrap::after {
          content: '';
          position: absolute;
          inset: 14px -14px -14px 14px;
          border: 1.5px solid rgba(212,168,67,0.15);
          border-radius: 16px;
          z-index: 0;
          pointer-events: none;
        }

        .about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition: transform 0.6s ease;
        }
        .about-photo-wrap:hover .about-photo {
          transform: scale(1.03);
        }

        .about-photo-vignette {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 45%;
          background: linear-gradient(to top, rgba(8,12,17,0.6), transparent);
          border-radius: 0 0 16px 16px;
          z-index: 2;
          pointer-events: none;
        }

        .about-photo-pill {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          background: rgba(8,12,17,0.72);
          border: 1px solid rgba(212,168,67,0.35);
          border-radius: 30px;
          padding: 7px 14px;
          display: flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(8px);
        }

        .about-photo-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d4a843;
          flex-shrink: 0;
        }

        .about-photo-pill-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(240,236,227,0.85);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        /* Elevation badge top-right of photo */
        .about-photo-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 3;
          background: rgba(8,12,17,0.72);
          border: 1px solid rgba(212,168,67,0.3);
          border-radius: 8px;
          padding: 8px 13px;
          backdrop-filter: blur(8px);
          text-align: right;
        }

        .badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 900;
          color: #d4a843;
          line-height: 1;
        }

        .badge-label {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: rgba(240,236,227,0.45);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 3px;
        }

        /* ── Values strip ── */
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

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-banner-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-photo-wrap {
            aspect-ratio: 16 / 9;
            order: -1;
            position: static;
          }

          .about-photo-wrap::after { display: none; }

          .about-strip-inner {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 580px) {
          .about-banner {
            padding: 52px 20px 80px;
          }

          .about-photo-wrap {
            aspect-ratio: 3 / 2;
            border-radius: 12px;
          }

          .about-photo { border-radius: 12px; }

          .about-stats {
            gap: 8px;
          }

          .about-stat-pill {
            padding: 10px 14px;
            min-width: 80px;
          }

          .about-strip {
            padding: 36px 20px;
          }

          .about-strip-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>

      <section id="about">

        <div className="about-banner">
          <div className="about-banner-inner">

            {/* ── Left: text ── */}
            <div>
              <span className="about-eyebrow">About New Trail</span>

              <h2 className="about-title">
                Everest Dudhkoshi<br />
                <em>Cultural Trail</em>
              </h2>

              <hr className="about-rule" />

              <p className="about-body">
                A new trail, <strong>"Everest Dudhkoshi Cultural Trail"</strong>, has been jointly
                explored and developed by <strong>Mapya Dudhkoshi Rural Municipality (RM)</strong> and
                the <strong>Trekking Agencies' Association of Nepal (TAAN)</strong>, with additional
                support from the NTB/UNDP Sustainable Tourism for Livelihood Recovery Project (STLRP)
                in the southern part of Solukhumbu district.
              </p>

              <p className="about-body">
                The recently explored trail not only serves as a short-days trekking destination for
                observing outstandingly beautiful forests, pasturelands, mountain ranges and peaks —
                including <strong>Mt. Everest</strong> — and experiencing the rich culture and rituals
                of <strong>Khaling Rai and Sherpa</strong> communities, but also serves as a gateway
                to Khumbu and Mera valley treks.
              </p>

              <hr className="about-inner-rule" />

              <p className="about-section-label">The Route</p>

              <p className="about-body">
                Extending from <strong>941 m at Kaya</strong> in the Dudhkoshi River basin to the
                <strong> Aran Danda viewpoint at 3,310 m</strong>, the trail traverses through
                beautiful rural villages of Khaling Rai, Sherpa and many other ethnic communities.
                It winds through beautifully carved terraced farms, folded green forest hills,
                colourful flat meadows and some of the largest patches of rhododendron forests.
              </p>

              <p className="about-body">
                The trail passes through many strategic high-points offering breathtaking views of
                forested hills, mountain ranges and at least <strong>29 peaks in 360°</strong> —
                including <strong>Mt. Everest (8,848.86 m)</strong>, the world's highest summit.
                Like the Pikey area, Mapya Dudhkoshi Rural Municipality is increasingly becoming a
                popular destination for cultural experiences, wilderness, adventure sports and
                mountain panoramas.
              </p>

              {/* Key stats row */}
              <div className="about-stats">
                <div className="about-stat-pill">
                  <span className="stat-pill-num">941m</span>
                  <span className="stat-pill-label">Start</span>
                </div>
                <div className="about-stat-pill">
                  <span className="stat-pill-num">3,310m</span>
                  <span className="stat-pill-label">Viewpoint</span>
                </div>
                <div className="about-stat-pill">
                  <span className="stat-pill-num">29+</span>
                  <span className="stat-pill-label">Peaks</span>
                </div>
                <div className="about-stat-pill">
                  <span className="stat-pill-num">360°</span>
                  <span className="stat-pill-label">Panorama</span>
                </div>
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="about-photo-wrap">
              <img
                src={Himalayas}
                alt="Himalayan landscape — Lower Solukhumbu"
                className="about-photo"
              />
              <div className="about-photo-vignette" />
              <div className="about-photo-badge">
                <div className="badge-num">8,848m</div>
                <div className="badge-label">Mt. Everest</div>
              </div>
              <div className="about-photo-pill">
                <div className="about-photo-pill-dot" />
                <span className="about-photo-pill-text">Lower Solukhumbu · Nepal</span>
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