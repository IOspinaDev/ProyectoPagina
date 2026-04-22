import { motion } from "framer-motion";

export default function Piangua() {
  return (
    <section id="piangua" className="py-24 px-6 md:px-20 bg-white">
      
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          ¿Qué es la Piangua?
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          La piangua es un molusco bivalvo que habita en los manglares del Pacífico.
          Su recolección no solo representa una fuente de ingreso, sino también una
          tradición cultural profundamente arraigada en las comunidades.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {[
          {
            title: "Valor Cultural",
            text: "La recolección de piangua es una práctica ancestral transmitida entre generaciones, especialmente por mujeres."
          },
          {
            title: "Importancia Económica",
            text: "Es una de las principales fuentes de sustento para muchas familias en zonas costeras."
          },
          {
            title: "Relación con el Manglar",
            text: "Su existencia depende del equilibrio ecológico del manglar, lo que resalta la importancia de su conservación."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}