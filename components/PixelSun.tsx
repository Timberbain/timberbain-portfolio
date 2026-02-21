"use client";

export default function PixelSun() {
  return (
    <div className="absolute top-8 right-12 sm:top-12 sm:right-24 pointer-events-none">
      <div className="relative w-20 h-20 sm:w-32 sm:h-32">
        {/* Sun rays (pulsing) */}
        <div className="absolute inset-0 animate-pulse">
          {/* Top ray */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-2 h-3 sm:w-3 sm:h-5 bg-sunlight/60" />
          {/* Bottom ray */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-2 h-3 sm:w-3 sm:h-5 bg-sunlight/60" />
          {/* Left ray */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-3 h-2 sm:w-5 sm:h-3 bg-sunlight/60" />
          {/* Right ray */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-3 h-2 sm:w-5 sm:h-3 bg-sunlight/60" />
          {/* Diagonal rays */}
          <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-sunlight/40 rotate-45" />
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-sunlight/40 rotate-45" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-sunlight/40 rotate-45" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-sunlight/40 rotate-45" />
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
              ) : null
            )
          )}
        </div>
        {/* Glow effect */}
        <div
          className="absolute -inset-4 rounded-full opacity-30 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, var(--sunlight) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
