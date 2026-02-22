"use client";

import NowPlaying from "@/components/NowPlaying";
import Aurora from "@/components/reactbits/Aurora";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";

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
              I&apos;ve been tinkering with code for as long as I can remember and love building
              things that blend creativity with technology.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <NowPlaying />
        </ScrollReveal>
      </div>
    </section>
  );
}
