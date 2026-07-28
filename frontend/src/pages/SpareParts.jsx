import React from 'react';
import { SPARE_PARTS } from '../data/siteData';
import { Settings, ShieldCheck, CheckCircle2, Phone, Search } from 'lucide-react';

export default function SpareParts({ onOpenQuoteModal }) {
  const partsList = [
    { name: "V Belt", category: "Belts", specs: "All Models Available", img: "/images/v belt.png" },
    { name: "Ball Bearing", category: "Bearings", specs: "All Models Available", img: "/images/ball bearing.png" },
    { name: "Cutter Blade", category: "Blades", specs: "All Models Available", img: "/images/cutter blade.png" },
    { name: "Wet Grinder Stone", category: "Stones", specs: "All Models Available", img: "/images/spare part.png" },
    { name: "SS Drum", category: "Drums", specs: "All Models Available", img: "/images/ss drum.png" },
    { name: "Electric Motor", category: "Motors", specs: "1HP | 2HP | 3HP Available", img: "/images/electric motor.png" },
    { name: "ON / OFF Switch", category: "Switches", specs: "All Models Available", img: "/images/on off switch.png" },
    { name: "Gear Set", category: "Gears", specs: "All Models Available", img: "/images/gear set.png" },
    { name: "Coupling", category: "Couplings", specs: "All Models Available", img: "/images/coupling.png" },
    { name: "Carbon Brush", category: "Brushes", specs: "All Models Available", img: "/images/carbon brush.png" },
    { name: "Pulley", category: "Pulleys", specs: "All Models Available", img: "/images/pulley.png" },
    { name: "Oil Seal", category: "Seals", specs: "All Models Available", img: "/images/oil seai.png" }
  ];

  return (
    <div className="pt-20 space-y-12">

      {/* HERO BANNER - Exact Reference Match */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              SPARE PARTS
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              Genuine Spare Parts for Long Lasting Performance
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ 100% Genuine Parts</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Best Quality Assurance</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Perfect Fit & Durable</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Affordable Prices</div>
            </div>

            <div className="text-xs text-purple-200 pt-2">
              Home &gt; Spare Parts
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-card p-3 border border-white/20">
              <img src="/images/spare parts stock.png" alt="Spare Parts Range" className="w-full h-64 object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SPARE PARTS CATALOG GRID - Exact Reference Design */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Category Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#6A1B9A] text-white px-5 py-3.5 font-heading font-bold text-sm uppercase">
                SPARE PARTS CATEGORIES
              </div>
              <div className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
                {['All Spare Parts', 'Belts', 'Bearings', 'Blades', 'Stones', 'Drum Parts', 'Motors', 'Switches', 'Gear Parts', 'Couplings', 'Pulleys'].map((cat, idx) => (
                  <div key={idx} className="px-5 py-3 hover:bg-purple-50 cursor-pointer flex justify-between">
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Spare Parts Cards Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partsList.map((part, idx) => (
                <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all p-4 flex flex-col justify-between group text-center">
                  <div>
                    <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden p-4 flex items-center justify-center mb-3">
                      <img src={part.img} alt={part.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">{part.name}</h3>
                    <p className="text-[11px] text-gray-500 mb-4">{part.specs}</p>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal({ name: part.name })}
                    className="btn-purple w-full py-2 text-xs font-bold uppercase"
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
