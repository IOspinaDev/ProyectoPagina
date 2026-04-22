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
import Piangua from "./components/PianguaS";

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

        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Procesos de Formación Comunitaria
          </h2>

          <p className="text-gray-600 mt-4">
            Espacios diseñados para fortalecer las capacidades digitales de la comunidad,
            promoviendo la visibilización del territorio, la cultura del manglar y la
            comercialización de la piangua desde un enfoque sostenible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <WorkshopCard
            title="Taller de Promoción Digital del Territorio"
            description="Proceso formativo orientado a la creación de contenido digital para visibilizar el territorio, la cultura del manglar y el valor económico de la piangua."
            objectives={[
              "Creación de contenido audiovisual",
              "Narrativas digitales del territorio",
              "Posicionamiento de productos locales"
            ]}
            resources={[
              "Transporte para beneficiarios",
              "Alimentación (almuerzos y refrigerios)",
              "Material pedagógico",
              "Equipos audiovisuales"
            ]}
          />

          <WorkshopCard
            title="Taller Práctico de Redes Sociales"
            description="Capacitación enfocada en el uso estratégico de redes sociales para fortalecer la presencia digital de la comunidad y mejorar la comercialización."
            objectives={[
              "Gestión de redes sociales",
              "Estrategias de contenido digital",
              "Interacción con clientes potenciales"
            ]}
            resources={[
              "Transporte",
              "Alimentación",
              "Material de estudio",
              "Equipos tecnológicos"
            ]}
          />

        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria">
        <Gallery />
      </section>

      {/* COMPONENTE TALLER (NO SE BORRA, SOLO SE DEJA ABAJO) */}
      <Taller />

      {/* MAPA (si falla, lo comentas) */}
      <Map />

      {/* IMPACTO */}
      <section id="impacto">
        <Impact />
      </section>

      {/* FOOTER / CONTACTO */}
      <section id="contacto">
  <Footer />
</section>
    </>
  );
}

export default App;