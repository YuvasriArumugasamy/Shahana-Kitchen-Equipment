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
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Breadcrumb & Navigation Back */}
      <div className="max-w-container mx-auto px-4">
        <button
          onClick={() => { setCurrentPage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#6A1B9A] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </button>
      </div>

      {/* PRODUCT OVERVIEW SECTION */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-lg aspect-4/3 relative">
              <img 
                src={selectedImage} 
                alt={currentProduct.name}
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-4 left-4 bg-[#6A1B9A] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
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
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-[#6A1B9A] shadow-md scale-105' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Quotation CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[#6A1B9A] text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                {currentProduct.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 mt-2">
                {currentProduct.name}
              </h1>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span>{currentProduct.rating} Rating</span>
                </div>
                <span>•</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> In Factory Stock & Ready for Dispatch
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Features Bullet List */}
            <div className="bg-purple-50/70 p-6 rounded-card border border-purple-100 space-y-3">
              <h3 className="font-heading font-bold text-gray-900 text-sm">Key Machinery Features:</h3>
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
            <div className="p-6 bg-white rounded-card border border-gray-200 shadow-md space-y-4">
              <div>
                <span className="text-xs text-gray-500 block">Indicative B2B Factory Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-extrabold text-[#6A1B9A]">{currentProduct.price}</span>
                  <span className="text-xs text-gray-500">+ GST & Delivery (Wholesale Discounts Available)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onOpenQuoteModal(currentProduct)}
                  className="btn-purple py-3.5 text-sm font-bold shadow-lg"
                >
                  Request Official Price Quote
                </button>
                <a
                  href={`https://wa.me/918675767640?text=Hi,%20I%20want%20a%20quotation%20for%20${encodeURIComponent(currentProduct.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary py-3 text-sm font-bold flex items-center justify-center gap-2"
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
        <div className="bg-white rounded-card p-8 border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 border-b border-gray-200 pb-4">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-bold text-gray-800 w-1/3 border-b border-gray-100">{spec.label}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100">{spec.value}</td>
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
