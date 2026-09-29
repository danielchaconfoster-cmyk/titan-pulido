import { HelpCircle } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "¿Realizan muestras o pruebas in-situ antes de iniciar una obra grande?",
      a: "Sí. Para proyectos comerciales e industriales de radier, hormigón y epóxicos, podemos realizar una prueba de diamantado y brillo en una zona delimitada. Así puedes comprobar la reflectividad real y la dureza del sustrato antes de autorizar el metraje completo.",
    },
    {
      q: "¿Realmente el servicio de desbaste es 99% libre de polvo?",
      a: "Totalmente. Nuestras máquinas desbastadoras y orilladoras cuentan con turbinas de aspiración continua y filtros ciclónicos de alta eficiencia que succionan el material particulado en el mismo punto de fricción. No necesitas embalar muros ni detener áreas contiguas.",
    },
    {
      q: "¿Pueden trabajar en horario nocturno o fines de semana para no frenar la empresa?",
      a: "Por supuesto. Atendemos concesionarios, industrias, bodegas de logística y locales comerciales con faenas continuas en turnos especiales, garantizando entrega en los plazos acordados sin paralizar la operación de tu negocio.",
    },
    {
      q: "¿Cuánto tiempo demora el trabajo y cuándo se puede transitar?",
      a: "En hormigón pulido el tránsito peatonal es inmediato tras la aplicación del densificador. En pisos epóxicos y vitrificados de madera, el tránsito liviano se habilita a las 24 horas y el tráfico pesado o montacargas entre 48 y 72 horas.",
    },
    {
      q: "¿Qué durabilidad tiene el pulido diamantado y el cristalizado?",
      a: "Un hormigón diamantado o granito cristalizado por Titan Pulidos mantiene su brillo entre 5 a 10 años con mantenimiento básico de mopa húmeda, sin necesidad de ceras que junten suciedad ni decapados agresivos.",
    },
    {
      q: "¿Cómo se coordina el presupuesto formal y las garantías?",
      a: "Te entregamos un presupuesto detallado por m² por escrito. Trabajamos con contrato, factura formal y garantía técnica de adherencia y brillo según las especificaciones del material.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-black uppercase tracking-wider mb-2 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Respuestas Técnicas y Operativas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Todo lo que necesitas saber antes de iniciar la restauración de tus pisos con Titan Pulidos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/30 transition-colors shadow-md"
            >
              <h3 className="text-base sm:text-lg font-bold text-amber-300 mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
