import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "@/components/layout/AppShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GraphOne",
    template: "%s | GraphOne",
  },
  description: "Discover the world's most innovative AI companies",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "GraphOne",
    description: "Discover the world's most innovative AI companies",
    url: "https://your-domain.com",
    siteName: "GraphOne",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GraphOne",
    description: "Discover the world's most innovative AI companies",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>

      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}