// src/components/Testimonials.tsx
"use client";

import { motion } from "motion/react";
import { Star, Quote, MessageCircleHeart } from "lucide-react";

const testimonials = [
  {
    quote: "Une solution qui transforme la collaboration en entreprise",
    role: "Directeur de l'Innovation",
    company: "Grande Entreprise",
    gradient: "from-blue-50 to-white",
  },
  {
    quote: "Un outil simple mais redoutablement efficace",
    role: "Chef de Projet",
    company: "Scale-up",
    gradient: "from-emerald-50 to-white",
  },
  {
    quote: "Le futur du knowledge sharing",
    role: "Lead Developer",
    company: "PME Innovante",
    gradient: "from-purple-50 to-white",
  },
  {
    quote: "Avant, on perdait énormément d'informations. Aujourd'hui, tout est centralisé et accessible.",
    role: "DRH",
    company: "Entreprise Cliente",
    gradient: "from-orange-50 to-white",
    featured: true, 
  }
];

/**
 * Composant Testimonials.
 * Affiche les retours clients sous forme de grille adaptative.
 */
export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="testimonials" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-[#3B82F6] font-bold text-sm tracking-widest uppercase mb-6 border border-blue-200">
            <MessageCircleHeart size={16} /> Ils parlent de nous
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] leading-tight mb-6">
            Approuvé par des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1E40AF]">centaines d&apos;équipes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-gray-700">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2">4.8/5 de satisfaction moyenne</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-b ${testi.gradient} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                testi.featured ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto text-center" : ""
              }`}
            >
              <Quote className={`absolute top-6 ${testi.featured ? 'left-1/2 -translate-x-1/2 opacity-10' : 'right-6 opacity-5'} w-24 h-24 text-blue-500`} />
              
              <div className="relative z-10">
                <div className={`flex gap-1 mb-6 ${testi.featured ? 'justify-center' : ''}`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className={`text-gray-800 font-bold leading-relaxed mb-8 ${testi.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  &quot;{testi.quote}&quot;
                </p>
                
                <div className={`flex items-center gap-4 ${testi.featured ? 'justify-center' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#1E40AF] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {testi.role.charAt(0)}
                  </div>
                  <div className={testi.featured ? 'text-left' : ''}>
                    <div className="font-extrabold text-gray-900">{testi.role}</div>
                    <div className="text-sm font-medium text-gray-500">{testi.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}