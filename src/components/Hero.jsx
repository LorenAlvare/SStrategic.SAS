import logo from "../img/logo.png";
import FONDO from "../img/FONDO.jpeg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-cover bg-center text-white pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(10,22,40,0.85), rgba(10,22,40,0.85)), url(${FONDO})`
      }}  
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* TEXTO */}
        <div>
          <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold mb-5">
            Líderes en prevención de riesgos
          </span>

          <h1 className="max-w-3xl text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Anticipamos el riesgo antes de que se convierta en pérdida.
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed">
            En SSTrategic SAS transformamos la Seguridad y Salud en el Trabajo
            en una herramienta estratégica de gestión empresarial.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-accent">+200</h3>
              <p className="text-sm text-gray-300">empresas asesoradas</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent">+15</h3>
              <p className="text-sm text-gray-300">años de experiencia</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent">100%</h3>
              <p className="text-sm text-gray-300">cumplimiento normativo</p>
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#servicios"
              className="bg-accent text-primary px-7 py-3 rounded-lg font-bold text-center hover:scale-105 transition"
            >
              Conocer servicios
            </a>

            <a
              href="#contacto"
              className="border border-white px-7 py-3 rounded-lg font-bold text-center hover:bg-white hover:text-primary transition"
            >
              Solicitar asesoría
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>

            <img
              src={logo}
              alt="Logo SSTrategic"
              className="relative w-72 md:w-96 drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
