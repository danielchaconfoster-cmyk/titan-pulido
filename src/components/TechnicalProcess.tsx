export default function TechnicalProcess() {
  const steps = [
    {
      num: "01",
      title: "Desbaste inicial",
      description: "Eliminación de pinturas viejas, ceras y desniveles mediante diamantes metálicos gruesos.",
    },
    {
      num: "02",
      title: "Reparación y sellado de juntas",
      description: "Retapado de grietas y baches con resinas técnicas para lograr un plano continuo.",
    },
    {
      num: "03",
      title: "Densificación con litio",
      description: "Reacción química que endurece el hormigón desde el interior, evitando el polvo de por vida.",
    },
    {
      num: "04",
      title: "Pulido mecánico a grano #3000",
      description: "Pases sucesivos de resina diamantada hasta alcanzar brillo cristalino natural, sin barnices.",
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-[#090a0c] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-light text-zinc-500 uppercase tracking-widest mb-3">
            Metodología de Trabajo
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            El proceso mecánico de restauración.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Un piso duradero no se logra pintando ni encerando. Es el resultado de pulir la piedra misma hasta cerrarle los poros y liberar su propio reflejo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pt-8 border-t border-zinc-900">
          {steps.map((step) => (
            <div key={step.num} className="space-y-3">
              <span className="text-xs font-mono text-zinc-600 block">
                {step.num}
              </span>
              <h3 className="text-base font-medium text-white">
                {step.title}
              </h3>
              <p className="text-sm font-light text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
