import { Check, X } from "lucide-react";

export default function WhyUsSection() {
  const comparisons = [
    {
      feature: "Control de Polvo en Suspensión",
      titan: "Aspiración industrial ciclónica directa en punto de corte (99% libre de polvo)",
      otros: "Lijadoras manuales que llenan de sílice y aserrín el aire, muros y muebles",
    },
    {
      feature: "Maquinaria de Desbaste",
      titan: "Pulidoras satelitales y planetarias pesadas para nivelación geométrica real",
      otros: "Orilladoras livianas que copian desniveles y generan ondulaciones de luz",
    },
    {
      feature: "Química de Endurecimiento",
      titan: "Densificadores penetrantes de Silicato de Litio con reacción C-S-H permanente",
      otros: "Ceras o barnices sintéticos superficiales que amarillean y se pelan en meses",
    },
    {
      feature: "Transparencia de Presupuesto",
      titan: "Precio por metro cuadrado cerrado por contrato previo a la faena",
      otros: "Precios iniciales bajos que van sumando 'adicionales obligatorios' en obra",
    },
    {
      feature: "Respaldo y Garantía",
      titan: "Facturación formal, prueba in-situ en sustratos grandes y garantía escrita",
      otros: "Sin boleta ni responsabilidad ante manchas, desprendimiento o falta de adherencia",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Criterios Técnicos: Estándar Titan vs. Prácticas Informales
          </h2>
          <p className="text-slate-400 text-base mt-2">
            La diferencia entre un piso que dura una década intacto y uno que requiere decapado al año siguiente radica en el peso de la maquinaria y la química empleada.
          </p>
        </div>

        {/* Tabla comparativa técnica */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950 border-b border-slate-800 p-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="md:col-span-4">Parámetro de Trabajo</div>
            <div className="md:col-span-4 text-amber-400 font-extrabold">Estándar Titan Pulidos</div>
            <div className="md:col-span-4 text-slate-500">Servicio Informal de Mercado</div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 text-xs gap-3 items-center">
                <div className="md:col-span-4 font-bold text-slate-200">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-emerald-300 font-medium flex items-start gap-2 bg-emerald-950/20 md:bg-transparent p-2 md:p-0 rounded">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item.titan}</span>
                </div>
                <div className="md:col-span-4 text-rose-200/80 flex items-start gap-2 bg-rose-950/20 md:bg-transparent p-2 md:p-0 rounded">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{item.otros}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
