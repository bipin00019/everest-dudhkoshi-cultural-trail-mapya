

import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ActivitiesAndExperiences from "./pages/Activities&Experiences";
import TrekkingItineraries from "./pages/Trekking_Itineries";
import Map from "./pages/Map";
import Footer from "./pages/footer";

// Placeholder sections for the remaining nav links
function PlaceholderSection({ id, title }) {
  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",
        background: "#080c11",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid rgba(212,168,67,0.12)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          color: "#d4a843",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          Coming Soon
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 900,
          color: "#f0ece3",
          margin: 0,
        }}>
          {title}
        </h2>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      {/* All page sections stacked for single-scroll */}
      <Homepage />
      <About id="about" />
      <ActivitiesAndExperiences id="activities" />
      <TrekkingItineraries id= "itineraries" />
      <Map id="map" title="Map" />
      <Footer />
    </>
  );
}