import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <div className="mb-8 sm:mb-10 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground italic">
              &quot;Ironis has completely elevated our manufacturing process. Their precision, craftsmanship, and reliability have helped us meet even the toughest project demands. We trust them with every custom part, every weld, every time.&quot;
            </div>
            
            <div className="mb-10 sm:mb-12">
              <div className="text-[18px] font-semibold text-foreground">
                Michael R.
              </div>
              <div className="text-[16px] text-muted-foreground">
                Materials Coordinator
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Button */}
              <a 
                href="/testimonials" 
                className="group relative inline-flex items-center justify-between bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 hover:bg-foreground hover:text-background min-w-[200px]"
              >
                <span>Learn more</span>
                <div className="relative w-5 h-5 ml-2 overflow-hidden">
                  <Image 
                    src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b32a64d16109629c8c8d0_Button%20Arrow.svg" 
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0"
                  />
                  <Image 
                    src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b3461a12b76a2afb251ff_Arrow%20Botton%202%20Yellow.svg" 
                    alt="Arrow Hover"
                    width={20}
                    height={20}
                    className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
              </a>

              {/* Secondary Link */}
              <a 
                href="/why-choose-us" 
                className="group relative flex items-center gap-2 text-[16px] font-medium text-foreground px-4 py-2"
              >
                <span>Why Choose Us</span>
                <Image 
                  src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4/688b32a64d16109629c8c8d0_Button%20Arrow.svg" 
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 dark:invert"
                />
                <div className="absolute bottom-1.5 left-4 right-10 h-[1px] bg-foreground origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0"></div>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-[12px] overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/688c87a9300cc1480f08cecd_Team_20Big_20Photo-8.webp"
                alt="Michael R. - Materials Coordinator"
                width={800}
                height={1000}
                className="w-full h-auto object-cover aspect-[4/5] object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;