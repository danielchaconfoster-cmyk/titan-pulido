import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Titan Pulido | Pulido, Diamantado y Restauración de Pisos",
  description: "Pulido y restauración de hormigón, mármol y granito, revestimientos epóxicos y consultas por parquet. Atención en Santiago, Rancagua y V Región. Cotiza por WhatsApp.",
  keywords: [
    "titan pulido",
    "pulido de hormigon",
    "radier pulido",
    "pulido de pisos industrial",
    "pisos epoxicos santiago",
    "cristalizado de marmol",
    "pulido de granito",
    "vitrificado de parquet",
    "restauracion de pisos chile",
  ],
  openGraph: {
    title: "Titan Pulido | Pulido y Restauración Profesional de Pisos",
    description: "Encuentra el tratamiento para tu piso. Envíanos fotos, comuna y m² aproximados para cotizar con Titan Pulido.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0c] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
