import React from 'react';
import { Award, ShieldCheck, Factory, Users, Target, Eye, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export default function About({ setCurrentPage, onOpenQuoteModal }) {
  return (
    <div className="space-y-10 sm:space-y-16">

      {/* ABOUT HERO BANNER - STUNNING ANIMATED OVERLAY */}
      <section className="relative text-white py-14 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/about bg.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-purple-950/75 to-black/75 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Animated Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
              </span>
              <span>ABOUT SHAHANA KITCHEN</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              SHAHANA <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">KITCHEN EQUIPMENT</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-xl font-semibold max-w-2xl drop-shadow-md leading-relaxed">
              Your Trusted Partner in Commercial Kitchen Equipment & Food Processing Machinery
            </p>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-400 flex items-center gap-2 pt-2 text-[11px] sm:text-xs font-medium text-purple-200 drop-shadow">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-bold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE - Matching Reference Design */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-[#6A1B9A] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
              WHO WE ARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 leading-tight">
              Leading Supplier of Commercial Kitchen Equipment
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Shahana Kitchen Equipment is a trusted name in the field of commercial kitchen equipment. Established with a vision to provide high quality products and reliable services, we have been serving Hotels, Restaurants, Caterers, Bakeries, Hospitals, Hostels and various industries across Tamil Nadu.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We offer a wide range of premium quality kitchen equipment with the perfect combination of performance, durability and affordable pricing. Our experienced team is dedicated to customer satisfaction through superior products, timely delivery and excellent after-sales support.
            </p>

            <button
              onClick={onOpenQuoteModal}
              className="btn-purple px-6 sm:px-7 py-3 text-xs font-bold uppercase tracking-wider w-full sm:w-auto"
            >
              KNOW MORE ABOUT US
            </button>
          </div>

          {/* Stats Cards Right Side */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] block">10+</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-semibold leading-tight block mt-1">Years of Experience</span>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] block">1000+</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-semibold leading-tight block mt-1">Happy Customers</span>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] block">1000+</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-semibold leading-tight block mt-1">Products Delivered</span>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] block">24/7</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-semibold leading-tight block mt-1">After Sales Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORKSHOP & INFRASTRUCTURE - Matching Reference Section */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            OUR WORKSHOP & INFRASTRUCTURE
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: "Premium Quality Machines", img: "/images/ChatGPT Image Jul 27, 2026, 03_00_07 PM.webp" },
            { title: "Expert Technicians", img: "/images/our team.webp" },
            { title: "Well Equipped Workshop", img: "/images/our workshop.webp" },
            { title: "Genuine Spare Parts Stock", img: "/images/spare parts stock.webp" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
              <div className="w-full h-52 sm:h-56 md:h-60 bg-gray-50 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-3.5 sm:p-4 bg-[#6A1B9A] text-white text-center font-heading font-bold text-xs sm:text-sm">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
