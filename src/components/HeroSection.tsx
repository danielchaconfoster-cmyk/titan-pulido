"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppNativeIcon from "@/components/WhatsAppNativeIcon";
import { createWhatsAppUrl } from "@/lib/contact";

const slides = [
  { id: "arquitectura", label: "Viviendas", image: "/media/fotos/piso_pulido_arquitectonico_hd.jpg", alt: "Piso de hormigón pulido en un espacio residencial con luz natural", caption: "Hormigón pulido · Espacios residenciales" },
  { id: "showroom", label: "Comercios", image: "/media/fotos/showroom_hormigon_pulido_hd.jpg", alt: "Pavimento continuo en una sala de exhibición", caption: "Pavimentos continuos · Locales y salas de venta" },
  { id: "industrial", label: "Industria", image: "/media/fotos/galpon_panoramica_1920.jpg", alt: "Superficie de hormigón en un galpón industrial", caption: "Radier y hormigón · Galpones y bodegas" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#08090b] text-zinc-100">
      <Image src={slide.image} alt={slide.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover -z-20" />
      <div aria-hidden="true" className="hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-end px-6 pb-8 pt-32 sm:px-10 sm:pt-40 sm:pb-12">
        <div className="max-w-3xl space-y-5">
          <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.18] text-balance">Recupera el brillo y la vida de tus pisos.</h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-zinc-100">Pulido y restauración de hormigón, mármol y granito, y revestimientos epóxicos para viviendas, comercios e industria.</p>
          <p className="text-xs sm:text-sm text-amber-300">Santiago · Rancagua · V Región</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-white px-5 py-3 text-xs font-medium uppercase tracking-wider text-black hover:bg-zinc-200 transition-colors">
              <WhatsAppNativeIcon className="h-4 w-4 shrink-0" />Cotizar por WhatsApp
            </a>
            <a href="#galeria" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-100 hover:text-amber-300 transition-colors">Ver servicios <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-200">Envíanos fotos, comuna y m² aproximados.<br />Si no conoces el material, te ayudamos a identificarlo.</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 border-t border-white/25 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p aria-live="polite" className="text-xs text-zinc-200">{slide.caption}</p>
          <div role="group" aria-label="Fotografías de superficies" className="flex flex-wrap gap-2">
            {slides.map((item, index) => <button key={item.id} type="button" aria-pressed={currentSlide === index} aria-label={`Ver fotografía: ${item.label}`} onClick={() => setCurrentSlide(index)} className={`min-h-11 border px-3 py-2 text-xs transition-colors ${currentSlide === index ? "border-white bg-white text-black" : "border-white/40 bg-black/40 text-white hover:bg-black/60"}`}>{item.label}</button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
