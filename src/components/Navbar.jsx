import { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scroll ? "bg-primary/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo SSTrategic SAS" className="h-10" />
          <h1 className="font-bold text-lg">
            <span className="text-red-500">SST</span>
            <span className="text-blue-400">rategic</span>
            <span className="text-green-500"> S.A.S</span>
          </h1>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#inicio" className="hover:text-accent transition">Inicio</a>
          <a href="#nosotros" className="hover:text-accent transition">Nosotros</a>
          <a href="#servicios" className="hover:text-accent transition">Servicios</a>
          <a href="#metodologia" className="hover:text-accent transition">Metodología</a>
          <a href="#contacto" className="hover:text-accent transition">Contacto</a>
        </div>

        {/* CTA + TEL */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone size={16} />
            +57 320 840 2820
          </div>
          <a
            href="#contacto"
            className="bg-accent text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
          >
            Cotizar ahora
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-secondary text-white px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#metodologia" onClick={() => setOpen(false)}>Metodología</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-accent text-black py-2 rounded mt-2 text-center"
          >
            Cotizar ahora
          </a>
        </div>
      )}
    </nav>
  );
}
