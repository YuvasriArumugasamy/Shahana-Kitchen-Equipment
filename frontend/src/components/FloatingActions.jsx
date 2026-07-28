import React from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918675767640?text=Hi%20Shahana%20Kitchen%20Equipment,%20I%20want%20to%20inquire%20about%20commercial%20kitchen%20machines."
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all p-3 group relative"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Instant WhatsApp Enquiry
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918675767640"
        className="w-13 h-13 bg-[#6A1B9A] hover:bg-[#581C87] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all p-3 group relative"
        title="Call Us Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Sales: +91 86757 67640
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="w-11 h-11 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 rounded-full flex items-center justify-center shadow-lg transition-all"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
