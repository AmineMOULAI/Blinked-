"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "./ui/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const navLinks = [
    { name: "Notre Mission", href: "#problem" },
    { name: "Fonctionnalités", href: "#solution" },
    { name: "Témoignages", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="w-full max-w-7xl h-20 bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] px-6 md:px-10 flex items-center justify-between relative overflow-hidden">
        
        {/* --- LOGO GAUCHE --- */}
        <div className="flex-1 flex justify-start z-10">
          <a href="/" className="group flex items-center gap-2">
            <img src="/images/logo_2.png" alt="Blinked Icon" className="h-10 w-auto group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-black tracking-tighter text-[#1F2937] hidden sm:block">
              Blinked<span className="text-[#3B82F6]">.</span>
            </span>
          </a>
        </div>

        {/* --- NAVIGATION CENTRALE INTERACTIVE --- */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-4 py-2 text-sm font-semibold text-[#1F2937] transition-colors duration-300 hover:text-[#3B82F6] z-10"
            >
              {link.name}
              {hoveredPath === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[#3B82F6]/5 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* --- CTA DROITE --- */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4 z-10">
          <a href="#contact" className="text-sm font-bold text-gray-500 hover:text-[#1F2937] transition-colors">
            Nous contacter
          </a>
          <button className="relative group bg-[#3B82F6] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Demander une démo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1F2937] hover:bg-gray-100 rounded-xl transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-[2.5rem] p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-[#1F2937] hover:text-[#3B82F6] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronDown className="-rotate-90 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="w-full bg-[#3B82F6] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20">
                Demander une démo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}