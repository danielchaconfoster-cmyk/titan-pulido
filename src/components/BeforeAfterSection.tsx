import Image from "next/image";
import InteractiveBeforeAfter from "@/components/InteractiveBeforeAfter";

export default function BeforeAfterSection() {
  const projects = [
    {
      title: "Hormigón Diamantado en Obra",
      category: "Losa Industrial",
      image: "/media/fotos/antes_despues_losa_hd.jpg",
      substrate: "Losa H-30",
      treatment: "Desbaste progresivo y silicato de litio.",
      benefit: "Sustrato virgen opaco a la izquierda; árido expuesto con reflejo a la derecha.",
    },
    {
      title: "Galpón Logístico de Alto Tráfico",
      category: "Pavimento Continuo",
      image: "/media/fotos/galpon_panoramica_1920.jpg",
      substrate: "Radier de nave",
      treatment: "Nivelación mecánica y sellado antipolvo.",
      benefit: "Reflejo nítido de la luz natural sin películas plásticas que se descascaren.",
    },
    {
      title: "Cámara y Zona Limpia",
      category: "Superficie Sanitaria",
      image: "/media/fotos/epoxico_camara_1920.jpg",
      substrate: "Base tratada mecánicamente",
      treatment: "Imprimación epóxica profunda autonivelante.",
      benefit: "Piso continuo sin poros, apto para lavado industrial y tránsito pesado.",
    },
    {
      title: "Demostración de Brillo en Terreno",
      category: "Prueba In-Situ",
      image: "/media/fotos/spot_test_1920.jpg",
      substrate: "Radier con residuos de obra",
      treatment: "Prueba localizada previa a contratación.",
      benefit: "Contraste inmediato entre el piso sucio y el área pulida con reflejo.",
    },
  ];

  return (
    <section id="comparativa" className="py-24 bg-[#090a0c] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado Sereno */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-light text-zinc-500 uppercase tracking-widest mb-3">
            Evidencia In-Situ
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Antes y después en faena real.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Desplaza el divisor central para observar la transformación en la misma nave: desde el piso deteriorado hasta la terminación continua de alto tráfico.
          </p>
        </div>

        {/* Slider Interactivo */}
        <InteractiveBeforeAfter />

        {/* Galería Minimalista */}
        <div className="mt-20 pt-16 border-t border-zinc-900">
          <div className="max-w-xl mb-10">
            <h3 className="text-xl font-light text-white">
              Superficies restauradas en terreno
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="space-y-4">
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950 border border-zinc-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[11px] font-light text-zinc-300 px-2.5 py-1">
                    {proj.category}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-medium text-white">{proj.title}</h4>
                  <p className="text-xs text-zinc-500 font-light">{proj.treatment}</p>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed pt-1">
                    {proj.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
