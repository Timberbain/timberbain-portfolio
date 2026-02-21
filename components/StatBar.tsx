"use client";

import { useEffect, useRef, useState } from "react";

interface StatBarProps {
  label: string;
  value: number; // 0-100
  color?: string;
  delay?: number;
}

export default function StatBar({
  label,
  value,
  color = "var(--leaf-fresh)",
  delay = 0,
}: StatBarProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-3 font-pixel text-[10px]">
      <span className="w-28 text-right uppercase tracking-wider text-pixel-white/80">
        {label}
      </span>
      <div className="relative h-5 flex-1 border-2 border-forest-canopy bg-pixel-dark/60">
        {/* Pixel grid lines */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-pixel-dark/30 last:border-r-0"
            />
          ))}
        </div>
        {/* Fill bar */}
        <div
          className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${value}%` : "0%",
            backgroundColor: color,
            transitionDelay: `${delay}ms`,
            boxShadow: visible ? `0 0 8px ${color}40` : "none",
          }}
        />
        {/* Value label */}
        <span className="absolute inset-0 flex items-center justify-center text-[8px] text-pixel-white mix-blend-difference">
          {value}/100
        </span>
      </div>
    </div>
  );
}
