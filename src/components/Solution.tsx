// src/components/Solution.tsx
"use client";

import { motion } from "motion/react";
import { MessageCircleHeart, Search, UserCheck, BellRing, Sparkles } from "lucide-react";

const features = [
  {
    icon: <MessageCircleHeart className="w-8 h-8 text-[#3B82F6]" />,
    title: "Fil de conseils",
    desc: "Publiez et consultez des conseils en temps réel.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: <Search className="w-8 h-8 text-emerald-500" />,
    title: "Recherche intelligente",
    desc: "Trouvez rapidement les réponses déjà partagées.",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-purple-500" />,
    title: "Profils experts",
    desc: "Identifiez facilement les personnes ressources.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    icon: <BellRing className="w-8 h-8 text-orange-500" />,
    title: "Notifications ciblées",
    desc: "Recevez uniquement les contenus pertinents.",
    color: "bg-orange-50 border-orange-100",
  },
];

/**
 * Composant Solution.
 * Présente les fonctionnalités principales du produit.
 */
export function Solution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="solution" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#3B82F6] font-bold text-sm tracking-widest uppercase mb-6">
            <Sparkles size={16} /> La Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] leading-tight mb-8">
            Notre plateforme permet de :
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-600">
            <span className="px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm bg-white">poser des questions simplement</span>
            <span className="px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm bg-white">partager des conseils utiles</span>
            <span className="px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm bg-white">valoriser les experts internes</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform rotate-3 scale-105 -z-10" />
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="images/12309.jpg" alt="Aperçu de la solution" className="w-full h-auto rounded-3xl shadow-2xl relative z-10" />
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">✓</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">Conseil publié</span>
                <span className="text-xs text-gray-500">À l&apos;instant</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`p-8 rounded-3xl border ${feature.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-pointer`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}