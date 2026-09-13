import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SOLUCIONES DE IA // ARQUITECTURA, GOBERNANZA & CÓMPUTO SOBERANO",
  description:
    "Consultoría de alta dirección y laboratorio de ingeniería en Inteligencia Artificial. Sistemas deterministas, modelos Local-First y cómputo soberano en GPU RTX 5090 sin fuga de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0E1013] text-[#EDECE8]">
        {children}
      </body>
    </html>
  );
}
