import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(160deg, #3a2c1e 0%, #7f4520 55%, #16130f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "rgba(255,255,255,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            ✂️
          </div>
          <div style={{ fontSize: 30, color: "#f7f3ee", fontWeight: 700 }}>
            {business.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#f7f3ee",
              lineHeight: 1.1,
              maxWidth: 950,
            }}
          >
            Dos salones en Alcalá de Henares desde 1997.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "rgba(247,243,238,0.85)" }}>
            {`${business.rating.value}/5 en Google · ${business.rating.count} opiniones`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
