import { Plus } from "lucide-react";

const faqs = [
  { q: "¿Qué necesitan para cotizar y cómo se calcula el precio?", a: "Envíanos fotos del piso, la comuna y los metros cuadrados aproximados. El valor depende del material, el desgaste, las reparaciones y la terminación. Si las fotos no bastan, coordinamos una evaluación en terreno antes de definir el presupuesto." },
  { q: "¿Cuánto demora y cuándo puedo volver a usar el piso?", a: "Depende de la superficie, el tratamiento y las condiciones de la obra. Los revestimientos y vitrificados necesitan tiempos de secado y curado específicos. Confirmamos el plazo de trabajo y la habilitación para personas o vehículos según el producto aplicado." },
  { q: "¿Cómo debo preparar el espacio?", a: "Antes de la visita acordamos qué muebles o equipos mover, los accesos y las zonas que deben protegerse. Cuéntanos si el lugar seguirá en uso para evaluar cómo organizar la faena." },
  { q: "¿Se genera polvo durante el trabajo?", a: "La aspiración y los métodos de trabajo ayudan a reducir el polvo, pero no todos los materiales ni las faenas requieren el mismo tratamiento. Definimos las medidas de protección y limpieza según las condiciones del espacio." },
  { q: "¿Cuánto dura el acabado y qué mantenimiento necesita?", a: "La duración depende del tipo de piso, el acabado, el tránsito y su cuidado. Te orientamos sobre limpieza y mantenimiento según el tratamiento; no hay un plazo único que aplique a todas las superficies." },
  { q: "¿Qué incluye el presupuesto y la garantía?", a: "El presupuesto escrito debe detallar preparación, reparaciones, terminación, precio y plazos. Antes de contratar, revisamos contigo el alcance de la garantía, sus condiciones y los cuidados necesarios para conservar el resultado." },
  { q: "¿Puedo consultar por parquet, pruebas o trabajos fuera de horario?", a: "Sí. El pulido y vitrificado de madera se evalúa según el estado del piso. Las muestras en terreno y los horarios especiales se coordinan según el tratamiento, la ubicación y la disponibilidad. Indica lo que necesitas al solicitar tu presupuesto." },
];

export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20 bg-[#08090b] text-zinc-100 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 id="faq-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">Antes de cotizar.</h2>
        <p className="mt-3 mb-8 text-sm text-zinc-300 font-light leading-relaxed">Resuelve tus dudas sobre presupuesto, plazos y preparación del espacio.</p>
        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {faqs.map((faq, index) => (
            <details key={faq.q} name="preguntas" open={index === 0} className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span><Plus className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-7 text-sm font-light text-zinc-300 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
