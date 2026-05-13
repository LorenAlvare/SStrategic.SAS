import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-extrabold">
            <span className="text-red-500">SST</span>
            <span className="text-blue-400">rategic</span>
            <span className="text-green-500"> SAS</span>
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Prevención con criterio. Seguridad con estrategia.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-4">Navegación</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#metodologia">Metodología</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-4">Servicios</h4>
          <ul className="space-y-2 text-gray-300">
            <li>SG-SST</li>
            <li>PESV</li>
            <li>Brigadas de Emergencia</li>
            <li>Simulaciones VR</li>
            <li>Análisis con Drones</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Bogotá, Colombia
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +57 321 987 6543
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +57 320 840 2820
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contacto@sstrategic.com.co
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 SSTrategic SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
