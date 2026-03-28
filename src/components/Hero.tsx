// src/components/Hero.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

/**
 * Composant Hero.
 * Section principale d'introduction avec effets de parallaxe au défilement.
 */
export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FDFDFF]"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contenu textuel */}
          <motion.div 
            style={{ y: yText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#3B82F6] font-bold text-xs tracking-widest uppercase mb-8 border border-blue-100/50 shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              Le futur du travail collaboratif
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#1F2937] leading-[1.1] mb-8 tracking-tight">
              Transformez l'expérience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1E40AF]">
                collaborateur
              </span>
            </h1>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              Une plateforme simple pour permettre à vos équipes d'échanger conseils, bonnes pratiques et retours d'expérience au quotidien.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group bg-[#3B82F6] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_20px_40px_-12px_rgba(59,130,246,0.4)] flex items-center gap-2">
                Demander une démo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#1F2937] border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Nous contacter
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4 py-4 px-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/50 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    alt="Utilisateur"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-[#1F2937]">+50,000 utilisateurs</div>
                <div className="text-gray-500">nous font confiance</div>
              </div>
            </div>
          </motion.div>

          {/* Composition visuelle */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <motion.div 
              style={{ y: yImage, rotate: rotateImage }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="/images/5231.jpg"
                  alt="Interface Blinked Collaboration"
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.1)] rounded-[3rem]"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-gray-50"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Sécurisé</div>
                  <div className="text-sm font-extrabold text-[#1F2937]">Données cryptées</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-20 -right-5 bg-[#1F2937] text-white p-5 rounded-3xl shadow-2xl z-20 max-w-[200px]"
              >
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-2 h-2 rounded-full bg-yellow-400" />
                  ))}
                </div>
                <p className="text-xs font-medium leading-relaxed">
                  "Un outil simple mais redoutablement efficace"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}