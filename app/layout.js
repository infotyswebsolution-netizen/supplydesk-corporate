import { Archivo, Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, ORG_NAME } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SupplyDesk — Private ordering portals for industrial suppliers",
    template: "%s — SupplyDesk",
  },
  description:
    "SupplyDesk gives industrial suppliers a private ordering portal for their buyers — dedicated login, custom catalog, private pricing, order management.",
};

// Confirmed by Nik: founded 2023, Ontario, Canada (no city/street/postal
// code given, so address stays region + country only — not guessing more
// precision than was provided).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${barlow.variable} ${plexMono.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
