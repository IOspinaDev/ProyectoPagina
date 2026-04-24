import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import t1 from "../assets/pianguera-2.png";
import t2 from "../assets/pianguera-3.png";
import t3 from "../assets/pianguera-4.jpg";
import t4 from "../assets/sopa-piangua.jpg";

const talleres = [
  {
    title: "Alfabetización Digital",
    desc: "Uso básico de celulares y herramientas digitales.",
    full: "Aprenden a usar celulares, redes y herramientas digitales para mejorar su comunicación y oportunidades.",
    img: t1
  },
  {
    title: "Comercialización",
    desc: "Venta de productos en medios digitales.",
    full: "Se enseñan estrategias para vender productos como la piangua en redes sociales.",
    img: t2
  },
  {
    title: "Cuidado del Manglar",
    desc: "Protección del ecosistema.",
    full: "Se promueve el cuidado del manglar para garantizar la sostenibilidad.",
    img: t3
  },
  {
    title: "Emprendimiento",
    desc: "Creación de negocios locales.",
    full: "Se apoya la creación de negocios basados en productos del territorio.",
    img: t4
  }
];

export default function Taller() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);

  const filtered = talleres.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  // ⌨️ navegación teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (!filtered.length) return;

      if (e.key === "ArrowRight") {
        setActive(prev =>
          prev === null ? 0 : (prev + 1) % filtered.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActive(prev =>
          prev === null
            ? 0
            : (prev - 1 + filtered.length) % filtered.length
        );
      }

      if (e.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered]);

  return (
    <section className="py-24 px-6 md:px-20 bg-white">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Talleres
        </h2>

        <input
          type="text"
          placeholder="Buscar taller..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full max-w-md px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              layout
              onClick={() => setActive(isActive ? null : index)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-md bg-white transition ${
                isActive
                  ? "col-span-full md:grid md:grid-cols-2"
                  : ""
              }`}
            >
              {/* IMAGEN */}
              <motion.div
                layout
                className={`bg-cover bg-center ${
                  isActive ? "h-64 md:h-full" : "h-40"
                }`}
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* TEXTO */}
              <motion.div layout className="p-4 md:p-6 relative">
                
                {isActive && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(null);
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-black"
                  >
                    ✕
                  </button>
                )}

                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-700 mt-4 leading-relaxed"
                    >
                      {item.full}
                    </motion.p>
                  )}
                </AnimatePresence>

              </motion.div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}