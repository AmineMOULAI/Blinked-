"use client";

import { motion, useInView, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Target, Zap, Clock, TrendingUp } from "lucide-react";

const metricsData = [
  {
    icon: <Zap className="w-10 h-10 text-emerald-500" />,
    value: 35,
    unit: "%",
    label: "Augmentation de la productivité",
    sub: "Constaté par 80% des équipes dès le premier mois d'utilisation",
    color: "from-emerald-50 to-white border-emerald-100",
  },
  {
    icon: <Clock className="w-10 h-10 text-orange-500" />,
    value: 2.5,
    unit: "h",
    label: "Gain de temps hebdomadaire / collaborateur",
    sub: "Moins de temps passé à chercher, plus de temps pour créer",
    color: "from-orange-50 to-white border-orange-100",
  },
  {
    icon: <Target className="w-10 h-10 text-blue-500" />,
    value: 92,
    unit: "%",
    label: "Taux d'adoption par les équipes",
    sub: "Une interface simple et intuitive que vos collaborateurs adoptent instantanément",
    color: "from-blue-50 to-white border-blue-100",
  },
];

// Composant pour l'animation de compteur
function Counter({ value, unit }: { value: number; unit: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Pour les valeurs à décimale (comme 2.5), on configure animate différemment
      const isDecimal = !Number.isInteger(value);
      const controls = animate(isDecimal ? 0 : 0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          // Formatage de la valeur affichée (avec ou sans décimale)
          setDisplayValue(isDecimal ? latest.toFixed(1) : latest.toFixed(0));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-6xl font-extrabold text-[#1F2937] tracking-tight">
      {displayValue}{unit}
    </span>
  );
}

export function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animation l'une après l'autre
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TITRE CENTRÉ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm tracking-widest uppercase mb-6 border border-emerald-100">
            <TrendingUp size={16} /> Impact mesurable
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] leading-tight mb-8">
            Des résultats concrets pour vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse">équipes</span>
          </h2>
        </motion.div>

        {/* GRILLE DE MÉTRIQUES INTERACTIVES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {metricsData.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              // Micro-interaction au survol
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-gradient-to-b ${metric.color} p-8 rounded-3xl border shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer overflow-hidden`}
            >
              {/* Effet de brillance discret au survol */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                
                {/* L'animation de compteur */}
                <div className="flex items-baseline gap-1 mb-3">
                  <Counter value={metric.value} unit={metric.unit} />
                </div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {metric.label}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {metric.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}