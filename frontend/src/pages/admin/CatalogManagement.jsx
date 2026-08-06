import React, { useState, useMemo } from 'react';
import { 
  Package, FolderTree, CheckCircle, AlertTriangle, IndianRupee, 
  Plus, Upload, Download, Search, Filter, RotateCcw, Eye, Edit3, 
  Trash2, Star, ChevronLeft, ChevronRight, X
} from 'lucide-react';
import { PRODUCTS } from '../../data/siteData';

export default function CatalogManagement({ 
  productsList = [], 
  setProductsList, 
  onEditProduct, 
  onAddNewProduct, 
  onViewProduct 
}) {
  const resolveProductImg = (p) => {
    if (!p) return 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=150&q=80';
    let img = p.image || p.img || p.images?.[0];
    if (typeof img === 'object' && img !== null && img.default) img = img.default;
    if (typeof img === 'string') img = img.trim();
    if (!img) return 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=150&q=80';
    return img;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedAvailability, setSelectedAvailability] = useState('All Availability');
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Filter products dynamically
  const filteredProducts = useMemo(() => {
    return (productsList || []).filter(p => {
      const matchSearch = (p.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p.shortDesc || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p.description || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
      const matchStatus = selectedStatus === 'All Status' || (p.status || 'Active') === selectedStatus;
      const matchAvailability = selectedAvailability === 'All Availability' || p.availability === selectedAvailability;
      return matchSearch && matchCategory && matchStatus && matchAvailability;
    });
  }, [productsList, searchTerm, selectedCategory, selectedStatus, selectedAvailability]);

  // Toggle selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(filteredProducts.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(item => item !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const toggleFeatured = (id) => {
    setProductsList(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductsList(prev => prev.filter(p => p.id !== id));
      setSelectedProducts(prev => prev.filter(item => item !== id));
    }
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedStatus('All Status');
    setSelectedAvailability('All Availability');
  };

  // Pagination calculation
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  );

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* TOP HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Products Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage all your products and catalog
          </p>
        </div>

        {/* Top Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onAddNewProduct}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* DYNAMIC METRIC SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-purple-600">Catalog</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 font-bold uppercase block">Total Products</span>
            <div className="text-xl font-heading font-black text-slate-900">{productsList.length}</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600">Available</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 font-bold uppercase block">In Stock</span>
            <div className="text-xl font-heading font-black text-slate-900">
              {productsList.filter(p => p.availability !== 'Out of Stock' && p.stockCount !== 0).length}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-orange-600">Attention</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 font-bold uppercase block">Out of Stock</span>
            <div className="text-xl font-heading font-black text-slate-900">
              {productsList.filter(p => p.availability === 'Out of Stock' || p.stockCount === 0).length}
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTER CONTROLS BAR */}
      <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-xs space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
        {/* Search Input Bar */}
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products by name or details..."
            className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-[#6A1B9A] transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Dropdowns & Reset Action Row */}
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="flex-1 sm:flex-initial px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-[#6A1B9A] cursor-pointer"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Draft</option>
          </select>

          {/* Availability Dropdown */}
          <select
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
            className="flex-1 sm:flex-initial px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-[#6A1B9A] cursor-pointer"
          >
            <option>All Availability</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          {/* Reset Button */}
          <button 
            onClick={handleResetFilters}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all shrink-0"
            title="Reset filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* PRODUCTS CARDS GRID SHOWCASE */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((p) => {
            const stockCount = p.stockCount !== undefined ? p.stockCount : (p.rating >= 4.9 ? 25 : 18);
            const isOutOfStock = p.availability === 'Out of Stock' || stockCount === 0;
            const isLowStock = p.availability === 'Low Stock' || (stockCount > 0 && stockCount <= 5);
            const availabilityBadge = isOutOfStock ? 'Out of Stock' : (isLowStock ? 'Low Stock' : 'In Stock');

            return (
              <div 
                key={p.id} 
                className="bg-white rounded-3xl p-4 border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative border-t-4 border-t-[#6A1B9A]"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="w-full aspect-square bg-slate-50 rounded-2xl p-3 flex items-center justify-center relative border border-slate-100 mb-3.5 overflow-hidden">
                    {p.badge && (
                      <span className="absolute top-2 left-2 z-10 bg-[#6A1B9A] text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider">
                        {p.badge}
                      </span>
                    )}

                    <span className={`absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[9px] font-extrabold border ${
                      isOutOfStock
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : (isLowStock ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200')
                    }`}>
                      {availabilityBadge}
                    </span>

                    <img 
                      src={resolveProductImg(p)} 
                      alt={p.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=150&q=80';
                      }}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Title & Details */}
                  <h3 className="font-heading font-black text-sm text-slate-900 text-center mb-1 group-hover:text-[#6A1B9A] transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 text-center line-clamp-2 mb-4 leading-relaxed font-medium min-h-[32px]">
                    {p.shortDesc || p.description || 'Commercial food grade 304 SS kitchen machine.'}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onViewProduct && onViewProduct(p)}
                    className="flex-1 py-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-slate-200"
                    title="View Product Preview"
                  >
                    <Eye className="w-3.5 h-3.5 text-purple-600" />
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onEditProduct) onEditProduct(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      const mainEl = document.querySelector('main');
                      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-2 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1"
                    title="Edit Product"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(p.id)}
                    className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all shrink-0 border border-rose-100"
                    title="Delete Product"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center text-slate-400 font-bold border border-slate-100 shadow-xs">
          No products found matching your search or filters.
        </div>
      )}
    </div>
  );
}
