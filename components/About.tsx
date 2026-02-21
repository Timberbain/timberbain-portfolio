"use client";

import Aurora from "@/components/reactbits/Aurora";
import CountUp from "@/components/reactbits/CountUp";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import TechInventory from "@/components/TechInventory";

const stats = [
  { label: "Years Coding", value: 14, suffix: "+" },
  { label: "Side Projects", value: 20, suffix: "+" },
  { label: "Coffees", value: 9001, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden py-20 sm:py-32">
      {/* Aurora background */}
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#1a4d2e", "#52b788", "#f9c74f"]}
          amplitude={1.2}
          speed={0.5}
          blend={0.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="font-pixel text-sunlight mb-4 text-center text-lg sm:text-2xl">
            <DecryptedText
              text="CHARACTER SELECT"
              speed={40}
              maxIterations={12}
              className="tracking-wider"
            />
          </h2>
          <div className="via-sunlight mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent to-transparent" />
        </ScrollReveal>

        {/* Intro text */}
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-body text-pixel-white/90 text-lg leading-relaxed sm:text-xl">
              Hey, I&apos;m <span className="text-leaf-fresh font-semibold">Jonas Brandvik</span>,
              also known as <span className="text-sunlight font-semibold">Timberbain</span>.
              Developer of the Year 2023. I&apos;ve been writing code since 2012 and love building
              things that blend creativity with technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Tech Inventory */}
          <ScrollReveal>
            <TechInventory />
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="pixel-border bg-pixel-dark/80 rounded-lg p-6 sm:p-8">
              <h3 className="font-pixel text-leaf-fresh mb-6 text-xs tracking-widest uppercase">
                Player Stats
              </h3>
              <div className="space-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-4">
                    <span className="font-pixel text-sunlight text-2xl sm:text-4xl">
                      <CountUp to={stat.value} duration={2500} suffix={stat.suffix} separator="," />
                    </span>
                    <span className="font-body text-pixel-white/60 text-sm tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Class badge */}
              <div className="border-forest-canopy/30 mt-8 border-t pt-6">
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-pixel-white/50 text-[10px]">CLASS:</span>
                  <span className="font-pixel text-leaf-bright text-xs">Full-Stack Dev</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-pixel text-pixel-white/50 text-[10px]">TITLE:</span>
                  <span className="font-pixel text-sunlight text-xs">Lead Engineer</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
