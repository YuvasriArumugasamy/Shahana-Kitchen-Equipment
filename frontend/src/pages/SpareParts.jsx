import React, { useState } from 'react';
import { Settings, ShieldCheck, CheckCircle2, Phone, Search } from 'lucide-react';

export default function SpareParts({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Spare Parts');
  const partsList = [
    { name: "V Belt", category: "Belts", specs: "All Models Available", img: "/images/v belt.webp" },
    { name: "Ball Bearing", category: "Bearings", specs: "All Models Available", img: "/images/ball bearing.webp" },
    { name: "Cutter Blade", category: "Blades", specs: "All Models Available", img: "/images/cutter blade.webp" },
    { name: "Wet Grinder Stone", category: "Stones", specs: "All Models Available", img: "/images/spare part.webp" },
    { name: "SS Drum", category: "Drums", specs: "All Models Available", img: "/images/ss drum.webp" },
    { name: "Electric Motor", category: "Motors", specs: "1HP | 2HP | 3HP Available", img: "/images/electric motor.webp" },
    { name: "ON / OFF Switch", category: "Switches", specs: "All Models Available", img: "/images/on off switch.webp" },
    { name: "Gear Set", category: "Gears", specs: "All Models Available", img: "/images/gear set.webp" },
    { name: "Coupling", category: "Couplings", specs: "All Models Available", img: "/images/coupling.webp" },
    { name: "Carbon Brush", category: "Brushes", specs: "All Models Available", img: "/images/carbon brush.webp" },
    { name: "Pulley", category: "Pulleys", specs: "All Models Available", img: "/images/pulley.webp" },
    { name: "Oil Seal", category: "Seals", specs: "All Models Available", img: "/images/oil seai.webp" }
  ];

  const filteredParts = selectedCategory === 'All Spare Parts'
    ? partsList
    : partsList.filter((part) => part.category === selectedCategory);

  return (
    <div className="space-y-8 sm:space-y-12">

      {/* HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative text-white py-14 sm:py-20 overflow-hidden min-h-[60vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an (2).mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/70 to-black/85 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
              </span>
              <span>ORIGINAL OEM SPARE PARTS INVENTORY</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              SPARE <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">PARTS</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-xl font-semibold max-w-2xl drop-shadow-md leading-relaxed">
              Genuine Replacement Spare Parts for Long Lasting Kitchen Machinery Performance
            </p>

            {/* Feature Pills */}
            <div className="animate-hero-slide-up animation-delay-400 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-[11px] sm:text-xs pt-1 max-w-2xl font-bold">
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3 py-1.5 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ 100% Genuine Parts</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3 py-1.5 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Quality Assured</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3 py-1.5 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Perfect Fit & Durable</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3 py-1.5 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Wholesale Pricing</div>
            </div>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-500 text-[11px] sm:text-xs font-medium text-purple-200 pt-1 drop-shadow">
              Home &gt; Spare Parts
            </div>
          </div>
        </div>
      </section>

      {/* SPARE PARTS CATALOG GRID - Exact Reference Design */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            SPARE PARTS CATALOG
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Sidebar Category Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#6A1B9A] text-white px-4 py-3 font-heading font-bold text-xs sm:text-sm uppercase">
                SPARE PARTS CATEGORIES
              </div>
              <div className="divide-y divide-gray-100 text-xs font-semibold text-gray-700 max-h-60 lg:max-h-none overflow-y-auto">
                {['All Spare Parts', 'Belts', 'Bearings', 'Blades', 'Stones', 'Drum Parts', 'Motors', 'Switches', 'Gear Parts', 'Couplings', 'Pulleys'].map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 transition-colors flex justify-between ${
                      selectedCategory === cat ? 'bg-purple-50 text-[#6A1B9A] font-bold' : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Spare Parts Cards Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredParts.map((part, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between group text-center relative border-t-4 border-t-[#6A1B9A]">
                  <div>
                    <div className="w-full aspect-square bg-gradient-to-b from-purple-50/50 to-gray-50 rounded-xl overflow-hidden pt-7 pb-2.5 px-2.5 flex items-center justify-center mb-2.5 sm:mb-3 relative border border-gray-100">
                      <span className="absolute top-1.5 left-1.5 z-20 bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200 shadow-xs">
                        100% Genuine
                      </span>
                      <img src={part.img} alt={part.name} className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-xs relative z-10" />
                    </div>
                    <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm mb-3 leading-snug group-hover:text-[#6A1B9A] transition-colors">{part.name}</h3>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal({ name: part.name })}
                    className="btn-purple w-full py-2.5 text-[11px] sm:text-xs font-bold uppercase shadow-sm hover:shadow-purple-900/20"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
