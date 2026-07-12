import { Archivo, Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display-face",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata = {
  title: {
    default: "SupplyDesk — Private ordering portals for industrial suppliers",
    template: "%s — SupplyDesk",
  },
  description:
    "SupplyDesk gives industrial suppliers a private ordering portal for their buyers — dedicated login, custom catalog, private pricing, order management.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${barlow.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
