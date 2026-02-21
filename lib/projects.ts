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
    slug: "pixel-forest",
    name: "Pixel Forest",
    tagline: "Generative pixel art experiments",
    description:
      "A creative coding playground that generates lush pixel-art forest landscapes using procedural algorithms. Each refresh creates a unique biome with trees, rivers, and wildlife — all rendered in a retro 8-bit style.",
    features: [
      "Procedural terrain generation with biome types",
      "Dynamic day/night cycle with pixel lighting",
      "Exportable pixel art at various resolutions",
      "Interactive seeding system for reproducible worlds",
    ],
    techStack: ["TypeScript", "Canvas API", "Web Workers", "Vite"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "var(--leaf-fresh)",
    icon: "🌲",
  },
  {
    slug: "quest-logger",
    name: "Quest Logger",
    tagline: "Track side projects like RPG quests",
    description:
      "A project management tool disguised as an RPG quest log. Track your side projects with XP, difficulty ratings, and party members. Level up your developer character as you complete quests.",
    features: [
      "Quest board with difficulty ratings (D-rank to S-rank)",
      "XP tracking and level progression",
      "Party system for collaborative projects",
      "Achievement badges for milestones",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "var(--sunlight)",
    icon: "📜",
  },
  {
    slug: "synthwave-radio",
    name: "Synthwave Radio",
    tagline: "Retro internet radio player",
    description:
      "A retro-styled internet radio player with visualizers inspired by 80s aesthetics. Features curated synthwave and chiptune channels with real-time audio visualization.",
    features: [
      "Multiple curated music channels",
      "Real-time audio frequency visualizer",
      "Retro CRT display effect",
      "Keyboard shortcuts for power users",
    ],
    techStack: ["React", "Web Audio API", "Canvas", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "var(--sky-clear)",
    icon: "📻",
  },
  {
    slug: "cloud-garden",
    name: "Cloud Garden",
    tagline: "Virtual plant growing simulation",
    description:
      "A zen virtual garden where plants grow based on real-world weather data from your location. Water them, give them sunlight, and watch them bloom in pixel art glory. A meditation on patience and nature.",
    features: [
      "Real weather API integration for growth simulation",
      "Pixel art plant sprites with growth stages",
      "Garden customization and layout tools",
      "Seasonal events and rare plant species",
    ],
    techStack: ["Next.js", "TypeScript", "Weather API", "Supabase"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "var(--pixel-glow)",
    icon: "🌱",
  },
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
    liveUrl: "#",
    sourceUrl: "#",
    color: "var(--sunbeam)",
    icon: "⚔️",
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
