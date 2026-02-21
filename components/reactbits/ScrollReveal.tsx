"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  enableBlur = true,
  baseOpacity = 0.15,
  blurStrength = 3,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element fully visible when its center crosses 60% of viewport
      const revealPoint = rect.top + Math.min(rect.height * 0.25, 80);
      const viewportTrigger = windowHeight * 0.85;
      const viewportEnd = windowHeight * 0.55;

      const raw = 1 - (revealPoint - viewportEnd) / (viewportTrigger - viewportEnd);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = baseOpacity + (1 - baseOpacity) * progress;
  const blur = enableBlur ? blurStrength * (1 - progress) : 0;
  const translateY = 12 * (1 - progress);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        filter: blur > 0.1 ? `blur(${blur}px)` : "none",
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.1s, filter 0.1s, transform 0.1s",
      }}
    >
      {children}
    </div>
  );
}
