import WhatsAppNativeIcon from "@/components/WhatsAppNativeIcon";
import { createWhatsAppUrl } from "@/lib/contact";

const steps = [
  { title: "Cuéntanos qué necesitas", text: "Envía fotos, la comuna y los m² aproximados. Si no sabes el tipo de piso, parte con una foto." },
  { title: "Evaluamos el trabajo", text: "Revisamos el material y su estado. Cuando haga falta una inspección en terreno, coordinamos los detalles contigo." },
  { title: "Definimos el presupuesto", text: "Antes de iniciar, acordamos por escrito el alcance, la terminación, los plazos y las condiciones del trabajo." },
];

export default function QuoteSection() {
  return (
    <section id="cotizar" aria-labelledby="quote-title" className="bg-[#0c0d10] border-y border-zinc-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 id="quote-title" className="text-2xl sm:text-3xl font-light text-white tracking-tight">Tu cotización empieza con una foto.</h2>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-10">
          {steps.map((step, index) => <li key={step.title} className="flex gap-4"><span className="text-sm font-mono text-amber-400 pt-0.5" aria-hidden="true">0{index + 1}</span><div><h3 className="text-base font-medium text-white">{step.title}</h3><p className="mt-2 text-sm font-light leading-relaxed text-zinc-300">{step.text}</p></div></li>)}
        </ol>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-medium uppercase tracking-wider text-black hover:bg-zinc-200 transition-colors"><WhatsAppNativeIcon className="h-4 w-4" />Cotizar por WhatsApp</a>
          <p className="text-sm text-zinc-400">El valor se define según superficie, estado y tratamiento.</p>
        </div>
      </div>
    </section>
  );
}
