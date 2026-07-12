import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Titech Agency — AI-Driven Digital Excellence | US · UK · UAE",
  description:
    "Titech Agency builds cinematic 3D web experiences, AI agents, mobile apps, branding, and cloud solutions. Powered by Three.js, R3F, GSAP, z.ai, OpenRouter & NVIDIA. Based in US, UK & UAE.",
  keywords: [
    "Titech Agency",
    "AI agency",
    "3D web development",
    "Three.js",
    "React Three Fiber",
    "GSAP",
    "WebGL",
    "AI agents",
    "digital agency US UK UAE",
    "z.ai",
    "OpenRouter",
    "NVIDIA NIM",
  ],
  authors: [{ name: "Titech Agency" }],
  openGraph: {
    title: "Titech Agency — AI-Driven Digital Excellence",
    description:
      "Cinematic 3D web experiences, AI agents, and full-stack digital services across US · UK · UAE.",
    siteName: "Titech Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titech Agency — AI-Driven Digital Excellence",
    description: "Cinematic 3D web experiences, AI agents, and full-stack digital services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "oklch(0.10 0.025 280)",
              border: "1px solid oklch(1 0 0 / 0.1)",
              color: "oklch(0.97 0.01 280)",
            },
          }}
        />
      </body>
    </html>
  );
}
