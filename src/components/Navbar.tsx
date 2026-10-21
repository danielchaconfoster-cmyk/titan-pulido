"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import TitanLogo from "@/components/TitanLogo";
import WhatsAppNativeIcon from "@/components/WhatsAppNativeIcon";
import { createWhatsAppUrl } from "@/lib/contact";

const links = [
  { href: "#galeria", label: "Servicios" },
  { href: "#faenas", label: "Trabajos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
];
function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const scrolled = useSyncExternalStore(subscribeToScroll, () => window.scrollY > 48, () => false);
  function closeMenu() {
    setMenuOpen(false);
    menuButton.current?.focus();
  }
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-zinc-100 transition-colors ${scrolled || menuOpen ? "bg-[#08090b] border-b border-zinc-800" : "bg-transparent border-b border-transparent"}`} onKeyDown={(event) => { if (event.key === "Escape" && menuOpen) closeMenu(); }}>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 h-20 sm:h-24 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" aria-label="Titan Pulido — Inicio" onClick={() => setMenuOpen(false)} className="p-[10px] inline-flex hover:opacity-90 transition-opacity shrink-0 justify-self-start rounded-full">
          <TitanLogo variant="icon" size={56} />
        </Link>
        <nav aria-label="Navegación principal" className="hidden md:flex col-start-2 row-start-1 items-center justify-center gap-6 lg:gap-8 text-xs font-light tracking-wider uppercase">
          {links.map((link) => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-amber-400 transition-colors">{link.label}</a>)}
        </nav>
        <div className="col-start-3 row-start-1 flex items-center gap-2 justify-self-end">
          <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Cotizar por WhatsApp con Titan Pulido" className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full sm:px-4 transition-colors">
            <WhatsAppNativeIcon className="w-5 h-5 shrink-0" />
            <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-wider">WhatsApp</span>
          </a>
          <button ref={menuButton} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="menu-movil" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30">
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="menu-movil" aria-label="Navegación móvil" hidden={!menuOpen} className="md:hidden border-t border-zinc-800 px-6 pb-4">
        {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className="flex min-h-12 items-center border-b border-zinc-900 py-3 text-sm hover:text-amber-400">{link.label}</a>)}
        <a href="#cotizar" onClick={closeMenu} className="flex min-h-12 items-center pt-3 text-sm text-amber-400">Cómo cotizar</a>
      </nav>
    </header>
  );
}
