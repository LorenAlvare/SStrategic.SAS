import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombre ||
      !form.email ||
      !form.telefono ||
      !form.servicio ||
      !form.mensaje
    ) {
      setError("Por favor completa los campos obligatorios.");
      setEnviado(false);
      return;
    }

    setError("");
    setEnviado(true);

    console.log("Formulario enviado:", form);
  };

  return (
    <section id="contacto" className="py-20 bg-light px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-accent font-bold uppercase tracking-wide">
            Contacto
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            Hablemos de la seguridad de tu empresa
          </h2>

          <p className="mt-5 text-gray-700 leading-relaxed">
            Déjanos tus datos y nuestro equipo se comunicará contigo para
            brindarte una asesoría personalizada.
          </p>

          <div className="mt-8 space-y-4 text-primary">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              contacto@sstrategic.com.co
            </div>
            
            <div className="flex items-center gap-2">
              <Phone size={18} />
              321 987 6543 - 320 840 2820
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Bogotá, Colombia
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              WhatsApp: +57 320 840 2820
            </div>

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-4"
        >
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {enviado && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm">
              Mensaje enviado correctamente. Pronto nos comunicaremos contigo.
            </div>
          )}

          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre *"
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono *"
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Empresa"
            className="w-full p-3 border rounded-lg"
          />

          <select
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Servicio de interés *</option>
            <option value="SG-SST">SG-SST</option>
            <option value="PESV">PESV</option>
            <option value="Brigadas">Brigadas de Emergencia</option>
            <option value="VR">Simulaciones VR</option>
            <option value="Drones">Análisis con Drones</option>
          </select>

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Mensaje *"
            rows="5"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-bold hover:scale-[1.02] transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
