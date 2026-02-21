"use client";

export default function PixelSun() {
  return (
    <div className="pointer-events-none absolute top-8 right-12 sm:top-12 sm:right-24">
      <div className="relative h-20 w-20 sm:h-32 sm:w-32">
        {/* Sun rays (pulsing) */}
        <div className="absolute inset-0 animate-pulse">
          {/* Top ray */}
          <div className="bg-sunlight/60 absolute -top-3 left-1/2 h-3 w-2 -translate-x-1/2 sm:h-5 sm:w-3" />
          {/* Bottom ray */}
          <div className="bg-sunlight/60 absolute -bottom-3 left-1/2 h-3 w-2 -translate-x-1/2 sm:h-5 sm:w-3" />
          {/* Left ray */}
          <div className="bg-sunlight/60 absolute top-1/2 -left-3 h-2 w-3 -translate-y-1/2 sm:h-3 sm:w-5" />
          {/* Right ray */}
          <div className="bg-sunlight/60 absolute top-1/2 -right-3 h-2 w-3 -translate-y-1/2 sm:h-3 sm:w-5" />
          {/* Diagonal rays */}
          <div className="bg-sunlight/40 absolute -top-1 -left-1 h-2 w-2 rotate-45 sm:h-3 sm:w-3" />
          <div className="bg-sunlight/40 absolute -top-1 -right-1 h-2 w-2 rotate-45 sm:h-3 sm:w-3" />
          <div className="bg-sunlight/40 absolute -bottom-1 -left-1 h-2 w-2 rotate-45 sm:h-3 sm:w-3" />
          <div className="bg-sunlight/40 absolute -right-1 -bottom-1 h-2 w-2 rotate-45 sm:h-3 sm:w-3" />
        </div>
        {/* Sun body - pixel circle approximation */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0">
          {[
            "00011100",
            "00111110",
            "01111111",
            "11111111",
            "11111111",
            "01111111",
            "00111110",
            "00011100",
          ].map((row, y) =>
            row.split("").map((cell, x) =>
              cell === "1" ? (
                <div
                  key={`${y}-${x}`}
                  className="bg-sunlight"
                  style={{
                    gridColumn: x + 1,
                    gridRow: y + 1,
                    boxShadow: "0 0 4px var(--sunlight)",
                  }}
                />
              ) : null,
            ),
          )}
        </div>
        {/* Glow effect */}
        <div
          className="absolute -inset-4 animate-pulse rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, var(--sunlight) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
