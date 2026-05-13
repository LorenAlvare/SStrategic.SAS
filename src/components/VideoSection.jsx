import Video1 from "../video/video1.mp4";

export default function VideoSection() {
  return (
    <section className="py-28 bg-primary text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-accent font-bold uppercase tracking-wide">
            SSTrategic en acción
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3 leading-tight">
            Vivimos la prevención en campo
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            Desarrollamos experiencias reales de intervención, capacitación,
            simulaciones y entrenamiento operacional orientadas a fortalecer
            la cultura preventiva en las organizaciones.
          </p>

          {/* BENEFICIOS */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              ✅ Entrenamiento experiencial
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              ✅ Intervención en campo
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              ✅ Cultura preventiva
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              ✅ Respuesta operacional
            </div>

          </div>
        </div>

        {/* VIDEO */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full"></div>

          {/* VIDEO CARD */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black">

            <video
              src={Video1}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[550px] object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}