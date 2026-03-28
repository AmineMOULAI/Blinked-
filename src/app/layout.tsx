// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Métadonnées globales de l'application.
 * Utilisées par Next.js pour le référencement (SEO) et la génération des balises <head>.
 */
export const metadata: Metadata = {
  title: "Blinked - Partage de connaissances",
  description: "Une plateforme simple pour permettre à vos équipes d'échanger conseils, bonnes pratiques et retours d'expérience au quotidien.",
};

/**
 * Composant RootLayout (Mise en page racine).
 * Enveloppe toutes les pages de l'application et définit la structure HTML/Body de base.
 * Applique également la police globale et les comportements de défilement (smooth scroll).
 */
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