"use client";

import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: string;
  threshold?: number;
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translateY(40px) scale(0.8)" },
  animationTo = { opacity: 1, transform: "translateY(0) scale(1)" },
  threshold = 0.1,
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (visible && onLetterAnimationComplete) {
      const totalDelay = text.length * delay + 600;
      const timer = setTimeout(onLetterAnimationComplete, totalDelay);
      return () => clearTimeout(timer);
    }
  }, [visible, text, delay, onLetterAnimationComplete]);

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block transition-all duration-500"
          style={{
            ...(visible ? animationTo : animationFrom),
            transitionDelay: visible ? `${i * delay}ms` : "0ms",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
