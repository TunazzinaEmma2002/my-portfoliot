import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const title = "Tunazzina Rahman | Full-Stack Developer";
const description =
  "Portfolio of Tunazzina Rahman, a full-stack developer building Next.js, TypeScript and MERN stack apps.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-night font-sans text-fg antialiased">{children}</body>
    </html>
  );
}