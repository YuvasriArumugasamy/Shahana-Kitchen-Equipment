import React, { useState } from 'react';
import { PRODUCTS } from '../data/siteData';
import { ShieldCheck, CheckCircle2, Phone, Mail, ArrowLeft, Download, Star, MessageSquare } from 'lucide-react';

export default function ProductDetail({ product, setCurrentPage, onOpenQuoteModal }) {
  const currentProduct = product || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(currentProduct.image);

  const specifications = [
    { label: 'Material Grade', value: currentProduct.material },
    { label: 'Available Capacities', value: currentProduct.capacity },
    { label: 'Motor Power Rating', value: currentProduct.motor },
    { label: 'Operating Voltage', value: currentProduct.voltage },
    { label: 'Warranty Period', value: '1 Year On-Site Comprehensive' },
    { label: 'Usage Application', value: (currentProduct.applications || []).join(', ') },
    { label: 'Manufacturer', value: 'Shahana Kitchen Equipment' },
    { label: 'Country of Origin', value: 'India (Tamil Nadu)' }
  ];

  return (
    <div className="pb-16 space-y-10 sm:space-y-16">
      
      {/* PRODUCT DETAIL HERO BANNER */}
      <section className="relative bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-10 sm:py-14 overflow-hidden">
        <div className="max-w-container mx-auto px-4 space-y-3 relative z-10">
          <button
            onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 text-xs font-bold bg-white/10 hover:bg-white/20 border border-purple-300/30 px-3.5 py-1.5 rounded-full text-purple-100 transition-all duration-300 transform hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 text-purple-200" />
            <span>Back to Product Catalog</span>
          </button>

          <h1 className="animate-hero-slide-up animation-delay-200 text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight drop-shadow-md">
            {currentProduct.name}
          </h1>

          <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-xs sm:text-sm font-semibold max-w-xl">
            Heavy-duty commercial grade food processing equipment built with 304 food-grade stainless steel.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW SECTION */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-[4/3] relative">
              <img 
                src={selectedImage} 
                alt={currentProduct.name}
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#6A1B9A] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow">
                304 Stainless Steel
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                currentProduct.image,
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
              ].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-[#6A1B9A] shadow-md scale-105' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Quotation CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              <span className="text-[#6A1B9A] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                {currentProduct.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-gray-900 mt-2">
                {currentProduct.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-3 text-xs text-gray-600">
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span>{currentProduct.rating} Rating</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> In Factory Stock & Ready for Dispatch
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Features Bullet List */}
            <div className="bg-purple-50/70 p-4 sm:p-6 rounded-2xl border border-purple-100 space-y-3">
              <h3 className="font-heading font-bold text-gray-900 text-xs sm:text-sm">Key Machinery Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {(currentProduct.features || []).map((feat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6A1B9A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-md space-y-4">
              <div>
                <span className="text-xs text-gray-500 block">Indicative B2B Factory Price</span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A]">{currentProduct.price}</span>
                  <span className="text-[11px] sm:text-xs text-gray-500">+ GST & Delivery (Wholesale Discounts Available)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onOpenQuoteModal(currentProduct)}
                  className="btn-purple py-3 text-xs sm:text-sm font-bold shadow-lg w-full text-center"
                >
                  Request Official Price Quote
                </button>
                <a
                  href={`https://wa.me/919994944123?text=Hi,%20I%20want%20a%20quotation%20for%20${encodeURIComponent(currentProduct.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 w-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="max-w-container mx-auto px-4">
        <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 border-b border-gray-200 pb-4">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-gray-100">
                {specifications.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-gray-700 w-1/3 min-w-[140px]">{spec.label}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
