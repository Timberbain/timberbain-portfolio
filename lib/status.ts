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
      "At the moment, I'm experimenting with building an asymmetric 1v2 arena combat game using Phaser and Colyseus.",
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
