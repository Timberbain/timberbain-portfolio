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

      <main className="bg-pixel-dark min-h-screen pt-16 pb-32">
        {/* Hero area */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Back link */}
            <Link
              href="/#projects"
              className="font-pixel text-pixel-white/50 hover:text-leaf-fresh mb-8 inline-flex items-center gap-2 text-[10px] transition-colors"
            >
              <span>&lt;</span> BACK TO QUESTS
            </Link>

            {/* Project icon */}
            <div className="mb-6 text-6xl">{project.icon}</div>

            {/* Title */}
            <h1 className="font-pixel text-pixel-white mb-4 text-xl sm:text-3xl">
              <DecryptedText
                text={project.name.toUpperCase()}
                speed={30}
                maxIterations={15}
                className="tracking-wider"
              />
            </h1>

            {/* Tagline */}
            <p className="font-body text-pixel-white/60 mb-8 text-lg sm:text-xl">
              {project.tagline}
            </p>

            {/* Tech inventory */}
            <div className="pixel-border bg-pixel-dark/80 inline-block rounded-lg p-4">
              <span className="font-pixel text-pixel-white/40 mb-3 block text-[8px] tracking-widest uppercase">
                Inventory
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-forest-canopy/20 text-leaf-bright border-forest-canopy/40 rounded border px-3 py-1.5 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
          {/* Description */}
          <ScrollReveal>
            <SpotlightCard
              className="pixel-border bg-pixel-dark/60 rounded-lg p-6 sm:p-8"
              spotlightColor="rgba(82, 183, 136, 0.08)"
            >
              <h2 className="font-pixel text-sunlight mb-4 text-xs tracking-widest uppercase">
                Quest Details
              </h2>
              <p className="font-body text-pixel-white/80 text-base leading-relaxed sm:text-lg">
                {project.description}
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <SpotlightCard
              className="pixel-border bg-pixel-dark/60 rounded-lg p-6 sm:p-8"
              spotlightColor="rgba(249, 199, 79, 0.08)"
            >
              <h2 className="font-pixel text-sunlight mb-4 text-xs tracking-widest uppercase">
                Abilities
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-pixel text-leaf-fresh mt-1 text-[10px]">▸</span>
                    <span className="font-body text-pixel-white/70 text-sm sm:text-base">
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
          <div className="border-forest-canopy/20 flex items-center justify-between border-t pt-12">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group font-pixel text-pixel-white/50 hover:text-leaf-fresh flex items-center gap-3 text-[10px] transition-colors"
              >
                <span className="transition-transform group-hover:-translate-x-1">&lt;</span>
                <span>
                  <span className="text-pixel-white/30 mb-1 block text-[8px]">PREV QUEST</span>
                  {prev.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group font-pixel text-pixel-white/50 hover:text-leaf-fresh flex items-center gap-3 text-right text-[10px] transition-colors"
              >
                <span>
                  <span className="text-pixel-white/30 mb-1 block text-[8px]">NEXT QUEST</span>
                  {next.name}
                </span>
                <span className="transition-transform group-hover:translate-x-1">&gt;</span>
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
