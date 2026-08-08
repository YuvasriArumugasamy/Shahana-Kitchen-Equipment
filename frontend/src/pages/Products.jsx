import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, ChevronRight, Phone, MessageSquare, Download } from 'lucide-react';
import { productAssets } from '../assets/clientAssets';
import { fetchCloudProducts } from '../services/cloudProducts';

export default function Products({ setCurrentPage, onOpenQuoteModal, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [capacityFilter, setCapacityFilter] = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [productsList, setProductsList] = useState(() => {
    const defaultList = [
      { name: "Vegetable Cutting Machine", category: "Vegetable Cutters", specs: "0.5 HP Lakshmi Copper Motor", badge: "Best Seller", img: productAssets.vegetableCutter },
      { name: "Instant Wet Grinder", category: "Wet Grinders", specs: "25kg - 100kg/hr Instant Grinding", badge: "Studio HD", img: productAssets.instantWetGrinder },
      { name: "Commercial Wet Grinder", category: "Wet Grinders", specs: "3L to 25L Available", badge: "Popular", img: productAssets.wetGrinder },
      { name: "Ordinary Grinder", category: "Wet Grinders", specs: "5L to 25L Available", badge: "Popular", img: productAssets.ordinaryGrinder },
      { name: "Tilting Wet Grinder", category: "Tilting Wet Grinders", specs: "15L | 25L | 35L", badge: "", img: productAssets.tiltingWetGrinder },
      { name: "Atta Kneader Machine", category: "Dough Kneaders", specs: "10kg to 50kg Lakshmi Motor", badge: "Top Rated", img: productAssets.attaKneader },
      { name: "Coconut Crab", category: "Coconut Scrapers", specs: "0.5 HP Lakshmi Motor", badge: "Best Seller", img: productAssets.coconutScraper },
      { name: "Double Head Coconut Scraper", category: "Coconut Scrapers", specs: "1 HP Heavy Duty Dual Funnel", badge: "Heavy Duty", img: productAssets.doubleCoconutScraper },
      { name: "U Drum Mixer", category: "Mixer Machines", specs: "50L SS Mat Finishing", badge: "304 SS Food Grade", img: productAssets.uDrumMixer },
      { name: "Table Top Wet Grinder", category: "Wet Grinders", specs: "Compact 2L - 5L", badge: "", img: productAssets.tableTopWetGrinder },
      { name: "Tilting Wet Grinder Machine", category: "Wet Grinders", specs: "Full SS Heavy Duty", badge: "304 SS Food Grade", img: productAssets.tiltingWetGrinder },
      { name: "Commercial Oil Dryer", category: "Processing Machines", specs: "Centrifugal 15kg/Batch", badge: "", img: productAssets.oilDryer },
      { name: "Gravy Machine", category: "Pulverizers", specs: "2 HP | 3 HP | 5 HP", badge: "304 SS Food Grade", img: productAssets.gravyMachine },
      { name: "Commercial Popcorn Machine", category: "Snack Machines", specs: "Electric 8 oz Kettle", badge: "Popular", img: productAssets.popcornMachine },
      { name: "Commercial Potato Peeler", category: "Vegetable Cutters", specs: "5kg - 15kg/Batch", badge: "Heavy Duty", img: productAssets.potatoPeeler },
      { name: "Rice & Grain Washer", category: "Processing Machines", specs: "SS High Flow Drainer", badge: "New", img: productAssets.riceWasher },
      { name: "Banana Chips Slicer", category: "Vegetable Cutters", specs: "High Capacity Motorized", badge: "Specialized", img: productAssets.bananaSlicer },
      { name: "Commercial Meat Mincing Machine", category: "Processing Machines", specs: "1.5 HP SS Gear Drive", badge: "Commercial", img: productAssets.meatMincer },
      { name: "Heavy Duty Flour Mill", category: "Pulverizers", specs: "3 HP - 7.5 HP Blower", badge: "High Capacity", img: productAssets.flourMill },
      { name: "Commercial Coconut Scraper", category: "Coconut Scrapers", specs: "Multi Station SS", badge: "304 SS Food Grade", img: productAssets.coconutMilkExtractor },
      { name: "Spare Parts", category: "Parts", specs: "All Types Available", badge: "", img: "/images/spare part.webp" }
    ];
    try {
      const saved = localStorage.getItem('shahana_admin_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const activeOnly = parsed.filter(p => p.status !== 'Inactive');
          return activeOnly.length > 0 ? activeOnly : parsed;
        }
      }
    } catch (e) { console.error(e); }
    return defaultList;
  });

  // Real-time Cloud Sync for Products across ALL devices globally
  useEffect(() => {
    const syncProducts = async () => {
      try {
        const cloudProds = await fetchCloudProducts();
        if (cloudProds && Array.isArray(cloudProds) && cloudProds.length > 0) {
          const activeOnly = cloudProds.filter(p => p.status !== 'Inactive');
          setProductsList(activeOnly.length > 0 ? activeOnly : cloudProds);
        }
      } catch (e) { console.warn(e); }
    };

    syncProducts();

    const handleUpdate = () => syncProducts();
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('shahana_products_updated', handleUpdate);

    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('shahana_products_updated', handleUpdate);
    };
  }, []);

  const categoryMap = {
    'Wet Grinders': ['Wet Grinders', 'Tilting Wet Grinders'],
    'Dough Kneaders': ['Dough Kneaders'],
    'Vegetable Cutters': ['Vegetable Cutters'],
    'Pulverizers': ['Pulverizers', 'Gravy Machines', 'Extractors'],
    'Gravy Machines': ['Pulverizers', 'Gravy Machines', 'Extractors'],
    'Processing Machines': ['Processing Machines', 'Snack Machines'],
    'Coconut Scrapers': ['Coconut Scrapers'],
    'Mixer Machines': ['Mixer Machines', 'Mixers'],
    'Spare Parts': ['Spare Parts', 'Parts']
  };

  const getCapacities = (specs) => {
    const matches = [...specs.matchAll(/(\d+(?:\.\d+)?)(?=\s*(l|kg))/gi)];
    return matches.map((match) => Number(match[1]));
  };

  const matchesCategory = (item, category) => {
    if (category === 'All Products') return true;
    const allowed = categoryMap[category] || [];
    return allowed.some((name) => item.category.toLowerCase() === name.toLowerCase());
  };

  const matchesCapacity = (item) => {
    if (capacityFilter.length === 0) return true;
    const capacities = getCapacities(item.specs);
    if (capacities.length === 0) return false;
    return capacityFilter.some((filter) => {
      return capacities.some((value) => {
        if (filter === '5 Liter & Below') return value <= 5;
        if (filter === '5L - 10L') return value > 5 && value <= 10;
        if (filter === '10L - 20L') return value > 10 && value <= 20;
        if (filter === '20L - 50L') return value > 20 && value <= 50;
        if (filter === 'Above 50L') return value > 50;
        return false;
      });
    });
  };

  const filteredProducts = productsList.filter((item) => matchesCategory(item, selectedCategory) && matchesCapacity(item));
  const categories = [
    { name: 'All Products', count: productsList.length },
    { name: 'Wet Grinders', count: productsList.filter((item) => matchesCategory(item, 'Wet Grinders')).length },
    { name: 'Dough Kneaders', count: productsList.filter((item) => matchesCategory(item, 'Dough Kneaders')).length },
    { name: 'Vegetable Cutters', count: productsList.filter((item) => matchesCategory(item, 'Vegetable Cutters')).length },
    { name: 'Pulverizers & Gravy', count: productsList.filter((item) => matchesCategory(item, 'Pulverizers')).length },
    { name: 'Coconut Scrapers', count: productsList.filter((item) => matchesCategory(item, 'Coconut Scrapers')).length },
    { name: 'Mixer Machines', count: productsList.filter((item) => matchesCategory(item, 'Mixer Machines')).length },
    { name: 'Spare Parts', count: productsList.filter((item) => matchesCategory(item, 'Spare Parts')).length }
  ];

  return (
    <div className="space-y-4 sm:space-y-10">

      {/* PRODUCTS HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section id="catalog" className="relative text-white py-8 sm:py-16 md:py-20 overflow-hidden min-h-0 sm:min-h-[50vh] lg:min-h-[65vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-950/60 to-black/85 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 border border-purple-400/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full shadow-xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
              </span>
              <span>Trusted Commercial Kitchen Equipment</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)] leading-tight">
              OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">PRODUCTS</span>
            </h1>

            {/* Description */}
            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-lg lg:text-xl font-semibold max-w-2xl leading-8 drop-shadow-md">
              Premium commercial kitchen machines engineered for restaurants, hotels, bakeries, and catering businesses. Built for heavy-duty performance and long-lasting service.
            </p>

            {/* Feature Pills */}
            <div className="animate-hero-slide-up animation-delay-400 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] sm:text-xs pt-2 max-w-2xl font-bold">
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3.5 py-2 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Premium Quality</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3.5 py-2 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Best Performance</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3.5 py-2 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Long Lasting</div>
              <div className="bg-[#6A1B9A]/90 border border-purple-300/50 px-3.5 py-2 rounded-full text-center shadow-lg hover:border-purple-300 transition-all transform hover:-translate-y-0.5">✔ Easy Maintenance</div>
            </div>

            {/* Breadcrumb */}
            <div className="animate-hero-slide-up animation-delay-500 flex items-center gap-2 pt-1 text-[11px] sm:text-xs font-medium text-purple-200 drop-shadow">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-bold">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CATALOG LAYOUT - Sidebar Filters + Product Cards Grid */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm font-bold text-xs text-[#6A1B9A]"
          >
            <span className="flex items-center gap-2"><SlidersHorizontal className="w-4 h-4" /> Filter Categories ({selectedCategory})</span>
            <span>{mobileFilterOpen ? 'Hide Filters ▲' : 'Show Filters ▼'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Sidebar Filter Column */}
          <div className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            
            {/* Product Categories Box */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/5">
              <div className="bg-[#6A1B9A] text-white px-4 py-3 font-heading font-bold text-xs sm:text-sm uppercase">
                PRODUCT CATEGORIES
              </div>
              <div className="divide-y divide-gray-100">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelectedCategory(cat.name); setMobileFilterOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${
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
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/5 p-4 space-y-3">
              <h3 className="font-heading font-bold text-xs uppercase text-gray-900 pb-2 border-b border-gray-100">
                FILTER BY CAPACITY
              </h3>
              <div className="space-y-2 text-xs text-gray-700">
                {['5 Liter & Below', '5L - 10L', '10L - 20L', '20L - 50L', 'Above 50L'].map((cap, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-[#6A1B9A] text-gray-700">
                    <input
                      type="checkbox"
                      className="accent-[#6A1B9A]"
                      checked={capacityFilter.includes(cap)}
                      onChange={() => {
                        if (capacityFilter.includes(cap)) {
                          setCapacityFilter(capacityFilter.filter((item) => item !== cap));
                        } else {
                          setCapacityFilter([...capacityFilter, cap]);
                        }
                      }}
                    />
                    <span>{cap}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={() => {
                  /* no-op: filtering applies automatically */
                }}
                className="btn-purple w-full py-2 text-xs uppercase font-bold mt-2"
              >
                APPLY FILTER
              </button>
            </div>

            {/* Need Help Sidebar Card - Exact Reference Design Match */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-[#4C1282] via-[#521882] to-[#5D1E99] border border-purple-700/50 p-4 sm:p-5 text-white min-h-[165px] flex items-center group">
              
              {/* Right Side Image (Man with Headset) */}
              <div className="absolute right-0 bottom-0 top-0 h-full w-[45%] sm:w-[48%] overflow-hidden pointer-events-none">
                <img 
                  src="/images/ChatGPT Image Jul 27, 2026, 03_41_42 PM.webp" 
                  alt="Customer Support Representative" 
                  className="w-full h-full object-cover object-top sm:object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Left Side Content */}
              <div className="relative z-10 w-[60%] sm:w-[58%] space-y-2.5 text-left">
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-white uppercase leading-none drop-shadow-sm">
                    NEED HELP?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-purple-200 mt-1 leading-tight font-medium">
                    Call us for expert guidance
                  </p>
                </div>

                {/* Direct Phone Number */}
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <a 
                    href="tel:+919994944123" 
                    className="font-extrabold text-xs sm:text-sm md:text-base text-white hover:text-purple-200 transition-colors tracking-tight drop-shadow-xs"
                  >
                    +91 99949 44123
                  </a>
                </div>

                {/* White WhatsApp Button */}
                <div className="pt-1">
                  <a 
                    href="https://wa.me/919994944123" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-white hover:bg-purple-50 text-[#4C1282] font-extrabold text-[11px] sm:text-xs py-2 px-3 sm:px-4 rounded-xl shadow-lg border border-white flex items-center justify-center gap-1.5 transition-all active:scale-95 inline-flex w-full"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366] shrink-0" />
                    <span>WHATSAPP US</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9 space-y-4 sm:space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600 bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200">
              <span>Showing {filteredProducts.length} of {productsList.length} products</span>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-2.5 py-1 text-xs outline-none bg-white font-semibold">
                  <option>Latest</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.length > 0 ? filteredProducts.map((item, idx) => (
                <div key={idx} className="bg-white/95 rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl card-3d-hover p-4 flex flex-col justify-between group relative border-t-4 border-t-[#6A1B9A] shine-overlay">
                  <div>
                    <div className="w-full aspect-square podium-ss-3d rounded-2xl overflow-hidden pt-8 pb-3 px-3 flex items-center justify-center mb-3.5 relative border border-white">
                      {item.badge ? (
                        <span className="absolute top-2 left-2 z-20 bg-gradient-to-r from-[#6A1B9A] to-purple-900 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-lg tracking-wider uppercase">
                          {item.badge}
                        </span>
                      ) : (
                        <span className="absolute top-2 left-2 z-20 bg-purple-100/90 text-[#6A1B9A] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-purple-200">
                          304 SS Food Grade
                        </span>
                      )}
                      <img 
                        src={item.image || item.img || item.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'} 
                        alt={item.name} 
                        className="max-h-full max-w-full object-contain img-3d-pop transition-transform duration-500 drop-shadow-md relative z-10" 
                      />
                    </div>

                    <h3 className="font-heading font-extrabold text-gray-900 text-sm text-center mb-4 group-hover:text-[#6A1B9A] transition-colors">{item.name}</h3>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button 
                      onClick={() => onOpenQuoteModal({ name: item.name })} 
                      className="btn-purple w-full py-2.5 text-xs font-bold shadow-md shadow-purple-900/15 hover:shadow-purple-900/30 flex items-center justify-center gap-1.5 uppercase tracking-wide"
                    >
                      <span>GET FREE QUOTE</span>
                    </button>
                  </div>
                </div>
              )) : (
                <div className="lg:col-span-3 col-span-1 p-6 bg-white rounded-3xl border border-gray-200 text-center text-gray-600">
                  No products match the selected category or capacity filters.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
