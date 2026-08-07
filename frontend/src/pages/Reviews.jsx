import React from 'react';
import { REVIEWS } from '../data/siteData';
import { Star, CheckCircle2, Building2, MapPin, ChevronRight } from 'lucide-react';

export default function Reviews({ onOpenQuoteModal }) {
  const testimonials = [
    { name: "Ramesh Kumar", role: "Restaurant Owner", city: "Chennai", text: "Excellent quality kitchen equipment and top-notch service! Their team was professional and helped us set up our kitchen perfectly." },
    { name: "Priya Nair", role: "Bakery Owner", city: "Madurai", text: "We purchased bakery equipment from Shahana Kitchen Equipment. The quality is outstanding and the after-sales support is great." },
    { name: "Vikram Singh", role: "Hotel Manager", city: "Coimbatore", text: "Reliable products, timely delivery and very professional installation. Highly recommended for commercial kitchen needs." },
    { name: "Arun Prakash", role: "Catering Service", city: "Tirunelveli", text: "Their team understood our requirements and provided the best solutions within our budget. Truly satisfied with their service." },
    { name: "Suresh Babu", role: "Institution Manager", city: "Trichy", text: "Good range of products and genuine spare parts available. Their staff is very knowledgeable and helpful." },
    { name: "Meena Lakshmi", role: "Hostel Warden", city: "Tiruchendur", text: "We have been using their service for years. Consistent quality and excellent customer support makes them our trusted partner." },
    { name: "Kannan V", role: "Marriage Hall Caterer", city: "Salem", text: "We bought 35L Tilting Wet Grinder and Vegetable Cutter for our marriage hall kitchen. Extremely heavy-duty performance and saves us so much labor time during mega events!" },
    { name: "Deepa Sundaram", role: "Cloud Kitchen Owner", city: "Coimbatore", text: "Shahana Kitchen Equipment delivered our custom stainless steel equipment on time. The food grade finish and motor power are top-notch." },
    { name: "Murugan Swamy", role: "Industrial Canteen Incharge", city: "Hosur", text: "Serving 1200 workers daily needs robust machines. Shahana's dough kneader and pulverizer have been running smoothly for 4 years with zero breakdown." },
    { name: "Karthik Subramanian", role: "Sweet Shop Owner", city: "Tirunelveli", text: "Their coconut milk extractor and instant wet grinders give maximum yield with minimum waste. Genuine manufacturer pricing and friendly engineers!" },
    { name: "Sangeetha Raj", role: "Hospital Kitchen Supervisor", city: "Trichy", text: "Hygienic 304 food-grade stainless steel machinery is mandatory for hospital food preparation. Shahana's machines passed all safety standards effortlessly." },
    { name: "Venkatesh Prasad", role: "Fast Food Chain Owner", city: "Chennai", text: "Outstanding post-sales support and AMC response! Whenever we need spare parts or maintenance, their technician arrives doorstep within hours." }
  ];

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">

      {/* HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative text-white py-14 sm:py-20 overflow-hidden min-h-[60vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_video_pa.mp4"
          autoPlay
          muted
          loop
          playsInline
        / preload="metadata">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/75 to-black/85 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10 w-full">
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
              </span>
              <span>VERIFIED CLIENT TESTIMONIALS</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              HAPPY <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">CUSTOMERS</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-xl font-semibold max-w-2xl drop-shadow-md leading-relaxed">
              We value our clients and their trust. Here is what restaurant owners, hotel managers, and caterers say about us across Tamil Nadu.
            </p>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-400 flex items-center gap-2 pt-1 text-[11px] sm:text-xs font-medium text-purple-200 drop-shadow">
              <span>Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-bold">Customer Reviews</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/20 text-center space-y-2 max-w-xs mx-auto lg:max-w-none">
              <span className="text-4xl sm:text-5xl font-heading font-black text-white block">4.9</span>
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400" />)}
              </div>
              <p className="text-xs text-purple-200">Based on 250+ Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 sm:space-y-4 relative border-t-4 border-t-[#6A1B9A] group">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1">
                  ✓ Verified Client
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">"{item.text}"</p>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#6A1B9A] to-purple-900 text-white rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 shadow-md">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm group-hover:text-[#6A1B9A] transition-colors">{item.name}</h4>
                  <p className="text-[10px] sm:text-[11px] font-medium text-gray-500">{item.role} • {item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
