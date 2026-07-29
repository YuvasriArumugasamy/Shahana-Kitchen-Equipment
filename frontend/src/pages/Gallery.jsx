import React, { useState } from 'react';
import { ChevronRight, Camera } from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All Photos');

  const galleryCategories = ['All Photos', 'Our Products', 'Installations', 'Workshop', 'Happy Customers'];

  const productsGallery = [
    { title: "Wet Grinder", img: "/images/instant wet grinder.png" },
    { title: "Dough Kneader", img: "/images/dough kneader.png" },
    { title: "Vegetable Cutter", img: "/images/vegetable cutting machine.png" },
    { title: "Coconut Scraper", img: "/images/coconut scraper.png" },
    { title: "Mixer Machine", img: "/images/mixer machine.png" },
    { title: "Pulverizer Machine", img: "/images/pulverizer machine.png" },
    { title: "Instant Wet Grinder", img: "/images/instant wet grinder.png" },
    { title: "Coconut Milk Extractor", img: "/images/coconut milk extractor.png" },
    { title: "Idli / Dosa Batter Mixer", img: "/images/idly dose batter mixer.png" },
    { title: "Masala Grinder", img: "/images/masala grinder.png" },
    { title: "Juice Machine", img: "/images/juice mechine.png" }
  ];

  const installationsGallery = [
    { title: "Hotel Installation", img: "/images/gallery.png" },
    { title: "Restaurant Installation", img: "/images/gallery1.png" },
    { title: "Catering Unit Installation", img: "/images/caterin unit installation.png" },
    { title: "Bakery Installation", img: "/images/bakery installation.png" },
    { title: "Institution Installation", img: "/images/institution installation.png" },
    { title: "Cloud Kitchen Setup", img: "/images/hostel installation.png" }
  ];

  const workshopGallery = [
    { title: "Our Workshop", img: "/images/our workshop.png" },
    { title: "Spare Parts Stock", img: "/images/spare parts stock.png" },
    { title: "Machine Repair", img: "/images/machine repair.png" },
    { title: "Testing & Quality Check", img: "/images/testing .png" },
    { title: "Our Team", img: "/images/our team.png" },
    { title: "Delivery & Packing", img: "/images/delivery .png" }
  ];

  return (
    <div className="space-y-8 sm:space-y-12">

      {/* HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative text-white py-14 sm:py-20 overflow-hidden min-h-[60vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an (3).mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/70 to-black/80 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
              </span>
              <Camera className="w-3.5 h-3.5 text-purple-200" />
              <span>PHOTO & VIDEO SHOWCASE</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              PHOTO <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">GALLERY</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-xl font-semibold max-w-2xl drop-shadow-md leading-relaxed">
              Explore our commercial products, hotel installations, factory workshop, and happy customer moments across Tamil Nadu.
            </p>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-400 flex items-center gap-2 pt-1 text-[11px] sm:text-xs font-medium text-purple-200 drop-shadow">
              <span>Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-bold">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="max-w-container mx-auto px-4 text-center">
        <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1.5 bg-white rounded-2xl sm:rounded-full shadow border border-gray-200">
          {galleryCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat ? 'bg-[#6A1B9A] text-white shadow' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'All Photos' && (
        <>
          {/* OUR PRODUCTS SECTION */}
          <section className="max-w-container mx-auto px-4 space-y-4 sm:space-y-6">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
              <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
                OUR PRODUCTS
              </h2>
              <div className="section-line-accent">
                <div className="section-line-dot"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {productsGallery.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden p-2 flex items-center justify-center mb-2">
                    <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* INSTALLATIONS SECTION */}
          <section className="max-w-container mx-auto px-4 space-y-4 sm:space-y-6">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
              <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
                INSTALLATIONS
              </h2>
              <div className="section-line-accent">
                <div className="section-line-dot"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {installationsGallery.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* WORKSHOP & MORE SECTION */}
          <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16 space-y-4 sm:space-y-6">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
              <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
                WORKSHOP & MORE
              </h2>
              <div className="section-line-accent">
                <div className="section-line-dot"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {workshopGallery.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top rounded-lg" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'Our Products' && (
        <section className="max-w-container mx-auto px-4 space-y-4 sm:space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
              OUR PRODUCTS
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {productsGallery.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden p-2 flex items-center justify-center mb-2">
                  <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Installations' && (
        <section className="max-w-container mx-auto px-4 space-y-4 sm:space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
              INSTALLATIONS
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {installationsGallery.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Workshop' && (
        <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16 space-y-4 sm:space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
              WORKSHOP & MORE
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {workshopGallery.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top rounded-lg" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Happy Customers' && (
        <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16 space-y-4 sm:space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl section-title-styled block">
              HAPPY CUSTOMERS
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {workshopGallery.slice(0, 6).map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm p-2.5 sm:p-3 text-center">
                <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-2">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top rounded-lg" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 text-[11px] sm:text-xs leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
