"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dock, DockItem } from "@/components/reactbits/Dock";

const navItems = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Quests", href: "/#projects", icon: "⚔️" },
  { label: "Stats", href: "/#about", icon: "📊" },
  { label: "GitHub", href: "https://github.com/timberbain", icon: "💻", external: true },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-pixel-dark/90 backdrop-blur-md border border-forest-canopy/40 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_10px_rgba(82,183,136,0.1)]">
        <Dock className="gap-1 sm:gap-2 px-2 sm:px-4 py-2" magnification={1.3} distance={80}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.replace("/#", "/")));

            if (item.external) {
              return (
                <DockItem key={item.label} label={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-lg sm:text-xl transition-all
                      ${isActive
                        ? "bg-forest-canopy/50 shadow-[0_0_8px_rgba(82,183,136,0.3)]"
                        : "bg-forest-deep/30 hover:bg-forest-canopy/30"
                      }`}
                  >
                    {item.icon}
                  </a>
                </DockItem>
              );
            }

            return (
              <DockItem key={item.label} label={item.label}>
                <Link
                  href={item.href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-lg sm:text-xl transition-all
                    ${isActive
                      ? "bg-forest-canopy/50 shadow-[0_0_8px_rgba(82,183,136,0.3)]"
                      : "bg-forest-deep/30 hover:bg-forest-canopy/30"
                    }`}
                >
                  {item.icon}
                </Link>
              </DockItem>
            );
          })}
        </Dock>
      </div>
    </nav>
  );
}
