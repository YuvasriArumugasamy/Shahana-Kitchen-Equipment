import React from 'react';
import { Building2, Utensils, Hotel, Hospital, GraduationCap, Flame, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

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
    <div className="pt-20 space-y-12">

      {/* HERO BANNER - Exact Reference Match */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              INDUSTRIES WE SERVE
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              Our high quality commercial kitchen equipment is trusted by businesses across a wide range of industries.
            </p>

            <div className="text-xs text-purple-200 pt-2">
              Home &gt; Industries We Serve
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-card p-3 border border-white/20">
              <img src="/images/caterin unit installation.png" alt="Industries We Serve" className="w-full h-56 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
            INDUSTRIES WE SERVE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesList.map((ind, idx) => (
            <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-full h-44 bg-gray-50 overflow-hidden relative">
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 text-center space-y-2">
                <h3 className="font-heading font-extrabold text-gray-900 text-base">{ind.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
