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
    { name: "Ordinary Grinder", img: productAssets.ordinaryGrinder, color: "252, 180, 210" },
    { name: "Instant Wet Grinder", img: productAssets.instantWetGrinder, color: "180, 210, 252" },
    { name: "Coconut Scraper", img: productAssets.coconutScraper, color: "252, 230, 142" },
    { name: "Double Head Scraper", img: productAssets.doubleCoconutScraper, color: "252, 160, 142" },
    { name: "U Drum Mixer", img: productAssets.uDrumMixer, color: "160, 252, 220" },
    { name: "Table Top Grinder", img: productAssets.tableTopWetGrinder, color: "180, 180, 252" },
    { name: "Chicken Feather Remover", img: productAssets.chickenFeatherRemover, color: "252, 200, 160" },
    { name: "Oil Dryer Machine", img: productAssets.oilDryer, color: "210, 252, 180" }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24 pb-12 overflow-x-hidden">

      {/* HERO SECTION - 3D FLOATING SHOWCASE WITH AMBIENT GLOW */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000 opacity-90"
          src="/images/ithu_yellam_vachi_oru_video_pa.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Rich 3D gradient overlay for text readability and luxury glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 sm:via-white/70 to-purple-950/20 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl pointer-events-none animate-glow-pulse"></div>

        <div className="max-w-container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-6 text-left">
            
            {/* 3D Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl shadow-purple-900/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-100"></span>
              </span>
              <Sparkles className="w-4 h-4 text-purple-200 shrink-0 animate-pulse" />
              <span>Tamil Nadu's #1 Commercial Kitchen Equipment Brand</span>
            </div>

            {/* Heading with 3D Gradient Text */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              COMMERCIAL KITCHEN <br/>
              <span className="text-[#6A1B9A] bg-clip-text text-transparent bg-gradient-to-r from-[#6A1B9A] via-purple-700 to-indigo-900 drop-shadow-sm">
                EQUIPMENT & MACHINERY
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-hero-slide-up animation-delay-300 text-[#6A1B9A] text-base sm:text-lg lg:text-xl font-extrabold tracking-wide uppercase flex items-center gap-2">
              <span className="h-0.5 w-7 bg-[#6A1B9A] rounded-full inline-block"></span>
              <span>MANUFACTURING | SALES | SPARE PARTS & SERVICE</span>
            </p>

            {/* Description */}
            <p className="animate-hero-slide-up animation-delay-400 text-gray-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              High-capacity 304 food grade stainless steel kitchen machinery for hotels, restaurants, caterers, hostels, cloud kitchens & food processing units.
            </p>

            {/* Value Checkmark Bullets */}
            <div className="animate-hero-slide-up animation-delay-500 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-bold text-gray-900">
              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#6A1B9A] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#6A1B9A] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#6A1B9A] transition-colors">100% 304 Food Grade SS</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#6A1B9A] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#6A1B9A] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#6A1B9A] transition-colors">Lakshmi Heavy Duty Motor</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#6A1B9A] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#6A1B9A] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#6A1B9A] transition-colors">Original Spare Parts Ready</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#6A1B9A] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#6A1B9A] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#6A1B9A] transition-colors">Doorstep On-Site Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-hero-slide-up animation-delay-600 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-3">
              <button
                onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-purple px-7 py-3.5 text-xs sm:text-sm font-bold shadow-xl shadow-purple-900/25 flex items-center justify-center gap-2.5 w-full sm:w-auto transform hover:scale-[1.04] active:scale-95 transition-all duration-300"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="btn-secondary px-7 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md w-full sm:w-auto transform hover:scale-[1.04] active:scale-95 transition-all duration-300 shadow-lg border border-purple-200 text-[#6A1B9A]"
              >
                <span>GET FREE QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D ROTATING CATEGORY CAROUSEL SECTION */}
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
                  transform: `rotateY(calc((360deg / ${carouselItems.length}) * ${idx})) translateZ(var(--translateZ, 350px))`
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

      {/* STATS COUNTER BAR - 3D GLASSMORPHISM */}
      <section className="max-w-container mx-auto px-4">
        <div className="glass-card-purple rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-purple-200/50">
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#6A1B9A]">1000+</div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Satisfied Clients</div>
          </div>
          <div className="space-y-1 pl-4">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#6A1B9A]">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Food Grade 304 SS</div>
          </div>
          <div className="space-y-1 pl-4">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#6A1B9A]">50+</div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Machine Categories</div>
          </div>
          <div className="space-y-1 pl-4">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#6A1B9A]">24/7</div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Technical Service</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - 3D LEVITATING ICON CARDS */}
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
              <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100 shadow-sm hover:shadow-2xl card-3d-hover text-center border-t-4 border-t-[#6A1B9A] group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 text-[#6A1B9A] rounded-2xl flex items-center justify-center mx-auto mb-3 shrink-0 group-hover:bg-[#6A1B9A] group-hover:text-white transition-all duration-300 shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-[#6A1B9A] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS - 3D GLASSMORPHIC CARDS */}
      <section className="bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 py-12 sm:py-16 border-y border-purple-100">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
              FEATURED PRODUCTS
            </h2>
            <div className="section-line-accent">
              <div className="section-line-dot"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white/95 rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl card-3d-hover group flex flex-col justify-between p-4 relative border-t-4 border-t-[#6A1B9A] shine-overlay">
                <div>
                  <div className="w-full aspect-square podium-ss-3d rounded-2xl overflow-hidden pt-7 pb-3 px-3 flex items-center justify-center mb-3.5 relative border border-white">
                    <span className="absolute top-2 left-2 z-20 bg-gradient-to-r from-[#6A1B9A] to-purple-900 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {product.badge || 'Best Seller'}
                    </span>
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain img-3d-pop transition-transform duration-500 drop-shadow-md relative z-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-gray-900 text-sm sm:text-base text-center mb-4 group-hover:text-[#6A1B9A] transition-colors">{product.name}</h3>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(product)}
                  className="btn-purple w-full py-2.5 text-xs font-bold shadow-md shadow-purple-900/15 hover:shadow-purple-900/30 text-center uppercase tracking-wide"
                >
                  GET FREE QUOTE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE */}
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
            <div key={i} className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm aspect-square bg-gray-50 p-1.5 group relative card-3d-hover">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center rounded-xl img-3d-pop transition-transform duration-500" />
              <div className="absolute inset-x-1.5 bottom-1.5 bg-black/70 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold py-1.5 text-center rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
