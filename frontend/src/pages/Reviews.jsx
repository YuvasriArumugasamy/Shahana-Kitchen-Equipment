import React from 'react';
import { REVIEWS } from '../data/siteData';
import { Star, CheckCircle2, Building2, MapPin } from 'lucide-react';

export default function Reviews({ onOpenQuoteModal }) {
  const testimonials = [
    { name: "Ramesh Kumar", role: "Restaurant Owner", city: "Chennai", text: "Excellent quality kitchen equipment and top-notch service! Their team was professional and helped us set up our kitchen perfectly." },
    { name: "Priya Nair", role: "Bakery Owner", city: "Madurai", text: "We purchased bakery equipment from Shahana Kitchen Equipment. The quality is outstanding and the after-sales support is great." },
    { name: "Vikram Singh", role: "Hotel Manager", city: "Coimbatore", text: "Reliable products, timely delivery and very professional installation. Highly recommended for commercial kitchen needs." },
    { name: "Arun Prakash", role: "Catering Service", city: "Tirunelveli", text: "Their team understood our requirements and provided the best solutions within our budget. Truly satisfied with their service." },
    { name: "Suresh Babu", role: "Institution Manager", city: "Trichy", text: "Good range of products and genuine spare parts available. Their staff is very knowledgeable and helpful." },
    { name: "Meena Lakshmi", role: "Hostel Warden", city: "Tiruchendur", text: "We have been using their service for years. Consistent quality and excellent customer support makes them our trusted partner." }
  ];

  return (
    <div className="pt-20 space-y-12">

      {/* HERO BANNER - Exact Reference Match */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              CUSTOMER REVIEWS
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              We value our customers and their feedback. Here is what our happy customers have to say.
            </p>

            <div className="text-xs text-purple-200 pt-2">
              Home &gt; Customer Reviews
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-card p-4 border border-white/20 text-center space-y-2">
              <span className="text-5xl font-heading font-black text-white block">4.9</span>
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400" />)}
              </div>
              <p className="text-xs text-purple-200">Based on 250+ Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <p className="text-gray-700 text-xs leading-relaxed italic">"{item.text}"</p>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 text-[#6A1B9A] rounded-full flex items-center justify-center font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-xs">{item.name}</h4>
                  <p className="text-[11px] text-gray-500">{item.role} • {item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
