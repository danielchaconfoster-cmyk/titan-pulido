import Image from "next/image";

interface TitanLogoProps {
  variant?: "full" | "icon" | "stacked";
  className?: string;
  size?: number;
}

export default function TitanLogo({
  variant = "full",
  className = "",
  size = 46,
}: TitanLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Medallón Oficial Titan Pulidos (titan-logo-2) */}
      <div
        className="relative shrink-0 rounded-full overflow-hidden shadow-lg border border-amber-500/40 bg-[#0d0e12] ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logos/titan-logo-2.jpg"
          alt="Titan Pulidos"
          fill
          sizes={`${size * 2}px`}
          className="object-cover scale-[1.14]"
          priority
        />
      </div>

      {/* Logotipo Tipográfico Arquitectónico */}
      {variant !== "icon" && (
        <div
          className={
            variant === "stacked"
              ? "text-center"
              : "flex flex-col justify-center leading-none"
          }
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-light tracking-[0.22em] text-white uppercase font-sans">
              Titan
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-amber-400 uppercase">
              Pulidos
            </span>
          </div>
          <span className="text-[8.5px] font-mono tracking-[0.26em] text-zinc-400 uppercase mt-1">
            Restauración de Pisos
          </span>
        </div>
      )}
    </div>
  );
}
