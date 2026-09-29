import TitanLogo from "@/components/TitanLogo";
import { MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.";

  return (
    <footer className="bg-[#08090b] text-zinc-400 border-t border-zinc-900 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Marca con Logo Titan Pulido */}
          <div className="space-y-4">
            <TitanLogo size={40} />
            <p className="text-zinc-400 text-xs font-light leading-relaxed pt-1">
              Desbaste diamantado, densificación molecular con silicato de litio y restauración mecánica de superficies minerales continuas.
            </p>
          </div>

          {/* Columna 2: Cobertura Operativa */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-xs tracking-wider uppercase">
              Zonas de Faena
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                <span>Santiago (Región Metropolitana)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                <span>Rancagua & Machalí (VI Región)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                <span>Valparaíso, Viña del Mar & Concón (V)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                <span>Proyectos industriales en regiones</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Especialidades */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-xs tracking-wider uppercase">
              Sustratos
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>Hormigón & radier afinado</li>
              <li>Pavimentos para salas de venta</li>
              <li>Mármol, terrazo y granito noble</li>
              <li>Revestimientos epóxicos sanitarios</li>
              <li>Parquet y maderas nativas</li>
            </ul>
          </div>

          {/* Columna 4: Contacto Inmediato */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-xs tracking-wider uppercase">
              Atención Técnica
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Atención y presupuesto preliminar directo con maestro de obra por WhatsApp.
            </p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-4 py-2.5 uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] font-mono gap-4">
          <p>© {currentYear} Titan Pulido. Todos los derechos reservados.</p>
          <p>Equipamiento industrial propio · Garantía técnica por escrito</p>
        </div>
      </div>
    </footer>
  );
}
