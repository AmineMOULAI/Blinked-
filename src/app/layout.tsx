import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importation optimisée de la police Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blinked - Partage de connaissances",
  description: "Une plateforme simple pour permettre à vos équipes d'échanger conseils, bonnes pratiques et retours d'expérience au quotidien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white selection:bg-[#3B82F6] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}