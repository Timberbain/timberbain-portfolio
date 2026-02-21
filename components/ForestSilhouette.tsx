"use client";

export default function ForestSilhouette({ className = "" }: { className?: string }) {
  // Pixel art tree silhouettes along a horizon line
  return (
    <div className={`pointer-events-none w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 320 60"
        className="h-auto w-full"
        preserveAspectRatio="none"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Ground */}
        <rect x="0" y="50" width="320" height="10" fill="var(--forest-deep)" />

        {/* Trees - pixel art style */}
        {/* Tree 1 - tall pine */}
        <rect x="10" y="20" width="4" height="30" fill="var(--forest-deep)" />
        <rect x="6" y="22" width="12" height="4" fill="var(--forest-deep)" />
        <rect x="8" y="18" width="8" height="4" fill="var(--forest-deep)" />
        <rect x="10" y="14" width="4" height="4" fill="var(--forest-deep)" />

        {/* Tree 2 - bushy */}
        <rect x="35" y="30" width="4" height="20" fill="var(--forest-deep)" />
        <rect x="28" y="24" width="18" height="8" fill="var(--forest-deep)" />
        <rect x="30" y="18" width="14" height="8" fill="var(--forest-deep)" />
        <rect x="33" y="14" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 3 - small */}
        <rect x="65" y="36" width="4" height="14" fill="var(--forest-deep)" />
        <rect x="61" y="32" width="12" height="6" fill="var(--forest-deep)" />
        <rect x="63" y="28" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 4 - tall pine */}
        <rect x="90" y="16" width="4" height="34" fill="var(--forest-deep)" />
        <rect x="84" y="22" width="16" height="4" fill="var(--forest-deep)" />
        <rect x="86" y="16" width="12" height="4" fill="var(--forest-deep)" />
        <rect x="88" y="10" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 5 - medium bushy */}
        <rect x="120" y="28" width="4" height="22" fill="var(--forest-deep)" />
        <rect x="114" y="22" width="16" height="8" fill="var(--forest-deep)" />
        <rect x="116" y="16" width="12" height="8" fill="var(--forest-deep)" />

        {/* Tree 6 */}
        <rect x="150" y="32" width="4" height="18" fill="var(--forest-deep)" />
        <rect x="145" y="26" width="14" height="8" fill="var(--forest-deep)" />
        <rect x="148" y="22" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 7 - tall */}
        <rect x="175" y="14" width="4" height="36" fill="var(--forest-deep)" />
        <rect x="169" y="18" width="16" height="4" fill="var(--forest-deep)" />
        <rect x="171" y="12" width="12" height="6" fill="var(--forest-deep)" />
        <rect x="173" y="8" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 8 - small */}
        <rect x="205" y="38" width="4" height="12" fill="var(--forest-deep)" />
        <rect x="201" y="34" width="12" height="6" fill="var(--forest-deep)" />
        <rect x="203" y="30" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 9 */}
        <rect x="230" y="24" width="4" height="26" fill="var(--forest-deep)" />
        <rect x="224" y="20" width="16" height="6" fill="var(--forest-deep)" />
        <rect x="226" y="14" width="12" height="8" fill="var(--forest-deep)" />
        <rect x="228" y="10" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 10 - bushy */}
        <rect x="260" y="30" width="4" height="20" fill="var(--forest-deep)" />
        <rect x="254" y="24" width="16" height="8" fill="var(--forest-deep)" />
        <rect x="256" y="18" width="12" height="8" fill="var(--forest-deep)" />

        {/* Tree 11 */}
        <rect x="288" y="34" width="4" height="16" fill="var(--forest-deep)" />
        <rect x="283" y="28" width="14" height="8" fill="var(--forest-deep)" />
        <rect x="286" y="24" width="8" height="6" fill="var(--forest-deep)" />

        {/* Tree 12 - edge */}
        <rect x="310" y="20" width="4" height="30" fill="var(--forest-deep)" />
        <rect x="306" y="16" width="12" height="6" fill="var(--forest-deep)" />
        <rect x="308" y="10" width="8" height="8" fill="var(--forest-deep)" />
      </svg>
    </div>
  );
}
