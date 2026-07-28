import React, { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const galleryCategories = ['All Photos', 'Our Products', 'Installations', 'Workshop', 'Happy Customers'];

  const productsGallery = [
    { title: "Wet Grinder", img: "/images/instant wet grinder.png" },
    { title: "Dough Kneader", img: "/images/dough kneader.png" },
    { title: "Vegetable Cutter", img: "/images/vegetable cutting machine.png" },
    { title: "Coconut Scraper", img: "/images/coconut scraper.png" },
    { title: "Mixer Machine", img: "/images/mixer machine.png" },
    { title: "Pulverizer Machine", img: "/images/pulverizer machine.png" },
    { title: "Instant Wet Grinder", img: "/images/instant wet grinder.png" },
    { title: "Coconut Milk Extractor", img: "/images/coconut milk extractor.png" },
    { title: "Idli / Dosa Batter Mixer", img: "/images/idly dose batter mixer.png" },
    { title: "Masala Grinder", img: "/images/masala grinder.png" },
    { title: "Juice Machine", img: "/images/juice mechine.png" }
  ];

  const installationsGallery = [
    { title: "Hotel Installation", img: "/images/gallery.png" },
    { title: "Restaurant Installation", img: "/images/gallery1.png" },
    { title: "Catering Unit Installation", img: "/images/caterin unit installation.png" },
    { title: "Bakery Installation", img: "/images/bakery installation.png" },
    { title: "Institution Installation", img: "/images/institution installation.png" },
    { title: "Cloud Kitchen Setup", img: "/images/hostel installation.png" }
  ];

  const workshopGallery = [
    { title: "Our Workshop", img: "/images/our workshop.png" },
    { title: "Spare Parts Stock", img: "/images/spare parts stock.png" },
    { title: "Machine Repair", img: "/images/machine repair.png" },
    { title: "Testing & Quality Check", img: "/images/testing .png" },
    { title: "Our Team", img: "/images/our team.png" },
    { title: "Delivery & Packing", img: "/images/delivery .png" }
  ];

  return (
    <div className="pt-20 space-y-12">

      {/* HERO BANNER - Exact Reference Match */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              GALLERY
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              Explore our products, installations, workshop and happy customer moments.
            </p>

            <div className="text-xs text-purple-200 pt-2">
              Home &gt; Gallery
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-card p-3 border border-white/20">
              <img src="/images/gallery.png" alt="Gallery Range" className="w-full h-56 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="max-w-container mx-auto px-4 text-center">
        <div className="inline-flex flex-wrap gap-2 p-1.5 bg-white rounded-full shadow border border-gray-200">
          {galleryCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat ? 'bg-[#6A1B9A] text-white shadow' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* OUR PRODUCTS SECTION */}
      <section className="max-w-container mx-auto px-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-1">
            OUR PRODUCTS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {productsGallery.map((item, idx) => (
            <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm p-3 text-center">
              <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center mb-2">
                <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-xs">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* INSTALLATIONS SECTION */}
      <section className="max-w-container mx-auto px-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-1">
            INSTALLATIONS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {installationsGallery.map((item, idx) => (
            <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm p-3 text-center">
              <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-xs">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP & MORE SECTION */}
      <section className="max-w-container mx-auto px-4 pb-16 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-1">
            WORKSHOP & MORE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workshopGallery.map((item, idx) => (
            <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm p-3 text-center">
              <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-xs">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
