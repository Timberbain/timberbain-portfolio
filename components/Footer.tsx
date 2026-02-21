"use client";

import ForestSilhouette from "@/components/ForestSilhouette";

const links = [
  { label: "GitHub", href: "https://github.com/timberbain", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jonasbrandvik", icon: "IN" },
  { label: "Email", href: "mailto:hello@timberbain.dev", icon: "@" },
];

export default function Footer() {
  return (
    <footer className="relative bg-pixel-dark pt-16 pb-28 overflow-hidden">
      {/* Forest silhouette */}
      <div className="opacity-40">
        <ForestSilhouette className="translate-y-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        {/* Links */}
        <div className="flex justify-center gap-6 mb-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="w-12 h-12 flex items-center justify-center font-pixel text-xs text-pixel-white bg-forest-canopy/30 border border-forest-canopy/50 rounded-lg group-hover:border-leaf-fresh group-hover:text-leaf-fresh group-hover:shadow-[0_0_12px_rgba(82,183,136,0.3)] transition-all">
                {link.icon}
              </span>
              <span className="font-body text-xs text-pixel-white/40 group-hover:text-pixel-white/70 transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-forest-canopy/30 to-transparent mb-6" />

        {/* Tagline */}
        <p className="font-pixel text-[8px] sm:text-[10px] text-center text-pixel-white/30 leading-relaxed">
          Game Over? Never. There&apos;s always another level.
        </p>
        <p className="font-body text-xs text-center text-pixel-white/20 mt-2">
          &copy; {new Date().getFullYear()} Timberbain
        </p>
      </div>
    </footer>
  );
}
