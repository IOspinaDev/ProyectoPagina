import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import canoa from "../assets/canoa.jpg";
import piangua from "../assets/piangua.jpg";
import pianguera1 from "../assets/pianguera-1.png";
import pianguera2 from "../assets/pianguera-2.png";
import pianguera3 from "../assets/pianguera-3.png";
import pianguera4 from "../assets/pianguera-4.jpg";
import sopa from "../assets/sopa-piangua.jpg";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const refs = useRef([]);

  const items = [

    { title: "Manglar y Territorio", desc: "Ecosistema vital del Pacífico.", img: canoa },
    { title: "Recolección Ancestral", desc: "Saberes heredados.", img: pianguera1 },
    { title: "Vida Comunitaria", desc: "Relación con el territorio.", img: pianguera2 },
    { title: "Trabajo Diario", desc: "Sustento y esfuerzo.", img: pianguera4 },
    { title: "Gastronomía", desc: "Tradición culinaria.", img: sopa },
    { title: "Identidad Cultural", desc: "Raíces del manglar.", img: piangua },
  ];

  return (
    <section id="galeria" className="bg-[#0f172a] text-white py-24 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Cultura, Territorio y Piangua
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Uns recorrido visual por la vida en el manglar, la tradición y la identidad cultural del Pacífico.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-4 auto-rows-[160px] md:auto-rows-[180px]">

        {items.map((item, index) => {
          const isActive = active === index;

          return (
            <motion.div
              ref={(el) => (refs.current[index] = el)}
              key={index}
              layout
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={() => {
                const newIndex = isActive ? null : index;
                setActive(newIndex);

                // Espera a que React renderice la expansión
                setTimeout(() => {
                  if (newIndex !== null && refs.current[newIndex]) {
                    const yOffset = -80;
                    const element = refs.current[newIndex];
                    const y =
                      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }, 200);
              }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden group
              ${isActive ? "md:col-span-2 md:row-span-2 z-20" : ""}
              `}
            >

              {/* Imagen */}
              <motion.img
                src={item.img}
                loading="lazy"
                className={`w-full h-full object-cover transition duration-700
                ${isActive ? "scale-100" : "group-hover:scale-110"}
                `}
                layout
              />

              {/* Overlay */}
              <motion.div
                layout
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                flex flex-col justify-end p-5 transition-all duration-500
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mt-1">
                  {item.desc}
                </p>

                {isActive && (
                  <>
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                      Esta imagen representa la conexión profunda entre la comunidad y el ecosistema del manglar,
                      donde la piangua no solo es sustento económico, sino también identidad cultural.
                    </p>

                    <button
                      className="mt-4 self-start text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(null);
                      }}
                    >
                      Cerrar
                    </button>
                  </>
                )}
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}