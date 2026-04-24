import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import canoa from "../assets/canoa.jpg";
import piangua from "../assets/piangua.jpg";
import pianguera1 from "../assets/pianguera-1.png";

const data = [
  {
    title: "Valor Cultural",
    short: "Una tradición que pasa de generación en generación.",
    full:
      "La recolección de piangua es una práctica muy importante en las comunidades del Pacífico. Durante muchos años, las mujeres han enseñado a sus hijas cómo hacerlo, manteniendo viva esta tradición.",
    img: piangua
  },
  {
    title: "Importancia Económica",
    short: "Una fuente de ingreso para muchas familias.",
    full:
      "Muchas familias dependen de la piangua para vivir. La venden en mercados y restaurantes, lo que les permite conseguir dinero para sus necesidades diarias.",
    img: canoa
  },
  {
    title: "Relación con el Manglar",
    short: "Depende completamente de la naturaleza.",
    full:
      "La piangua vive en los manglares. Si el manglar se daña, la piangua desaparece. Por eso las comunidades también lo protegen.",
    img: pianguera1
  }
];

export default function Piangua() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActive((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = data.length - 1;
      if (next >= data.length) next = 0;
      return next;
    });
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          ¿Qué es la Piangua?
        </h2>
      </div>

      {/* CONTENEDOR */}
      <div className="max-w-6xl mx-auto relative">

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden">

          {/* FLECHA IZQUIERDA */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 z-20 
             text-gray-300 hover:text-black text-4xl font-extralight transition"
          >
            &lt;
          </button>

          {/* FLECHA DERECHA */}
          <button
            onClick={() => paginate(1)}
            className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 z-20 
             text-gray-300 hover:text-black text-4xl font-extralight transition"
          >
            &gt;
          </button>

          {/* CONTENIDO CON GESTO */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 items-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={true}
            dragTransition={{
              bounceStiffness: 120,
              bounceDamping: 20,
              power: 0.3,
              timeConstant: 200
            }}
            onDragEnd={(e, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              // lógica con inercia
              if (offset < -50 || velocity < -500) {
                paginate(1);
              } else if (offset > 50 || velocity > 500) {
                paginate(-1);
              }
            }}
          >


            {/* TEXTO */}
            <div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {data[active].title}
                  </h3>

                  <p className="text-gray-600 mb-3">
                    {data[active].short}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {data[active].full}
                  </p>
                </motion.div>

              </AnimatePresence>
            </div>

            {/* IMAGEN */}
            <div className="relative h-full min-h-[250px] md:min-h-[320px] rounded-xl overflow-hidden shadow-lg">

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  className="absolute inset-0"
                  initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    backgroundImage: `url(${data[active].img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-black/10" />
            </div>

          </motion.div>
          <div className="flex justify-center mt-6 gap-2 select-none">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > active ? 1 : -1);
                  setActive(index);
                }}
                className="relative flex items-center justify-center outline-none focus:outline-none focus:ring-0 select-none"
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 ${active === index
                      ? "w-6 bg-black"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}