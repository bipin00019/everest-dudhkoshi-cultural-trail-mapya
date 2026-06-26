import Mapya_logo from "../../public/images/mapya_logo.jpg";
import Taan_Logo from "../../public/images/Taan-logo.png";
import Undp_logo from "../../public/images/undp-logo.png";
import NTV_logo from "../../public/images/NTV-logo.png";

const developers = [
  {
    logo: Mapya_logo,
    name: "Mapya Dudhkoshi Rural Municipality",
    address: "Khastap, Solukhumbu, Nepal",
    contacts: [
      { label: "Tel/Mob", value: "9852827333, 9860875856" },
      { label: "Email", value: "info@mapyadudhkoshimun.gov.np", href: "mailto:info@mapyadudhkoshimun.gov.np" },
      { label: "Web", value: "www.dudhkoshimun.gov.np", href: "https://www.dudhkoshimun.gov.np" },
    ],
  },
  {
    logo: Taan_Logo,
    name: "Trekking Agencies Association of Nepal",
    address: "Maligaon, Kathmandu, Nepal",
    contacts: [
      { label: "Tel", value: "977-1-4540920, 4540921, 4547473" },
      { label: "Email", value: "info@taan.org.np", href: "mailto:info@taan.org.np" },
      { label: "Web", value: "www.taan.org.np", href: "https://www.taan.org.np" },
      { label: "FB", value: "facebook.com/taan.np", href: "https://www.facebook.com/taan.np" },
    ],
  },
];

const promoters = [
  {
    logo: NTV_logo,
    name: "Nepal Tourism Board",
    address: "Bhrikutimandap, Kathmandu, Nepal",
    contacts: [
      { label: "Tel", value: "977-1-4256909" },
      { label: "Email", value: "info@ntb.org.np", href: "mailto:info@ntb.org.np" },
      { label: "Web", value: "ntb.gov.np", href: "https://www.ntb.gov.np" },
    ],
  },
  {
    logo: Undp_logo,
    name: "UNDP / Sustainable Tourism for Livelihood Recovery Project",
    address: "Bhrikutimandap, Kathmandu, Nepal",
    contacts: [],
  },
];

