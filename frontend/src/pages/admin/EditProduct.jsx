import React, { useState } from 'react';
import { 
  Eye, Copy, Save, Plus, Trash2, Upload, X, Link as LinkIcon, 
  Bold, Italic, Underline, List, ListOrdered, Image as ImageIcon, 
  ChevronDown, ChevronUp, Check
} from 'lucide-react';

export default function EditProduct({ 
  product, 
  onSave, 
  onCancel, 
  onViewProduct 
}) {
  const [formData, setFormData] = useState({
    id: product?.id || `prod-${Date.now()}`,
    name: product?.name || '',
    sku: product?.sku || product?.code || `SKE-00${Date.now().toString().slice(-3)}`,
    slug: product?.slug || (product?.name ? product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''),
    brand: product?.brand || 'Shahana',
    category: product?.category || 'Wet Grinders',
    status: product?.status || 'Active',
    shortDesc: product?.shortDesc || product?.description?.slice(0, 80) || '',
    badge: product?.badge || '',
    featured: product?.featured !== undefined ? product?.featured : true,
    price: product?.price || '',
    salePrice: product?.salePrice || '',
    stockCount: product?.stockCount !== undefined ? product?.stockCount : 25,
    description: product?.description || '',
    specs: product?.specs || [
      { key: 'Material', value: '304 Food Grade Stainless Steel' },
      { key: 'Motor', value: 'Heavy Duty Copper Motor' }
    ],
    features: product?.features || [
      '304 Food Grade Stainless Steel Construction',
      'Heavy Duty High Torque Copper Motor'
    ],
    image: product?.image || product?.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80',
    images: product?.images || (product?.image ? [product.image] : [
      'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'
    ]),
    seoTitle: product?.seoTitle || (product?.name ? `${product.name} | Shahana Kitchen Equipment` : ''),
    metaDesc: product?.metaDesc || product?.description || '',
    weight: product?.weight || '45 kg',
    dimensions: product?.dimensions || 'Standard Commercial'
  });

  const [seoOpen, setSeoOpen] = useState(true);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-slug generation from Product Name
  const handleNameChange = (e) => {
    const val = e.target.value;
    const generatedSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData(prev => ({
      ...prev,
      name: val,
      slug: generatedSlug
    }));
  };

  // Add Spec Row
  const addSpec = () => {
    setFormData(prev => ({
      ...prev,
      specs: [...prev.specs, { key: '', value: '' }]
    }));
  };

  // Update Spec Row
  const updateSpec = (index, field, val) => {
    const updated = [...formData.specs];
    updated[index][field] = val;
    setFormData(prev => ({ ...prev, specs: updated }));
  };

  // Remove Spec Row
  const removeSpec = (index) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index)
    }));
  };

  // Add Feature item
  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  // Update Feature item
  const updateFeature = (index, val) => {
    const updated = [...formData.features];
    updated[index] = val;
    setFormData(prev => ({ ...prev, features: updated }));
  };

  // Remove Feature item
  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const fileInputRef = React.useRef(null);

  // File Upload Handler (reads image files from device using FileReader)
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileDataUrl = event.target.result;
        setFormData(prev => {
          const validImgs = prev.images.filter(img => Boolean(img));
          const updatedImgs = [...validImgs, fileDataUrl];
          return {
            ...prev,
            image: prev.image || fileDataUrl,
            images: updatedImgs
          };
        });
      };
      reader.readAsDataURL(file);
    });
  };

  // Add image URL
  const handleAddImageUrl = () => {
    const url = prompt('Enter Image URL to add:');
    if (!url) return;
    setFormData(prev => {
      const validImgs = prev.images.filter(img => Boolean(img));
      const updatedImgs = [...validImgs, url];
      return {
        ...prev,
        image: prev.image || url,
        images: updatedImgs
      };
    });
  };

  // Remove image
  const handleRemoveImage = (index) => {
    setFormData(prev => {
      const updated = prev.images.filter((_, i) => i !== index);
      const fallback = 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80';
      return {
        ...prev,
        image: updated[0] || fallback,
        images: updated.length ? updated : [fallback]
      };
    });
  };

  // Make Featured Image
  const handleMakeFeaturedImage = (index) => {
    setFormData(prev => {
      const imgs = [...prev.images];
      const [selected] = imgs.splice(index, 1);
      imgs.unshift(selected);
      return {
        ...prev,
        image: selected,
        images: imgs
      };
    });
  };

  // Duplicate Product
  const handleDuplicate = () => {
    const cloned = {
      ...formData,
      id: `copy-${Date.now()}`,
      name: `${formData.name} (Copy)`,
      sku: `${formData.sku}-COPY`
    };
    onSave && onSave(cloned);
    setToastMessage('Product duplicated successfully!');
    setTimeout(() => {
      setToastMessage(null);
      if (onCancel) onCancel();
    }, 800);
  };

  // Helper to safely resolve image URLs (handles string paths, module objects, data URLs)
  const getImageSrc = (img) => {
    if (!img) return 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80';
    if (typeof img === 'string' && img.trim() !== '') return img;
    if (typeof img === 'object' && img !== null && img.default) return img.default;
    return 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80';
  };

  // Helper to get non-empty valid images list
  const validImagesList = (formData.images || [])
    .map(img => (typeof img === 'object' && img?.default) ? img.default : img)
    .filter(img => img && typeof img === 'string' && img.trim() !== '');

  const displayImages = validImagesList.length ? validImagesList : ['https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'];

  // Save Product
  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...product,
      ...formData,
      image: getImageSrc(formData.image || formData.images?.[0] || product?.image)
    };
    onSave && onSave(updated);
    setToastMessage('Changes saved successfully!');
    setTimeout(() => {
      setToastMessage(null);
      if (onCancel) onCancel();
    }, 800);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#6A1B9A] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-xs animate-bounce">
          <Check className="w-5 h-5 bg-white/20 rounded-full p-1" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BREADCRUMB & TOP ACTIONS BAR (Exact match to Image 2) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <button onClick={onCancel} className="hover:text-purple-600">Products</button>
            <span>›</span>
            <span className="text-slate-900">Edit Product</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight mt-1">
            {formData.name || 'Edit Product'}
          </h1>
        </div>

        {/* Top Header Right Action Buttons (Image 2 match) */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onViewProduct && onViewProduct(formData)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all"
          >
            <Eye className="w-4 h-4 text-slate-500" />
            <span>View Product</span>
          </button>

          <button
            type="button"
            onClick={handleDuplicate}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all"
          >
            <Copy className="w-4 h-4 text-slate-500" />
            <span>Duplicate</span>
          </button>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* 2-COLUMN MAIN FORM LAYOUT */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN (65% width - Image 2 match) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* PRODUCT INFORMATION CARD */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-5">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
              Product Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-semibold outline-none transition-all"
                  placeholder="e.g. Commercial Wet Grinder"
                />
              </div>

              {/* Product Code */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Product Code (SKU)
                </label>
                <input
                  type="text"
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-semibold outline-none transition-all"
                  placeholder="e.g. SKE-WG-001"
                />
              </div>

              {/* Slug */}
              <div className="sm:col-span-2 space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Slug *
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-mono font-medium outline-none transition-all"
                  />
                  <button type="button" className="p-2.5 text-purple-600 hover:bg-purple-50 rounded-xl">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[11px] text-slate-400 font-medium block">
                  https://shahanakitchenequipment.com/products/{formData.slug}
                </span>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-semibold outline-none transition-all"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Category *
                </label>
                <input
                  type="text"
                  required
                  list="category-suggestions"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-semibold text-slate-800 outline-none transition-all"
                  placeholder="e.g. Vegetable Cutters, Wet Grinders..."
                />
                <datalist id="category-suggestions">
                  <option value="Wet Grinders" />
                  <option value="Tilting Wet Grinders" />
                  <option value="Pulverizers & Gravy" />
                  <option value="Dough Kneaders" />
                  <option value="Vegetable Cutters" />
                  <option value="Mixer Machines" />
                  <option value="Coconut Scrapers" />
                  <option value="Processing Machines" />
                  <option value="Snack Machines" />
                  <option value="Spare Parts" />
                </datalist>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-bold text-emerald-600 outline-none bg-white"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              {/* Featured Product Toggle Switch */}
              <div className="flex items-center justify-between sm:col-span-2 p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Featured Product</span>
                  <span className="text-[11px] text-slate-500 block">Display on homepage bestseller grid</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, featured: !formData.featured })}
                  className={`w-12 h-6 rounded-full transition-colors relative ${formData.featured ? 'bg-[#6A1B9A]' : 'bg-slate-300'}`}
                >
                  <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${formData.featured ? 'right-0.5' : 'left-0.5'}`} />
                </button>
              </div>

              {/* Short Description */}
              <div className="sm:col-span-2 space-y-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Short Description *
                  </label>
                  <span className="text-[10px] text-slate-400 font-bold">
                    {formData.shortDesc.length}/160
                  </span>
                </div>
                <textarea
                  rows="3"
                  required
                  maxLength={160}
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-xs font-medium outline-none transition-all"
                  placeholder="High performance commercial wet grinder..."
                />
              </div>

            </div>
          </div>

          {/* SPECIFICATIONS BUILDER CARD (Image 2 match) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-4">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
              Specifications
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 w-1/3">Key</th>
                    <th className="py-2.5 px-3">Value</th>
                    <th className="py-2.5 px-3 w-10 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {formData.specs.map((spec, idx) => (
                    <tr key={idx}>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={spec.key}
                          onChange={(e) => updateSpec(idx, 'key', e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold outline-none"
                          placeholder="e.g. Capacity"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={spec.value}
                          onChange={(e) => updateSpec(idx, 'value', e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium outline-none"
                          placeholder="e.g. 10 Litre"
                        />
                      </td>
                      <td className="py-2 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => removeSpec(idx)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded-md"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={addSpec}
              className="flex items-center gap-1.5 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl text-xs font-bold transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Specification</span>
            </button>
          </div>

          {/* DESCRIPTION & RICH TEXT TOOLBAR + FEATURES BUILDER */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-5">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
              Description & Features *
            </h3>

            {/* Rich Text Toolbar (Image 2 match) */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden space-y-2">
              <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex flex-wrap items-center gap-1 text-slate-600 text-xs">
                <span className="font-bold text-slate-700 px-2 py-1 bg-white rounded-md border border-slate-200 mr-2">Paragraph</span>
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md font-bold"><Bold className="w-3.5 h-3.5" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><Italic className="w-3.5 h-3.5" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><Underline className="w-3.5 h-3.5" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1" />
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><List className="w-3.5 h-3.5" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><ListOrdered className="w-3.5 h-3.5" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1" />
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><LinkIcon className="w-3.5 h-3.5" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-200 rounded-md"><ImageIcon className="w-3.5 h-3.5" /></button>
              </div>

              <textarea
                rows="6"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-4 text-xs text-slate-800 leading-relaxed outline-none border-none resize-y"
              />
            </div>

            {/* Features Bullet List Builder */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Features Bullet Points
              </label>
              <div className="space-y-2">
                {formData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <input
                      type="text"
                      value={feat}
                      onChange={(e) => updateFeature(idx, e.target.value)}
                      className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:bg-white"
                      placeholder="Enter machine feature point..."
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(idx)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addFeature}
                className="flex items-center gap-1.5 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl text-xs font-bold transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Feature</span>
              </button>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (35% width - Image 2 match) */}
        <div className="space-y-6">
          
          {/* PRODUCT IMAGES CARD (Image 2 match) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-4">
            <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
              Product Images
            </h3>

            {/* Hidden Native File Input for OS File Picker */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/*" 
              multiple 
              className="hidden" 
            />

            {/* Drag & Drop / Upload Area */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/30 rounded-2xl p-6 text-center space-y-2 cursor-pointer transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Click or drag & drop image files here</p>
                <p className="text-[10px] text-slate-400 font-medium">Supports JPG, PNG, WEBP, GIF</p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-1">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-4 py-1.5 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold hover:bg-[#5A1582] shadow-xs"
                >
                  Browse Files
                </button>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddImageUrl();
                  }}
                  className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-xl text-xs font-bold hover:bg-purple-200"
                >
                  + Add URL
                </button>
              </div>
            </div>

            {/* Uploaded Thumbnails Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              {displayImages.map((imgUrl, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-square">
                  <img 
                    src={getImageSrc(imgUrl)} 
                    alt={`Product thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  
                  {/* Featured Tag on 1st image */}
                  {idx === 0 && (
                    <span className="absolute bottom-1 left-1 bg-[#6A1B9A] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-xs">
                      Featured
                    </span>
                  )}

                  {/* Top Right Remove Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 w-5 h-5 bg-black/60 hover:bg-rose-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Remove Image"
                  >
                    <X className="w-3 h-3" />
                  </button>

                  {idx !== 0 && (
                    <button
                      type="button"
                      onClick={() => handleMakeFeaturedImage(idx)}
                      className="absolute inset-0 bg-purple-900/50 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                    >
                      Make Featured
                    </button>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 font-medium text-center pt-1">
              Upload up to 10 images. Recommended size: 1200x1200px
            </p>
          </div>

          {/* SEO SETTINGS ACCORDION */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setSeoOpen(!seoOpen)}
              className="w-full p-5 flex items-center justify-between font-heading font-black text-sm text-slate-900 bg-slate-50/50"
            >
              <span>SEO Settings</span>
              {seoOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {seoOpen && (
              <div className="p-5 space-y-4 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 uppercase">SEO Title</label>
                    <span className="text-[10px] text-slate-400 font-bold">{formData.seoTitle.length}/60</span>
                  </div>
                  <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Meta Description</label>
                    <span className="text-[10px] text-slate-400 font-bold">{formData.metaDesc.length}/160</span>
                  </div>
                  <textarea
                    rows="3"
                    value={formData.metaDesc}
                    onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* PRICING & STOCK ACCORDION */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setPricingOpen(!pricingOpen)}
              className="w-full p-5 flex items-center justify-between font-heading font-black text-sm text-slate-900 bg-slate-50/50"
            >
              <span>Pricing & Stock</span>
              {pricingOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {pricingOpen && (
              <div className="p-5 space-y-3 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Price (₹)</label>
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Sale Price (₹)</label>
                    <input
                      type="text"
                      value={formData.salePrice}
                      onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Stock Count</label>
                  <input
                    type="number"
                    value={formData.stockCount}
                    onChange={(e) => setFormData({ ...formData, stockCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* SHIPPING INFORMATION ACCORDION */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setShippingOpen(!shippingOpen)}
              className="w-full p-5 flex items-center justify-between font-heading font-black text-sm text-slate-900 bg-slate-50/50"
            >
              <span>Shipping Information</span>
              {shippingOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {shippingOpen && (
              <div className="p-5 space-y-3 border-t border-slate-100">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Machine Weight</label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Dimensions (L x W x H)</label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

      </form>

    </div>
  );
}
