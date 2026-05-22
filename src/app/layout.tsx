import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jai Durga Disposals | Disposable & Party Supplies - Pinjore, Haryana",
  description:
    "Jai Durga Disposals is your one-stop shop for disposable products, packaging materials, party supplies, catering items, and wholesale supplies in Pinjore, Haryana. Serving retailers, street food vendors, caterers, and event organizers.",
  keywords: [
    "disposable products Pinjore",
    "party supplies Pinjore",
    "wholesale disposable Haryana",
    "paper cups plates Pinjore",
    "catering supplies Haryana",
    "event decoration Pinjore",
    "Jai Durga Disposals",
    "packaging materials Pinjore",
    "bulk disposable products",
    "birthday party supplies Haryana",
  ],
  authors: [{ name: "Jai Durga Disposals" }],
  creator: "Jai Durga Disposals",
  publisher: "Jai Durga Disposals",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jaidurgadisposals.com",
    title: "Jai Durga Disposals | Disposable & Party Supplies - Pinjore",
    description:
      "Quality disposable products, packaging materials, party decorations at wholesale & retail prices. Located in Pinjore, Haryana.",
    siteName: "Jai Durga Disposals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Durga Disposals | Disposable & Party Supplies",
    description:
      "Your one-stop shop for all disposable, packaging & party supplies in Pinjore, Haryana.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://jaidurgadisposals.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Jai Durga Disposals",
  image: "https://jaidurgadisposals.com/og-image.jpg",
  description:
    "Retail and wholesale shop for disposable products, packaging materials, party supplies and catering items in Pinjore, Haryana.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 47, Shiva Complex, Near Khera Hospital",
    addressLocality: "Pinjore",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7979",
    longitude: "76.9076",
  },
  url: "https://jaidurgadisposals.com",
  telephone: "+91-9996807166",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "10:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:30",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  servesCuisine: [],
  paymentAccepted: ["Cash", "UPI", "Card"],
  currenciesAccepted: "INR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
