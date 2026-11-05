import Image from "next/image";

// Babaji Group logo (public/images/logo-group.webp, trimmed from logo.png). `width` sets the display width.
export default function Logo({ width = 84, className = "" }) {
  const height = Math.round((width * 398) / 600);
  return (
    <Image
      src="/images/logo-group.webp"
      alt="Babaji Group"
      width={width}
      height={height}
      priority
      className={`shrink-0 ${className || "block"}`}
      style={{ width, height }}
    />
  );
}
