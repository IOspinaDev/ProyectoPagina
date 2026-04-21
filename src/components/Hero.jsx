import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const images = [
    // Manglares y recolección
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // Comunidad rural / costa
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    // Trabajo artesanal / territorio
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Carrusel */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 backdrop-blur-sm"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          La Piangua como Identidad,
          <br /> Territorio y Futuro
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl mt-4 text-lg md:text-xl text-gray-200"
        >
          Fortalecemos las comunidades del Pacífico mediante la promoción
          del manglar, la recolección sostenible de la piangua y el uso de
          herramientas digitales para visibilizar su valor cultural y económico.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          {/* BOTÓN 1 */}
          <button
            onClick={() =>
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Conocer el Proyecto
          </button>

          {/* BOTÓN 2 */}
          <button
            onClick={() =>
              document.getElementById("talleres").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Ver Talleres
          </button>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}