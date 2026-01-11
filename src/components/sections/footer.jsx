"use client";

import React from 'react';
import Image from 'next/image';
import { Linkedin, MoveRight } from 'lucide-react';

/**
 * Footer Component
 * 
 * Replicates the footer of the Ironis website with pixel-perfect accuracy.
 * Features:
 * - Link groups for Services and Company
 * - Contact and Social links
 * - Branding & Newsletter subscription
 * - Bottom global meta links (Copyright, Licensing, Credits)
 * 
 * Theme: Light
 */

const Footer = () => {
  return (
    <footer className="w-full bg-muted/30 pt-16 sm:pt-24 lg:pt-32 pb-10 font-sans text-foreground">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pb-12 sm:pb-20">
          
          {/* Left Columns - Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Services Links */}
            <div>
              <h6 className="text-[14px] font-bold uppercase tracking-wider mb-6 sm:mb-8 text-foreground">Services</h6>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="/services/sheet-metal-work" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Sheet Metal Work
                  </a>
                </li>
                <li>
                  <a href="/services/architectural-elements" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Architectural Elements
                  </a>
                </li>
                <li>
                  <a href="/services/machinery-components" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Machinery Components
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h6 className="text-[14px] font-bold uppercase tracking-wider mb-6 sm:mb-8 text-foreground">Company</h6>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="/about-us" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/our-team" className="text-[15px] sm:text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information (Below Company/Services on Mobile) */}
            <div className="col-span-2 pt-4 sm:pt-8">
              <h6 className="text-[14px] font-bold uppercase tracking-wider mb-6 sm:mb-8 text-foreground">Contact us</h6>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-12">
                <a 
                  href="mailto:ironis@example.com" 
                  className="text-[16px] sm:text-[18px] font-medium text-foreground hover:opacity-70 transition-opacity"
                >
                  ironis@example.com
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-foreground hover:opacity-70 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Brand & Subscription */}
          <div className="lg:col-span-8 flex flex-col items-start lg:pl-20">
            {/* Logo */}
            <div className="mb-8 sm:mb-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c8097953-7986-41c8-954c-071588461203-ironis-wcopilot-webflow-io/assets/svgs/688b757065f51cfc4af0299a_Logo_20Dark_20Ironis-1.svg" 
                alt="Ironis Logo" 
                width={126} 
                height={30} 
                className="block h-[30px] w-auto dark:invert"
              />
            </div>

            {/* Newsletter Heading */}
            <h2 className="text-[28px] sm:text-[40px] md:text-[56px] leading-[1.1] font-medium text-foreground max-w-[600px] mb-8 sm:mb-12">
              Subscribe to be in touch with latest updates.
            </h2>

            {/* Subscription Form */}
            <form className="w-full max-w-[500px] relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full py-5 sm:py-6 px-6 sm:px-8 rounded-full bg-background border border-border text-[16px] focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-muted-foreground"
                required
              />
              <button 
                type="submit" 
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-background hover:bg-primary transition-colors duration-300"
              >
                <MoveRight className="w-5 h-5 text-foreground" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-px bg-border mb-8 sm:mb-10" />

        {/* Secondary Navigation / Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[14px] sm:text-[15px] text-muted-foreground gap-y-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© Ironis. All Rights Reserved.</span>
            <a href="/licensing" className="hover:text-foreground transition-colors">Licensing</a>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Template by</span>
            <a href="#" className="text-foreground font-medium hover:underline">wCopilot</a>
            <span>. Powered by</span>
            <a href="#" className="text-foreground font-medium hover:underline">Webflow</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;