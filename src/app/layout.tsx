import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { business, locations } from "@/lib/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://vicente-ortega-peluqueros.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} – Peluquería en Alcalá de Henares`,
    template: `%s | ${business.name}`,
  },
  description:
    "Vicente Ortega Peluqueros: dos salones en Alcalá de Henares (Calle José María Pereda y Avenida Juan de Austria). Corte, coloración y balayage. 4,7/5 en Google con más de 440 opiniones.",
  keywords: [
    "peluquería Alcalá de Henares",
    "peluquerías en Alcalá de Henares",
    "Vicente Ortega Peluqueros",
    "peluquería corte Alcalá de Henares",
    "peluquería color Alcalá de Henares",
    "balayage Alcalá de Henares",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} – Peluquería en Alcalá de Henares`,
    description:
      "Dos salones en Alcalá de Henares desde 1997. Corte, coloración y balayage. 4,7/5 en Google.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Peluquería en Alcalá de Henares`,
    description: "Dos salones en Alcalá de Henares. Corte, coloración y balayage.",
  },
};

export const viewport = {
  themeColor: "#f7f3ee",
};

const jsonLd = locations.map((loc) => ({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${siteUrl}/#${loc.id}`,
  name: business.name,
  url: siteUrl,
  telephone: loc.phoneIntl,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.city,
    addressRegion: loc.province,
    postalCode: loc.postalCode,
    addressCountry: business.country,
  },
  openingHoursSpecification: loc.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: loc.rating.value,
    reviewCount: loc.rating.count,
  },
  areaServed: {
    "@type": "City",
    name: "Alcalá de Henares",
  },
}));

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-copper focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <StickyMobileBar />
        <Script
          id="ld-json-hairsalon"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
