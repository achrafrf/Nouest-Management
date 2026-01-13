import React from 'react';
import { Hexagon, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120dvh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] font-sans px-4">
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source src="/nouest_management_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#0a0a0a_95%)] z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 w-full max-w-[1100px] flex flex-col items-center text-center">
        
        {/* Top Minimal Badge */}
        <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C0A062] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C0A062]"></span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-gray-400 uppercase">
            Management Excellence
          </span>
        </div>

        {/* Headline: Slightly smaller for professional look */}
        <h1 className="text-white text-[40px] xs:text-[48px] sm:text-[65px] md:text-[82px] font-extrabold leading-[1.05] tracking-tight mb-6 drop-shadow-xl">
          Votre confort est <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-[#C0A062]">
            notre responsabilité
          </span>
        </h1>

        {/* Description: More compact and readable */}
        <p className="max-w-[580px] text-gray-300 text-[15px] sm:text-[17px] leading-relaxed font-light mb-10 opacity-80 px-2">
          <span className="text-white font-medium italic">Nouest Management</span> — Votre partenaire stratégique pour l'externalisation du nettoyage, jardinage et gardiennage au Maroc.
        </p>

        {/* 3. Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
          
          <a 
            href="/services" 
            className="group relative flex items-center justify-center gap-3 w-full sm:w-[200px] h-[50px] bg-[#800020] rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(128,0,32,0.25)]"
          >
            <span className="text-white text-[13px] font-bold tracking-wide">
              Nos Services
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a 
            href="/contact" 
            className="group relative flex items-center justify-center gap-3 w-full sm:w-[200px] h-[50px] bg-[#C0A062] rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(192,160,98,0.25)]"
          >
            <span className="text-black text-[13px] font-bold tracking-wide">
              Nous Contacter
            </span>
            <MessageCircle className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover:scale-110" />
          </a>

        </div>

        {/* 4. Service Tags: Moved below buttons & more minimalist */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6 border-t border-white/5">
          {[
            'Externalisation', 
            'Nettoyage', 
            'Jardinage', 
            'Gardiennage'
          ].map((label, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <Hexagon className="w-3 h-3 text-[#C0A062]/60 group-hover:text-[#C0A062] group-hover:fill-[#C0A062]/20 transition-all duration-500" />
              <span className="text-gray-500 group-hover:text-gray-300 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Subtle Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-20" />
    </section>
  );
}