import { Gamepad2, Target, Zap, Activity } from "lucide-react";

export default function Metodologia() {
  const metodos = [
    {
      numero: "01",
      icono: <Gamepad2 size={32} className="text-accent" />,
      titulo: "Juegos de Riesgo",
      texto: "Actividades prácticas para identificar peligros, tomar decisiones y reforzar comportamientos seguros.",
    },
    {
      numero: "02",
      icono: <Target size={32} className="text-accent" />,
      titulo: "Retos Conductuales",
      texto: "Dinámicas orientadas a cambiar hábitos inseguros y fortalecer la responsabilidad individual.",
    },
    {
      numero: "03",
      icono: <Zap size={32} className="text-accent" />,
      titulo: "Dinámicas de Alto Impacto",
      texto: "Experiencias participativas para sensibilizar a los equipos frente a riesgos reales del trabajo.",
    },
    {
      numero: "04",
      icono: <Activity size={32} className="text-accent" />,
      titulo: "Activaciones de Seguridad",
      texto: "Intervenciones cortas y estratégicas para mantener viva la cultura preventiva en la empresa.",
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-primary text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-wide">
            Nuestra Metodología
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
            Aprender seguridad también puede ser una experiencia
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Combinamos formación técnica, participación activa y experiencias
            prácticas para lograr mayor recordación, compromiso y aplicación en
            campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {metodos.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-white/10"
            >
              <div className="text-accent text-4xl font-extrabold">
                {item.numero}
              </div>
            
              <h3 className="text-xl font-bold mt-5">
                {item.titulo}
              </h3>

              <div className="mb-4">{item.icono}</div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}