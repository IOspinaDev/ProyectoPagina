import { motion } from "framer-motion";

export default function Gallery() {
  const items = [
    {
      title: "Manglar y Territorio",
      desc: "Ecosistema vital donde nace la piangua y se sostiene la vida comunitaria.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Recolección Ancestral",
      desc: "Prácticas tradicionales transmitidas de generación en generación.",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    },
    {
      title: "Comunidad y Cultura",
      desc: "La piangua como eje de identidad y organización social.",
      img: "https://images.unsplash.com/photo-1735753046715-0c623431ddb8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Trabajo Artesanal",
      desc: "Esfuerzo diario que conecta tradición y sustento económico.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Gastronomía Local",
      desc: "Sabores del Pacífico que representan historia y territorio.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
      title: "Futuro Digital",
      desc: "Nuevas herramientas para visibilizar y comercializar la piangua.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6">
      
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Cultura, Territorio y Piangua
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Un recorrido visual por el ecosistema, las prácticas ancestrales y
          la vida comunitaria que rodea la piangua en el Pacífico colombiano.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            {/* Imagen */}
            <img
              src={item.img}
              className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-200">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}