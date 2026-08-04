import React, { useState } from 'react';
import { PRODUCTS, REVIEWS } from '../data/siteData';
import { productAssets } from '../assets/clientAssets';
import { 
  ShieldCheck, Wrench, Award, Truck, Clock, Phone, 
  ArrowRight, CheckCircle2, Star, Zap, ChevronRight, Settings, Sparkles, Building2, Package, Image 
} from 'lucide-react';

export default function Home({ setCurrentPage, onOpenQuoteModal, onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Wet Grinders', 'Pulverizers', 'Dough Kneaders', 'Vegetable Cutters'];

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.includes(p.category));

  const carouselItems = [
    { name: "Popcorn Machine", img: productAssets.popcornMachine, color: "252, 180, 142" },
    { name: "Potato Peeler", img: productAssets.potatoPeeler, color: "252, 220, 142" },
    { name: "Banana Chips Slicer", img: productAssets.bananaSlicer, color: "215, 252, 142" },
    { name: "Tilting Wet Grinder", img: productAssets.tiltingWetGrinder, color: "142, 252, 204" },
    { name: "Meat Mincer", img: productAssets.meatMincer, color: "252, 142, 160" },
    { name: "Gravy Machine", img: productAssets.gravyMachine, color: "192, 132, 252" },
    { name: "Heavy Duty Flour Mill", img: productAssets.flourMill, color: "142, 200, 252" },
    { name: "Rice & Grain Washer", img: productAssets.riceWasher, color: "142, 252, 240" },
    { name: "Atta Kneader", img: productAssets.attaKneader, color: "142, 252, 157" },
    { name: "Vegetable Cutter", img: productAssets.vegetableCutter, color: "215, 252, 142" },
    { name: "Commercial Wet Grinder", img: productAssets.wetGrinder, color: "252, 180, 210" },
    { name: "Instant Wet Grinder", img: productAssets.instantWetGrinder, color: "180, 210, 252" },
    { name: "Coconut Scraper", img: productAssets.coconutScraper, color: "252, 230, 142" },
    { name: "Double Head Scraper", img: productAssets.doubleCoconutScraper, color: "252, 160, 142" },
    { name: "U-Drum SS Mixer", img: productAssets.uDrumMixer, color: "160, 252, 220" },
    { name: "Table Top Grinder", img: productAssets.tableTopWetGrinder, color: "180, 180, 252" },
    { name: "Chicken Feather Remover", img: productAssets.chickenFeatherRemover, color: "252, 200, 160" },
    { name: "Oil Dryer Machine", img: productAssets.oilDryer, color: "210, 252, 180" }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 pb-12">

      {/* HERO SECTION - VIDEO BACKGROUND WITH STUNNING ANIMATIONS */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_video_pa.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Rich gradient fade for maximum text contrast & elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/60 to-transparent pointer-events-none"></div>

        <div className="max-w-container mx-auto px-4 relative z-10 w-full">
          
          {/* Main Text Content */}
          <div className="max-w-2xl space-y-4 sm:space-y-6 text-left">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A] text-white px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-100"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-200 shrink-0 animate-pulse" />
              <span>Commercial Kitchen Equipment Manufacturer</span>
            </div>

            {/* Heading with Animation & Gradient Touch */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              COMMERCIAL KITCHEN <br/>
              <span className="text-[#6A1B9A] bg-clip-text text-transparent bg-gradient-to-r from-[#6A1B9A] via-purple-700 to-indigo-900">EQUIPMENT</span>
            </h1>

            {/* Subheading */}
            <p className="animate-hero-slide-up animation-delay-300 text-[#6A1B9A] text-base sm:text-xl lg:text-2xl font-extrabold tracking-wide uppercase flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#6A1B9A] rounded-full inline-block"></span>
              <span>SALES | SERVICE | SPARE PARTS</span>
            </p>

            {/* Description */}
            <p className="animate-hero-slide-up animation-delay-400 text-gray-800 text-xs sm:text-base lg:text-lg font-semibold leading-relaxed">
              We provide high quality commercial kitchen equipment with best service and support for hotels, restaurants, cloud kitchens, marriage halls, hospitals, and industrial caterers across Tamil Nadu.
            </p>

            {/* Value Checkmark Bullets */}
            <div className="animate-hero-slide-up animation-delay-500 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm font-bold text-gray-900">
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A1B9A] fill-purple-100 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-[#6A1B9A] transition-colors">Premium Quality Machines</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A1B9A] fill-purple-100 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-[#6A1B9A] transition-colors">Installation & Demonstration</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A1B9A] fill-purple-100 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-[#6A1B9A] transition-colors">Spare Parts Available</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A1B9A] fill-purple-100 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-[#6A1B9A] transition-colors">After Sales Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-hero-slide-up animation-delay-600 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-purple px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto transform hover:scale-[1.03] transition-all duration-300 active:scale-95"
              >
                <span>VIEW PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm w-full sm:w-auto transform hover:scale-[1.03] transition-all duration-300 active:scale-95 shadow-md"
              >
                <span>REQUEST QUOTE</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT CATEGORIES - 3D ROTATING CAROUSEL */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            PRODUCT CATEGORIES
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-inner">
            {carouselItems.map((cat, idx) => (
              <div
                key={idx}
                className="carousel-card"
                style={{
                  "--color-card": cat.color,
                  "--index": idx,
                  transform: `rotateY(calc((360deg / ${carouselItems.length}) * ${idx})) translateZ(300px)`
                }}
                onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <div className="carousel-card-img">
                  <img src={cat.img} alt={cat.name} />
                </div>
                <div className="carousel-card-label">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Matching Reference Grid */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            WHY CHOOSE US
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 text-center">
          {[
            { icon: Award, title: "Premium Quality", desc: "Best quality stainless steel machines." },
            { icon: Truck, title: "Fast Delivery", desc: "On time delivery across Tamil Nadu." },
            { icon: Wrench, title: "Expert Service", desc: "Skilled technicians for installation & service." },
            { icon: ShieldCheck, title: "Warranty Support", desc: "Reliable warranty on all products." },
            { icon: Clock, title: "24/7 Support", desc: "We are always here to support you." },
            { icon: Building2, title: "Trusted Supplier", desc: "Trusted by hotels, restaurants & more." }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-center border-t-4 border-t-[#6A1B9A] group">
                <div className="w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-purple-100 to-purple-50 text-[#6A1B9A] rounded-2xl flex items-center justify-center mx-auto mb-3 shrink-0 group-hover:bg-[#6A1B9A] group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComp className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-[#6A1B9A] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL - Matching Reference Design */}
      <section className="bg-white py-12 sm:py-16 border-y border-gray-200">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
              FEATURED PRODUCTS
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between p-4 relative border-t-4 border-t-[#6A1B9A]">
                <div>
                  <div className="w-full aspect-square bg-gradient-to-b from-purple-50/40 to-gray-50 rounded-xl overflow-hidden pt-8 pb-3 px-3 flex items-center justify-center mb-3.5 relative border border-gray-100">
                    <span className="absolute top-2 left-2 z-20 bg-gradient-to-r from-[#6A1B9A] to-purple-900 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      Best Seller
                    </span>
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-sm relative z-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-gray-900 text-sm sm:text-base text-center mb-4 group-hover:text-[#6A1B9A] transition-colors">{product.name}</h3>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(product)}
                  className="btn-purple w-full py-2.5 text-xs font-bold shadow-md shadow-purple-900/10 hover:shadow-purple-900/25 text-center"
                >
                  GET FREE QUOTE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE FROM REFERENCE */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            GALLERY
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {[
            { img: "/images/caterin unit installation.png", title: "Catering Unit" },
            { img: "/images/bakery installation.png", title: "Bakery Setup" },
            { img: "/images/institution installation.png", title: "Institution Canteen" },
            { img: "/images/hostel installation.png", title: "Hotel & Hostel" },
            { img: "/images/our workshop.png", title: "Our Workshop" }
          ].map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-square bg-gray-50 p-1.5 group relative hover:shadow-md transition-shadow">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-x-1.5 bottom-1.5 bg-black/65 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold py-1 text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
