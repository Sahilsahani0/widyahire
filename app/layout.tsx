import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const noto = Noto_Sans({ variable: "--font-noto", subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = { title: `${site.name} — ${site.tagline}`, description: site.description };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${noto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
