import TitanLogo from "@/components/TitanLogo";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/56912345678?text=Hola%20Titan%20Pulidos,%20quisiera%20m%C3%A1s%20informaci%C3%B3n.";

  return (
    <footer className="bg-[#090a0d] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Marca con Logo Oficial */}
          <div className="space-y-4">
            <TitanLogo size={46} />
            <p className="text-slate-400 text-xs leading-relaxed pt-1">
              Desbaste diamantado, densificado químico y restauración técnica de pisos de hormigón, mármol, granito y maderas. Faenas residenciales, comerciales e industriales.
            </p>
          </div>

          {/* Columna 2: Cobertura */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Zonas de Faena</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Santiago (Región Metropolitana)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Rancagua y Machalí (VI Región)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Valparaíso, Viña del Mar y Concón (V)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Proyectos industriales en regiones</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios y Contacto */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Contacto Directo</h4>
            <div className="space-y-2 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +56 9 1234 5678</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Lunes a Sábado: 08:00 a 19:30 hrs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Turnos nocturnos previa coordinación</span>
              </div>
            </div>
          </div>

          {/* Columna 4: Servicios */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Especialidades</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Hormigón & radier diamantado espejo</li>
              <li>• Revestimientos epóxicos y autonivelantes</li>
              <li>• Cristalizado de mármol y granito al agua</li>
              <li>• Vitrificado de parquet 99% sin polvo</li>
              <li>• Densificado antipolvo con silicato de litio</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© {currentYear} Titan Pulidos. Todos los derechos reservados.</p>
          <p>Equipamiento industrial propio · Facturación formal y garantía técnica.</p>
        </div>
      </div>
    </footer>
  );
}
