"use client";

import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import Squares from "@/components/reactbits/Squares";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
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
          <h2 className="font-pixel text-lg sm:text-2xl text-center text-sunlight mb-4">
            <DecryptedText
              text="SIDE QUESTS"
              speed={40}
              maxIterations={12}
              className="tracking-wider"
            />
          </h2>
          <p className="font-body text-center text-pixel-white/50 mb-2 text-sm">
            Select a quest to view details
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sunlight to-transparent mx-auto mb-12" />
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
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
