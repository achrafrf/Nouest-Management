import React from 'react';
import { Building2, UserRoundCog, Leaf, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "EXTERNALISATION",
    description: ["Gestion de syndic", "Restauration", "Services hôteliers"],
    Icon: Building2,
  },
  {
    id: "02",
    title: "INTÉRIM & RH",
    description: ["Main-d’œuvre qualifiée", "Techniciens spécialisés", "Cadres & Ingénieurs"],
    Icon: UserRoundCog,
  },
  {
    id: "03",
    title: "JARDINAGE",
    description: ["Entretien jardins publics", "Résidences & Villas", "Espaces verts"],
    Icon: Leaf,
  },
  {
    id: "04",
    title: "NETTOYAGE",
    description: ["Bureaux & Immeubles", "Locaux industriels", "Hygiène 3D"],
    Icon: Sparkles,
  },
];

const ServiceCards = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden dark:bg-[#030303]">
      
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* 1. Remark Header (Nos Services) */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="mb-4 flex items-center gap-3 px-5 py-2 rounded-full border border-[#800020]/20 bg-[#800020]/5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#800020] animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.3em] text-[#800020] uppercase">
              Nos Services
            </span>
          </div>
          <h2 className="text-[#1a1a1a] dark:text-white text-3xl sm:text-5xl font-black tracking-tighter uppercase italic">
            Solutions <span className="text-[#C0A062] not-italic">Expertises</span>
          </h2>
        </div>

        {/* 2. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 flex flex-col bg-white dark:bg-[#0A0A0A] border-2 border-gray-100 rounded-[24px] transition-all duration-500 hover:border-[#C0A062] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2"
            >
              {/* Bold Visible Number */}
              <div className="absolute top-6 right-8 text-[60px] font-black leading-none text-gray-200/80 dark:text-white group-hover:text-[#C0A062]/20 transition-colors duration-500 select-none italic tracking-tighter">
                {service.id}
              </div>

              {/* Icon Container (Bordeaux) */}
              <div className="relative w-14 h-14 rounded-2xl bg-[#800020] flex items-center justify-center mb-8 shadow-lg shadow-[#800020]/20 group-hover:rotate-[10deg] transition-transform duration-500">
                <service.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              {/* Title & Accent */}
              <div className="relative mb-6">
                <h3 className="text-[#1a1a1a] text-[19px] font-black tracking-tight group-hover:text-[#800020] transition-colors uppercase dark:text-white">
                  {service.title}
                </h3>
                <div className="w-10 h-[3px] bg-[#C0A062] mt-2 rounded-full group-hover:w-full transition-all duration-700" />
              </div>
              
              {/* Description List */}
              <div className="relative space-y-3 mb-12 flex-grow">
                {service.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#800020]" />
                    <p className="text-gray-600 text-[14px] font-semibold leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <a 
                href="#" 
                className="relative inline-flex items-center gap-3 text-[12px] font-black text-[#1a1a1a] uppercase tracking-widest transition-all group-hover:gap-5"
              >
                <span className="border-b-2 border-black/10 group-hover:border-[#800020] dark:text-white">En savoir plus</span>
                <ArrowRight className="w-4 h-4 text-[#C0A062]" />
              </a>

            </div>
          ))}
        </div>

      </div>

      {/* Decorative Branding Text */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-[120px] font-black text-gray-300/40 whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter italic">
        MANAGEMENT
      </div>
    </section>
  );
};

export default ServiceCards;