export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  color: string;
  icon: string; // emoji as placeholder
}

export const projects: Project[] = [
  {
    slug: "world-of-conquest",
    name: "World of Conquest",
    tagline: "Turn gaming rivalries into global empires",
    description:
      "A real-time multiplayer strategy platform where players conquer countries by challenging rivals to 1v1 duels across games like StarCraft, Chess, and Counter-Strike. Territories carry real-world stats — population, GDP, and gold — feeding into a gamified scoring system that rewards different conquest strategies.",
    features: [
      "Interactive world map with real-time territory control",
      "1v1 duel system across 7 configurable games",
      "Gamified scoring system with strategic playstyles",
      "Teams, betting, and Discord bot integration",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Leaflet"],
    liveUrl: "https://woc.timbernerds.com",
    sourceUrl: "#",
    color: "var(--sunbeam)",
    icon: "⚔️",
  },
  {
    slug: "banger",
    name: "Banger",
    tagline: "Asymmetric 1v2 arena combat",
    description:
      "A multiplayer arena shooter where one powerful predator hunts two agile guardians across pixel art arenas. Server-authoritative 60Hz netcode with client prediction keeps combat tight, while destructible environments and stage rotation keep every round unpredictable.",
    features: [
      "Asymmetric 1v2 gameplay with unique physics per role",
      "Server-authoritative netcode with client-side prediction",
      "Multiple arenas with destructible obstacles and stage rotation",
      "Private lobbies and public matchmaking with reconnection support",
    ],
    techStack: ["Phaser 3", "Colyseus", "TypeScript", "Node.js"],
    liveUrl: "https://banger.timbernerds.com",
    sourceUrl: "https://github.com/timberbain/banger-game",
    color: "var(--sky-clear)",
    icon: "💥",
  },
  {
    slug: "fredag",
    name: "Är det Fredag?",
    tagline: "The only calendar you need",
    description:
      "A single-purpose Swedish web app that answers the only question that matters: Is it Friday? Celebrates with rainbow confetti on Fridays, delivers the bad news gracefully on every other day. Hydration-safe client-side date detection keeps the answer accurate no matter when you visit.",
    features: [
      "Real-time Friday detection with hydration-safe rendering",
      "Rainbow confetti celebration on Fridays",
      "Swedish localization with playful messaging",
      "Minimal, shareable single-purpose design",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fredag.minabekanta.se",
    sourceUrl: "https://gitlab.com/Timberbain/fredag",
    color: "var(--sunlight)",
    icon: "🐸",
  },
  {
    slug: "tiny-heroes-rpg",
    name: "Tiny Heroes RPG",
    tagline: "AI-powered adventures for tiny heroes",
    description:
      "An interactive storytelling RPG where an AI Game Master guides children through personalized fantasy adventures. Pick from four character classes — Sorceress, Knight, Ranger, or Bard — each with unique skill strengths that shape how challenges play out. Exploding dice mechanics, gentle failure handling, and bilingual support (English & Swedish) keep every quest cozy and replayable.",
    features: [
      "AI Game Master with structured adventure planning via GPT-4",
      "Four character classes with distinct skill-based dice mechanics",
      "Exploding dice system with animated client-side rolling",
      "Full English and Swedish localization including AI narration",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "next-intl"],
    liveUrl: "https://tiny-rpg.timbernerds.com",
    sourceUrl: "#",
    color: "var(--sunlight)",
    icon: "🐉",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
