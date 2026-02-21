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
  { label: "BUILDING", value: "A asymmetric 1v2 arena combat in phaser and colyseus", emoji: "⚒️" },
  { label: "STUDYING", value: "Claude Code and spec driven development", emoji: "📖" },
  { label: "INTO", value: "Barbeque", emoji: "⌨️" },
];

export const playerMeta: PlayerMeta = {
  class: "Full-Stack",
  title: "Lead Engineer",
  yearsCoding: 14,
  coffees: 90001,
};
