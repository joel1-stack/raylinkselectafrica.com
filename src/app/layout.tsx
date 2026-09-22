import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const satoshi = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Raylink Select Africa | We Make Brands Physical",
  description: "Premium branding, signage, vehicle wraps, apparel & corporate solutions in Kenya. 3D signage, fleet branding, office spaces, events & print. Quality you can trust.",
  keywords: ["branding", "signage", "vehicle wraps", "corporate branding", "printing", "apparel", "3D signage", "Kenya", "Nairobi"],
  authors: [{ name: "Raylink Select Africa" }],
  creator: "Raylink Select Africa",
  publisher: "Raylink Select Africa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://raylinkselectafrica.com",
    siteName: "Raylink Select Africa",
    title: "Raylink Select Africa | We Make Brands Physical",
    description: "Premium branding, signage, vehicle wraps, apparel & corporate solutions in Kenya.",
    images: [
      {
        url: "/images/hero/reception-signage.jpg",
        width: 1200,
        height: 630,
        alt: "Raylink Select Africa - Premium Branding & Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raylink Select Africa | We Make Brands Physical",
    description: "Premium branding, signage, vehicle wraps, apparel & corporate solutions in Kenya.",
    images: ["/images/hero/reception-signage.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-alabaster text-anthracite">
        {children}
      </body>
    </html>
  );
}