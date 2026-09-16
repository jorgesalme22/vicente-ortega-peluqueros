import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16130f",
          borderRadius: 16,
          fontSize: 34,
        }}
      >
        ✂️
      </div>
    ),
    { ...size }
  );
}
