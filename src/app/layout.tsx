import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://china-machinery-hub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "China Machinery Hub | Direct Food & Agro Processing Machinery for East Africa",
    template: "%s | China Machinery Hub",
  },
  description:
    "Direct factory importation of grain dryers, posho mills, and seed oil presses from China to East Africa. Features landed cost calculators, equipment catalog, and online operator training.",
  keywords: [
    "China Machinery Import Kenya",
    "Agro Processing Equipment East Africa",
    "Commercial Posho Mill Kenya",
    "Grain Dryer Price Nairobi",
    "Sunflower Oil Press Machine",
    "Mombasa Port Machinery Clearing",
    "Food Processing Machines Uganda Tanzania",
  ],
  authors: [{ name: "China Machinery Hub" }],
  creator: "China Machinery Hub",
  publisher: "China Machinery Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "China Machinery Hub",
    title: "China Machinery Hub | Agro-Processing Equipment Direct from China",
    description:
      "Import industrial posho mills, grain dryers, and oil extractors with complete landed cost transparency and local spare parts support in East Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "China Machinery Hub Industrial Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Machinery Hub | East Africa Processing & Training",
    description:
      "Factory-direct processing machinery imported to Kenya, Uganda, and Tanzania with local spare parts and operator training.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <div className="relative flex min-h-screen flex-col justify-between">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}