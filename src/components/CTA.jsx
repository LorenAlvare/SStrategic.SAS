export default function CTA() {
  return (
    <section className="bg-accent text-primary py-14 px-6 text-center">
      <h2 className="text-3xl font-bold">
        ¿Listo para fortalecer la seguridad de tu empresa?
      </h2>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#contacto"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Solicitar asesoría
        </a>

        <a
          href="tel:+573208402820"
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Llamar ahora
        </a>
      </div>
    </section>
  );
}
