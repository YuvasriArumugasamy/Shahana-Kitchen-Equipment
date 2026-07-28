import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, ChevronRight } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenQuoteModal }) {
  const handleNav = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181024] text-white pt-20 pb-8 border-t border-purple-900/40">
      <div className="max-w-container mx-auto px-4">
        
        {/* Top Footer Banner */}
        <div className="bg-gradient-to-r from-[#6A1B9A] to-[#3B0764] rounded-2xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10">
            <span className="text-purple-200 text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
              Need Commercial Kitchen Equipment?
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Get Best Manufacturer Pricing & Free Site Consultation
            </h2>
            <p className="text-purple-100 text-sm max-w-xl">
              Talk directly with our senior application engineers to choose the right machine models for your hotel, canteen, or cloud kitchen setup.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 relative z-10">
            <button
              onClick={onOpenQuoteModal}
              className="bg-white text-[#6A1B9A] font-bold px-6 py-3.5 rounded-full hover:bg-purple-50 transition-all shadow-xl hover:scale-105"
            >
              Request Free Quote
            </button>
            <a
              href="https://wa.me/918675767640?text=Hi%20Shahana%20Kitchen%20Equipment,%20I%20need%20a%20quotation."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-full transition-all shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-800">
          
          {/* Col 1: Brand Info with Circular Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-md bg-white p-0.5">
                <img 
                  src="/images/logo.png" 
                  alt="Shahana Kitchen Equipment Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                SHAHANA KITCHEN
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Shahana Kitchen Equipment is Tamil Nadu's leading B2B commercial kitchen equipment manufacturer, supplier, service specialist, and genuine spare parts dealer.
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>GSTIN: 33EISPM6824G1ZV</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>ISO Certified Manufacturing Standards</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['home', 'about', 'products', 'services', 'spare-parts', 'gallery', 'industries', 'reviews', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="hover:text-purple-400 transition-colors capitalize flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-purple-500" />
                    <span>{link.replace('-', ' ')}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Commercial Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h3 className="font-heading font-semibold text-white text-base mb-6 pb-2 border-b border-purple-900/60 inline-block">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>5/120 G, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+918675767640" className="hover:text-white transition-colors">+91 86757 67640</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:info@shahanakitchen.com" className="hover:text-white transition-colors">info@shahanakitchen.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Emergency AMC Support Only</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Shahana Kitchen Equipment. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <button onClick={() => handleNav('faq')} className="hover:underline">FAQ</button>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
