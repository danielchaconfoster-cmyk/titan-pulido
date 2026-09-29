import { MapPin } from "lucide-react";

export default function CoverageBanner() {
  const regions = [
    {
      name: "Región Metropolitana",
      detail: "Santiago Oriente, Centro, Poniente y parques industriales de Quilicura, Lampa y Pudahuel.",
    },
    {
      name: "VI Región (Rancagua)",
      detail: "Rancagua, Machalí, Graneros, San Francisco de Mostazal y sectores agroindustriales.",
    },
    {
      name: "V Región (Costa)",
      detail: "Viña del Mar, Valparaíso, Concón, Quilpué, Villa Alemana y áreas logísticas.",
    },
  ];

  return (
    <section className="bg-[#090a0c] border-t border-zinc-900 py-20 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-light text-zinc-500 uppercase tracking-widest mb-3">
            Cobertura & Operación
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Maquinaria pesada en faena directa.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Trasladamos generadores propios, pulidoras planetarias de 650 mm y aspiración ciclónica a cualquier punto de la zona central.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-8 border-t border-zinc-900">
          {regions.map((reg, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-base">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{reg.name}</span>
              </div>
              <p className="text-sm font-light text-zinc-400 leading-relaxed">
                {reg.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
