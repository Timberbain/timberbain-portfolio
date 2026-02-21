'use client';

import Aurora from '@/components/reactbits/Aurora';
import CountUp from '@/components/reactbits/CountUp';
import DecryptedText from '@/components/reactbits/DecryptedText';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import StatBar from '@/components/StatBar';

const skills = [
  { label: 'TypeScript', value: 86, color: 'var(--sky-clear)' },
  { label: 'Node.js', value: 91, color: 'var(--pixel-glow)' },
  { label: 'Next.js', value: 84, color: 'var(--pixel-white)' },
  { label: 'React', value: 73, color: 'var(--leaf-fresh)' },
  { label: 'MongoDB', value: 82, color: 'var(--sunbeam)' },
  { label: 'Postgres', value: 75, color: 'var(--sunlight)' },
];

const stats = [
  { label: 'Years Coding', value: 14, suffix: '+' },
  { label: 'Side Projects', value: 20, suffix: '+' },
  { label: 'Coffees', value: 9001, suffix: '+' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={['#1a4d2e', '#52b788', '#f9c74f']}
          amplitude={1.2}
          speed={0.5}
          blend={0.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="font-pixel text-lg sm:text-2xl text-center text-sunlight mb-4">
            <DecryptedText
              text="CHARACTER SELECT"
              speed={40}
              maxIterations={12}
              className="tracking-wider"
            />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sunlight to-transparent mx-auto mb-12" />
        </ScrollReveal>

        {/* Intro text */}
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="font-body text-lg sm:text-xl text-pixel-white/90 leading-relaxed">
              Hey, I&apos;m{' '}
              <span className="text-leaf-fresh font-semibold">
                Jonas Brandvik
              </span>
              , also known as{' '}
              <span className="text-sunlight font-semibold">Timberbain</span>.
              Developer of the Year 2023. I&apos;ve been writing code since 2012
              and love building things that blend creativity with technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* RPG Stat Bars */}
          <ScrollReveal>
            <div className="pixel-border bg-pixel-dark/80 p-6 sm:p-8 rounded-lg">
              <h3 className="font-pixel text-xs text-leaf-fresh mb-6 uppercase tracking-widest">
                Skill Proficiencies
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <StatBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    color={skill.color}
                    delay={i * 150}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="pixel-border bg-pixel-dark/80 p-6 sm:p-8 rounded-lg">
              <h3 className="font-pixel text-xs text-leaf-fresh mb-6 uppercase tracking-widest">
                Player Stats
              </h3>
              <div className="space-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-4">
                    <span className="font-pixel text-2xl sm:text-4xl text-sunlight">
                      <CountUp
                        to={stat.value}
                        duration={2500}
                        suffix={stat.suffix}
                        separator=","
                      />
                    </span>
                    <span className="font-body text-sm text-pixel-white/60 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Class badge */}
              <div className="mt-8 pt-6 border-t border-forest-canopy/30">
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-[10px] text-pixel-white/50">
                    CLASS:
                  </span>
                  <span className="font-pixel text-xs text-leaf-bright">
                    Full-Stack Dev
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-pixel text-[10px] text-pixel-white/50">
                    TITLE:
                  </span>
                  <span className="font-pixel text-xs text-sunlight">
                    Lead Engineer
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
