import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Header - Very Clean & Compact */}
         <div className="flex flex-col items-center mb-16 text-center">
          <div className="mb-4 flex items-center gap-3 px-5 py-2 rounded-full border border-[#800020]/20 bg-[#800020]/5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#800020] animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.3em] text-[#800020] uppercase">
              Qui Sommes Nous?
            </span>
          </div>
          <h2 className="text-[#1a1a1a] text-2xl sm:text-4xl font-black tracking-tighter uppercase italic">
            Votre confort est <span className="text-[#C0A062] not-italic">notre responsabilité</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Column: Focused Text (Small & Pro) */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-[35px] sm:text-[26px] text-black leading-relaxed font-light">
                <span className="font-bold text-[#800020]">Nouest Management</span> est le fruit d’une profonde réflexion sur les nouvelles méthodes de management des prestations de mise à disposition des ressources humaines. 
              </p>
              
              <p className="text-[25px] text-gray-500 leading-relaxed border-l-2 border-[#C0A062]/30 pl-6 italic">
                "La rigueur, la qualité du service et le suivi du travail étaient les piliers de ma vision lors de la création de cette entreprise."
                <span className="block mt-2 font-bold text-[#1a1a1a] not-italic text-[13px] uppercase tracking-wider">— CHAKIK Rim, Fondatrice</span>
              </p>

              {/* Compact Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  "Expertise du métier",
                  "Qualité du service",
                  "Innovation & Créativité",
                  "Disponibilité & Écoute"
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#C0A062]" />
                    <span className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-tight">{val}</span>
                  </div>
                ))}
              </div>

              {/* Small Sleek CTA */}
              <div className="pt-8">
                <a href="/contact" className="inline-flex items-center gap-4 group">
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1a1a1a] border-b-2 border-[#800020] pb-1 group-hover:text-[#800020] transition-colors">
                    Contactez la fondatrice
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#800020] transition-all group-hover:translate-x-1">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: LARGE FEATURED IMAGE */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <div className="relative h-[500px] md:h-[650px] w-full group">
              {/* Background Decor Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C0A062]/10 rounded-full blur-2xl group-hover:bg-[#C0A062]/20 transition-all" />
              
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white">
                <Image
                  src="/pic.jpg" 
                  alt="Founder Portrait"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                
                {/* Floating Credibility Card (The "Mines de Rabat" Badge) */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/80 backdrop-blur-lg rounded-3xl border border-white/50 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#800020] flex items-center justify-center shrink-0">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-black text-[#1a1a1a] uppercase leading-none">Ingénieur Lauréate</h4>
                    <p className="text-[11px] text-gray-600 mt-1 font-medium tracking-tight">École Nationale Supérieure des Mines de Rabat</p>
                  </div>
                </div>
              </div>

              {/* Visual Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#800020]/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;