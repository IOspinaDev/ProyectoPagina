import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#f9fafb] py-20 px-6 md:px-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTO */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Sobre el Proyecto
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 mb-4 leading-relaxed"
          >
            Este proyecto nace desde el territorio, reconociendo la piangua como
            un recurso fundamental del ecosistema de manglar y como un eje
            cultural, social y económico para las comunidades del Pacífico
            colombiano. Más que un producto, la piangua representa una tradición
            ancestral que conecta a las familias con su entorno natural y su
            identidad colectiva.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 mb-4 leading-relaxed"
          >
            A través de procesos de formación, el proyecto busca fortalecer las
            capacidades locales en el uso de herramientas digitales, permitiendo
            visibilizar el valor cultural de la piangua, mejorar su
            comercialización y generar nuevas oportunidades económicas sin
            perder el enfoque de sostenibilidad y respeto por el manglar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-700 leading-relaxed"
          >
            De esta manera, se promueve una integración entre saberes
            tradicionales y herramientas tecnológicas, impulsando el desarrollo
            comunitario desde una perspectiva que prioriza el territorio, la
            cultura y la autonomía de sus habitantes.
          </motion.p>
        </div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </motion.div>

      </div>
    </section>
  );
}