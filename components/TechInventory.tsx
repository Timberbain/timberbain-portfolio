"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

type Tier = "expert" | "proficient" | "familiar";

interface Skill {
  name: string;
  tier: Tier;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    skills: [
      { name: "TypeScript", tier: "expert" },
      { name: "Node.js", tier: "expert" },
      { name: "Next.js", tier: "proficient" },
      { name: "React", tier: "proficient" },
      { name: "PHP", tier: "proficient" },
      { name: "C++", tier: "proficient" },
    ],
  },
  {
    label: "Data Layer",
    skills: [
      { name: "MongoDB", tier: "expert" },
      { name: "Kafka", tier: "expert" },
      { name: "PostgreSQL", tier: "proficient" },
      { name: "Redis", tier: "proficient" },
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      { name: "Docker", tier: "expert" },
      { name: "Kubernetes", tier: "expert" },
      { name: "AWS", tier: "proficient" },
      { name: "Datadog", tier: "proficient" },
    ],
  },
];

const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);

const tierConfig: Record<
  Tier,
  { stars: string; border: string; bg: string; text: string; glow: string }
> = {
  expert: {
    stars: "★★★",
    border: "border-leaf-fresh/60",
    bg: "bg-forest-canopy/30",
    text: "text-leaf-fresh",
    glow: "hover:shadow-[0_0_8px_rgba(82,183,136,0.3)]",
  },
  proficient: {
    stars: "★★",
    border: "border-forest-canopy/40",
    bg: "bg-forest-canopy/15",
    text: "text-forest-canopy",
    glow: "hover:shadow-[0_0_8px_rgba(45,106,79,0.3)]",
  },
  familiar: {
    stars: "★",
    border: "border-forest-canopy/20",
    bg: "bg-forest-canopy/10",
    text: "text-forest-canopy/60",
    glow: "hover:shadow-[0_0_6px_rgba(45,106,79,0.2)]",
  },
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  const subscribe = useCallback((cb: () => void) => {
    const mql = window.matchMedia(REDUCED_MOTION_QUERY);
    mql.addEventListener("change", cb);
    return () => mql.removeEventListener("change", cb);
  }, []);
  const getSnapshot = useCallback(() => window.matchMedia(REDUCED_MOTION_QUERY).matches, []);
  const getServerSnapshot = useCallback(() => false, []);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function SkillItem({
  skill,
  delay,
  skipAnimation,
}: {
  skill: Skill;
  delay: number;
  skipAnimation: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skipAnimation) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, skipAnimation]);

  const config = tierConfig[skill.tier];

  return (
    <div
      ref={ref}
      className={`rounded-lg border p-2 transition-all duration-300 ${config.border} ${config.bg} ${config.glow} ${visible || skipAnimation ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} `}
    >
      <span className="text-pixel-white/90 block truncate font-mono text-[10px]">{skill.name}</span>
      <span className={`font-pixel text-[8px] ${config.text} mt-0.5 block`}>{config.stars}</span>
    </div>
  );
}

export default function TechInventory() {
  const skipAnimation = usePrefersReducedMotion();
  let itemIndex = 0;

  return (
    <div className="pixel-border bg-pixel-dark/80 rounded-lg p-6 sm:p-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className="font-pixel text-leaf-fresh text-xs tracking-widest uppercase">
          Tech Inventory
        </h3>
        <span className="font-pixel text-pixel-white/40 text-[8px]">
          [{totalSkills}/{totalSkills}]
        </span>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.label}>
            <h4 className="font-pixel text-sunlight mb-3 text-[10px] tracking-widest uppercase">
              {category.label}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {category.skills.map((skill) => {
                const delay = itemIndex * 100;
                itemIndex++;
                return (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    delay={delay}
                    skipAnimation={skipAnimation}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="border-forest-canopy/20 mt-6 border-t pt-4">
        <div className="font-pixel text-pixel-white/40 flex items-center justify-center gap-4 text-[8px]">
          <span>
            <span className="text-forest-canopy/60">★</span> Familiar
          </span>
          <span>
            <span className="text-forest-canopy">★★</span> Proficient
          </span>
          <span>
            <span className="text-leaf-fresh">★★★</span> Expert
          </span>
        </div>
      </div>
    </div>
  );
}
