import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";

const surfaces = [
  {
    id: "hormigon", title: "Hormigón y radier", image: "/media/fotos/piso_pulido_arquitectonico_hd.jpg",
    description: "Pulido para recuperar superficies desgastadas en casas, locales, bodegas y galpones.",
    detail: "Desbaste, reparación de fisuras y acabado según el estado del piso y su uso.",
    service: "pulido de hormigón o radier",
  },
  {
    id: "piedras", title: "Mármol, granito y terrazo", image: "/media/fotos/granito_close_hd.jpg",
    description: "Restauración de pisos y cubiertas que han perdido brillo o presentan marcas de uso.",
    detail: "El tratamiento y el sellado se eligen según la piedra y su condición.",
    service: "restauración de mármol, granito o terrazo",
  },
  {
    id: "epoxicos", title: "Pisos epóxicos", image: "/media/fotos/epoxico_camara_1920.jpg",
    description: "Preparación y revestimiento de pisos para talleres, comercios y espacios industriales.",
    detail: "Evaluamos humedad, tránsito y exposición a químicos para definir el sistema adecuado.",
    service: "un revestimiento epóxico",
  },
];

export default function SurfacesGallery() {
  return (
    <section id="galeria" aria-labelledby="services-title" className="py-16 sm:py-24 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-10">
          <h2 id="services-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">Un tratamiento para cada tipo de piso.</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">Elige el material de tu superficie. Evaluamos su estado para recomendar qué reparar, pulir o revestir.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {surfaces.map((surface) => (
            <article key={surface.id} className="bg-[#0c0d10] border border-zinc-800 overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full bg-zinc-950 border-b border-zinc-800">
                <Image src={surface.image} alt={surface.title} fill className="object-cover" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 33vw, 384px" />
              </div>
              <div className="flex flex-1 flex-col items-start p-6">
                <h3 className="text-lg font-medium text-white">{surface.title}</h3>
                <p className="mt-3 text-sm text-zinc-300 font-light leading-relaxed">{surface.description}</p>
                <p className="mt-3 mb-5 text-xs text-zinc-400 leading-relaxed">{surface.detail}</p>
                <a href={createWhatsAppUrl(surface.service)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors" aria-label={`Consultar por WhatsApp: ${surface.title}`}>
                  Consultar por este piso <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-xl">
            <h3 className="text-base font-medium text-white">¿Tu piso es de parquet o madera?</h3>
            <p className="mt-2 text-sm text-zinc-300 font-light leading-relaxed">Consulta por pulido y vitrificado. La posibilidad de restaurarlo y su terminación se evalúan según el estado de la madera.</p>
          </div>
          <a href={createWhatsAppUrl("pulido y vitrificado de parquet o madera")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm text-amber-400 hover:text-amber-300">Consultar por madera <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
