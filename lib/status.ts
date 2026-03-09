interface Quest {
  label: string;
  value: string;
  emoji?: string;
}

interface PlayerMeta {
  class: string;
  title: string;
  yearsCoding: number;
  coffees: number;
}

export const currentQuests: Quest[] = [
  {
    label: "BUILDING",
    value:
      "A geo location based game in godot using a custom map-tile server and realtime WS communication.",
    emoji: "⚒️",
  },
  {
    label: "STUDYING",
    value:
      "With the recent developments in agentic AI, I'm exploring Claude Code and spec-driven development.",
    emoji: "📖",
  },
  {
    label: "INTO",
    value: "Spring is just around the corner, so I'm gearing up for the barbecue season.",
    emoji: "⌨️",
  },
];

export const playerMeta: PlayerMeta = {
  class: "Full-Stack",
  title: "Lead Engineer",
  yearsCoding: 14,
  coffees: 90001,
};
