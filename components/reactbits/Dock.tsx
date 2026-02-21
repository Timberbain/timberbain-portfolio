"use client";

import React, { useRef, useState, type ReactNode } from "react";

interface DockItemProps {
  children: ReactNode;
  className?: string;
  label?: string;
  onClick?: () => void;
  magnification?: number;
  distance?: number;
}

interface DockProps {
  children: ReactNode;
  className?: string;
  magnification?: number;
  distance?: number;
}

function DockItem({
  children,
  className = "",
  label,
  onClick,
  magnification = 1.5,
  distance = 120,
}: DockItemProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [scale, setScale] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(e.clientX - center);
    const s = Math.max(1, magnification - (dist / distance) * (magnification - 1));
    setScale(s);
  };

  return (
    <button
      ref={ref}
      className={`relative flex items-center justify-center transition-transform duration-150 ease-out ${className}`}
      style={{ transform: `scale(${scale})` }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setScale(1);
        setIsHovered(false);
      }}
    >
      {children}
      {label && isHovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-pixel text-[8px] text-pixel-white bg-forest-deep/90 px-2 py-1 rounded pointer-events-none">
          {label}
        </span>
      )}
    </button>
  );
}

function Dock({
  children,
  className = "",
  magnification = 1.4,
  distance = 120,
}: DockProps) {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;
    // Propagate mouse position to children via CSS custom property
    const rect = dockRef.current.getBoundingClientRect();
    dockRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  };

  const handleMouseLeave = () => {
    // Reset all children scales
    if (!dockRef.current) return;
    dockRef.current.style.removeProperty("--mouse-x");
  };

  return (
    <div
      ref={dockRef}
      className={`flex items-end gap-2 px-3 py-2 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DockItemProps>(child)) {
          return React.cloneElement(child, { magnification, distance });
        }
        return child;
      })}
    </div>
  );
}

export { Dock, DockItem };
export default Dock;
