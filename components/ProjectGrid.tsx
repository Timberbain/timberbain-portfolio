"use client";

import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import Squares from "@/components/reactbits/Squares";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-32">
      {/* Squares background */}
      <div className="absolute inset-0 opacity-20">
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="rgba(45, 106, 79, 0.3)"
          hoverFillColor="rgba(82, 183, 136, 0.1)"
          squareSize={50}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="font-pixel text-sunlight mb-4 text-center text-lg sm:text-2xl">
            <DecryptedText
              text="SIDE QUESTS"
              speed={40}
              maxIterations={12}
              className="tracking-wider"
            />
          </h2>
          <p className="font-body text-pixel-white/50 mb-2 text-center text-sm">
            Select a quest to view details
          </p>
          <div className="via-sunlight mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-transparent to-transparent" />
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug}>
              <div style={{ transitionDelay: `${i * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
