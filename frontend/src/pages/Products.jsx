import React, { useState } from 'react';
import { PRODUCTS } from '../data/siteData';
import { Search, SlidersHorizontal, ChevronRight, Phone, MessageSquare, Download } from 'lucide-react';

export default function Products({ setCurrentPage, onOpenQuoteModal, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [capacityFilter, setCapacityFilter] = useState('All');

  const categories = [
    { name: 'All Products', count: 35 },
    { name: 'Wet Grinders', count: 7 },
    { name: 'Dough Kneaders', count: 4 },
    { name: 'Vegetable Cutters', count: 3 },
    { name: 'Pulverizers', count: 3 },
    { name: 'Coconut Scrapers', count: 2 },
    { name: 'Mixer Machines', count: 2 },
    { name: 'Coconut Milk Extractors', count: 2 },
    { name: 'Spare Parts', count: 6 }
  ];

  const productsList = [
    { name: "Instant Wet Grinder", category: "Wet Grinders", specs: "10L | 20L | 30L", badge: "Best Seller", img: "/images/instant wet grinder.png" },
    { name: "Tilting Wet Grinder", category: "Tilting Wet Grinders", specs: "15L | 25L | 35L", badge: "Popular", img: "/images/titting wet grinder.png" },
    { name: "Dough Kneader", category: "Dough Kneaders", specs: "5kg | 10kg | 25kg", badge: "New Arrival", img: "/images/dough kneader.png" },
    { name: "Vegetable Cutting Machine", category: "Vegetable Cutters", specs: "All Models Available", badge: "", img: "/images/vegetable cutting machine.png" },
    { name: "Coconut Scraper", category: "Coconut Scrapers", specs: "Domestic | Commercial", badge: "", img: "/images/coconut scraper.png" },
    { name: "Pulverizer Machine", category: "Pulverizers", specs: "1HP | 2HP | 3HP", badge: "", img: "/images/pulverizer machine.png" },
    { name: "Mixer Machine", category: "Mixer Machines", specs: "10L | 20L | 30L", badge: "", img: "/images/mixer machine.png" },
    { name: "Coconut Milk Extractor", category: "Extractors", specs: "5L | 10L | 15L", badge: "", img: "/images/coconut milk extractor.png" },
    { name: "Idli Dosa Batter Mixer", category: "Mixers", specs: "10L | 20L | 30L", badge: "", img: "/images/idly dose batter mixer.png" },
    { name: "Masala Grinder", category: "Grinders", specs: "2HP | 3HP | 5HP", badge: "", img: "/images/masala grinder.png" },
    { name: "Juice Machine", category: "Juicers", specs: "Sugarcane / Fruits", badge: "", img: "/images/juice mechine.png" },
    { name: "Spare Parts", category: "Parts", specs: "All Types Available", badge: "", img: "/images/spare part.png" }
  ];

  return (
    <div className="pt-20 space-y-12">

      {/* PRODUCTS HERO BANNER - Exact Reference Match */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              OUR PRODUCTS
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              High Quality Commercial Kitchen Equipment for All Your Business Needs
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Premium Quality</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Best Performance</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Long Lasting</div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full text-center">✔ Easy Maintenance</div>
            </div>

            <div className="text-xs text-purple-200 pt-2">
              Home &gt; Products
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-card p-3 border border-white/20">
              <img src="/images/instant wet grinder.png" alt="Products Range" className="w-full h-64 object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CATALOG LAYOUT - Sidebar Filters + Product Cards Grid */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Filter Column */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Product Categories Box */}
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#6A1B9A] text-white px-5 py-3.5 font-heading font-bold text-sm uppercase">
                PRODUCT CATEGORIES
              </div>
              <div className="divide-y divide-gray-100">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-5 py-3 text-xs font-semibold transition-colors ${
                      selectedCategory === cat.name ? 'bg-purple-50 text-[#6A1B9A] font-bold border-l-4 border-[#6A1B9A]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-gray-400 text-[11px]">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter By Capacity */}
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm p-5 space-y-3">
              <h3 className="font-heading font-bold text-xs uppercase text-gray-900 pb-2 border-b border-gray-100">
                FILTER BY CAPACITY
              </h3>
              <div className="space-y-2 text-xs text-gray-700">
                {['5 Liter & Below', '5L - 10L', '10L - 20L', '20L - 50L', 'Above 50L'].map((cap, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-[#6A1B9A]">
                    <input type="checkbox" className="accent-[#6A1B9A]" />
                    <span>{cap}</span>
                  </label>
                ))}
              </div>
              <button className="btn-purple w-full py-2 text-xs uppercase font-bold mt-2">APPLY FILTER</button>
            </div>

            {/* Need Help Box */}
            <div className="bg-[#1A0B2E] text-white rounded-card p-6 text-center space-y-3 shadow-lg">
              <h4 className="font-heading font-bold text-sm">NEED HELP?</h4>
              <p className="text-xs text-purple-200">Call us for expert guidance</p>
              <a href="tel:+918675767640" className="btn-purple w-full py-2.5 text-xs font-bold block">+91 86757 67640</a>
              <a href="https://wa.me/918675767640" target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 text-xs rounded-full block">WHATSAPP US</a>
            </div>

          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9 space-y-6">
            
            <div className="flex items-center justify-between text-xs text-gray-600 bg-white p-4 rounded-card border border-gray-200">
              <span>Showing 1-12 of 35 products</span>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-2.5 py-1 text-xs outline-none bg-white font-semibold">
                  <option>Latest</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsList.map((item, idx) => (
                <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all p-4 flex flex-col justify-between group">
                  <div>
                    <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden p-4 flex items-center justify-center mb-3 relative">
                      {item.badge && (
                        <span className="absolute top-2 left-2 bg-[#6A1B9A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                    </div>

                    <h3 className="font-heading font-bold text-gray-900 text-sm text-center mb-1">{item.name}</h3>
                    <p className="text-[11px] text-gray-500 text-center mb-4">{item.specs}</p>
                  </div>

                  <div className="space-y-2">
                    <button onClick={() => onOpenQuoteModal({ name: item.name })} className="w-full py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-colors">
                      VIEW DETAILS
                    </button>
                    <button onClick={() => onOpenQuoteModal({ name: item.name })} className="btn-purple w-full py-2 text-xs font-bold">
                      GET QUOTE
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
