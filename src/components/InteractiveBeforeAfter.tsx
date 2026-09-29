"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface ComparisonCase {
  id: string;
  label: string;
  beforeImg: string;
  afterImg: string;
  beforeTitle: string;
  afterTitle: string;
  description: string;
}

const COMPARISONS: ComparisonCase[] = [
  {
    id: "losa-arquitectonica",
    label: "01 · Hormigón Arquitectónico (Residencial)",
    beforeImg: "/media/fotos/preparacion-sustrato-galpon.jpg",
    afterImg: "/media/fotos/piso_pulido_arquitectonico_hd.jpg",
    beforeTitle: "Antes: Radier poroso, polvo libre y desniveles",
    afterTitle: "Después: Acabado espejo continuo con luz natural",
    description: "Transformación de radier rugoso en un pavimento arquitectónico continuo con densificación de litio. Sin ceras superficiales y 99% libre de polvo.",
  },
  {
    id: "showroom-comercial",
    label: "02 · Galería y Espacio Comercial (Alto Tráfico)",
    beforeImg: "/media/fotos/galpon_fosa_antes_hd.jpg",
    afterImg: "/media/fotos/showroom_hormigon_pulido_hd.jpg",
    beforeTitle: "Antes: Sustrato opaco y manchado de obra",
    afterTitle: "Después: Brillo cristalino #3000 de alta resistencia",
    description: "Desbaste progresivo con pastillas diamantadas metálicas y resinoides. Dureza pétrea apta para tránsito continuo de personas y maquinaria.",
  },
  {
    id: "test-spot",
    label: "03 · Muestra en Terreno (Test-Spot In-Situ)",
    beforeImg: "/media/fotos/galpon_fosa_antes_hd.jpg",
    afterImg: "/media/fotos/spot_test_1920.jpg",
    beforeTitle: "Antes: Pavimento sucio con residuos de obra",
    afterTitle: "Después: Demostración circular con disco diamantado",
    description: "Prueba sectorizada directa en la losa del cliente para comprobar el contraste de brillo y adherencia antes de contratar la superficie total.",
  },
];

export default function InteractiveBeforeAfter() {
  const [activeCase, setActiveCase] = useState<ComparisonCase>(COMPARISONS[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* Selector de Casos */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          {COMPARISONS.map((c) => {
            const isSelected = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(c);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all border ${
                  isSelected
                    ? "bg-white text-black font-semibold border-white"
                    : "text-zinc-400 hover:text-white border-zinc-800 bg-zinc-950/60"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
          ↔ Arrastra para comparar
        </span>
      </div>

      {/* Contenedor del Slider */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          isDragging.current = true;
          handleMove(e.clientX);
        }}
        onMouseUp={() => {
          isDragging.current = false;
        }}
        onMouseLeave={() => {
          isDragging.current = false;
        }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[440px] sm:h-[560px] w-full select-none overflow-hidden border border-zinc-800 bg-[#060709] cursor-ew-resize shadow-2xl"
      >
        {/* Capa 1: DESPUÉS (Fondo Completo) */}
        <div className="absolute inset-0">
          <Image
            src={activeCase.afterImg}
            alt={activeCase.afterTitle}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
          {/* Etiqueta Después en Cristal */}
          <div className="absolute top-5 right-5 bg-black/75 backdrop-blur-md text-amber-400 border border-amber-500/30 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider pointer-events-none shadow-lg">
            {activeCase.afterTitle}
          </div>
        </div>

        {/* Capa 2: ANTES (Recortada por clipPath) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={activeCase.beforeImg}
            alt={activeCase.beforeTitle}
            fill
            className="object-cover filter contrast-105"
            priority
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
          {/* Etiqueta Antes */}
          <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md text-zinc-300 border border-zinc-700 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider pointer-events-none shadow-lg">
            {activeCase.beforeTitle}
          </div>
        </div>

        {/* Línea Divisoria de Luz Vertical y Botón Central */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/90 border border-white flex items-center justify-center text-white shadow-2xl pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Instrucción Flotante Sutil */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-zinc-800 px-4 py-1.5 text-[11px] font-mono text-zinc-300 pointer-events-none whitespace-nowrap shadow-xl">
          ↔ Desplaza el divisor central para revelar el acabado pulido
        </div>
      </div>

      {/* Nota de Obra Real */}
      <div className="p-4 bg-[#0a0b0e] border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-400 gap-2">
        <p className="font-light leading-relaxed">
          <strong className="text-white font-medium">Especificación de Faena: </strong>
          {activeCase.description}
        </p>
        <span className="text-[11px] font-mono text-amber-400 shrink-0">
          Garantía de Adherencia & Dureza
        </span>
      </div>
    </div>
  );
}
