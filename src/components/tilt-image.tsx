import * as React from "react";

export function TiltImage({
  src,
  className = "",
}: { src: string; className?: string }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl shadow-md",
        "transition-transform duration-500 hover:scale-[1.03]",
        className,
      ].join(" ")}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
      {/* glow sutil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </div>
  );
}
