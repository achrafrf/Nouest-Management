import React from 'react';
import Image from 'next/image';

/**
 * AboutUsSection Component
 * 
 * A pixel-perfect clone of the "About us" section featuring:
 * - A 2-column header layout with a brand subtitle and primary CTA.
 * - Large industrial-style typography for the main heading and body description.
 * - A details grid with numbered value points (Steel Frames, Architectural Metalwork, etc.).
 * - A large featured image of industrial metalworking.
 */
const AboutUsSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-[60px] gap-12 lg:gap-0">
          {/* Left Side: Brand Indicator & Desktop Button */}
          <div className="flex flex-col gap-8 lg:w-[25%] h-full justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c88b9fa8c1caa83be789b_Subtitle_20icon_20Black-7.svg" 
                alt="About us icon" 
                className="w-4 h-4 dark:invert"
              />
              <span className="text-[14px] font-semibold uppercase tracking-wider text-foreground">About us</span>
            </div>
            
            {/* Desktop Only 'About Company' Button */}
            <div className="hidden lg:block">
              <a 
                href="/about-us" 
                className="group relative inline-flex items-center justify-between bg-primary text-primary-foreground font-semibold text-[16px] px-8 py-4 rounded-full min-w-[220px] transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                <span>About Company</span>
                <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b32a64d16109629c8c8d0_Button%20Arrow.svg" 
                    alt="Arrow" 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-8"
                  />
                  <img 
                    src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b3461a12b76a2afb251ff_Arrow%20Botton%202%20Yellow.svg" 
                    alt="Arrow hover" 
                    className="absolute w-4 h-4 -translate-x-8 transition-transform duration-300 group-hover:translate-x-0"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Large Heading & Paragraph */}
          <div className="lg:w-[70%]">
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium leading-[1.2] text-foreground mb-8 tracking-tight">
              We specialize in high-quality <span className="text-foreground font-semibold">metal fabrication, strength and efficiency</span>. From individual parts to complex structures.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-[1.6] max-w-[720px]">
              Specializing in metal fabrication, custom components, and industrial builds, we bring together experience, precision, and hands-on craftsmanship.
            </p>
          </div>
        </div>

        {/* Feature Image & Value Numbers Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Numbered Values (Pills) */}
          <div className="lg:w-[25%] flex flex-col gap-4 justify-center">
            {[
              { id: 1, text: "Steel Frames" },
              { id: 2, text: "Architectural Metalwork" },
              { id: 3, text: "Precision Prototypes" }
            ].map((item) => (
              <div 
                key={item.id} 
                className="flex items-center bg-background rounded-full p-2 pr-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-[18px] font-medium text-primary-foreground mr-4 group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </div>
                <span className="text-[16px] font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Featured Industrial Image */}
          <div className="lg:w-[75%] relative h-[250px] sm:h-[400px] md:h-[450px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/688cb1fe806ddae7e1da0d5e_Metal_20Photo-4.webp"
              alt="Industrial metalworking sparks"
              fill
              className="object-cover rounded-[15px]"
              sizes="(max-width: 1024px) 100vw, 75vw"
              priority
            />
          </div>
        </div>

        {/* Mobile Only Button */}
        <div className="mt-12 flex justify-center lg:hidden">
          <a 
            href="/about-us" 
            className="group relative inline-flex items-center justify-between bg-primary text-primary-foreground font-semibold text-[16px] px-8 py-4 rounded-full min-w-[220px]"
          >
            <span>About Company</span>
            <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center ml-2">
              <img 
                src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b32a64d16109629c8c8d0_Button%20Arrow.svg" 
                alt="Arrow" 
                className="w-4 h-4"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
