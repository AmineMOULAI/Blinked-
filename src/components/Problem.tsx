// src/components/Problem.tsx
"use client";

import { motion } from "motion/react";
import { AlertCircle, Mail, MessageSquare, Brain } from "lucide-react";

/**
 * Composant Problem.
 * Met en évidence les défis actuels des entreprises cibles.
 */
export function Problem() {
  const listItems = [
    { 
      icon: <Mail className="text-red-500 w-8 h-8" />, 
      text: "Échanges e-mails infinis", 
      subtext: "(Pertes de temps)" 
    },
    { 
      icon: <MessageSquare className="text-orange-500 w-8 h-8" />, 
      text: "Réunions non documentées", 
      subtext: "(Mémoire perdue)" 
    },
    { 
      icon: <Brain className="text-purple-500 w-8 h-8" />, 
      text: "Têtes-clés seules expertes", 
      subtext: "(Risque de départ)" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="problem" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-sm font-bold tracking-wider text-[#3B82F6] uppercase mb-3 flex items-center gap-2 justify-center"
          >
            <AlertCircle size={18} /> LE PROBLÈME À RÉSOUDRE
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants} 
            className="text-3xl md:text-5xl font-extrabold text-[#1F2937] leading-tight mb-8"
          >
            Aujourd&apos;hui, vos connaissances restent <span className="text-red-500">bloquées</span> :
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Illustration de fond */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-11 relative"
          >
            <motion.img
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              src="/images/3512711.jpg"
              alt="Illustration de la déperdition de connaissance"
              className="w-full h-auto drop-shadow-xl rounded-[2rem] opacity-60 mix-blend-multiply" 
            />
          </motion.div>

          {/* Liste des points de friction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-12 xl:col-span-10 xl:col-start-2 -mt-[25%] lg:-mt-[40%] xl:-mt-[45%] relative z-20 flex flex-col items-center" 
          >
            <div className="absolute left-[calc(50%-1px)] top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/0 via-blue-400 to-purple-400/0">
              <div className="absolute -left-[7px] top-[10%] w-4 h-4 rounded-full border-4 border-white bg-red-500 shadow-lg" />
              <div className="absolute -left-[7px] top-[35%] w-4 h-4 rounded-full border-4 border-white bg-red-500 shadow-lg" />
              <div className="absolute -left-[7px] top-[60%] w-4 h-4 rounded-full border-4 border-white bg-red-500 shadow-lg" />
            </div>

            <motion.ul variants={containerVariants} className="space-y-16 mb-16 w-full flex flex-col items-center">
              {listItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants} 
                  className={`flex items-center gap-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-[90%] md:w-[70%] xl:w-[60%] ${idx % 2 === 0 ? 'mr-[10%] md:mr-[20%]' : 'ml-[10%] md:ml-[20%]'}`}
                >
                  <div className="p-4 bg-gray-50 rounded-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">{item.text}</span>
                    <span className="text-lg text-gray-600 font-medium">{item.subtext}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden w-full text-center">
              <div className="absolute inset-0 bg-black/10 opacity-20" />
              <p className="text-xl md:text-2xl text-blue-100 font-medium italic relative z-10">
                <span className="text-4xl leading-none text-white opacity-40">“</span>
                Résultat : perte de temps, frustration et manque d&apos;efficacité au quotidien pour l&apos;ensemble de vos équipes.
                <span className="text-4xl leading-none text-white opacity-40">”</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}