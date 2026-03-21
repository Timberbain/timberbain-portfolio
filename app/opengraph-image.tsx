import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Timberbain - Building the future through trial and horror since forever";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fontData = await readFile(join(process.cwd(), "lib/fonts/PressStart2P-Regular.ttf"));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1b0e",
        fontFamily: "PressStart2P",
        position: "relative",
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

      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          width: 40,
          height: 40,
          borderTop: "4px solid #52b788",
          borderLeft: "4px solid #52b788",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 40,
          height: 40,
          borderTop: "4px solid #52b788",
          borderRight: "4px solid #52b788",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          width: 40,
          height: 40,
          borderBottom: "4px solid #52b788",
          borderLeft: "4px solid #52b788",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 40,
          height: 40,
          borderBottom: "4px solid #52b788",
          borderRight: "4px solid #52b788",
          display: "flex",
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: 48,
          color: "#f0f7f0",
          letterSpacing: 8,
          marginBottom: 16,
          display: "flex",
        }}
      >
        TIMBERBAIN
      </div>

      {/* Divider */}
      <div
        style={{
          width: 200,
          height: 4,
          background: "linear-gradient(to right, transparent, #f9c74f, transparent)",
          marginBottom: 20,
          display: "flex",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 16,
          color: "#95d5b2",
          letterSpacing: 2,
          display: "flex",
        }}
      >
        Building the future through trial and horror since forever
      </div>

      {/* Bottom URL */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          fontSize: 12,
          color: "#52b788",
          letterSpacing: 3,
          display: "flex",
        }}
      >
        jonas.brandvik.se
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "PressStart2P",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
