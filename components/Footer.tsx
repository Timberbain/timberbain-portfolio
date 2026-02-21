"use client";

import ForestSilhouette from "@/components/ForestSilhouette";

const links = [
  { label: "GitHub", href: "https://github.com/timberbain", icon: "GH" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jonas-brandvik",
    icon: "IN",
  },
  { label: "Email", href: "mailto:hello@timberbain.dev", icon: "@" },
];

export default function Footer() {
  return (
    <footer className="bg-pixel-dark relative overflow-hidden pt-16 pb-28">
      {/* Forest silhouette */}
      <div className="opacity-40">
        <ForestSilhouette className="translate-y-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        {/* Links */}
        <div className="mb-8 flex justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="font-pixel text-pixel-white bg-forest-canopy/30 border-forest-canopy/50 group-hover:border-leaf-fresh group-hover:text-leaf-fresh flex h-12 w-12 items-center justify-center rounded-lg border text-xs transition-all group-hover:shadow-[0_0_12px_rgba(82,183,136,0.3)]">
                {link.icon}
              </span>
              <span className="font-body text-pixel-white/40 group-hover:text-pixel-white/70 text-xs transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="via-forest-canopy/30 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

        {/* Tagline */}
        <p className="font-pixel text-pixel-white/30 text-center text-[8px] leading-relaxed sm:text-[10px]">
          Game Over? Never. There&apos;s always another level.
        </p>
        <p className="font-body text-pixel-white/20 mt-2 text-center text-xs">
          &copy; {new Date().getFullYear()} Timberbain
        </p>
      </div>
    </footer>
  );
}