function OrgCard({ org }) {
  return (
    <div className="ft-org-card">
      <div className="ft-org-logo-wrap">
        <img src={org.logo} alt={org.name} className="ft-org-logo" />
      </div>
      <div className="ft-org-info">
        <p className="ft-org-name">{org.name}</p>
        <p className="ft-org-address">{org.address}</p>
        {org.contacts.length > 0 && (
          <ul className="ft-org-contacts">
            {org.contacts.map((c) => (
              <li key={c.label}>
                <span className="ft-contact-label">{c.label}:</span>{" "}
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="ft-contact-link">
                    {c.value}
                  </a>
                ) : (
                  <span className="ft-contact-value">{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;700&display=swap');

        .ft-root {
          background: #04070b;
          color: #f0ece3;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(212,168,67,0.18);
        }

        /* ── TOP GOLD BAR ── */
        .ft-top-bar {
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4a843 30%, #f0c040 50%, #d4a843 70%, transparent);
        }

        /* ── TRAIL BANNER ── */
        .ft-banner {
          text-align: center;
          padding: clamp(40px, 7vh, 72px) clamp(24px, 6vw, 96px) clamp(32px, 5vh, 56px);
          border-bottom: 1px solid rgba(212,168,67,0.1);
          position: relative;
          overflow: hidden;
        }
        .ft-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,168,67,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-banner-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d4a843;
          margin-bottom: 12px;
        }
        .ft-banner h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3.5vw, 2.6rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 10px;
          background: linear-gradient(110deg, #fff0b3 0%, #f5d98b 30%, #d4a843 60%, #c49030 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ft-banner-sub {
          font-size: clamp(0.8rem, 1.3vw, 0.92rem);
          font-weight: 300;
          color: rgba(240,236,227,0.45);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* ── MAIN GRID ── */
        .ft-main {
          padding: clamp(40px, 6vh, 72px) clamp(24px, 6vw, 96px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        /* ── SECTION BLOCK ── */
        .ft-section {
          padding: 0 clamp(16px, 3vw, 48px) 0 0;
        }
        .ft-section:last-child {
          padding: 0 0 0 clamp(16px, 3vw, 48px);
          border-left: 1px solid rgba(212,168,67,0.1);
        }
        .ft-section-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #d4a843;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ft-section-label::before {
          content: '';
          display: block;
          width: 16px; height: 2px;
          background: #d4a843;
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── ORG CARD ── */
        .ft-org-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ft-org-card:last-child { border-bottom: none; }

        .ft-org-logo-wrap {
          width: 56px;
          height: 56px;
          border-radius: 8px;
          border: 1px solid rgba(212,168,67,0.2);
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 6px;
        }
        .ft-org-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(1.05);
        }

        .ft-org-info { flex: 1; min-width: 0; }
        .ft-org-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 700;
          color: #f0ece3;
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .ft-org-address {
          font-size: 0.75rem;
          font-weight: 300;
          color: rgba(240,236,227,0.4);
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .ft-org-contacts {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ft-org-contacts li {
          font-size: 0.73rem;
          line-height: 1.5;
          color: rgba(240,236,227,0.45);
        }
        .ft-contact-label {
          font-weight: 700;
          color: rgba(212,168,67,0.7);
          margin-right: 2px;
        }
        .ft-contact-value {
          font-weight: 300;
        }
        .ft-contact-link {
          font-weight: 300;
          color: rgba(240,236,227,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-contact-link:hover { color: #d4a843; }

        /* ── DIVIDER ── */
        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,67,0.15), transparent);
          margin: 0 clamp(24px, 6vw, 96px);
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          padding: clamp(20px, 3vh, 28px) clamp(24px, 6vw, 96px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ft-bottom-copy {
          font-size: 11px;
          font-weight: 300;
          color: rgba(240,236,227,0.3);
          line-height: 1.6;
        }
        .ft-bottom-copy strong {
          font-weight: 600;
          color: rgba(240,236,227,0.5);
        }
        .ft-bottom-trail {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(212,168,67,0.4);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ft-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ft-section:last-child {
            padding: clamp(32px, 4vh, 48px) 0 0;
            border-left: none;
            border-top: 1px solid rgba(212,168,67,0.1);
          }
          .ft-section { padding: 0; }
        }
        @media (max-width: 480px) {
          .ft-banner { padding: 36px 20px 28px; }
          .ft-main { padding: 36px 20px; }
          .ft-bottom { padding: 18px 20px; flex-direction: column; align-items: flex-start; gap: 8px; }
          .ft-divider { margin: 0 20px; }
          .ft-org-logo-wrap { width: 46px; height: 46px; }
        }
      `}</style>

      <footer className="ft-root">

        {/* Gold top bar */}
        <div className="ft-top-bar" />

        {/* Trail name banner */}
        <div className="ft-banner">
          <p className="ft-banner-eyebrow">Lower Solukhumbu · Nepal</p>
          <h2>Everest Dudhkoshi<br />Cultural Trail</h2>
          <p className="ft-banner-sub">Where the river meets the roof of the world</p>
        </div>

        {/* Developed & Promoted columns */}
        <div className="ft-main">

          {/* Developed by */}
          <div className="ft-section">
            <p className="ft-section-label">Developed &amp; Promoted By</p>
            {developers.map((org) => (
              <OrgCard key={org.name} org={org} />
            ))}
          </div>

          {/* Promotion */}
          <div className="ft-section">
            <p className="ft-section-label">Promotion</p>
            {promoters.map((org) => (
              <OrgCard key={org.name} org={org} />
            ))}
          </div>

        </div>

        <div className="ft-divider" />

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-bottom-copy">
            © {year} <strong>Mapya Dudhkoshi Rural Municipality</strong> &amp; <strong>Trekking Agencies Association of Nepal.</strong> All rights reserved.
          </p>
          <span className="ft-bottom-trail">Everest Dudhkoshi Cultural Trail</span>
        </div>

      </footer>
    </>
  );
}