import { ImageResponse } from "next/og";

export const alt = "Tagoly — Commit with confidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 64px",
            borderRadius: 24,
            background: "#171717",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fafafa",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Tagoly
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              fontWeight: 600,
              color: "#ccff00",
              textAlign: "center",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Commit with confidence
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 20,
              fontWeight: 500,
              color: "#a3a3a3",
              textAlign: "center",
              maxWidth: 640,
            }}
          >
            Automate scope detection and enforce team consistency for git
            commits.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
