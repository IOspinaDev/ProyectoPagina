import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkshopCard from "./components/WorkshopCard";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Impact from "./components/Impact";
import Taller from "./components/Taller";
import Contexto from "./components/Contexto";
import Piangua from "./components/Piangua";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTEXTO */}
      <section id="contexto">
        <Contexto />
      </section>

      {/* PIANGUA */}
      <section id="piangua">
        <Piangua />
      </section>

      {/* TALLERES (SECCIÓN MANUAL) */}
      <section id="talleres" className="bg-[#f1f5f9] py-20 px-6 md:px-20">
        <Taller />
      </section>

      {/* GALERÍA */}
      <section id="galeria">
        <Gallery />
      </section>

      {/* COMPONENTE TALLER (NO SE BORRA, SOLO SE DEJA ABAJO) */}
      <Taller />

      {/* MAPA (si falla, lo comentas) */}
      <Map />

      {/* FOOTER / CONTACTO */}
      <section id="contacto">
        <Impact />
      </section>

      <Footer />
    </>
  );
}

export default App;