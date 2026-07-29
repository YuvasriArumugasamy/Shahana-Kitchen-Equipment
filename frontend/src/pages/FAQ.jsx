import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export default function FAQ({ onOpenQuoteModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Do you manufacture commercial kitchen equipment directly?",
      a: "Yes, Shahana Kitchen Equipment is a genuine manufacturer and supplier. All our tilting wet grinders, instant wet grinders, pulverizers, dough kneaders, vegetable cutters, and stainless steel tables are fabricated in-house with food grade 304 stainless steel."
    },
    {
      q: "What warranty do you provide on commercial machines?",
      a: "We offer a 1-Year Comprehensive On-Site Manufacturer Warranty covering motors, gear boxes, SKF bearings, and structural food-grade components."
    },
    {
      q: "Do you supply original spare parts after warranty?",
      a: "Yes, we maintain a complete inventory of original grinding stones, heavy copper motors, SKF bearings, V-belts, SS cutter blades, drums, and control switches for instant replacement."
    },
    {
      q: "Do you provide on-site machine installation & demo?",
      a: "Yes, our skilled application engineers handle doorstep delivery, floor leveling, electrical 3-phase wiring inspection, and operational training for your kitchen staff across Tamil Nadu."
    },
    {
      q: "What is an Annual Maintenance Contract (AMC)?",
      a: "An AMC ensures preventive periodic checks of your kitchen machines every month to prevent unexpected equipment downtime during peak kitchen hours."
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12">

      {/* HERO BANNER WITH STUNNING ANIMATIONS */}
      <section className="relative bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-14 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 space-y-4 relative z-10">
          
          {/* Animated Glowing Badge */}
          <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-100"></span>
            </span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Animated Title */}
          <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight drop-shadow-md">
            GOT QUESTIONS? <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">WE HAVE ANSWERS</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-lg max-w-xl mx-auto font-medium leading-relaxed drop-shadow">
            Find quick answers regarding machine warranties, food grade certifications, spare parts, on-site installation, and doorstep delivery.
          </p>
        </div>
      </section>

      {/* ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            COMMON QUESTIONS & ANSWERS
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between font-heading font-bold text-gray-900 text-sm sm:text-base hover:text-[#6A1B9A] transition-colors gap-3"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#6A1B9A] transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
