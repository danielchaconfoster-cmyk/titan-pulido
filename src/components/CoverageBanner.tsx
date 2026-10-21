import { MapPin } from "lucide-react";

const regions = [
  { name: "Santiago y Región Metropolitana", detail: "Santiago y comunas como Quilicura, Lampa y Pudahuel." },
  { name: "Rancagua y alrededores", detail: "Rancagua, Machalí, Graneros y San Francisco de Mostazal." },
  { name: "V Región", detail: "Valparaíso, Viña del Mar, Concón, Quilpué y Villa Alemana." },
];

export default function CoverageBanner() {
  return (
    <section id="cobertura" aria-labelledby="coverage-title" className="bg-[#08090b] border-t border-zinc-900 py-16 sm:py-20 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 id="coverage-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">Dónde trabajamos.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-10 mt-8">
          {regions.map((region) => <div key={region.name}><h3 className="flex items-start gap-2 text-base font-medium text-white"><MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" aria-hidden="true" />{region.name}</h3><p className="mt-2 text-sm font-light text-zinc-300 leading-relaxed">{region.detail}</p></div>)}
        </div>
        <p className="mt-7 text-sm text-zinc-400">Para otras comunas o regiones, consulta disponibilidad y condiciones de traslado según tu proyecto.</p>
      </div>
    </section>
  );
}
