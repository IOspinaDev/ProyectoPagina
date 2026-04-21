import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const sections = ["hero", "about", "talleres", "galeria", "contacto"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // porcentaje visible para activar
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <h1 className="font-bold text-lg">
          ODEMAP
        </h1>

        {/* LINKS */}
        <ul className="flex gap-6">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => scrollTo(sec)}
                className={`capitalize transition ${
                  active === sec
                    ? "text-gray-300 hover:text-green-400 font-semibold"
                    : "text-gray-300 hover:text-green-400 font-semibold"
                }`}
              >
                {sec}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}