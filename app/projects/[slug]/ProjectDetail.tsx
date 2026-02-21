"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import RetroButton from "@/components/RetroButton";
import Navigation from "@/components/Navigation";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import type { Project } from "@/lib/projects";

const ClickSpark = dynamic(() => import("@/components/reactbits/ClickSpark"), {
  ssr: false,
});

interface ProjectDetailProps {
  project: Project;
  prev?: Project;
  next?: Project;
}

export default function ProjectDetail({ project, prev, next }: ProjectDetailProps) {
  return (
    <ClickSpark sparkColor="#52b788" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
      <ScanlineOverlay />
      <Navigation />

      <main className="min-h-screen bg-pixel-dark pt-16 pb-32">
        {/* Hero area */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Back link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-pixel text-[10px] text-pixel-white/50 hover:text-leaf-fresh transition-colors mb-8"
            >
              <span>&lt;</span> BACK TO QUESTS
            </Link>

            {/* Project icon */}
            <div className="text-6xl mb-6">{project.icon}</div>

            {/* Title */}
            <h1 className="font-pixel text-xl sm:text-3xl text-pixel-white mb-4">
              <DecryptedText
                text={project.name.toUpperCase()}
                speed={30}
                maxIterations={15}
                className="tracking-wider"
              />
            </h1>

            {/* Tagline */}
            <p className="font-body text-lg sm:text-xl text-pixel-white/60 mb-8">
              {project.tagline}
            </p>

            {/* Tech inventory */}
            <div className="pixel-border bg-pixel-dark/80 p-4 rounded-lg inline-block">
              <span className="font-pixel text-[8px] text-pixel-white/40 uppercase tracking-widest block mb-3">
                Inventory
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 bg-forest-canopy/20 text-leaf-bright rounded border border-forest-canopy/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 space-y-12">
          {/* Description */}
          <ScrollReveal>
            <SpotlightCard
              className="pixel-border bg-pixel-dark/60 p-6 sm:p-8 rounded-lg"
              spotlightColor="rgba(82, 183, 136, 0.08)"
            >
              <h2 className="font-pixel text-xs text-sunlight mb-4 uppercase tracking-widest">
                Quest Details
              </h2>
              <p className="font-body text-base sm:text-lg text-pixel-white/80 leading-relaxed">
                {project.description}
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <SpotlightCard
              className="pixel-border bg-pixel-dark/60 p-6 sm:p-8 rounded-lg"
              spotlightColor="rgba(249, 199, 79, 0.08)"
            >
              <h2 className="font-pixel text-xs text-sunlight mb-4 uppercase tracking-widest">
                Abilities
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-pixel text-[10px] text-leaf-fresh mt-1">▸</span>
                    <span className="font-body text-sm sm:text-base text-pixel-white/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </ScrollReveal>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <RetroButton href={project.liveUrl} variant="primary">
                Play Demo
              </RetroButton>
            )}
            {project.sourceUrl && (
              <RetroButton href={project.sourceUrl} variant="secondary">
                View Source
              </RetroButton>
            )}
          </div>

          {/* Prev / Next navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-forest-canopy/20">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center gap-3 font-pixel text-[10px] text-pixel-white/50 hover:text-leaf-fresh transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&lt;</span>
                <span>
                  <span className="block text-[8px] text-pixel-white/30 mb-1">PREV QUEST</span>
                  {prev.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center gap-3 font-pixel text-[10px] text-pixel-white/50 hover:text-leaf-fresh transition-colors text-right"
              >
                <span>
                  <span className="block text-[8px] text-pixel-white/30 mb-1">NEXT QUEST</span>
                  {next.name}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
    </ClickSpark>
  );
}
