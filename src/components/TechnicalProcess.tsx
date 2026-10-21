const steps = [
  { title: "Preparación y reparación", description: "Revisamos el estado del radier y definimos cómo tratar fisuras, juntas y restos de revestimientos." },
  { title: "Desbaste y pulido", description: "Trabajamos con abrasivos progresivos para mejorar la superficie y alcanzar la terminación acordada." },
  { title: "Tratamiento y entrega", description: "Aplicamos densificador o protección cuando corresponde y explicamos los cuidados y tiempos de uso." },
];

export default function TechnicalProcess() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="py-16 sm:py-20 bg-[#090a0c] text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-8">
          <h2 id="process-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">Así trabajamos el hormigón.</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">La secuencia se ajusta al estado del piso y al acabado que buscas. Para piedra, epóxicos o madera, definimos un proceso específico.</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
          {steps.map((step, index) => <li key={step.title}><span className="text-xs font-mono text-amber-400" aria-hidden="true">0{index + 1}</span><h3 className="mt-3 text-base font-medium text-white">{step.title}</h3><p className="mt-2 text-sm font-light text-zinc-300 leading-relaxed">{step.description}</p></li>)}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-400">El control de polvo y la protección del entorno se planifican según la faena. Antes de comenzar, acordamos qué despejar y qué zonas proteger.</p>
      </div>
    </section>
  );
}
