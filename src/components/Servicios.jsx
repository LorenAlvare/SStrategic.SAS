import { useState } from "react";
import { Check } from "lucide-react";
import SST from "../img/SST.jpeg";
import SEGURIDAD_VIAL from "../img/SEGURIDAD_VIAL.jpeg";
import DRON from "../img/DRON.jpeg";
import GESTION_RIESGO from "../img/GESTION_RIESGO.jpeg";
import RV from "../img/RV.jpeg";

export default function Servicios() {
  const servicios = {
    "SG-SST": {
      titulo: "Seguridad y Salud en el Trabajo",
      subtitulo: "Implementamos sistemas funcionales, auditables y operativos.",
      imagen: SST,
      items: [
        "Diseño y optimización del SG-SST",
        "Auditorías estratégicas",
        "Investigación de incidentes",
        "Planes de mejora ejecutivos",
      ],
      beneficios: ["Cumpla", "Controle", "Prevenga"],
    },

    PESV: {
      titulo: "Seguridad Vial y PESV",
      subtitulo: "Convertimos el riesgo vial en control estratégico.",
      imagen: SEGURIDAD_VIAL,
      items: [
        "Implementación PESV",
        "Protocolos de actuación en siniestros",
        "Formación de conductores",
        "Gestión de fatiga y comportamiento seguro",
        "Análisis de eventos críticos",
      ],
      beneficios: ["Menos accidentalidad", "Más control operacional"],
    },

    Brigadas: {
      titulo: "Gestión del Riesgo y Brigadas de Emergencia",
      subtitulo: "Preparamos equipos que responden, no que improvisan.",
      imagen: GESTION_RIESGO,
      items: [
        "Diseño y fortalecimiento de brigada",
        "Simulacros realistas en entorno operativo",
        "Planes de emergencia",
        "Evaluación de riesgos críticos",
        "Formación a comunidades vulnerables",
      ],
      beneficios: ["Respuesta efectiva", "Liderazgo en crisis"],
    },

    "Alto Impacto": {
      titulo: "Servicios Especiales de Alto Impacto",
      subtitulo:
        "Capacitamos con un enfoque diferente y generamos experiencias que transforman conductas.",
      imagen: RV,
      items: [
        "Simulaciones con gafas VR",
        "Entrenamiento inmersivo en riesgo vial",
        "Entrenamiento inmersivo en evacuación",
        "Mayor retención del aprendizaje",
        "Reducción de errores reales",
      ],
      beneficios: [
        "Aprendizaje experiencial",
        "Mayor retención",
        "Reducción de errores reales",
      ],
    },

    Drones: {
      titulo: "Análisis Operativo con Dron",
      subtitulo:
        "Registro de perspectiva superior para diagnóstico y soporte técnico.",
      imagen: DRON,
      items: [
        "Inspección de áreas críticas",
        "Simulacros masivos",
        "Control de riesgos en patios y parqueaderos",
        "Evidencia técnica documental",
      ],
      beneficios: ["Visión estratégica", "Diagnóstico real", "Soporte técnico"],
    },
  };

  const [activo, setActivo] = useState("SG-SST");
  const servicioActual = servicios[activo];

  return (
    <section id="servicios" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-wide">
            Servicios
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            Soluciones integrales para empresas seguras
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Acompañamos a las organizaciones en el cumplimiento normativo, la
            prevención de accidentes y el fortalecimiento de una cultura de
            seguridad sostenible.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {Object.keys(servicios).map((servicio) => (
            <button
              key={servicio}
              onClick={() => setActivo(servicio)}
              className={`px-5 py-3 rounded-full font-semibold transition ${
                activo === servicio
                  ? "bg-accent text-primary shadow-md"
                  : "bg-light text-primary hover:bg-secondary hover:text-white"
              }`}
            >
              {servicio}
            </button>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-secondary text-white rounded-3xl p-8 md:p-10 shadow-xl">
            <span className="text-accent font-bold uppercase text-sm">
              Servicio destacado
            </span>

            <h3 className="text-3xl font-extrabold mt-3">
              {servicioActual.titulo}
            </h3>

            <p className="text-gray-200 mt-3">{servicioActual.subtitulo}</p>

            <ul className="mt-8 space-y-4">
              {servicioActual.items.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="bg-accent text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold">
                    <Check size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              {servicioActual.beneficios.map((beneficio, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-bold"
                >
                  {beneficio}
                </span>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-block mt-8 bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
            >
              Solicitar este servicio
            </a>
          </div>

          <div
            className="min-h-[360px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(10,22,40,0.25), rgba(10,22,40,0.25)), url(${servicioActual.imagen})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
