"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ValuesBlack Section Component
 * 
 * A dark-themed values section featuring "Reliability", "Efficiency", and "Innovation".
 * It includes high-contrast yellow icons, a large geometric background graphic,
 * and a rich charcoal industrial aesthetic.
 */
export default function ValuesBlack() {
  const values = [
    {
      title: "Reliability",
      description: "Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c8230f989439d2f70bef0_Icon_201-9.svg",
    },
    {
      title: "Efficiency",
      description: "Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c8230f2c798b4cb9c91ca_Icon_202-10.svg",
    },
    {
      title: "Innovation",
      description: "Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688c8231996be56e023de561_Icon_203-11.svg",
    },
  ];

  return (
      <section className="bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Graphic - Large Alpha-styled Logo/Symbol */}
        <div className="absolute top-[180px] right-[10%] opacity-100 z-0 hidden sm:block">
          <svg 
            width="320" 
            height="160" 
            viewBox="0 0 320 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 0H180L130 50H260L210 100H320V160H140L190 110H60L110 60H0V0H50Z" 
              stroke="#FDF580" 
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-[1280px] px-4 sm:px-8 relative z-10">
          {/* Header Content */}
          <div className="max-w-[850px] mb-12 sm:mb-20 lg:mb-[100px]">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-[10px] h-[10px] bg-[#FDF580] rotate-45"></div>
              <span className="text-[#FDF580] uppercase tracking-widest text-[14px] font-semibold">
                Our values
              </span>
            </div>

            <h2 className="text-[#666666] leading-[1.2] mb-6 font-medium text-[24px] xs:text-[28px] sm:text-[32px] md:text-[clamp(32px,5vw,56px)]">
              We are committed to crafting
              <span className="text-[#FFFFFF]"> reliable, efficient, and innovative metal solutions</span>
              {' '}- standards of precision and quality.
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-12 sm:gap-y-16">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col">
                {/* Icon Container */}
                <div className="mb-8 sm:mb-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1F1F] border border-[#2A2A2A]">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={24} 
                    height={24} 
                    className="filter brightness-0 invert sepia(1) saturate(5) hue-rotate(10deg)"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#FDF580] mb-4 sm:mb-6 text-[24px] sm:text-[32px] font-medium leading-[1.3]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[#CCCCCC] text-[16px] sm:text-[18px] leading-[1.6] max-w-[340px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}