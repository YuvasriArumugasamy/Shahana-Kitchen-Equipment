import React from 'react';
import { Wrench, ShieldCheck, FileCheck, Compass, Truck, RefreshCw, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuoteModal }) {
  const servicesList = [
    {
      title: "Commercial Machine Installation",
      icon: Wrench,
      desc: "Precision floor leveling, 3-phase high torque power wiring connection, water inlet setup, and full operational demo by senior engineers."
    },
    {
      title: "Preventive Maintenance & Repair",
      icon: ShieldCheck,
      desc: "Scheduled inspection, motor insulation checks, stone dressing, oil seal changes, and instant breakdown repairs for zero kitchen downtime."
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      icon: FileCheck,
      desc: "Comprehensive annual maintenance packages tailored for hotels, marriage halls, and hospitals ensuring 365 days of smooth machinery performance."
    },
    {
      title: "Kitchen Setup Consultation",
      icon: Compass,
      desc: "Expert layout planning for commercial kitchens, choosing correct motor power, space optimization, and safety compliance guidance."
    },
    {
      title: "On-Site Service & Emergency Repair",
      icon: Truck,
      desc: "Mobile service units equipped with skilled technicians and spare parts ready to dispatch to hotel sites across Tamil Nadu."
    },
    {
      title: "Machine Relocation & Upgrades",
      icon: RefreshCw,
      desc: "Dismantling, safe transport packaging, and re-installation services when expanding or shifting your restaurant location."
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-12">

      {/* SERVICES HERO - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative text-white py-14 sm:py-20 overflow-hidden min-h-[60vh] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an (1).mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/75 to-black/90 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 text-center max-w-3xl space-y-4 sm:space-y-5 relative z-10">
          
          {/* Animated Glowing Badge */}
          <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
            </span>
            <span>PROFESSIONAL B2B SUPPORT & AMC</span>
          </div>

          {/* Animated Title */}
          <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
            COMMERCIAL KITCHEN <br className="hidden sm:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">EQUIPMENT SERVICES</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Complete commercial kitchen solutions including expert installation, preventive maintenance, instant emergency repair, and AMC contracts across South India.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl section-title-styled block">
            WHAT WE PROVIDE
          </h2>
          <div className="section-line-accent">
            <div className="section-line-dot"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesList.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div key={idx} className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 sm:space-y-4 group relative border-t-4 border-t-[#6A1B9A]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-purple-50 text-[#6A1B9A] rounded-2xl flex items-center justify-center group-hover:from-[#6A1B9A] group-hover:to-purple-900 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-gray-900 text-base sm:text-lg group-hover:text-[#6A1B9A] transition-colors">{srv.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{srv.desc}</p>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#6A1B9A] hover:text-purple-900 pt-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Service Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#6A1B9A]" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICE TIMELINE */}
      <section className="bg-gray-100 py-12 sm:py-16 border-y border-gray-200">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 sm:mb-12">Our 5-Step Service Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {['Service Request', 'Site Inspection', 'Quotation', 'Repair / Installation', 'Customer Handover'].map((step, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
                <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm mx-auto mb-2.5">
                  {i + 1}
                </span>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
