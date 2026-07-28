import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Spare Parts', id: 'spare-parts' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Industries', id: 'industries' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-[#581C87] text-white text-xs py-2 px-4 border-b border-purple-800/40">
        <div className="max-w-container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="w-3.5 h-3.5 text-purple-300" />
              <a href="tel:+918675767640" className="hover:underline font-medium">+91 86757 67640</a>
            </span>
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="w-3.5 h-3.5 text-purple-300" />
              <a href="mailto:info@shahanakitchen.com" className="hover:underline">info@shahanakitchen.com</a>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 opacity-80">
              <MapPin className="w-3.5 h-3.5 text-purple-300" />
              <span>Tamil Nadu, India</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-purple-900/60 text-purple-200 px-2.5 py-0.5 rounded-full font-medium border border-purple-700/50">
              GST Registered Manufacturer
            </span>
            <button 
              onClick={() => handleNavClick('admin')} 
              className="text-purple-200 hover:text-white transition-colors underline text-xs font-semibold"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'glass-nav py-2 shadow-md' : 'bg-white/95 py-3 border-b border-gray-200'}`}>
        <div className="max-w-container mx-auto px-4 flex items-center justify-between">
          
          {/* Circular Reference Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#6A1B9A] shadow-md bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img 
                src="/images/logo.png" 
                alt="Shahana Kitchen Equipment Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="block font-heading font-extrabold text-lg tracking-tight text-gray-900 group-hover:text-[#6A1B9A] transition-colors leading-none">
                SHAHANA
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#6A1B9A] uppercase block mt-1">
                Kitchen Equipment
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  currentPage === item.id 
                    ? 'text-[#6A1B9A] bg-purple-50 font-extrabold' 
                    : 'text-gray-700 hover:text-[#6A1B9A] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="btn-purple px-5 py-2.5 text-xs font-bold flex items-center gap-2"
            >
              <span>GET QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="btn-purple px-3 py-1.5 text-xs font-semibold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 py-6 space-y-2 shadow-2xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                currentPage === item.id 
                  ? 'bg-purple-50 text-[#6A1B9A] font-bold border-l-4 border-[#6A1B9A]' 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="btn-purple w-full py-3 text-center text-sm"
            >
              Request Quick Quote
            </button>
            <a
              href="tel:+918675767640"
              className="btn-secondary w-full py-2.5 text-center text-sm block"
            >
              Call +91 86757 67640
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
