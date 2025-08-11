import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";
import MeteorShower from "./components/ui/MeteorShower";
import StarrySky from "./components/ui/StarrySky";
import ShootingStars from "./components/ui/ShootingStars";
import Constellations from "./components/ui/Constellations";
import PerformanceToggle from "./components/ui/PerformanceToggle";
import StarrySkyWrapper from "@/app/components/ui/StarrySkyWrapper";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis Guanique — Software Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility. Let's build something amazing together.",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <StarrySkyWrapper>
          <MeteorShower />
          <PerformanceToggle />
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </StarrySkyWrapper>
      </body>
    </html>
  );
}
