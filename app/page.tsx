"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScanlineOverlay from "@/components/ScanlineOverlay";

const PixelTrail = dynamic(() => import("@/components/reactbits/PixelTrail"), {
  ssr: false,
});

const ClickSpark = dynamic(() => import("@/components/reactbits/ClickSpark"), {
  ssr: false,
});

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#52b788"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      {/* Pixel cursor trail - desktop only */}
      <div className="hidden md:block">
        <PixelTrail
          gridSize={30}
          trailSize={2}
          maxAge={400}
          color="#52b788"
        />
      </div>

      {/* Scanline overlay */}
      <ScanlineOverlay />

      {/* Navigation */}
      <Navigation />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <ProjectGrid />
      </main>

      <Footer />
    </ClickSpark>
  );
}
