import { Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Hormigón & Radier Pulido Diamantado",
      target: "Galpones, bodegas de logística, concesionarios, estacionamientos y arquitectura residencial.",
      specs: [
        "Desbaste pesado con pastillas diamantadas metálicas",
        "Densificación molecular con silicato de litio antipolvo",
        "Brillo espejo mecánico progresivo (#400 a #3000)",
        "Sellado hidrófugo resistente a aceites y arrastre de neumáticos",
      ],
      durability: "8 a 15 años sin ceras",
      tag: "Especialidad Industrial",
    },
    {
      title: "Pisos Epóxicos y Autonivelantes",
      target: "Cámaras frigoríficas, plantas de alimentos, laboratorios, clínicas y talleres de alta exigencia.",
      specs: [
        "Preparación mecánica del sustrato (fresado o granallado)",
        "Capa base de imprimación epóxica 100% sólidos",
        "Revestimiento continuo autonivelante de grado sanitario",
        "Resistencia química a ácidos, solventes y choque térmico",
      ],
      durability: "Piso aséptico continuo",
      tag: "Grado Sanitario & Químico",
    },
    {
      title: "Restauración de Mármol, Granito y Terrazo",
      target: "Halls de acceso, edificios comerciales, centros comerciales, peldaños y cubiertas.",
      specs: [
        "Eliminación de manchas ácidas, porosidad y marcas de calzado",
        "Diamantado al agua de grano microfino sin ensuciar muros",
        "Cristalizado térmico que sella y realza el poro mineral",
        "Sellado antimanchas con protección permeable al vapor",
      ],
      durability: "Reflejo cristalino duradero",
      tag: "Piedra Natural",
    },
    {
      title: "Pulido y Vitrificado de Parquet y Maderas",
      target: "Parquet de roble, raulí, eucalipto, pino oregón y entablados de maderas nobles.",
      specs: [
        "Desbaste profundo con aspiración ciclónica 99% sin polvo",
        "Encolado de tablas sueltas y retapado de juntas al tono",
        "Triple mano de vitrificado de poliuretano alto tránsito",
        "Terminación brillante, semibrillo o mate satinado arquitectónico",
      ],
      durability: "Garantía de película continua",
      tag: "Residencial & Comercial",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Servicios Técnicos Especializados
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Tratamientos mecánicos y químicos adaptados a las condiciones de carga, humedad y tránsito de cada superficie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 font-mono">
                    {srv.tag}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {srv.durability}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  <strong className="text-slate-300">Aplicación: </strong>{srv.target}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {srv.specs.map((item, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#cotizador"
                className="w-full py-3 rounded-lg font-bold text-xs sm:text-sm text-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                Cotizar este tratamiento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
