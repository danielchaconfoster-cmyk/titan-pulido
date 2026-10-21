import TitanLogo from "@/components/TitanLogo";
import WhatsAppNativeIcon from "@/components/WhatsAppNativeIcon";
import { CONTACT_PHONE, createWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#08090b] text-zinc-400 border-t border-zinc-800 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          <div>
            <TitanLogo size={40} />
            <p className="mt-4 text-sm leading-relaxed">Pulido, restauración y revestimiento de pisos para viviendas, comercios e industria.</p>
          </div>
          <div>
            <h2 className="text-white font-medium text-xs tracking-wider uppercase">Cobertura</h2>
            <ul className="mt-4 space-y-2 leading-relaxed"><li>Santiago y Región Metropolitana</li><li>Rancagua y alrededores</li><li>Valparaíso, Viña del Mar y alrededores</li><li>Otras zonas: consultar disponibilidad</li></ul>
            <a href="#cobertura" className="inline-flex min-h-11 items-center text-amber-400 hover:text-amber-300">Ver zonas de atención</a>
          </div>
          <div>
            <h2 className="text-white font-medium text-xs tracking-wider uppercase">Servicios</h2>
            <ul className="mt-4 space-y-2 leading-relaxed"><li>Hormigón y radier</li><li>Mármol, granito y terrazo</li><li>Revestimientos epóxicos</li><li>Parquet y madera, previa evaluación</li></ul>
            <a href="#galeria" className="inline-flex min-h-11 items-center text-amber-400 hover:text-amber-300">Ver servicios</a>
          </div>
          <div>
            <h2 className="text-white font-medium text-xs tracking-wider uppercase">Conversemos sobre tu piso</h2>
            <p className="mt-4 leading-relaxed">Fotos, comuna y m² aproximados: con eso podemos comenzar.</p>
            <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group mt-4 inline-flex flex-col items-center gap-2 rounded-md p-1 text-xs text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] group-hover:bg-[#20bd5a] transition-colors"><WhatsAppNativeIcon className="h-5 w-5" /></span>
              <span>Hablar por WhatsApp</span>
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-2 flex min-h-11 items-center text-zinc-300 hover:text-white" aria-label={`Llamar a Titan Pulido al ${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-zinc-400 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Titan Pulido. Todos los derechos reservados.</p>
          <a href="#cotizar" className="inline-flex min-h-11 items-center hover:text-white">Cómo solicitar tu presupuesto</a>
        </div>
      </div>
    </footer>
  );
}
