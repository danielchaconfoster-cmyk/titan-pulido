"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MessageCircle, MoveHorizontal } from "lucide-react";

export default function HeroInteractiveSplit() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20deseo%20solicitar%20un%20test-spot%20o%20cotizaci%C3%B3n%20en%20terreno.";

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
    <section className="relative w-full h-[92vh] sm:h-screen min-h-[640px] max-h-[1080px] bg-[#07080a] text-zinc-100 overflow-hidden select-none">
      {/* Contenedor Interactivo a Pantalla Completa */}
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
        className="relative w-full h-full cursor-ew-resize overflow-hidden"
      >
        {/* Capa 1: DESPUÉS (Lado Derecho / Fondo Completo) */}
        <div className="absolute inset-0">
          <Image
            src="/media/fotos/galpon_fosa_despues_hd.jpg"
            alt="Losa terminada con acabado espejo y fosa de mantención"
            fill
            priority
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Capa 2: ANTES (Lado Izquierdo / Cortado por el Slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-screen h-full max-h-[1080px]">
            <Image
              src="/media/fotos/galpon_fosa_antes_hd.jpg"
              alt="Losa deteriorada previa al pulido diamantado"
              fill
              priority
              className="object-cover object-[center_60%] filter grayscale-[40%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />
          </div>
        </div>

        {/* Línea Divisoria de Luz Vertical con Puntero */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/80 flex items-center justify-center text-white shadow-xl">
            <MoveHorizontal className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Overlay Editorial: Información y Guía */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 z-10">
          
          {/* Cabecera Superior: Título Poético & Indicadores */}
          <div className="flex items-start justify-between">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-zinc-800 pointer-events-auto">
              <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase block">
                SUSTRATO VIRGEN
              </span>
              <span className="text-xs font-light text-zinc-300">
                Radier poroso, polvo libre y manchas
              </span>
            </div>

            <div className="hidden sm:block text-center bg-black/60 backdrop-blur-md px-5 py-2 border border-zinc-800">
              <span className="text-xs font-light text-white tracking-widest uppercase">
                Titan Pulido · Transformación Mecánica In-Situ
              </span>
              <span className="block text-[10px] font-mono text-zinc-400 mt-0.5">
                Desplaza la barra para comparar la losa
              </span>
            </div>

            <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-zinc-800 text-right pointer-events-auto">
              <span className="text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase block">
                PULIDO #3000
              </span>
              <span className="text-xs font-light text-zinc-300">
                Silicato de litio + brillo espejo continuo
              </span>
            </div>
          </div>

          {/* Pie Inferior: Mensaje de Autor y CTA Directo */}
          <div className="flex flex-col sm:flex-row items-end justify-between gap-6 pointer-events-auto">
            <div className="space-y-2 max-w-lg">
              <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-snug">
                El valor de tu superficie se demuestra <br />
                <span className="italic text-zinc-400 font-extralight">en el mismo metro cuadrado.</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Sin pinturas epóxicas que se descascaren con montacargas. La dureza y el brillo residen en el corazón de la piedra.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xl"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Solicitar Evaluación en Terreno</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
