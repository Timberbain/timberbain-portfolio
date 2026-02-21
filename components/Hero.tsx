"use client";

import Particles from "@/components/reactbits/Particles";
import SplitText from "@/components/reactbits/SplitText";
import GradientText from "@/components/reactbits/GradientText";
import PixelSun from "@/components/PixelSun";
import ForestSilhouette from "@/components/ForestSilhouette";
import ScanlineOverlay from "@/components/ScanlineOverlay";

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-pixel-dark relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Particles background - fireflies */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#52b788", "#f9c74f", "#95d5b2", "#b5e48c"]}
          particleCount={60}
          speed={0.2}
          particleSize={3}
          alphaParticles={true}
        />
      </div>

      {/* Pixel sun */}
      <PixelSun />

      {/* Scanline overlay */}
      <ScanlineOverlay />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Title */}
        <h1 className="font-pixel text-pixel-white text-2xl drop-shadow-[0_0_20px_rgba(82,183,136,0.3)] sm:text-4xl md:text-5xl">
          <SplitText
            text="TIMBERBAIN"
            delay={80}
            animationFrom={{
              opacity: 0,
              transform: "translateY(40px) scale(0.5)",
            }}
            animationTo={{ opacity: 1, transform: "translateY(0) scale(1)" }}
          />
        </h1>

        {/* Subtitle */}
        <p className="font-body max-w-xl text-lg sm:text-xl md:text-2xl">
          <GradientText colors={["#52b788", "#f9c74f", "#90e0ef", "#52b788"]} animationSpeed={6}>
            Building the future through trial and horror since 2012
          </GradientText>
        </p>

        {/* Press Start CTA */}
        <button
          onClick={scrollToContent}
          className="font-pixel text-leaf-fresh animate-blink hover:text-sunlight mt-8 cursor-pointer text-xs transition-colors sm:text-sm"
        >
          PRESS START
        </button>
      </div>

      {/* Forest silhouette at bottom */}
      <div className="absolute right-0 bottom-0 left-0">
        <ForestSilhouette />
      </div>

      {/* Bottom gradient fade */}
      <div className="from-pixel-dark pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}
