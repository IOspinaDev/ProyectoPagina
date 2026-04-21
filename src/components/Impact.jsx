import { motion } from "framer-motion";

export default function Impact() {
    return (
        <section className="bg-[#020617] text-white py-20 px-6 md:px-20">

            {/* CONTENEDOR */}
            <div className="max-w-6xl mx-auto">

                {/* TITULO */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Impacto y Proyección Comunitaria
                    </h2>

                    <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                        Este proceso no solo fortalece habilidades digitales, sino que impulsa
                        la preservación cultural, la sostenibilidad del manglar y la generación
                        de oportunidades económicas para las comunidades del Pacífico.
                    </p>
                </motion.div>

                {/* INDICADORES */}
                <div className="grid md:grid-cols-4 gap-8 text-center mb-20">

                    {[
                        { value: "+50", label: "Beneficiarios directos" },
                        { value: "2", label: "Procesos formativos" },
                        { value: "100%", label: "Enfoque comunitario" },
                        { value: "1", label: "Territorio impactado" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/5 p-6 rounded-xl backdrop-blur-md"
                        >
                            <h3 className="text-3xl font-bold text-green-400">
                                {item.value}
                            </h3>
                            <p className="text-gray-300 mt-2">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* TEXTO FINAL */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <p className="text-gray-300 leading-relaxed">
                        La piangua no es solo un recurso, es identidad, cultura y sustento.
                        Este proyecto representa un paso hacia el fortalecimiento de las
                        comunidades desde su propio conocimiento, integrando herramientas
                        digitales para proyectar su valor al mundo sin perder su esencia.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-4"
                >
                    <button className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                        Apoyar el Proyecto
                    </button>

                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20el%20proyecto%20de%20la%20piangua",
                                "_blank"
                            )
                        }
                        className="bg-green-500 px-6 py-3 rounded-full"
                    >
                        Contactar
                    </button>
                </motion.div>

            </div>
        </section>
    );
}