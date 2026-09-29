import Link from "next/link";
import TitanLogo from "@/components/TitanLogo";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quisiera%20cotizar%20un%20servicio%20de%20pulido%20y%20restauraci%C3%B3n%20de%20pisos.";

  return (
    <header className="sticky top-0 z-50 bg-[#08090b]/95 backdrop-blur-md border-b border-zinc-900 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo Titan Pulido */}
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <TitanLogo size={44} />
        </Link>

        {/* Navegación limpia y directa */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-300">
          <a href="#galeria" className="hover:text-white transition-colors">
            Superficies
          </a>
          <a href="#proceso" className="hover:text-white transition-colors">
            Proceso
          </a>
          <a href="#faenas" className="hover:text-white transition-colors">
            Faenas en Vivo
          </a>
          <a href="#cotizador" className="hover:text-white transition-colors">
            Cotizador m²
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas
          </a>
        </nav>

        {/* CTA Directo y Sobrio */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+56912345678"
            className="hidden sm:inline-block text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            +56 9 1234 5678
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium bg-white hover:bg-zinc-200 text-black px-4 py-2.5 uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Cotizar WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
