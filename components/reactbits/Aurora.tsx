"use client";

import { useEffect, useRef } from "react";

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ["#1a4d2e", "#52b788", "#f9c74f"],
  amplitude = 1.0,
  blend = 0.5,
  speed = 1.0,
  className = "",
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : { r: 0, g: 0, b: 0 };
    };

    // Simplex-like noise approximation
    const noise = (x: number, y: number) => {
      const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return s - Math.floor(s);
    };

    const smoothNoise = (x: number, y: number) => {
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      const fx = x - ix;
      const fy = y - iy;
      const sx = fx * fx * (3 - 2 * fx);
      const sy = fy * fy * (3 - 2 * fy);

      const n00 = noise(ix, iy);
      const n10 = noise(ix + 1, iy);
      const n01 = noise(ix, iy + 1);
      const n11 = noise(ix + 1, iy + 1);

      const nx0 = n00 * (1 - sx) + n10 * sx;
      const nx1 = n01 * (1 - sx) + n11 * sx;
      return nx0 * (1 - sy) + nx1 * sy;
    };

    const colors = colorStops.map(hexToRgb);

    const draw = (time: number) => {
      const t = time * 0.001 * speed;
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      // Draw at lower resolution for performance
      const scale = 4;
      const sw = Math.ceil(width / scale);
      const sh = Math.ceil(height / scale);
      const smallData = new Uint8ClampedArray(sw * sh * 4);

      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
          const ux = x / sw;
          const uy = y / sh;

          // Multi-octave noise for aurora shape
          const n1 = smoothNoise(ux * 3 + t * 0.1, t * 0.15) * amplitude;
          const n2 = smoothNoise(ux * 6 + t * 0.05, t * 0.1 + 100) * 0.5 * amplitude;
          const heightVal = Math.exp((n1 + n2) * 0.5);
          const intensity = Math.max(0, (uy * 2 - heightVal + 0.2)) * 0.6;

          // Blend threshold
          const midPoint = 0.2;
          const alpha = Math.max(0, Math.min(1,
            (intensity - midPoint + blend * 0.5) / blend
          ));

          // Color ramp based on x position
          const colorPos = ux * (colors.length - 1);
          const ci = Math.min(Math.floor(colorPos), colors.length - 2);
          const cf = colorPos - ci;
          const c = {
            r: colors[ci].r + (colors[ci + 1].r - colors[ci].r) * cf,
            g: colors[ci].g + (colors[ci + 1].g - colors[ci].g) * cf,
            b: colors[ci].b + (colors[ci + 1].b - colors[ci].b) * cf,
          };

          const idx = (y * sw + x) * 4;
          smallData[idx] = Math.min(255, c.r * intensity * 2);
          smallData[idx + 1] = Math.min(255, c.g * intensity * 2);
          smallData[idx + 2] = Math.min(255, c.b * intensity * 2);
          smallData[idx + 3] = alpha * 255;
        }
      }

      // Scale up
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const sx = Math.min(Math.floor(x / scale), sw - 1);
          const sy = Math.min(Math.floor(y / scale), sh - 1);
          const si = (sy * sw + sx) * 4;
          const di = (y * width + x) * 4;
          data[di] = smallData[si];
          data[di + 1] = smallData[si + 1];
          data[di + 2] = smallData[si + 2];
          data[di + 3] = smallData[si + 3];
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [colorStops, amplitude, blend, speed]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
}
