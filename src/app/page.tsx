// src/app/page.tsx

/**
 * Composant de la page d'accueil (Home).
 * * Ce fichier agit comme le conteneur principal (layout) de la landing page.
 * Il orchestre l'assemblage des différentes sections de manière modulaire, 
 * ce qui facilite la maintenance et l'isolation des styles.
 */

// 1. Imports des composants de structure globale
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 2. Imports des sections de contenu de la page (dans l'ordre d'apparition)
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Metrics } from "@/components/Metrics";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <main>
      {/* Navigation principale */}
      <Header />

      {/* Sections de contenu */}
      <Hero />
      <Problem />
      <Solution />
      <Metrics />
      <Testimonials />

      {/* Pied de page */}
      <Footer />
    </main>
  );
}