import React from 'react';
import { Building2, Utensils, Hotel, GraduationCap, Flame, ArrowRight, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';

export default function Industries({ setCurrentPage, onOpenQuoteModal }) {
  const industriesList = [
    { title: "HOTELS", desc: "Reliable and efficient equipment for hotel kitchens of all sizes.", img: "/images/institution installation.png" },
    { title: "RESTAURANTS", desc: "High performance kitchen machines to ensure smooth operations.", img: "/images/bakery installation.png" },
    { title: "CATERING SERVICES", desc: "Bulk cooking made easy with our durable equipment.", img: "/images/caterin unit installation.png" },
    { title: "BAKERIES", desc: "Advanced machines for baking, mixing, and food processing.", img: "/images/bakery installation.png" },
    { title: "HOSPITALS", desc: "Hygienic and safe equipment for hospital kitchens.", img: "/images/institution installation.png" },
    { title: "COLLEGES & INSTITUTIONS", desc: "Perfect solutions for canteens and large scale food preparation.", img: "/images/institution installation.png" },
    { title: "HOSTELS", desc: "Cost effective and reliable equipment for hostel mess.", img: "/images/hostel installation.png" },
    { title: "CLOUD KITCHENS", desc: "Compact, efficient and modern solutions for cloud kitchens.", img: "/images/hostel installation.png" }
  ];

  return (
    <div className="space-y-8 sm:space-y-12">

      {/* HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative text-white py-14 sm:py-20 overflow-hidden min-h-[60vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an.mp4"
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
              <span>COMMERCIAL SECTORS & DOMAINS</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              INDUSTRIES <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">WE SERVE</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-xl font-semibold max-w-2xl drop-shadow-md leading-relaxed">
              Our heavy-duty commercial kitchen machinery is trusted by commercial kitchens, institutions, and food processors across Tamil Nadu.
            </p>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-400 flex items-center gap-2 pt-1 text-[11px] sm:text-xs font-medium text-purple-200 drop-shadow">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-bold">Industries We Serve</span>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            INDUSTRIES WE SERVE
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industriesList.map((ind, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group border-t-4 border-t-[#6A1B9A]">
              <div className="w-full h-40 sm:h-48 bg-gray-50 overflow-hidden relative">
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-3 left-3 bg-white/95 text-[#6A1B9A] text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs uppercase tracking-wider">
                  Industrial Grade
                </span>
              </div>
              <div className="p-4 sm:p-6 text-center space-y-2">
                <h3 className="font-heading font-extrabold text-gray-900 text-base group-hover:text-[#6A1B9A] transition-colors">{ind.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
