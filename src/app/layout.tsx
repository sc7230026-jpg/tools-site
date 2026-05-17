import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "401(k) Retirement Calculator | RetireSmart",
    template: "%s | RetireSmart"
  },
  description: "Plan your retirement with the web's fastest 401(k) calculator. Estimate growth, compare Roth vs Traditional, and project your future savings with enterprise-grade accuracy.",
  keywords: ["401k calculator", "retirement planning", "savings calculator", "Roth IRA vs 401k", "financial freedom", "compound interest"],
  authors: [{ name: "RetireSmart Engineering" }],
  creator: "RetireSmart",
  publisher: "RetireSmart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://retiresmart.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "401(k) Retirement Calculator | RetireSmart",
    description: "The most precise 401(k) planning tool for 2026. Free, fast, and secure.",
    url: "https://retiresmart.example.com",
    siteName: "RetireSmart",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "401(k) Retirement Calculator | RetireSmart",
    description: "Plan your retirement with precision in seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RetireSmart",
              "url": "https://retiresmart.example.com",
              "logo": "https://retiresmart.example.com/logo.png",
              "sameAs": [
                "https://twitter.com/retiresmart",
                "https://linkedin.com/company/retiresmart"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col bg-background`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
