import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function SurfacesGallery() {
  const surfaces = [
    {
      tag: "ESPECIALIDAD 01",
      title: "Hormigón & Radier Arquitectónico",
      subtitle: "Residencial, Oficinas y Galerías",
      image: "/media/fotos/piso_pulido_arquitectonico_hd.jpg",
      treatment: "Desbaste progresivo diamantado + Densificación con litio",
      features: [
        "Brillo espejo natural sin barnices que se descascaren",
        "Detiene el desprendimiento de polvillo de cemento de por vida",
        "Aspiración ciclónica HEPA 99% durante toda la faena",
      ],
    },
    {
      tag: "ESPECIALIDAD 02",
      title: "Pavimentos Comerciales & Showrooms",
      subtitle: "Salas de Venta, Naves y Espacios de Alto Tráfico",
      image: "/media/fotos/showroom_hormigon_pulido_hd.jpg",
      treatment: "Corte mecánico plano + Cristalizado abrasivo fino #3000",
      features: [
        "Resistencia probada a montacargas y tránsito continuo",
        "Máxima reflectividad de luz natural y luminarias lineales",
        "Superficie no resbalosa y de mantenimiento simple con agua",
      ],
    },
    {
      tag: "ESPECIALIDAD 03",
      title: "Mármol, Terrazo & Granito",
      subtitle: "Piedras Naturales y Aglomerados Nobles",
      image: "/media/fotos/granito_close_hd.jpg",
      treatment: "Nivelación de juntas + Cristalización termoquímica",
      features: [
        "Recuperación total del contraste y vetas de la piedra",
        "Eliminación de microrrayas, poros abiertos y ceras viejas",
        "Sellado hidrófugo antimanchas (café, aceites, líquidos)",
      ],
    },
    {
      tag: "ESPECIALIDAD 04",
      title: "Pisos Epóxicos Sanitarios & Cámaras",
      subtitle: "Industria Alimentaria, Talleres y Áreas Asépticas",
      image: "/media/fotos/epoxico_camara_1920.jpg",
      treatment: "Preparación mecánica de sustrato + Autonivelante bicomponente",
      features: [
        "Superficie 100% continua sin juntas abiertas ni bacterias",
        "Apto para lavado a presión, shock térmico y desinfectantes",
        "Alta resistencia al derrame de químicos y fluidos mecánicos",
      ],
    },
  ];

  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20deseo%20consultar%20por%20sus%20servicios%20de%20restauraci%C3%B3n%20de%20pisos.";

  return (
    <section id="galeria" className="py-24 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Cabecera Editorial Honesta */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-3">
            Catálogo de Sustratos
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Superficies minerales y tratamientos especializados.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Cada material posee una dureza y porosidad única. Aplicamos la secuencia exacta de abrasivos diamantados y formulaciones químicas según el uso específico del espacio.
          </p>
        </div>

        {/* Grilla de 4 Especialidades con Proporciones Perfectas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {surfaces.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d10] border border-zinc-850 overflow-hidden flex flex-col justify-between"
            >
              {/* Fotografía de Alta Definición */}
              <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden border-b border-zinc-850">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-amber-400 border border-zinc-800 uppercase tracking-widest">
                  {s.tag}
                </div>
              </div>

              {/* Contenido Técnico de la Especialidad */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {s.title}
                  </h3>
                  <div className="text-xs font-light text-zinc-400">
                    {s.subtitle}
                  </div>
                  <div className="mt-2 text-xs font-mono text-amber-500/90">
                    {s.treatment}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 space-y-2">
                  {s.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Contacto Directo */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 font-light">
            ¿Tienes dudas sobre qué tratamiento requiere tu piso? Envíanos fotos por WhatsApp y te orientamos en minutos.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-200 text-black text-xs font-medium uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
