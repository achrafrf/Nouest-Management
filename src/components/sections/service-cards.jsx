import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "01 – EXTERNALISATION DES SERVICES",
    description: "• Prestation de gestion de syndic et activités connexes\n• Externalisation des services de restauration\n• Externalisation des services hôteliers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c889a710928913b7cae61_Service_20Icon_201-1.svg",
    href: "#",
    image: "https://images.unsplash.com/photo-1454165833767-02a698d48767?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "02 – FOURNITURE DE PERSONNEL INTÉRIMAIRE",
    description: "• Main-d’œuvre\n• Main-d’œuvre qualifiée\n• Techniciens\n• Techniciens spécialisés\n• Cadres",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c88b0f48f65917a152636_Service_20Icon_202-3.svg",
    href: "#",
    image: "https://images.unsplash.com/photo-1521791136064-7986c29596dd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "03 – JARDINAGE",
    description: "• Jardinage administratif\n• Jardinage des jardins publics\n• Jardinage des résidences\n• Entretien des espaces et lieux publics",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c88b9fa8c1caa83be789b_Subtitle_20icon_20Black-7.svg",
    href: "#",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "04 – NETTOYAGE",
    description: "• Nettoyage de bureaux et administrations\n• Nettoyage de locaux industriels\n• Nettoyage d’immeubles\n• Nettoyage de résidences\n• Nettoyage d’hôtels\n• Nettoyage de restaurants\n• Nettoyage de locaux\n• Hygiène 3D",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c889a710928913b7cae61_Service_20Icon_201-1.svg",
    href: "#",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800"
  }
];

const ServiceCards = () => {
  return (
    <section className="bg-muted py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 mb-6">
                    <Image src={service.icon} alt={service.title} width={48} height={48} className="w-full h-full object-contain dark:invert" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">{service.title}</h3>
                  <p className="text-[#666666] dark:text-gray-400 text-sm sm:base leading-relaxed mb-8 flex-grow whitespace-pre-line">
                    {service.description}
                  </p>
                <a 
                  href={service.href} 
                  className="inline-flex items-center text-[#1a1a1a] font-semibold hover:text-[#666666] transition-colors mt-auto"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
