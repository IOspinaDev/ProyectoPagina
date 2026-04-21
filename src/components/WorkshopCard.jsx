import { motion } from "framer-motion";

export default function WorkshopCard({
  title,
  description,
  objectives,
  resources,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Objetivos */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">
          Objetivos:
        </h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      {/* Recursos */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">
          Recursos incluidos:
        </h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {resources.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}