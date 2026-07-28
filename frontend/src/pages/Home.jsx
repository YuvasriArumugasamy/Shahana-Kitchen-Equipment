import React, { useState } from 'react';
import { PRODUCTS, REVIEWS } from '../data/siteData';
import { 
  ShieldCheck, Wrench, Award, Truck, Clock, Phone, 
  ArrowRight, CheckCircle2, Star, Zap, ChevronRight, Settings, Sparkles, Building2
} from 'lucide-react';

export default function Home({ setCurrentPage, onOpenQuoteModal, onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Wet Grinders', 'Pulverizers', 'Dough Kneaders', 'Vegetable Cutters'];

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.includes(p.category));

  return (
    <div className="pt-20 space-y-20">

      {/* HERO SECTION - Matching Reference Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-gray-50 py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200 text-[#6A1B9A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#6A1B9A]" />
              <span>Commercial Kitchen Equipment Manufacturer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              COMMERCIAL KITCHEN <br/>
              <span className="text-[#6A1B9A]">EQUIPMENT</span>
            </h1>

            <p className="text-[#6A1B9A] text-xl font-bold tracking-wide uppercase">
              SALES | SERVICE | SPARE PARTS
            </p>

            <p className="text-gray-600 text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              We provide high quality commercial kitchen equipment with best service and support for hotels, restaurants, cloud kitchens, marriage halls, hospitals, and industrial caterers across Tamil Nadu.
            </p>

            {/* Value Checkmark Bullets */}
            <div className="space-y-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6A1B9A] fill-purple-100" />
                <span>Premium Quality Machines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6A1B9A] fill-purple-100" />
                <span>Installation & Demonstration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6A1B9A] fill-purple-100" />
                <span>Spare Parts Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6A1B9A] fill-purple-100" />
                <span>After Sales Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6A1B9A] fill-purple-100" />
                <span>GST Billing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-purple px-8 py-3.5 text-sm shadow-xl flex items-center gap-2"
              >
                <span>VIEW PRODUCTS</span>
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="btn-secondary px-8 py-3.5 text-sm flex items-center gap-2"
              >
                <span>REQUEST QUOTE</span>
              </button>
            </div>
          </div>

          {/* Right Column Reference Studio Montage Image */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-card p-4 shadow-2xl border border-gray-200 overflow-hidden group">
              <img 
                src="/images/instant wet grinder.png" 
                alt="Shahana Commercial Kitchen Machinery Range"
                className="w-full h-[420px] object-contain group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT CATEGORIES GRID - Matching Reference Layout */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
            PRODUCT CATEGORIES
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {[
            { name: "Coconut Scraper", img: "/images/coconut scraper.png" },
            { name: "Wet Grinder", img: "/images/instant wet grinder.png" },
            { name: "Dough Kneader", img: "/images/dough kneader.png" },
            { name: "Vegetable Cutter", img: "/images/vegetable cutting machine.png" },
            { name: "Pulverizer", img: "/images/pulverizer machine.png" },
            { name: "Mixer Machine", img: "/images/mixer machine.png" },
            { name: "Coconut Milk Extractor", img: "/images/coconut milk extractor.png" },
            { name: "Spare Parts", img: "/images/spare part.png" }
          ].map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white p-4 rounded-card border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
            >
              <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3 p-2 flex items-center justify-center">
                <img src={cat.img} alt={cat.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-xs">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US - Matching Reference Grid */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
            WHY CHOOSE US
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
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
              <div key={idx} className="bg-white rounded-card p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 bg-purple-50 text-[#6A1B9A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS CAROUSEL - Matching Reference Design */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between p-4">
                <div>
                  <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden p-4 flex items-center justify-center mb-4">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-base text-center mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 text-center mb-4">{product.capacity}</p>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(product)}
                  className="btn-purple w-full py-2.5 text-xs font-semibold text-center"
                >
                  GET QUOTE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE FROM REFERENCE */}
      <section className="max-w-container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
            GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["/images/gallery.png", "/images/gallery1.png", "/images/gallery2.png", "/images/gallery3.png", "/images/our workshop.png"].map((img, i) => (
            <div key={i} className="rounded-card overflow-hidden border border-gray-200 shadow-sm aspect-square bg-gray-50 p-2">
              <img src={img} alt="Workshop Gallery" className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
