// src/components/Footer.tsx
"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

/**
 * Composant Footer.
 * Regroupe le Call-To-Action final et les liens de navigation de bas de page.
 */
export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#3B82F6]/10 blur-3xl" />
      </div>

      {/* Section CTA (Call to Action) */}
      <div className="relative z-10 py-32 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCc+CjxyZWN0IHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgZmlsbD0nbm9uZScvPgo8Y2lyY2xlIGN4PSczMCcgY3k9JzMwJyByPScxJyBmaWxsPSd3aGl0ZScgb3BhY2l0eT0nMC4yJy8+Cjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Rejoignez les 120 entreprises qui ont déjà libéré le potentiel de leurs équipes avec Blinked.
              </p>
              <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#1E40AF] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Demander une démo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Liens du Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img src="/images/logo_1.png" alt="Blinked Full Logo" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 mb-8 leading-relaxed">
              La plateforme simple pour échanger conseils, bonnes pratiques et retours d'expérience au quotidien.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#3B82F6] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#3B82F6] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold text-gray-300 tracking-wider uppercase mb-6">Produit</h3>
            <ul className="space-y-4">
              <li><a href="#solution" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cas d'usage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-300 tracking-wider uppercase mb-6">Entreprise</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-300 tracking-wider uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><Mail size={18} /> contact@blinked.io</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +33 1 23 45 67 89</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-1 flex-shrink-0" /> 123 Avenue de la République,<br/>75011 Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <img src="/images/logo_2.png" alt="Blinked Icon" className="w-6 h-6 grayscale opacity-50" />
            <span>© 2026 Blinked. Tous droits réservés.</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}