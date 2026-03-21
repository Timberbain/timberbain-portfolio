import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { projects, getProject } from "@/lib/projects";

export const alt = "Timberbain Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function resolveColor(color: string): string {
  const map: Record<string, string> = {
    "var(--sunbeam)": "#f4a261",
    "var(--sky-clear)": "#90e0ef",
    "var(--sunlight)": "#f9c74f",
    "var(--leaf-fresh)": "#52b788",
    "var(--leaf-bright)": "#95d5b2",
  };
  return map[color] ?? "#52b788";
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  const [fontData, iconData] = await Promise.all([
    readFile(join(process.cwd(), "lib/fonts/PressStart2P-Regular.ttf")),
    readFile(join(process.cwd(), "lib/fonts/og-icon.png")),
  ]);
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  const fonts = [
    {
      name: "PressStart2P",
      data: fontData,
      style: "normal" as const,
      weight: 400 as const,
    },
  ];

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1b0e",
          color: "#f0f7f0",
          fontSize: 32,
          fontFamily: "PressStart2P",
        }}
      >
        Not Found
      </div>,
      { ...size, fonts },
    );
  }

  const accentColor = resolveColor(project.color);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0d1b0e",
        fontFamily: "PressStart2P",
        position: "relative",
        padding: 60,
      }}
    >
      {/* Border accent */}
      <div
        style={{
          position: "absolute",
          inset: 16,
          border: "3px solid #2d6a4f",
          borderRadius: 12,
          display: "flex",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 80,
          right: 80,
          height: 4,
          backgroundColor: accentColor,
          display: "flex",
        }}
      />

      {/* Icon and title row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 64, display: "flex" }}>{project.icon}</div>
        <div
          style={{
            fontSize: 32,
            color: "#f0f7f0",
            letterSpacing: 2,
            display: "flex",
          }}
        >
          {project.name.toUpperCase()}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: 120,
          height: 4,
          backgroundColor: accentColor,
          marginBottom: 24,
          display: "flex",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 16,
          color: "#95d5b2",
          marginBottom: 40,
          lineHeight: 1.8,
          display: "flex",
        }}
      >
        {project.tagline}
      </div>

      {/* Tech stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: "auto",
        }}
      >
        {project.techStack.map((tech) => (
          <div
            key={tech}
            style={{
              fontSize: 10,
              color: "#95d5b2",
              backgroundColor: "rgba(45, 106, 79, 0.4)",
              border: "2px solid rgba(45, 106, 79, 0.6)",
              borderRadius: 8,
              padding: "8px 16px",
              display: "flex",
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Bottom branding */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          right: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Favicon icon */}
        <img src={iconSrc} width="28" height="28" style={{ borderRadius: 6 }} />
        <div
          style={{
            fontSize: 12,
            color: "#52b788",
            letterSpacing: 3,
            display: "flex",
          }}
        >
          jonas.brandvik.se
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts,
    },
  );
}
