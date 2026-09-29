export default function FAQSection() {
  const faqs = [
    {
      q: "¿Realizan muestras o pruebas in-situ antes de iniciar una obra grande?",
      a: "Sí. Para proyectos comerciales e industriales de radier, hormigón y epóxicos, podemos realizar una prueba de diamantado y brillo en una zona delimitada para comprobar la reflectividad real y la dureza del sustrato antes de autorizar el metraje completo.",
    },
    {
      q: "¿Realmente el servicio de desbaste es 99% libre de polvo?",
      a: "Totalmente. Nuestras máquinas satelitales y orilladoras cuentan con turbinas de aspiración continua y filtros ciclónicos de alta eficiencia que succionan el particulado en el mismo punto de fricción. No es necesario embalar muros.",
    },
    {
      q: "¿Pueden trabajar en horario nocturno o fines de semana?",
      a: "Sí. Atendemos concesionarios, industrias, bodegas de logística y locales comerciales con turnos continuos especiales, garantizando entrega en los plazos fijados sin paralizar la operación.",
    },
    {
      q: "¿Cuánto tiempo demora el trabajo y cuándo se puede transitar?",
      a: "En hormigón pulido el tránsito peatonal es inmediato tras la aplicación del densificador de litio. En pisos epóxicos y vitrificados de madera, el tránsito liviano se habilita a las 24 horas y el tráfico pesado a las 48-72 horas.",
    },
    {
      q: "¿Qué durabilidad tiene el pulido diamantado y el cristalizado?",
      a: "Un hormigón diamantado o granito cristalizado por Titan Pulido mantiene su brillo entre 5 a 10 años con mantenimiento básico de mopa húmeda, sin necesidad de ceras sintéticas que se descascaren.",
    },
    {
      q: "¿Cómo se coordina el presupuesto y las garantías?",
      a: "Entregamos presupuesto técnico por m² por escrito. Operamos con contrato, facturación formal y garantía técnica según las especificaciones de cada sustrato.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mb-3">
            Criterios & Operación
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Preguntas frecuentes.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Aspectos técnicos y condiciones de faena antes de iniciar la restauración con Titan Pulido.
          </p>
        </div>

        <div className="divide-y divide-zinc-900 border-y border-zinc-900">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-7 space-y-2">
              <h3 className="text-base font-medium text-white tracking-tight">
                {faq.q}
              </h3>
              <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-3xl">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
