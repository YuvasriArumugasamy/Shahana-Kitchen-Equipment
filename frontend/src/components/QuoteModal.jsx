import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedProduct }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: selectedProduct ? selectedProduct.name : 'Commercial Tilting Wet Grinder',
    quantity: '1',
    businessType: 'Restaurant',
    city: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-card max-w-2xl w-full p-6 md:p-8 shadow-2xl relative border border-purple-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900">Quotation Request Received!</h3>
            <p className="text-gray-600 max-w-md mx-auto text-sm">
              Thank you! Our B2B technical representative will contact you with wholesale pricing and specs within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#6A1B9A] text-xs font-bold uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                B2B Manufacturer Quotation
              </span>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-2">
                Request Official Price Quote
              </h2>
              <p className="text-gray-600 text-sm">
                Get direct factory pricing, warranty terms, and delivery timelines for commercial equipment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                    placeholder="e.g. Ramesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Business Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                    placeholder="e.g. Hotel Sri Balaji"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                    placeholder="ramesh@hotel.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Required Equipment</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm bg-white"
                  >
                    <option>Commercial Instant Wet Grinder</option>
                    <option>Tilting Commercial Wet Grinder</option>
                    <option>Heavy Duty Commercial Pulverizer</option>
                    <option>Commercial Spiral Dough Kneader</option>
                    <option>Multi-Functional Vegetable Cutter</option>
                    <option>Commercial Potato & Ginger Peeler</option>
                    <option>Commercial Coconut Scraper Machine</option>
                    <option>Stainless Steel Work Preparation Table</option>
                    <option>Complete Commercial Kitchen Setup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Business Type</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm bg-white"
                  >
                    <option>Hotel / Restaurant</option>
                    <option>Cloud Kitchen</option>
                    <option>Bakery / Sweet Shop</option>
                    <option>Marriage Hall / Catering</option>
                    <option>Hospital Kitchen</option>
                    <option>Hostel / Educational Institution</option>
                    <option>Industrial Canteen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">City / Delivery Location</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                  placeholder="e.g. Madurai, Tamil Nadu"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Additional Capacity / Custom Requirement</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#6A1B9A] focus:ring-2 focus:ring-purple-200 outline-none text-sm"
                  placeholder="Specify capacity (e.g., 25kg dough kneader, 3-phase power) or custom requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-purple w-full py-3.5 text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
