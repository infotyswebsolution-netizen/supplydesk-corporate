import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#F5F3EE",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: "4px solid #17191B",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: 1, background: "#DF4A17" }} />
            <div style={{ flex: 1, background: "#17191B" }} />
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#17191B",
              letterSpacing: "-0.02em",
            }}
          >
            SupplyDesk
          </div>
        </div>
        <div
          style={{
            marginTop: 36,
            width: 120,
            height: 6,
            background: "#DF4A17",
          }}
        />
        <div
          style={{
            marginTop: 36,
            fontSize: 34,
            color: "#566068",
            maxWidth: 880,
          }}
        >
          Private ordering portals for industrial suppliers
        </div>
      </div>
    ),
    { ...size }
  );
}
