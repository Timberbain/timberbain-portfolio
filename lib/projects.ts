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
      "Me and my fiends has played StarCraft: Brood War since it came out in 1998. Countless hours, sleepless nights and old school LAN parties has been dedicated to this game. We still play it to this day - though less frequent. Last year I got this idea of gamifying our score tracking - allowing us to visualise our victories on a world map. Thats when world of conquest was born. A real-time multiplayer strategy platform where players conquer countries by challenging rivals to 1v1 duels across games like StarCraft, Chess, and other games. Territories carry real-world stats - population, GDP, and gold - feeding into a gamified scoring system that rewards different conquest strategies.",
    features: [
      "Interactive world map with real-time territory control",
      "1v1 duel system across configurable games",
      "Gamified scoring system with strategic playstyles",
      "Teams, betting, and Discord bot integration",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Leaflet"],
    liveUrl: "https://woc.timbernerds.com",
    color: "var(--sunbeam)",
    icon: "⚔️",
  },
  {
    slug: "banger",
    name: "Banger",
    tagline: "Asymmetric 1v2 arena combat",
    description:
      "Back in the early 2000s, I was obsessed with an application called 'Games Factory'. It was a simple game creation tool that let you build 2D games with a drag-and-drop interface. I spent hours building small silly games with simple graphics. One of my favorite creations was a top-down arena shooter where you played 1v2 as a powerful predator against two agile guardians. Me and my friends loved to play this toghether, sharing the same keyboard and a single monitor. I've always wanted to revisit that concept and build a modern version of it. Fast forward to today, Banger is the result - the multiplayer arena shooter with the original 1v2 gameplay, but now playable over the internet.",
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
      "A hyper specialised application that tells you exactly if it is friday or not, giving you that extra boost of dopamine for when you are leaving the office on a Friday.",
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
      "I reacently became a dad, and one of the first things I wanted to do was to create something fun and interactive for the future bed time stories. Inspired by the traditional tabletop RPGs I played back in the days, I came up with this simple RPG mechanis that are easy to understand for kids. However, as my kid is not even a year old yet, I wanted to experiement a bit with how AI could be used to create dynamic and personalized adventures. Thats how Tiny Heroes RPG was born - An interactive storytelling RPG where an AI Game Master guides you through personalized fantasy adventures. Pick from four character classes - Sorceress, Knight, Ranger, or Bard - each with unique skill strengths that shape how challenges play out.",
    features: [
      "AI Game Master with structured adventure planning via GPT-4",
      "Four character classes with distinct skill-based dice mechanics",
      "Exploding dice system with animated client-side rolling",
      "Full English and Swedish localization including AI narration",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "next-intl"],
    liveUrl: "https://tiny-rpg.timbernerds.com",
    sourceUrl: "https://github.com/timberbain/tiny-heroes-rpg",
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
