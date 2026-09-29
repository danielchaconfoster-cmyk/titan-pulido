export default function TitanLogo({
  variant = "full",
  className = "",
  size = 32,
}: {
  variant?: "full" | "icon" | "stacked";
  className?: string;
  size?: number;
}) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Isotipo Arquitectónico: Monolito T y Plano de Nivelación */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Losa horizontal superior (superficie pulida continua) */}
        <rect x="4" y="6" width="20" height="3.5" fill="#FFFFFF" />
        
        {/* Detalle de corte diamantado en latón / ámbar sutil */}
        <rect x="24.5" y="6" width="3.5" height="3.5" fill="#F59E0B" />
        
        {/* Columna vertical estructural (nivel y aplomo) */}
        <rect x="14" y="11.5" width="3.5" height="14.5" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {/* Logotipo Tipográfico Minimalista */}
      {variant !== "icon" && (
        <div className={variant === "stacked" ? "text-center" : "flex flex-col justify-center leading-none"}>
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-light tracking-[0.28em] text-white uppercase">
              Titan
            </span>
            <span className="text-xs sm:text-xs font-extralight tracking-[0.28em] text-zinc-400 uppercase">
              Pulido
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-[0.3em] text-zinc-500 uppercase mt-1">
            Superficies Arquitectónicas
          </span>
        </div>
      )}
    </div>
  );
}
