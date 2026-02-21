"use client";

import { useEffect, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  revealDirection?: "start" | "end" | "center";
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export default function DecryptedText({
  text,
  className = "",
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  revealDirection = "start",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const revealed = new Set<number>();

    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (revealed.has(i)) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      // Reveal characters based on direction
      const totalChars = text.replace(/ /g, "").length;
      const charsToReveal = Math.floor((iteration / maxIterations) * totalChars);

      for (let j = 0; j < charsToReveal; j++) {
        let idx: number;
        if (revealDirection === "start") {
          idx = j;
        } else if (revealDirection === "end") {
          idx = text.length - 1 - j;
        } else {
          const mid = Math.floor(text.length / 2);
          idx = j % 2 === 0 ? mid + Math.floor(j / 2) : mid - Math.ceil(j / 2);
        }
        if (idx >= 0 && idx < text.length) revealed.add(idx);
      }

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayed(text);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animateOn, text]);

  const handleHover = () => {
    if (animateOn === "hover") animate();
  };

  return (
    <span
      ref={ref}
      className={parentClassName}
      onMouseEnter={handleHover}
    >
      {displayed.split("").map((char, i) => (
        <span
          key={i}
          className={
            char === text[i]
              ? className
              : `${encryptedClassName || className} opacity-60`
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}
