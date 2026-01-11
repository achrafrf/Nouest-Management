import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const CtaYellow = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left Side: Yellow Graphic Component */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] aspect-square bg-primary rounded-[10px] flex items-center justify-center p-8 sm:p-12 overflow-hidden shadow-xl">
              {/* Masked Graphic Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Provided Asset: Image Vector 9 (Ironis Logo-like Mask) */}
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/images/688c67ffeadd197209cc6d58_Image_20Vector-9.png"
                  alt="Industrial Parts Mask"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-[560px]">
              <h2 className="text-foreground font-medium text-[32px] sm:text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.01em] mb-6">
                Partner with <span className="font-semibold">Ironis</span> today!
              </h2>
              
              <p className="text-muted-foreground text-[16px] sm:text-[18px] leading-[1.6] mb-10">
                Let Ironis handle the cutting, bending, and welding - plus all the things your last supplier said were &ldquo;impossible.&rdquo; We turn raw steel into real results with just the right amount of sparks, sweat, and sarcasm.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12">
                <a 
                  href="/contact-us" 
                  className="inline-flex items-center justify-center h-[52px] px-8 bg-primary text-primary-foreground font-semibold text-[16px] rounded-full hover:bg-foreground hover:text-background transition-all duration-300 group"
                >
                  Get a quote
                  <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <a 
                  href="/work-process" 
                  className="relative text-foreground font-semibold text-[16px] inline-flex items-center gap-2 group py-2"
                >
                  <span className="relative">
                    Work with us
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground"></span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-[#4B9CFF]">
                    <span className="w-4 h-4">⚙️</span>
                  </div>
                  <span className="text-foreground font-semibold text-[16px]">Built Like Steel</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-[#FF5D29]">
                    <span className="w-4 h-4">🔥</span>
                  </div>
                  <span className="text-foreground font-semibold text-[16px]">Crafted Under Pressure</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-[#FF3131]">
                    <span className="w-4 h-4">🧲</span>
                  </div>
                  <span className="text-foreground font-semibold text-[16px]">Precision That Sticks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaYellow;