import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, Save, Upload, X, Check, Image as ImageIcon, Sparkles, ArrowLeft
} from 'lucide-react';

export default function EditProduct({ 
  product, 
  onSave, 
  onCancel, 
  onViewProduct 
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  const [formData, setFormData] = useState({
    id: product?.id || `prod-${Date.now()}`,
    name: product?.name || '',
    category: product?.category || 'Wet Grinders',
    badge: product?.badge || '304 SS Food Grade',
    status: product?.status || 'Active',
    shortDesc: product?.shortDesc || product?.description || '',
    description: product?.description || product?.shortDesc || '',
    featured: product?.featured !== undefined ? product?.featured : true,
    image: product?.image || product?.img || product?.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80',
    images: product?.images || (product?.image ? [product.image] : ['https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'])
  });

  const [toastMessage, setToastMessage] = useState(null);
  const fileInputRef = useRef(null);

  // Quick Badge suggestions
  const quickBadges = [
    '304 SS Food Grade',
    'Popular',
    'Best Seller',
    'Top Rated',
    'Heavy Duty',
    'Specialized',
    'New',
    'Studio HD'
  ];

  // Quick Category suggestions
  const categoriesList = [
    'Wet Grinders',
    'Tilting Wet Grinders',
    'Dough Kneaders',
    'Vegetable Cutters',
    'Pulverizers',
    'Gravy Machines',
    'Coconut Scrapers',
    'Mixer Machines',
    'Processing Machines',
    'Snack Machines',
    'Spare Parts'
  ];

  // Handle local image file selection
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileDataUrl = event.target.result;
        setFormData(prev => ({
          ...prev,
          image: fileDataUrl,
          images: [fileDataUrl, ...prev.images]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  // Add image URL directly
  const handleAddImageUrl = () => {
    const url = prompt('Enter Image URL:');
    if (!url || !url.trim()) return;
    const cleanUrl = url.trim();
    setFormData(prev => ({
      ...prev,
      image: cleanUrl,
      images: [cleanUrl, ...prev.images]
    }));
  };

  // Save handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.name.trim()) {
      alert('Please enter a product name');
      return;
    }

    const updatedProduct = {
      ...product,
      ...formData,
      name: formData.name.trim(),
      image: formData.image || formData.img || formData.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80',
      img: formData.image || formData.img || formData.images?.[0],
      description: formData.description || formData.shortDesc
    };

    if (onSave) {
      onSave(updatedProduct);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300 max-w-5xl mx-auto">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#6A1B9A] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-xs animate-bounce">
          <Check className="w-5 h-5 bg-white/20 rounded-full p-1" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER & TOP ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            title="Back to Products"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <button type="button" onClick={onCancel} className="hover:text-purple-600">Products</button>
              <span>›</span>
              <span className="text-slate-900">{product?.id ? 'Edit Product' : 'Add New Product'}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight mt-0.5">
              {formData.name || 'New Product Card Details'}
            </h1>
          </div>
        </div>

        {/* Top Header Buttons */}
        <div className="flex items-center gap-2.5">
          {onViewProduct && (
            <button
              type="button"
              onClick={() => onViewProduct(formData)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all"
            >
              <Eye className="w-4 h-4 text-slate-500" />
              <span>Preview Card</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Product</span>
          </button>
        </div>
      </div>

      {/* SIMPLIFIED PRODUCT CARD DETAILS FORM */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT MAIN DETAILS (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-5">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Product Card Details</span>
            </h3>

            {/* Product Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-sm font-bold text-slate-900 outline-none transition-all"
                placeholder="e.g. Ordinary Grinder, Tilting Wet Grinder..."
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-bold text-slate-800 outline-none bg-white"
              >
                {categoriesList.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Badge Tag Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Badge Tag (Displays on Top Left of Card)
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-bold text-purple-700 outline-none transition-all"
                placeholder="e.g. POPULAR, 304 SS Food Grade, BEST SELLER..."
              />

              {/* Quick Pick Badge Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] text-slate-400 font-bold self-center mr-1">Quick Choose:</span>
                {quickBadges.map((b, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, badge: b })}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-all border ${
                      formData.badge === b
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Description / Subtitle */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Short Description / Features Note
              </label>
              <textarea
                rows="3"
                value={formData.shortDesc}
                onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value, description: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-medium text-slate-700 outline-none transition-all"
                placeholder="e.g. Commercial 304 food-grade stainless steel body with copper motor..."
              />
            </div>

            {/* Featured Product Toggle Switch */}
            <div className="flex items-center justify-between p-4 bg-purple-50/60 rounded-xl border border-purple-100">
              <div>
                <span className="text-xs font-extrabold text-slate-900 block">Featured Product</span>
                <span className="text-[11px] text-slate-500 font-medium block">Display on website bestseller grid</span>
              </div>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, featured: !formData.featured })}
                className={`w-12 h-6 rounded-full transition-colors relative ${formData.featured ? 'bg-[#6A1B9A]' : 'bg-slate-300'}`}
              >
                <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${formData.featured ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>

            {/* Status Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Display Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-bold text-emerald-600 outline-none bg-white"
              >
                <option value="Active">Active (Visible on website)</option>
                <option value="Inactive">Inactive (Hidden)</option>
              </select>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (Product Image & Live Preview) */}
        <div className="space-y-6">
          
          {/* IMAGE UPLOAD & SELECTION CARD */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-4">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Product Image *</span>
              <ImageIcon className="w-4 h-4 text-purple-600" />
            </h3>

            {/* Native Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/*" 
              className="hidden" 
            />

            {/* Main Active Image Box */}
            <div className="relative aspect-square rounded-2xl border-2 border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4">
              <img 
                src={formData.image} 
                alt={formData.name || 'Product'} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80';
                }}
              />
              
              {formData.badge && (
                <span className="absolute top-3 left-3 bg-[#6A1B9A] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-md uppercase">
                  {formData.badge}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File</span>
              </button>
              <button 
                type="button"
                onClick={handleAddImageUrl}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl text-xs font-bold transition-colors"
              >
                <span>+ Add URL</span>
              </button>
            </div>
          </div>

          {/* LIVE CARD PREVIEW BOX */}
          <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-3 shadow-xl">
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-purple-300 block">
              Live Website Card Preview
            </span>

            {/* Card Mockup matching website design */}
            <div className="bg-white rounded-3xl p-4 text-slate-900 shadow-lg space-y-3 relative border-t-4 border-t-[#6A1B9A]">
              <div className="w-full aspect-square bg-slate-50 rounded-2xl p-3 flex items-center justify-center relative border border-slate-100">
                <span className="absolute top-2 left-2 bg-[#6A1B9A] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  {formData.badge || '304 SS Food Grade'}
                </span>
                <img 
                  src={formData.image} 
                  alt={formData.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h4 className="font-heading font-extrabold text-sm text-center text-slate-900">
                {formData.name || 'Product Title'}
              </h4>

              <div className="bg-[#6A1B9A] text-white py-2 text-center text-xs font-extrabold rounded-xl uppercase tracking-wider">
                GET FREE QUOTE
              </div>
            </div>
          </div>

          {/* Bottom Save Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-extrabold shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <Save className="w-4 h-4" />
            <span>Save Product Card</span>
          </button>

        </div>

      </form>

    </div>
  );
}
