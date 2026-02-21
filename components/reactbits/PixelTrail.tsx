"use client";

import { useEffect, useRef } from "react";

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  color?: string;
  className?: string;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  maxAge: number;
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 3,
  maxAge = 300,
  color = "#52b788",
  className = "",
}: PixelTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const prevMouseRef = useRef({ x: -100, y: -100 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      // Interpolate between previous and current position
      const dx = mouseRef.current.x - prevMouseRef.current.x;
      const dy = mouseRef.current.y - prevMouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(1, Math.floor(dist / (gridSize * 0.5)));

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const px = prevMouseRef.current.x + dx * t;
        const py = prevMouseRef.current.y + dy * t;

        // Snap to grid
        const gx = Math.floor(px / gridSize) * gridSize;
        const gy = Math.floor(py / gridSize) * gridSize;

        // Avoid duplicates at same grid position
        const exists = trailRef.current.some(
          (p) => p.x === gx && p.y === gy && p.age < p.maxAge * 0.5
        );
        if (!exists) {
          trailRef.current.push({
            x: gx,
            y: gy,
            age: 0,
            maxAge: maxAge + Math.random() * 100,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current = trailRef.current.filter((p) => {
        p.age += 16;
        if (p.age >= p.maxAge) return false;

        const progress = p.age / p.maxAge;
        const alpha = 1 - progress;
        const size = trailSize * gridSize * 0.3 * (1 - progress * 0.5);

        // Parse color
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillRect(p.x, p.y, size, size);
        ctx.globalAlpha = 1;

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gridSize, trailSize, maxAge, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-40 ${className}`}
    />
  );
}
