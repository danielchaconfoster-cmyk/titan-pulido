"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Disc3, ShieldCheck } from "lucide-react";

export default function HeroCinematic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20deseo%20solicitar%20una%20evaluaci%C3%B3n%20para%20mis%20pisos.";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#060709] text-zinc-100 overflow-hidden select-none"
    >
      {/* 1. Fondo de Video en Movimiento Real (La Máquina Planetaria en Acción) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.15] scale-105"
        >
          <source src="/media/videos/hero-ambient.mp4" type="video/mp4" />
        </video>

        {/* Viñeta cinematográfica para que el video acompañe sin molestar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/40 to-[#060709]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060709]/60 to-[#060709] pointer-events-none" />
      </div>

      {/* 2. Luz Rasante Interactiva (Spotlight que sigue el cursor del mouse) */}
      {isMounted && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 hidden md:block"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.09), transparent 75%)`,
          }}
        />
      )}

      {/* 3. Contenido Central con Animaciones y Tipografía Viva */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center flex flex-col items-center">
        
        {/* Badge flotante con pulso activo */}
        <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="text-[11px] font-mono tracking-[0.2em] text-amber-300 uppercase">
            Desbaste Pesado & Diamantado In-Situ
          </span>
        </div>

        {/* Título Principal con Tensión Tipográfica y Escala Monumental */}
        <h1
          className="animate-fade-in-up text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] max-w-4xl"
          style={{ animationDelay: "150ms" }}
        >
          Donde otros ven cemento áspero, <br />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-zinc-300 block mt-2">
            nosotros revelamos un espejo mineral.
          </span>
        </h1>

        {/* Párrafo con Respiración */}
        <p
          className="animate-fade-in-up mt-8 text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed"
          style={{ animationDelay: "300ms" }}
        >
          Recuperamos radieres, mármol y pisos industriales mediante fricción planetaria progresiva y silicato de litio.
          Superficies continuas de máxima durabilidad, <strong className="text-white font-normal">99% libres de polvo</strong> y sin ceras superficiales.
        </p>

        {/* Fila de Pilares en Cápsula de Cristal */}
        <div
          className="animate-fade-in-up mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl bg-black/50 backdrop-blur-xl border border-zinc-800/80 p-3 rounded-xl text-left"
          style={{ animationDelay: "450ms" }}
        >
          <div className="p-3 border-b sm:border-b-0 sm:border-r border-zinc-800/80">
            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400">01 / Dureza</div>
            <div className="text-sm font-medium text-white mt-0.5">Silicato de Litio</div>
            <div className="text-[11px] text-zinc-400 font-light mt-0.5">Sella la porosidad de por vida.</div>
          </div>

          <div className="p-3 border-b sm:border-b-0 sm:border-r border-zinc-800/80">
            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400">02 / Reflejo</div>
            <div className="text-sm font-medium text-white mt-0.5">Brillo Espejo #3000</div>
            <div className="text-[11px] text-zinc-400 font-light mt-0.5">Pulido mecánico al agua.</div>
          </div>

          <div className="p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400">03 / Limpieza</div>
            <div className="text-sm font-medium text-white mt-0.5">Aspiración HEPA 99%</div>
            <div className="text-[11px] text-zinc-400 font-light mt-0.5">Cero nubes de polvillo en obra.</div>
          </div>
        </div>

        {/* Acciones de Alto Impacto */}
        <div
          className="animate-fade-in-up mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.55)] hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Cotizar Proyecto por WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#comparativa"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 text-sm font-light transition-all backdrop-blur-md"
          >
            <Disc3 className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "10s" }} />
            <span>Ver Antes y Después HD</span>
          </a>
        </div>

        {/* Micro-aviso inferior */}
        <div
          className="animate-fade-in-up mt-8 flex items-center gap-6 text-xs text-zinc-400 font-light font-mono"
          style={{ animationDelay: "750ms" }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Visita técnica sin costo en Santiago, Rancagua y V Región
          </span>
        </div>

      </div>
    </section>
  );
}
