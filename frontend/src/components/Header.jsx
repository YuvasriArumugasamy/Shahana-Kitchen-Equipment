import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Menu, X, ChevronDown, ArrowRight,
  Home, Building2, Package, Wrench, Settings, Image, Factory, Star, PhoneCall, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { logoImg } from '../assets/clientAssets';

export default function Header({ currentPage, setCurrentPage, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Top bar rotating items state for clean automatic transition
  const topBarItems = [
    {
      id: 'address',
      icon: MapPin,
      label: 'Location',
      text: '5/120 G, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358',
      link: 'https://maps.google.com/?q=5/120+G,+Sankaran+Kovil+Road,+Ramayanpatti,+Tirunelveli+-+627358',
      badge: 'Location'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Call Direct',
      text: '+91 99949 44123',
      link: 'tel:+919994944123',
      badge: 'Call Us'
    },
    {
      id: 'support',
      icon: Clock,
      label: 'Service',
      text: '24h Support Available',
      link: null,
      badge: '24/7 Service'
    }
  ];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTopIndex((prev) => (prev + 1) % topBarItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [topBarItems.length]);

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About Us', id: 'about', icon: Building2 },
    { label: 'Products', id: 'products', icon: Package },
    { label: 'Services', id: 'services', icon: Wrench },
    { label: 'Spare Parts', id: 'spare-parts', icon: Settings },
    { label: 'Gallery', id: 'gallery', icon: Image },
    { label: 'Industries', id: 'industries', icon: Factory },
    { label: 'Reviews', id: 'reviews', icon: Star },
    { label: 'Contact Us', id: 'contact', icon: PhoneCall },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative w-full z-50">
      {/* Top bar */}
      <div className="bg-[#581C87] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-purple-800/40 relative select-none overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative min-h-[24px]">
          
          {/* Automatic Rotating Item (One by One Animation) */}
          <div className="overflow-hidden h-6 flex items-center justify-center w-full">
            <div 
              key={currentTopIndex}
              className="animate-slide-up-fade flex items-center justify-center gap-2 text-center"
            >
              <span className="hidden sm:inline-block bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-purple-700/60 uppercase tracking-wider">
                {topBarItems[currentTopIndex].badge}
              </span>

              {React.createElement(topBarItems[currentTopIndex].icon, { className: "w-4 h-4 text-purple-300 shrink-0" })}
              
              {topBarItems[currentTopIndex].link ? (
                <a 
                  href={topBarItems[currentTopIndex].link} 
                  className="hover:underline font-bold text-white text-[11px] sm:text-xs tracking-wide"
                >
                  {topBarItems[currentTopIndex].text}
                </a>
              ) : (
                <span className="font-medium text-purple-100 text-[11px] sm:text-xs tracking-wide">
                  {topBarItems[currentTopIndex].text}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation - STICKY / FIXED AT TOP 0 WHEN SCROLLED */}
      <div className={`w-full transition-all duration-300 bg-white ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-3 shadow-md border-b border-purple-200' 
          : 'relative py-3 sm:py-3.5 border-b border-gray-200'
      }`}>
        <div className="max-w-[1550px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Logo Brand Group */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 shrink-0 pr-2 group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-[#6A1B9A] shadow-md bg-white p-0.5 shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src={logoImg} 
                alt="MS Shahana Kitchen Equipment Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <span className="font-heading font-extrabold text-sm xs:text-base sm:text-lg md:text-xl text-gray-900 leading-none tracking-tight group-hover:text-[#6A1B9A] transition-colors">
                SHAHANA <span className="text-[#6A1B9A]">KITCHEN</span>
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase mt-0.5">
                EQUIPMENT
              </span>
            </div>
          </div>

          {/* Desktop Nav Items - Super Clean Single Line Row */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-1.5 font-heading">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-[12px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'text-[#6A1B9A] bg-purple-100/90 shadow-xs' 
                    : 'text-gray-700 hover:text-[#6A1B9A] hover:bg-purple-50/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="btn-purple px-5 py-2.5 text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/25 active:scale-95 transition-all"
            >
              <span>GET QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-2xl text-gray-700 bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200/80 shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#6A1B9A]" /> : <Menu className="w-6 h-6 text-[#6A1B9A]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent layout jump when navbar is fixed */}
      {isScrolled && <div className="h-[64px] sm:h-[72px]" />}

      {/* FULL-WIDTH PROFESSIONAL MOBILE NAVIGATION MENU (NATURAL SCROLL, NO FIXED BOTTOM BAR) */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed left-0 right-0 w-full bottom-0 z-[100] bg-white flex flex-col justify-between overflow-hidden animate-fade-in ${
          isScrolled ? 'top-[60px] sm:top-[68px]' : 'top-[102px] sm:top-[112px]'
        }`}>
          
          {/* Full Scrollable Nav List Items */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-2 pb-8 bg-gray-50/50">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full p-3.5 rounded-xl flex items-center justify-between transition-all duration-200 text-left border ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#6A1B9A] to-purple-900 text-white font-extrabold shadow-md border-purple-800' 
                      : 'bg-white text-gray-800 border-gray-200/80 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-purple-50 text-[#6A1B9A]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </button>
              );
            })}

            {/* In-List Action Buttons (Scrolls Naturally at Bottom) */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="btn-purple w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>REQUEST FREE QUOTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919994944123"
                className="w-full py-3 px-4 bg-white hover:bg-purple-50 text-[#6A1B9A] rounded-xl text-center text-xs font-extrabold flex items-center justify-center gap-2 transition-colors border border-purple-200/80 shadow-xs block"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us +91 99949 44123</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
