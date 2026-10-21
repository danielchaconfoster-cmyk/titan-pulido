import { createWhatsAppUrl } from "@/lib/contact";
import WhatsAppNativeIcon from "@/components/WhatsAppNativeIcon";

const videos = [
  { id: "superficie", title: "Vista de una superficie pulida", source: "/media/videos/piso-terminacion.mp4", poster: "/media/posters/piso-terminacion.jpg", description: "Recorrido por el piso de un espacio interior. Se aprecia cómo la luz de los ventanales se refleja sobre la superficie." },
  { id: "detalle", title: "Detalle del acabado y las juntas", source: "/media/videos/piso-detalle.mp4", poster: "/media/posters/piso-detalle.jpg", description: "Vista cercana de la superficie y sus juntas. El reflejo cambia con la luz y el ángulo de la cámara." },
];

export default function VideosSection() {
  return (
    <section id="faenas" aria-labelledby="work-title" className="py-16 sm:py-24 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-10">
          <h2 id="work-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">El acabado, visto de cerca.</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">Registros de superficies en terreno. Cada piso tiene un punto de partida distinto: el resultado depende del material, su desgaste y el tratamiento elegido.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <figure key={video.id} className="overflow-hidden border border-zinc-800 bg-[#0c0d10]">
              <video src={video.source} poster={video.poster} aria-labelledby={`video-${video.id}`} aria-describedby={`description-${video.id}`} controls playsInline preload="none" className="aspect-video w-full bg-black object-contain" />
              <figcaption className="p-6">
                <h3 id={`video-${video.id}`} className="text-base font-medium text-white">{video.title}</h3>
                <p id={`description-${video.id}`} className="mt-2 text-sm leading-relaxed text-zinc-300 font-light">{video.description}</p>
                <p className="mt-3 text-xs text-zinc-400">Registro visual sin audio.</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="max-w-xl text-sm text-zinc-300">¿Buscas un resultado para tu espacio? Envíanos una foto de tu piso para revisar las opciones.</p>
          <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-medium uppercase tracking-wider text-black hover:bg-zinc-200 transition-colors"><WhatsAppNativeIcon className="h-4 w-4" />Consultar por mi piso</a>
        </div>
      </div>
    </section>
  );
}
