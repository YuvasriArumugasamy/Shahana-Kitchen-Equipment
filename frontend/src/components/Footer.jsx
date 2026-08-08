import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, ChevronRight } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenQuoteModal }) {
  const handleNav = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181024] text-white pt-12 sm:pt-16 md:pt-20 pb-8 border-t border-purple-900/40">
      <div className="max-w-container mx-auto px-4">
        
        {/* Top Footer Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative z-10 text-center lg:text-left">
            <span className="text-[#6A1B9A] text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-[#F3E8FF] px-3 py-1 rounded-full inline-block mb-3">
              Need Commercial Kitchen Equipment?
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
              Get Best Manufacturer Pricing & Free Site Consultation
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto lg:mx-0">
              Talk directly with our senior application engineers to choose the right machine models for your hotel, canteen, or cloud kitchen setup.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="btn-purple text-white font-bold px-6 py-3 rounded-full hover:bg-[#581C87] transition-all shadow-xl hover:scale-105 text-xs sm:text-sm w-full sm:w-auto text-center"
            >
              Request Free Quote
            </button>
            <a
              href="https://wa.me/919994944123?text=Hi%20Shahana%20Kitchen%20Equipment,%20I%20need%20a%20quotation."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm w-full sm:w-auto"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-gray-800">
          
          {/* Col 1: Brand Info with Circular Logo */}
          <div>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-4 bg-white p-2.5 sm:p-3 rounded-2xl shadow-md border border-gray-100 max-w-xs">
              <img 
                src="/images/shahana-icon.png" 
                alt="Shahana Kitchen Equipment icon" 
                className="h-12 w-auto object-contain" 
              />
              <img 
                src="/images/shahana-wordmark.png" 
                alt="Shahana Kitchen Equipment wordmark" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
              Shahana Kitchen Equipment is Tamil Nadu's leading B2B commercial kitchen equipment manufacturer, supplier, service specialist, and genuine spare parts dealer.
            </p>
            <div className="space-y-2 text-xs text-gray-300">

              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>ISO Certified Manufacturing Standards</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-4 sm:mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {['home', 'about', 'products', 'services', 'spare-parts', 'gallery', 'industries', 'reviews', 'contact', 'faq'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="hover:text-purple-400 transition-colors capitalize flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-purple-500" />
                    <span>{link === 'faq' ? 'FAQ' : link.replace('-', ' ')}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-4 sm:mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Commercial Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>Commercial Tilting Wet Grinder</li>
              <li>Instant Wet Grinder Machine</li>
              <li>Heavy Duty Pulverizer Grinder</li>
              <li>Multi-Blade Vegetable Cutter</li>
              <li>Spiral Dough Kneader</li>
              <li>Automatic Potato Peeler</li>
              <li>Coconut Scraper Machine</li>
              <li>Stainless Steel Preparation Tables</li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-4 sm:mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=5/120+G,+Sankaran+Kovil+Road,+Ramayanpatti,+Tirunelveli+-+627358" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 hover:underline transition-colors"
                >
                  5/120 G, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358, Tamil Nadu
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+919994944123" className="hover:text-white transition-colors">+91 99949 44123</a>
              </li>
              {/* Email removed as requested */}
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>24h Support Available</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shahana Kitchen Equipment. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="/admin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-400 hover:text-white font-bold hover:underline transition-colors flex items-center gap-1"
            >
              🔐 Admin Login
            </a>
            <span className="hover:underline cursor-pointer">Website Designed by <span className="text-red-400">❤️</span> YuvaTech Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
