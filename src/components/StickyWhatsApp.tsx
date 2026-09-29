"use client";

import { MessageCircle } from "lucide-react";

export default function StickyWhatsApp() {
  const whatsappUrl = "https://wa.me/56912345678?text=Hola%20Titan%20Pulidos,%20quisiera%20cotizar%20el%20pulido%20y%20restauraci%C3%B3n%20de%20mis%20pisos.";

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <span className="hidden sm:inline-block bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg animate-pulse">
        ¿Dudas con tus m²? ¡Escríbenos!
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para cotizar"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950" />
      </a>
    </aside>
  );
}
