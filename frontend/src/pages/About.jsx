import React from 'react';
import { Award, ShieldCheck, Factory, Users, Target, Eye, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export default function About({ setCurrentPage, onOpenQuoteModal }) {
  return (
    <div className="pt-20 space-y-16">

      {/* ABOUT HERO BANNER - Exact Reference Design */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-16">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-purple-200 text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full inline-block">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
              SHAHANA KITCHEN EQUIPMENT
            </h1>
            <p className="text-purple-100 text-lg font-semibold">
              Your Trusted Partner in Commercial Kitchen Equipment
            </p>
            <div className="flex gap-4 pt-2 text-xs text-purple-200">
              <span>Home &gt; About Us</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-card overflow-hidden shadow-2xl border border-white/20 bg-white/10 p-2">
              <img 
                src="/images/our workshop.png" 
                alt="Shahana Commercial Workshop & Machinery Studio"
                className="w-full h-72 object-cover rounded-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE - Matching Reference Design */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#6A1B9A] text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
              WHO WE ARE
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 leading-tight">
              Leading Supplier of Commercial Kitchen Equipment
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Shahana Kitchen Equipment is a trusted name in the field of commercial kitchen equipment. Established with a vision to provide high quality products and reliable services, we have been serving Hotels, Restaurants, Caterers, Bakeries, Hospitals, Hostels and various industries across Tamil Nadu.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We offer a wide range of premium quality kitchen equipment with the perfect combination of performance, durability and affordable pricing. Our experienced team is dedicated to customer satisfaction through superior products, timely delivery and excellent after-sales support.
            </p>

            <button
              onClick={onOpenQuoteModal}
              className="btn-purple px-7 py-3 text-xs font-bold uppercase tracking-wider"
            >
              KNOW MORE ABOUT US
            </button>
          </div>

          {/* Stats Cards Right Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm">
                <span className="text-3xl font-heading font-extrabold text-[#6A1B9A] block">10+</span>
                <span className="text-xs text-gray-500 font-semibold">Years of Experience</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm">
                <span className="text-3xl font-heading font-extrabold text-[#6A1B9A] block">500+</span>
                <span className="text-xs text-gray-500 font-semibold">Happy Customers</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm">
                <span className="text-3xl font-heading font-extrabold text-[#6A1B9A] block">1000+</span>
                <span className="text-xs text-gray-500 font-semibold">Products Delivered</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm">
                <span className="text-3xl font-heading font-extrabold text-[#6A1B9A] block">24/7</span>
                <span className="text-xs text-gray-500 font-semibold">After Sales Support</span>
              </div>
            </div>

            {/* GST Registered Card */}
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-card flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-gray-900 text-base">GST REGISTERED BUSINESS</h4>
                <p className="text-xs text-gray-600 mt-1">We are a GST registered company and provide GST invoices for all our products and services.</p>
              </div>
              <div className="w-14 h-14 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 ml-4">
                GST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORKSHOP & INFRASTRUCTURE - Matching Reference Section */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#6A1B9A] uppercase tracking-wider border-b-2 border-purple-200 inline-block pb-2">
            OUR WORKSHOP & INFRASTRUCTURE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Premium Quality Machines", img: "/images/instant wet grinder.png" },
            { title: "Expert Technicians", img: "/images/our team.png" },
            { title: "Well Equipped Workshop", img: "/images/our workshop.png" },
            { title: "Genuine Spare Parts Stock", img: "/images/spare parts stock.png" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm group">
              <div className="w-full h-48 bg-gray-50 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4 bg-[#6A1B9A] text-white text-center font-heading font-bold text-sm">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
