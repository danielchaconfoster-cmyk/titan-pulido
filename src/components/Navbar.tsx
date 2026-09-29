import Link from "next/link";
import TitanLogo from "@/components/TitanLogo";

function WhatsAppNativeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm-3.52 3.66c-.16 0-.43.06-.66.31-.22.25-.85.84-.85 2.06 0 1.22.89 2.39 1.01 2.55.13.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.17.21-.58.21-1.07.15-1.17-.07-.11-.23-.17-.48-.3-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.17.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.3.38-.45.12-.15.16-.26.24-.42.09-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.21-.48-.41-.42-.57-.43-.14 0-.31-.01-.48-.01z" />
    </svg>
  );
}

export default function Navbar() {
  const whatsappUrl =
    "https://wa.me/56912345678?text=Hola%20Titan%20Pulido,%20quisiera%20cotizar%20un%20servicio%20de%20pulido%20y%20restauraci%C3%B3n%20de%20pisos.";

  return (
    <header className="sticky top-0 z-50 bg-[#08090b]/95 backdrop-blur-md border-b border-zinc-900 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo Titan Pulido */}
        <Link href="/" className="hover:opacity-90 transition-opacity shrink-0">
          <TitanLogo size={36} />
        </Link>

        {/* Navegación sobria y minimalista (solo visible en pantallas medianas y grandes) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-light tracking-wider text-zinc-400 uppercase">
          <a href="#galeria" className="hover:text-white transition-colors">
            Superficies
          </a>
          <a href="#proceso" className="hover:text-white transition-colors">
            Proceso
          </a>
          <a href="#faenas" className="hover:text-white transition-colors">
            Faenas en Vivo
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas
          </a>
        </nav>

        {/* Botón WhatsApp Nativo: Chiquitito y circular en celular, sutil en escritorio */}
        <div className="flex items-center shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp oficial de Titan Pulido"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white w-9 h-9 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <WhatsAppNativeIcon className="w-5 h-5 fill-white shrink-0" />
            <span className="hidden sm:inline uppercase text-[11px] font-semibold tracking-wider pr-0.5">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
