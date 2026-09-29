import { MessageCircle, ShieldCheck } from "lucide-react";

export default function VideosSection() {
  const videos = [
    {
      title: "Desbaste Pesado con Pulidora Planetaria",
      equipment: "Pulidora Trifásica Satelital 15 HP",
      substrate: "Losa de hormigón industrial con desgaste",
      videoSrc: "/media/videos/pulidora-accion-1.mp4",
      description: "Pase inicial con pastillas diamantadas metálicas para remoción de irregularidades y nivelación del plano.",
    },
    {
      title: "Aspiración Ciclónica en Punto de Fricción",
      equipment: "Aspirador Industrial Ciclónico HEPA",
      substrate: "Galpón comercial cerrado",
      videoSrc: "/media/videos/pulidora-accion-3.mp4",
      description: "Demostración de retención de polvo en suspensión. Permite trabajar en locales comerciales sin contaminar zonas anexas.",
    },
    {
      title: "Corte Diamantado Continuo en Obra",
      equipment: "Maquinaria Satelital Pesada",
      substrate: "Pavimento continuo en faena activa",
      videoSrc: "/media/videos/pulidora-accion-horizontal.mp4",
      description: "Secuencia de desbaste parejo para apertura controlada del árido previo a la densificación química con litio.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quiero%20coordinar%20una%20visita%20t%C3%A9cnica%20de%20inspecci%C3%B3n.";

  return (
    <section id="faenas" className="py-24 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Cabecera Editorial */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-3">
            Registro Operativo en Vivo
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Nuestra maquinaria en faenas reales.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Videos directos grabados por nuestros operadores en terreno. Equipamiento trifásico planetario y aspiración ciclónica continua para trabajos limpios y sin polvo.
          </p>
        </div>

        {/* Grilla de Videos 100% Proporcional (Widescreen 16:9 idéntico para todos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d10] border border-zinc-850 overflow-hidden flex flex-col justify-between"
            >
              {/* Contenedor Widescreen 16:9 Uniforme */}
              <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-zinc-850">
                <video
                  src={vid.videoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ficha técnica del video */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-1.5">
                    {vid.equipment}
                  </div>
                  <h3 className="text-base font-medium text-white mb-2 leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {vid.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>SUSTRATO:</span>
                  <span className="text-zinc-300 font-sans text-xs">{vid.substrate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque de Visita Técnica Limpio */}
        <div className="mt-14 p-8 bg-[#0c0d10] border border-zinc-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Evaluación Técnica en Obra</span>
            </div>
            <h3 className="text-lg font-light text-white">
              ¿Requieres evaluar el estado de tu losa o radier antes de cotizar?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Coordinamos una inspección en terreno en Santiago, Rancagua o V Región para evaluar dureza y recomendar el tratamiento adecuado.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-200 text-black text-xs font-medium uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Coordinar Visita Técnica</span>
          </a>
        </div>

      </div>
    </section>
  );
}
