"use client";

import Link from "next/link";
import PixelCard from "@/components/reactbits/PixelCard";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <PixelCard
        variant="default"
        gap={6}
        speed={30}
        colors={`${project.color},#1a4d2e,#0d1b0e`}
        className="h-full min-h-[280px] bg-pixel-dark/90 p-6 sm:p-8"
      >
        <div className="flex flex-col items-start gap-4 w-full text-left">
          {/* Icon */}
          <span className="text-4xl" role="img" aria-label={project.name}>
            {project.icon}
          </span>

          {/* Name */}
          <h3 className="font-pixel text-sm sm:text-base text-pixel-white group-hover:text-leaf-fresh transition-colors">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="font-body text-sm text-pixel-white/70 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2 py-1 bg-forest-canopy/30 text-leaf-bright rounded border border-forest-canopy/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="font-mono text-[10px] px-2 py-1 text-pixel-white/40">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </PixelCard>
    </Link>
  );
}
