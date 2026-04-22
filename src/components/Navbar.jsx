import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const sections = [
    { id: "hero", label: "INICIO" },
    { id: "about", label: "PROYECTO" },
    { id: "contexto", label: "CONTEXTO" },
    { id: "piangua", label: "PIANGUA" },
    { id: "talleres", label: "FORMACIÓN" },
    { id: "galeria", label: "GALERÍA" },
    { id: "contacto", label: "CONTACTO" },
  ];

  useEffect(() => {
    const ids = sections.map(s => s.id);

    // 1) Observer más permisivo (detecta entrada antes)
    const observer = new IntersectionObserver(
      (entries) => {
        // Nos quedamos con la sección más visible en este batch
        const visibles = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibles.length > 0) {
          setActive(visibles[0].target.id);
        }
      },
      {
        // Activa cuando el top de la sección entra al viewport (debajo del navbar)
        rootMargin: "-80px 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6], // varios puntos, más estable
      }
    );

    const elements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);

    elements.forEach(el => observer.observe(el));

    // 2) Fallback por scroll (por si el observer no decide bien)
    const onScroll = () => {
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // Cuando el top pasa el navbar (~80px), consideramos activa
        if (rect.top <= 90) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Disparo inicial
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${active !== "hero"
        ? "bg-black/80 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


        <ul className="flex gap-6 justify-center w-full">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => scrollTo(sec.id)}
                className={`relative pb-1 transition ${active === sec.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                {sec.label}

                {/* Línea animada */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-green-400 transition-all duration-300 ${active === sec.id ? "w-full" : "w-0"
                    }`}
                />
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}