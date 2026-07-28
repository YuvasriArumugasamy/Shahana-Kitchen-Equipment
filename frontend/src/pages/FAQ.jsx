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
    <div className="pt-24 space-y-16">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-16 text-center">
        <div className="max-w-container mx-auto px-4 space-y-3">
          <span className="bg-white/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">Got Questions? We Have Answers</h1>
          <p className="text-purple-100 text-base max-w-xl mx-auto">
            Find quick answers regarding machine warranties, food grade certifications, spare parts, and delivery.
          </p>
        </div>
      </section>

      {/* ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between font-heading font-bold text-gray-900 text-base hover:text-[#6A1B9A] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#6A1B9A] transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
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
