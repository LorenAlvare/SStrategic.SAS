import { ShieldCheck, HardHat, TrendingUp, CheckCircle } from "lucide-react";

export default function Nosotros() {
  const valores = [
    {
      icono: <ShieldCheck size={40} className="text-accent" />,
      titulo: "Prevención Estratégica",
      texto: "Diseñamos acciones preventivas alineadas con la realidad operativa de cada empresa.",
    },
    {
      icono: <HardHat size={40} className="text-accent" />,
      titulo: "Intervención en Campo",
      texto: "Acompañamos procesos directamente en las áreas de trabajo para detectar riesgos reales.",
    },
    {
      icono: <TrendingUp size={40} className="text-accent" />,
      titulo: "Liderazgo en Seguridad",
      texto: "Fortalecemos la toma de decisiones y la cultura preventiva en todos los niveles.",
    },
    {
      icono: <CheckCircle size={40} className="text-accent" />,
      titulo: "Excelencia Técnica",
      texto: "Aplicamos criterios normativos, técnicos y prácticos para lograr resultados sostenibles.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-light px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-wide">
            Nosotros
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            Expertos en transformar la cultura de seguridad
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            SSTrategic SAS es una empresa colombiana de consultoría en Seguridad
            y Salud en el Trabajo, enfocada en acompañar a las organizaciones en
            la prevención de riesgos, el cumplimiento normativo y la construcción
            de ambientes laborales más seguros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {valores.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icono}</div>

              <h3 className="text-xl font-bold text-primary">
                {item.titulo}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl md:text-3xl font-bold italic">
              “La prevención no se delega. Se lidera.”
            </p>
            <p className="text-gray-300 mt-3">
              Una filosofía orientada a la acción, la cultura y el compromiso
              organizacional.
            </p>
          </div>

          <div className="bg-accent text-primary px-6 py-3 rounded-full font-bold">
            SSTrategic SAS
          </div>
        </div>
      </div>
    </section>
  );
}