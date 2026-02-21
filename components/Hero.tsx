'use client';

import Particles from '@/components/reactbits/Particles';
import SplitText from '@/components/reactbits/SplitText';
import GradientText from '@/components/reactbits/GradientText';
import PixelSun from '@/components/PixelSun';
import ForestSilhouette from '@/components/ForestSilhouette';
import ScanlineOverlay from '@/components/ScanlineOverlay';

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-pixel-dark flex flex-col items-center justify-center">
      {/* Particles background - fireflies */}
      <div className="absolute inset-0">
        <Particles
          particleColors={['#52b788', '#f9c74f', '#95d5b2', '#b5e48c']}
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
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-pixel-white drop-shadow-[0_0_20px_rgba(82,183,136,0.3)]">
          <SplitText
            text="TIMBERBAIN"
            delay={80}
            animationFrom={{
              opacity: 0,
              transform: 'translateY(40px) scale(0.5)',
            }}
            animationTo={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
          />
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl md:text-2xl max-w-xl">
          <GradientText
            colors={['#52b788', '#f9c74f', '#90e0ef', '#52b788']}
            animationSpeed={6}
          >
            Building the future through trial and horror since 2012
          </GradientText>
        </p>

        {/* Press Start CTA */}
        <button
          onClick={scrollToContent}
          className="mt-8 font-pixel text-xs sm:text-sm text-leaf-fresh animate-blink hover:text-sunlight transition-colors cursor-pointer"
        >
          PRESS START
        </button>
      </div>

      {/* Forest silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <ForestSilhouette />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pixel-dark to-transparent pointer-events-none" />
    </section>
  );
}
