import React from 'react';
import Image from 'next/image';

/**
 * Hero component for the Ironis website.
 * Features a background video, high-impact typography, and industrial aesthetic.
 */
export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source
              src="https://player.vimeo.com/external/517013895.sd.mp4?s=28c68c67a57a8b3a7b6b107647228a05c754d90e&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        {/* Gradient Overlay for Text Readability */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)' 
          }} 
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-20">
          
            {/* Left Column: Descriptive Content */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8">
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.6] max-w-[480px] font-sans">
                Premium facility management solutions designed for modern businesses. We ensure your workspace is clean, efficient, and beautifully maintained.
              </p>
  
              {/* Service Tags/Values Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {[
                  { label: 'Office', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c762ca91c3db150490041_Subtitle_20icon-4.svg' },
                  { label: 'Cleaning', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c762ca91c3db150490041_Subtitle_20icon-4.svg' },
                  { label: 'Garden', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c762ca91c3db150490041_Subtitle_20icon-4.svg' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Image 
                      src={item.icon} 
                      alt="" 
                      width={14} 
                      height={14} 
                      className="object-contain"
                    />
                    <span className="text-white text-[14px] sm:text-[16px] font-medium font-sans uppercase tracking-[0.05em]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

            {/* CTA Button */}
            <div className="w-full max-w-[220px] sm:max-w-[250px] mt-2 sm:mt-4">
              <a 
                href="/services" 
                className="group relative flex items-center justify-between w-full h-[54px] sm:h-[60px] px-6 sm:px-8 bg-[#fdf580] rounded-[30px] transition-all duration-300 hover:pr-6 overflow-hidden"
              >
                <span className="text-[#1A1A1A] text-[15px] sm:text-[16px] font-semibold font-sans">
                  Our services
                </span>
                <div className="relative flex items-center justify-center w-5 h-5">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688b32a64d16109629c8c8d0_Button_20Arrow-5.svg" 
                    alt="Arrow" 
                    width={14} 
                    height={14} 
                    className="transition-all duration-300 group-hover:-translate-y-6 group-hover:translate-x-6 opacity-100"
                  />
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688b3461a12b76a2afb251ff_Arrow_20Botton_202_20Yell-6.svg" 
                    alt="Arrow" 
                    width={14} 
                    height={14} 
                    className="absolute translate-y-6 -translate-x-6 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          </div>

            {/* Right Column: Hero Headline */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
              <h1 className="text-white text-[40px] xs:text-[48px] sm:text-[64px] md:text-[80px] font-semibold leading-[1.1] tracking-[-0.02em] text-center lg:text-right font-sans">
                Superior Service.<br />
                <span className="inline-block">Corporate Excellence.</span>
              </h1>
            </div>
          
        </div>
      </div>

      {/* Optional: Subtle scanning line effect common in industrial designs */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-20 pointer-events-none" 
      />
    </section>
  );
}