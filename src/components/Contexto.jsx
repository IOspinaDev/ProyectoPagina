import { motion } from "framer-motion";

export default function Contexto() {
  return (
    <section
      id="contexto"
      className="relative py-24 px-6 md:px-20 text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Manglar Pacífico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contexto del Territorio
          </h2>

          <p className="mb-4 text-gray-200">
            El proyecto se desarrolla en zonas costeras del Pacífico colombiano,
            donde los ecosistemas de manglar cumplen un papel fundamental en la
            biodiversidad y en la sostenibilidad de las comunidades locales.
          </p>

          <p className="mb-4 text-gray-200">
            En este territorio, la recolección de piangua representa una de las
            principales actividades económicas, especialmente liderada por mujeres
            que han transmitido este conocimiento de generación en generación.
          </p>

          <p className="text-gray-200">
            Sin embargo, estas comunidades enfrentan desafíos como el acceso limitado
            a herramientas digitales, dificultades en la comercialización y baja
            visibilidad de su trabajo en mercados más amplios.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Problemáticas Identificadas
          </h3>

          <ul className="space-y-3 text-gray-200">
            <li>• Acceso limitado a tecnología</li>
            <li>• Comercialización informal</li>
            <li>• Baja visibilidad del territorio</li>
            <li>• Falta de estrategias digitales</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}