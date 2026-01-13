"use client";

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const DevisModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  // لمنع التمرير (Scroll) خلف الـ Modal عند فتحه
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // محاكاة إرسال البيانات
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop (الخلفية المضببة) */}
      <div 
        className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[550px] bg-white rounded-[32px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] transform transition-all duration-300 scale-100 animate-in zoom-in-95">
        
        {/* Header Section (Bordeaux Theme) */}
        <div className="bg-[#800020] p-8 text-white relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:rotate-90"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-[26px] sm:text-[32px] font-black uppercase tracking-tighter italic leading-tight mb-2">
            Demander un <span className="text-[#C0A062] not-italic">Devis</span>
          </h2>
          <p className="text-white/70 text-[13px] font-bold uppercase tracking-widest">
            Réponse sous 24h maximum
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10 bg-white">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#C0A062]">Nom Complet</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Ex: Ahmed Alami"
                    className="w-full h-[52px] px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#C0A062] focus:bg-white outline-none transition-all text-[14px] font-bold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#C0A062]">Email Professionnel</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="contact@entreprise.ma"
                    className="w-full h-[52px] px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#C0A062] focus:bg-white outline-none transition-all text-[14px] font-bold"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#C0A062]">Service Requis</label>
                <div className="relative">
                  <select 
                    className="w-full h-[52px] px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#C0A062] focus:bg-white outline-none transition-all text-[14px] font-bold appearance-none cursor-pointer"
                  >
                    <option>Nettoyage Industriel</option>
                    <option>Gardiennage & Sécurité</option>
                    <option>Jardinage (Espaces Verts)</option>
                    <option>Externalisation RH / Intérim</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Message / Details */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#C0A062]">Description du besoin</label>
                <textarea 
                  rows="3"
                  placeholder="Détails de votre demande..."
                  className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#C0A062] focus:bg-white outline-none transition-all text-[14px] font-bold resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group w-full h-[58px] bg-[#1a1a1a] hover:bg-[#800020] text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 shadow-xl hover:shadow-[#800020]/30 mt-4"
              >
                <span className="text-[13px] font-black uppercase tracking-widest">Envoyer la demande</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

            </form>
          ) : (
            /* Success View */
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="text-[22px] font-black uppercase tracking-tighter italic text-[#1a1a1a]">Message Envoyé</h3>
              <p className="text-gray-500 text-[14px] max-w-[280px] mt-2 font-medium">
                Merci ! Un conseiller Nouest Management vous contactera très prochainement.
              </p>
            </div>
          )}
        </div>

        {/* Footer Accent Line */}
        <div className="h-[4px] w-full bg-gradient-to-r from-[#800020] to-[#C0A062]" />
      </div>
    </div>
  );
};

export default DevisModal;