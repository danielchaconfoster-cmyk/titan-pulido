"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

interface PresentationSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
}

const SLIDES: PresentationSlide[] = [
  {
    id: "arquitectura",
    tag: "RESIDENCIAL & ARQUITECTURA",
    title: "Restauración y pulido diamantado de pisos.",
    subtitle:
      "Desbaste mecánico progresivo y densificación con silicato de litio. Superficies continuas de hormigón y piedra noble con brillo natural permanente, sin ceras ni polímeros.",
    image: "/media/fotos/piso_pulido_arquitectonico_hd.jpg",
    caption: "Residencia contemporánea · Hormigón afinado pulido a grano #3000 con reflejo de luz natural",
  },
  {
    id: "showroom",
    tag: "SHOWROOM & ESPACIOS PÚBLICOS",
    title: "Pavimentos minerales de alto tráfico y luz.",
    subtitle:
      "Tratamiento antipolvo y sellado profundo de poros. Soluciones para galerías, salas de venta y espacios comerciales con resistencia al tránsito continuo.",
    image: "/media/fotos/showroom_hormigon_pulido_hd.jpg",
    caption: "Galería de exhibición · Pavimento continuo reflectivo de mantenimiento simple",
  },
  {
    id: "losa-industrial",
    tag: "NAVES & FAENAS INDUSTRIALES",
    title: "Nivelación y cristalizado de radier en faena.",
    subtitle:
      "Operamos con maquinaria planetaria pesada y aspiración ciclónica HEPA 99% sin emitir nubes de polvillo en obra activa.",
    image: "/media/fotos/galpon_panoramica_1920.jpg",
    caption: "Nave logística · Radier nivelado mecánicamente con silicato de litio activo",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slide = SLIDES[currentSlide];

  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quisiera%20solicitar%20un%20presupuesto%20para%20mis%20pisos.";

  return (
    <section className="bg-[#08090b] text-zinc-100 pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* 1. Cabecera Editorial Limpia y Medida (Tipografía Humana, sin gritos) */}
        <div className="max-w-3xl mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase">
              {slide.tag}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Santiago · Rancagua · V Región
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.18]">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-zinc-200 text-black text-xs font-medium uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Cotizar Proyecto por WhatsApp</span>
            </a>

            <a
              href="#comparativa"
              className="inline-flex items-center gap-2 text-xs font-light text-zinc-400 hover:text-white transition-colors"
            >
              <span>Ver comparativa en obra</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. El Lienzo Fotográfico Nítido a Gran Formato (Como Lámina de Presentación) */}
        <div className="relative overflow-hidden border border-zinc-850 bg-zinc-950">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[500px]">
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority
              className="object-cover transition-opacity duration-500"
              sizes="100vw"
            />
          </div>

          {/* Barra Inferior del Lienzo: Selector de Láminas y Leyenda */}
          <div className="p-4 sm:p-5 bg-[#0c0d10] border-t border-zinc-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-light">
              <span className="text-zinc-200 font-medium">{slide.caption}</span>
            </div>

            {/* Selector de Láminas Estilo Presentación */}
            <div className="flex items-center gap-1">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1.5 text-[11px] font-mono transition-colors border ${
                    currentSlide === idx
                      ? "bg-white text-black font-semibold border-white"
                      : "text-zinc-500 hover:text-zinc-300 border-zinc-800 bg-zinc-950"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Tres Principios de Oficio en Tipografía Serena (Sin cajitas plásticas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-zinc-900 mt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500">01 / MECÁNICA</span>
            <h2 className="text-base font-medium text-white">Desbaste Progresivo con Diamante</h2>
            <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              Apertura y cierre micrométrico del poro de la piedra mediante pastillas metálicas y resinoides. Sin barnices que se degraden con el sol.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500">02 / QUÍMICA</span>
            <h2 className="text-base font-medium text-white">Densificación Molecular con Litio</h2>
            <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              El silicato de litio reacciona internamente con la cal libre del cemento, creando una estructura cristalina dura que detiene el polvo de por vida.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500">03 / HIGIENE</span>
            <h2 className="text-base font-medium text-white">Tecnología 99% Libre de Polvo</h2>
            <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              Aspiración ciclónica pesada con filtrado HEPA en cada máquina. Tu espacio, muros y muebles quedan limpios durante toda la faena.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
