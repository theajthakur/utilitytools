import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/providers/LayoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UtilityTools.tech – Free Online Utility Tools",
    template: "%s | UtilityTools.tech",
  },
  description:
    "UtilityTools.tech is a free collection of fast, privacy-first online utility tools that run entirely in your browser. No login, no ads, no data upload.",
  keywords: [
    "utility tools",
    "online tools",
    "free tools",
    "web utilities",
    "developer tools",
    "text tools",
    "json formatter",
    "base64 encoder",
    "image tools",
    "browser tools",
    "no login tools",
    "privacy first tools",
    "frontend tools",
    "client side tools",
  ],
  authors: [{ name: "UtilityTools" }],
  creator: "UtilityTools.tech",
  publisher: "UtilityTools.tech",

  metadataBase: new URL("https://utilitytools.tech"),

  openGraph: {
    title: "UtilityTools.tech – Free Online Utility Tools",
    description:
      "A fast, free, and privacy-first collection of online utility tools. Everything runs locally in your browser.",
    url: "https://utilitytools.tech",
    siteName: "UtilityTools.tech",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UtilityTools.tech – Free Online Utility Tools",
    description:
      "Free daily-use utility tools that run 100% in your browser. No login. No tracking.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "technology",

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
