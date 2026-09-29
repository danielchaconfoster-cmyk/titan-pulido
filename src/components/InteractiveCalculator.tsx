"use client";

import { useState, useMemo } from "react";
import { MessageCircle, Check } from "lucide-react";

export default function InteractiveCalculator() {
  const [pisoType, setPisoType] = useState<"hormigon" | "epoxico" | "marmol" | "parquet">("hormigon");
  const [metros, setMetros] = useState<number>(80);
  const [ciudad, setCiudad] = useState<string>("Santiago (RM)");
  const [conReparacion, setConReparacion] = useState<boolean>(false);

  const precios = {
    hormigon: {
      nombre: "Hormigón & Radier Diamantado",
      precioBase: 11000,
      detalle: "Desbaste mecánico + densificado de litio + pulido progresivo al agua",
    },
    epoxico: {
      nombre: "Piso Epóxico / Autonivelante",
      precioBase: 16000,
      detalle: "Fresado de sustrato + puente de adherencia + autonivelante alto tráfico",
    },
    marmol: {
      nombre: "Mármol, Granito o Terrazo",
      precioBase: 18000,
      detalle: "Diamantado microfino al agua + cristalizado químico + sellado antimanchas",
    },
    parquet: {
      nombre: "Parquet o Maderas Nativas",
      precioBase: 13500,
      detalle: "Desbaste 99% sin polvo + masillado de juntas + triple vitrificado poliuretano",
    },
  };

  const calculo = useMemo(() => {
    const config = precios[pisoType];
    const adicionalReparacion = conReparacion ? 2500 : 0;
    const precioPorMetro = config.precioBase + adicionalReparacion;
    const totalEstimado = precioPorMetro * metros;

    return {
      precioPorMetro,
      totalEstimado,
      nombrePiso: config.nombre,
      detalle: config.detalle,
    };
  }, [pisoType, metros, conReparacion]);

  const formatearCLP = (valor: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(valor);
  };

  const generarEnlaceWhatsApp = () => {
    const mensaje = `Hola Titan Pulidos! Realicé una cotización técnica en su sitio web:\n\n` +
      `• Servicio: ${calculo.nombrePiso}\n` +
      `• Superficie estimada: ${metros} m²\n` +
      `• Ubicación: ${ciudad}\n` +
      `• Reparación de juntas/fisuras: ${conReparacion ? "Sí, requiere saneamiento previo" : "Losa en condición estándar"}\n` +
      `• Total estimado referencial: ${formatearCLP(calculo.totalEstimado)} (Aprox. ${formatearCLP(calculo.precioPorMetro)}/m²)\n\n` +
      `¿Tienen disponibilidad para coordinar una visita técnica de inspección o confirmar presupuesto formal? Muchas gracias.`;

    return `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <section id="cotizador" className="py-20 bg-[#0d0f12] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Calculadora de Presupuesto por m²
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Transparencia de costos. Obtén un valor estimado según superficie y tipo de tratamiento para tu obra.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Opciones */}
            <div className="lg:col-span-7 space-y-6">
              {/* Selector de material */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. Tratamiento Requerido
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(["hormigon", "epoxico", "marmol", "parquet"] as const).map((tipo) => (
                    <button
                      key={tipo}
                      type="button"
                      onClick={() => setPisoType(tipo)}
                      className={`p-3.5 rounded-lg text-left border transition-all text-xs font-bold ${
                        pisoType === tipo
                          ? "bg-amber-500/10 border-amber-500 text-amber-400"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold">
                        {tipo === "hormigon" && "Hormigón & Radier"}
                        {tipo === "epoxico" && "Piso Epóxico"}
                        {tipo === "marmol" && "Mármol & Granito"}
                        {tipo === "parquet" && "Parquet & Madera"}
                      </div>
                      <div className="text-[10px] text-slate-400 font-normal mt-1 truncate">
                        {precios[tipo].detalle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider de Metraje */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    2. Superficie Total Estimada
                  </label>
                  <span className="text-sm font-black text-amber-400 bg-slate-950 px-3 py-1 rounded border border-slate-800 font-mono">
                    {metros} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={metros}
                  onChange={(e) => setMetros(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                  <span>20 m²</span>
                  <span>250 m²</span>
                  <span>500+ m²</span>
                </div>
              </div>

              {/* Ubicación y Saneamiento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    3. Ubicación de la Faena
                  </label>
                  <select
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg p-3 focus:outline-none focus:border-amber-500 font-medium"
                  >
                    <option value="Santiago (Región Metropolitana)">Santiago (Región Metropolitana)</option>
                    <option value="V Región (Valparaíso, Viña, Concón)">V Región (Valparaíso, Viña, Concón)</option>
                    <option value="Rancagua (VI Región)">Rancagua (VI Región)</option>
                    <option value="Otra Región (A evaluar por m²)">Otra Región (A evaluar por volumen)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    4. Estado del Sustrato
                  </label>
                  <label className="flex items-center gap-2.5 bg-slate-950 border border-slate-800 rounded-lg p-3 cursor-pointer hover:border-slate-700 text-xs">
                    <input
                      type="checkbox"
                      checked={conReparacion}
                      onChange={(e) => setConReparacion(e.target.checked)}
                      className="rounded text-amber-500 focus:ring-amber-500 w-4 h-4 shrink-0"
                    />
                    <span className="text-slate-300">Requiere reparación de fisuras o desniveles previos</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Panel de Resumen */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Presupuesto Estimado
              </span>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {formatearCLP(calculo.totalEstimado)}
                </div>
                <div className="text-xs text-amber-400 mt-1 font-mono">
                  {formatearCLP(calculo.precioPorMetro)} / m² ({metros} m²)
                </div>
              </div>

              <div className="text-left bg-slate-900 border border-slate-800 rounded-lg p-3.5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Maquinaria industrial con aspiración ciclónica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Químicos y densificadores de litio incluidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Garantía técnica y cumplimiento de plazos</span>
                </div>
              </div>

              <a
                href={generarEnlaceWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-black rounded-lg text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-amber-950" />
                <span>Enviar cotización a WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-500">
                *Valor orientativo sujeto a inspección técnica o verificación en terreno en {ciudad}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
