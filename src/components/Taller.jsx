export default function Taller() {
    return (
      <section
        id="talleres"
        className="bg-[#f1f5f9] py-20 px-6 md:px-20"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Procesos de Formación Comunitaria
          </h2>
  
          <p className="text-gray-600 mt-4">
            Espacios diseñados para fortalecer las capacidades digitales y
            promover la comercialización de la piangua desde el territorio.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tus WorkshopCard aquí */}
        </div>
      </section>
    );
  }