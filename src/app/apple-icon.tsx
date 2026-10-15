import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0891b2",
        }}
      >
        <svg width="120" height="120" viewBox="12 12 40 40">
          <path
            d="M24 17v30M24 34l15-17M30.5 27.5 41 47"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
