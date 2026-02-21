"use client";

import Link from "next/link";
import PixelCard from "@/components/reactbits/PixelCard";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <PixelCard
        variant="default"
        gap={6}
        speed={30}
        colors={`${project.color},#1a4d2e,#0d1b0e`}
        className="bg-pixel-dark/90 h-full min-h-[280px] p-6 sm:p-8"
      >
        <div className="flex w-full flex-col items-start gap-4 text-left">
          {/* Icon */}
          <span className="text-4xl" role="img" aria-label={project.name}>
            {project.icon}
          </span>

          {/* Name */}
          <h3 className="font-pixel text-pixel-white group-hover:text-leaf-fresh text-sm transition-colors sm:text-base">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="font-body text-pixel-white/70 text-sm leading-relaxed">{project.tagline}</p>

          {/* Tech stack */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="bg-forest-canopy/30 text-leaf-bright border-forest-canopy/50 rounded border px-2 py-1 font-mono text-[10px]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-pixel-white/40 px-2 py-1 font-mono text-[10px]">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </PixelCard>
    </Link>
  );
}
