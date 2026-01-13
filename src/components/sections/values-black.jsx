"use client";

import React from 'react';
import { Award, Headphones, Lightbulb, ChevronRight } from 'lucide-react';

/**
 * ValuesBlack Section - Nouest Management 2026 Edition
 * تصميم مركزي، صغير، وسلس (Smooth & Minimalist)
 */
export default function ValuesBlack() {
  const values = [
    {
      title: "L'Excellence",
      description: "La rigueur et la qualité du service sont les piliers de notre vision pour répondre aux besoins de nos clients.",
      icon: <Award className="w-5 h-5 text-[#C0A062]" />, 
    },
    {
      title: "Disponibilité",
      description: "Nous assurons un suivi et une écoute continue pour optimiser vos processus RH و accompagner votre croissance.",
      icon: <Headphones className="w-5 h-5 text-[#C0A062]" />,
    },
    {
      title: "Innovation",
      description: "Nous développون de nouvelles méthodes de management pour offrir des prestations créatives et performantes.",
      icon: <Lightbulb className="w-5 h-5 text-[#C0A062]" />,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden font-sans">
      
      {/* Background Graphic - More Subtle */}
      <div className="absolute top-[10%] right-[5%] opacity-20 z-0 hidden lg:block">
        <svg width="280" height="140" viewBox="0 0 320 160" fill="none" className="rotate-12">
          <path 
            d="M50 0H180L130 50H260L210 100H320V160H140L190 110H60L110 60H0V0H50Z" 
            stroke="#C0A062" 
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1140px] px-6 relative z-10">
        
        {/* 1. Centered Header (Compact) */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-1 rounded-full bg-[#800020] animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase">
              Nos Valeurs
            </span>
          </div>
          
          <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[46px] font-black leading-tight tracking-tighter uppercase italic mb-6">
            Votre confort est <span className="text-[#C0A062] not-italic">notre responsabilité</span>
          </h2>
          
          <p className="max-w-[600px] text-gray-400 text-[14px] sm:text-[16px] leading-relaxed font-light opacity-80">
            Nous nous engageons à offrir une expertise du métier, une excellence et une innovation continue — les piliers fondateurs de <span className="text-white font-medium">Nouest Management</span>.
          </p>
        </div>

        {/* 2. Values Grid - Small & Refined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="group flex flex-col items-start p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#C0A062]/20 transition-all duration-500">
              
              {/* Icon - Smaller & Sleek */}
              <div className="mb-6 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-[#800020]/20 transition-all duration-500">
                {value.icon}
              </div>

              {/* Title - Bordeaux */}
              <h3 className="text-[#800020] mb-3 text-[20px] lg:text-[22px] font-black uppercase tracking-tight group-hover:tracking-wider transition-all">
                {value.title}
              </h3>

              {/* Description - Compact & Readable */}
              <p className="text-gray-400 text-[13px] lg:text-[14px] leading-relaxed font-light mb-6">
                {value.description}
              </p>

              {/* Minimal Link Decor */}
              <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-[#C0A062] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Détail</span>
                <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#800020]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}