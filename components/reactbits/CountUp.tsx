"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  onEnd?: () => void;
}

export default function CountUp({
  from = 0,
  to,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
  separator = "",
  decimals = 0,
  onEnd,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = from + (to - from) * eased;
            setValue(Number(current.toFixed(decimals)));

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(to);
              onEnd?.();
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [from, to, duration, decimals, onEnd]);

  const formatNumber = (n: number) => {
    const str = n.toFixed(decimals);
    if (!separator) return str;
    const [int, dec] = str.split(".");
    const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return dec ? `${formatted}.${dec}` : formatted;
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(value)}{suffix}
    </span>
  );
}
