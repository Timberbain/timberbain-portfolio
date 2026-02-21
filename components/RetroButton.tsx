"use client";

import { type ReactNode } from "react";

interface RetroButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function RetroButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: RetroButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-pixel text-xs px-6 py-3 uppercase tracking-wider transition-all duration-150 active:translate-y-0.5";

  const variants = {
    primary: `bg-leaf-fresh text-pixel-dark
      shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.25),inset_3px_3px_0px_0px_rgba(255,255,255,0.25),0_4px_0_0_var(--forest-deep)]
      hover:bg-pixel-glow hover:shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.25),inset_3px_3px_0px_0px_rgba(255,255,255,0.25),0_4px_0_0_var(--forest-deep),0_0_16px_var(--leaf-fresh)]
      active:shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.25),inset_3px_3px_0px_0px_rgba(255,255,255,0.25),0_2px_0_0_var(--forest-deep)]`,
    secondary: `bg-forest-canopy text-pixel-white border-2 border-leaf-fresh/30
      shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.2),inset_3px_3px_0px_0px_rgba(255,255,255,0.1),0_4px_0_0_var(--pixel-dark)]
      hover:border-leaf-fresh/60 hover:shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.2),inset_3px_3px_0px_0px_rgba(255,255,255,0.1),0_4px_0_0_var(--pixel-dark),0_0_12px_var(--forest-canopy)]
      active:shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.2),inset_3px_3px_0px_0px_rgba(255,255,255,0.1),0_2px_0_0_var(--pixel-dark)]`,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
