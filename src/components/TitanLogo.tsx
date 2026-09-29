import Image from "next/image";

interface TitanLogoProps {
  variant?: "full" | "icon";
  className?: string;
  size?: number;
}

export default function TitanLogo({
  variant = "full",
  className = "",
  size = 38,
}: TitanLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Medallón Oficial Titan Pulido (titan-logo-2) */}
      <div
        className="relative shrink-0 rounded-full overflow-hidden shadow-md border border-amber-500/30 bg-[#0d0e12]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logos/titan-logo-2.jpg"
          alt="Titan Pulido"
          fill
          sizes={`${size * 2}px`}
          className="object-cover scale-[1.14]"
          priority
        />
      </div>

      {/* Logotipo Tipográfico: Titan Pulido en una sola línea limpia */}
      {variant !== "icon" && (
        <div className="flex items-baseline gap-1.5 sm:gap-2 leading-none">
          <span className="text-sm sm:text-base lg:text-lg font-light tracking-[0.2em] text-white uppercase font-sans">
            Titan
          </span>
          <span className="text-xs sm:text-sm lg:text-base font-normal tracking-[0.2em] text-amber-400 uppercase">
            Pulido
          </span>
        </div>
      )}
    </div>
  );
}
