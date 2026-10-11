import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { services, siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} — Création de sites web, SEO, IA & automatisation`,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    title: `${siteName} — Votre partenaire digital de A à Z`,
    description:
      "Sites web, maintenance, SEO, intelligence artificielle, automatisation et hébergement : une expertise complète, de la conception au fonctionnement optimal.",
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#0a0806",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  areaServed: "FR",
  knowsLanguage: "fr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Services ${siteName}`,
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg font-sans text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
