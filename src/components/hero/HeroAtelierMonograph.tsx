"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

interface MonographEntry {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  image: string;
  area: string;
  substrate: string;
  treatment: string;
  outcome: string;
}

const MONOGRAPHS: MonographEntry[] = [
  {
    id: "losa-industrial",
    number: "OBRA 01",
    title: "Nave Logística y Centro de Distribución",
    category: "Hormigón Afinado H-30",
    location: "Quilicura, Santiago",
    image: "/media/fotos/galpon_panoramica_1920.jpg",
    area: "1.450 m²",
    substrate: "Radier rugoso con desprendimiento constante de polvo de cemento.",
    treatment: "Desbaste diamantado progresivo + densificación molecular con silicato de litio.",
    outcome: "Brillo espejo permanente #3000 apto para tránsito ininterrumpido de grúas horquilla.",
  },
  {
    id: "marmol-terrazo",
    number: "OBRA 02",
    title: "Galería de Exhibición y Showroom",
    category: "Mármol & Terrazo Antiguo",
    location: "Las Condes, Santiago",
    image: "/media/fotos/granito_close_hd.jpg",
    area: "420 m²",
    substrate: "Superficie de piedra natural opaca, rayada y manchada por ceras acumuladas.",
    treatment: "Eliminación mecánica de barniz + cristalización termoquímica de poros.",
    outcome: "Recuperación de la veta mineral original con reflejo de luz natural plano.",
  },
  {
    id: "test-spot",
    number: "OBRA 03",
    title: "Prueba de Adherencia y Desbaste In-Situ",
    category: "Test-Spot en Terreno",
    location: "Rancagua, VI Región",
    image: "/media/fotos/antes_despues_losa_hd.jpg",
    area: "Muestra 15 m²",
    substrate: "Losa manchada con aceites industriales y residuos de faena.",
    treatment: "Desbaste profundo focalizado para validar viabilidad antes de la obra mayor.",
    outcome: "Contraste absoluto en terreno para aprobación técnica de gerencia.",
  },
];

export default function HeroAtelierMonograph() {
  const [activeWork, setActiveWork] = useState<MonographEntry>(MONOGRAPHS[0]);
  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quisiera%20consultar%20por%20la%20obra%20" +
    encodeURIComponent(activeWork.title);

  return (
    <section className="relative bg-[#090a0c] text-zinc-100 border-b border-zinc-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Cabecera de Libro de Arquitectura */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-zinc-900 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="text-amber-500 font-bold">{activeWork.number}</span>
            <span>·</span>
            <span className="text-zinc-300 uppercase tracking-widest">{activeWork.category}</span>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {activeWork.location} · {activeWork.area}
          </div>
        </div>

        {/* Grilla Asimétrica de Monografía */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          
          {/* Columna Izquierda: Ficha de Autor y Fundamento Técnico (7 columnas) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15]">
                {activeWork.title}
              </h1>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                Tratamos cada piso no como un trabajo genérico de albañilería, sino como una pieza arquitectónica continua.
                La calidad del resultado no depende de ceras temporales, sino del rigor del desbaste mecánico.
              </p>
            </div>

            {/* Ficha Técnica de Registro */}
            <div className="space-y-4 pt-6 border-t border-zinc-900 text-xs font-light">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-zinc-900/60">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">Estado Inicial</span>
                <p className="sm:col-span-2 text-zinc-300 leading-relaxed">{activeWork.substrate}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-zinc-900/60">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">Intervención</span>
                <p className="sm:col-span-2 text-zinc-300 leading-relaxed">{activeWork.treatment}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
                <span className="font-mono text-[11px] text-amber-500 uppercase tracking-wider font-medium">Resultado</span>
                <p className="sm:col-span-2 text-white font-normal leading-relaxed">{activeWork.outcome}</p>
              </div>
            </div>

            {/* Acción de Consulta Directa */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-zinc-200 text-black text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>Consultar por este tipo de piso</span>
              </a>

              <a
                href="#proceso"
                className="inline-flex items-center gap-2 text-xs font-light text-zinc-400 hover:text-white transition-colors"
              >
                <span>Conocer el proceso técnico de 4 fases</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Enmarcado Fotográfico y Selector de Obras (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] w-full bg-zinc-950 overflow-hidden border border-zinc-900">
              <Image
                src={activeWork.image}
                alt={activeWork.title}
                fill
                priority
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-zinc-300 border border-zinc-800">
                REGISTRO IN-SITU · {activeWork.number}
              </div>
            </div>

            {/* Selector de Obras Registradas */}
            <div className="border border-zinc-900 bg-[#0d0e11] p-2 flex flex-col gap-1">
              <div className="px-3 py-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Catálogo de Faenas Documentadas:
              </div>
              <div className="grid grid-cols-3 gap-1">
                {MONOGRAPHS.map((m) => {
                  const isSelected = m.id === activeWork.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveWork(m)}
                      className={`p-2.5 text-left text-xs transition-colors border ${
                        isSelected
                          ? "bg-zinc-900 text-white border-zinc-700 font-medium"
                          : "text-zinc-500 hover:text-zinc-300 border-transparent hover:bg-zinc-900/40"
                      }`}
                    >
                      <span className="block font-mono text-[9px] text-amber-500 font-bold mb-0.5">
                        {m.number}
                      </span>
                      <span className="block truncate text-[11px]">
                        {m.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
