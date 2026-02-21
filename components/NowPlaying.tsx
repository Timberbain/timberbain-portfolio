"use client";

import CountUp from "@/components/reactbits/CountUp";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { currentQuests, playerMeta } from "@/lib/status";

export default function NowPlaying() {
  return (
    <div className="pixel-border bg-pixel-dark/80 rounded-lg p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Quest Items */}
        <div className="flex-1">
          <h3 className="font-pixel text-leaf-fresh mb-6 text-xs tracking-widest uppercase">
            Active Quests
          </h3>
          <div className="space-y-0">
            {currentQuests.map((quest, i) => (
              <div key={quest.label}>
                {i > 0 && (
                  <div className="via-forest-canopy/30 my-4 h-px bg-gradient-to-r from-transparent to-transparent" />
                )}
                <div className="flex items-start gap-3">
                  {quest.emoji && <span className="mt-0.5 text-base">{quest.emoji}</span>}
                  <div>
                    <span className="font-pixel text-sunlight text-[10px] tracking-widest uppercase">
                      <DecryptedText text={quest.label} speed={30 + i * 20} maxIterations={10} />
                    </span>
                    <p className="font-body text-pixel-white/90 mt-1 text-base sm:text-lg">
                      {quest.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Player Meta sidebar */}
        <div className="border-forest-canopy/20 mt-6 border-t pt-6 lg:mt-0 lg:w-64 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
          <h3 className="font-pixel text-leaf-fresh mb-6 text-xs tracking-widest uppercase">
            Player Info
          </h3>

          <div className="space-y-4">
            <div>
              <span className="font-pixel text-pixel-white/50 text-[10px]">CLASS:</span>
              <span className="font-pixel text-leaf-bright ml-2 text-xs">{playerMeta.class}</span>
            </div>
            <div>
              <span className="font-pixel text-pixel-white/50 text-[10px]">TITLE:</span>
              <span className="font-pixel text-sunlight ml-2 text-xs">{playerMeta.title}</span>
            </div>
          </div>

          <div className="via-forest-canopy/30 my-5 h-px bg-gradient-to-r from-transparent to-transparent" />

          <div className="space-y-5">
            <div>
              <span className="font-pixel text-sunlight text-2xl sm:text-3xl">
                <CountUp to={playerMeta.yearsCoding} duration={2500} suffix="+" />
              </span>
              <p className="font-body text-pixel-white/60 mt-1 text-sm tracking-wider uppercase">
                Years Coding
              </p>
            </div>
            <div>
              <span className="font-pixel text-sunlight text-2xl sm:text-3xl">
                <CountUp to={playerMeta.coffees} duration={2500} suffix="+" separator="," />
              </span>
              <p className="font-body text-pixel-white/60 mt-1 text-sm tracking-wider uppercase">
                Coffees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
