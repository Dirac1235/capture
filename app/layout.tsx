import type { Metadata } from "next";
import {
  Inter_Tight,
  Mozilla_Headline,
  Stack_Sans_Headline,
  Bebas_Neue,
  PT_Serif,
  Figtree,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/layout/MotionProvider";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mozillaHeadline = Mozilla_Headline({
  subsets: ["latin"],
  variable: "--font-mozilla-headline",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const stackSansHeadline = Stack_Sans_Headline({
  subsets: ["latin"],
  variable: "--font-stack-sans-headline",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-pt-serif",
  weight: ["400", "700"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Capture",
  description: "Your biosignals and behavioral patterns, finally in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        interTight.variable,
        mozillaHeadline.variable,
        stackSansHeadline.variable,
        bebasNeue.variable,
        ptSerif.variable,
        figtree.variable,
        sourceSerif4.variable,
        "antialiased",
      ].join(" ")}
    >
      <head>
        {/* Google Fonts for Figma component font-family names */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Figtree:ital,wght@0,300..900;1,300..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        />
        {/* Pretendard (Korean/Latin variable font via CDN) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
