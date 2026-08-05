import React, { useState, useMemo } from 'react';
import { 
  Package, FolderTree, CheckCircle, AlertTriangle, IndianRupee, 
  Plus, Upload, Download, Search, Filter, RotateCcw, Eye, Edit3, 
  Trash2, Star, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function CatalogManagement({ 
  productsList = [], 
  setProductsList, 
  onEditProduct, 
  onAddNewProduct, 
  onViewProduct 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedAvailability, setSelectedAvailability] = useState('All Availability');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filtered products logic
  const filteredProducts = useMemo(() => {
    return productsList.filter((prod) => {
      const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (prod.id && prod.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            (prod.sku && prod.sku.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All Categories' || prod.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All Status' || (prod.status || 'Active') === selectedStatus;
      
      let availability = 'In Stock';
      if (prod.stockCount !== undefined) {
        if (prod.stockCount === 0) availability = 'Out of Stock';
        else if (prod.stockCount <= 10) availability = 'Low Stock';
      } else {
        if (prod.availability) availability = prod.availability;
      }

      const matchesAvailability = selectedAvailability === 'All Availability' || availability === selectedAvailability;

      return matchesSearch && matchesCategory && matchesStatus && matchesAvailability;
    });
  }, [productsList, searchTerm, selectedCategory, selectedStatus, selectedAvailability]);

  // Select all handler
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

  // Toggle Featured status
  const toggleFeatured = (id) => {
    setProductsList(productsList.map(p => {
      if (p.id === id) {
        return { ...p, featured: !p.featured };
      }
      return p;
    }));
  };

  // Delete product handler
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductsList(productsList.filter(p => p.id !== id));
    }
  };

  // Export Catalog CSV function
  const handleExportCSV = () => {
    const headers = ['ID,Name,Category,SKU,Price,Stock,Availability,Status'];
    const rows = filteredProducts.map(p => 
      `"${p.id}","${p.name}","${p.category}","${p.sku || 'SKE-001'}","${p.price}","${p.stockUnits || '15 Units'}","${p.availability || 'In Stock'}","${p.status || 'Active'}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shahana_catalog_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      
      {/* HEADER WITH TITLE & ACTION BUTTONS (Exact match to Image 3) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Catalog Management
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
          
          <button
            onClick={() => alert('Import feature: Select CSV/Excel catalog file to upload.')}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all"
          >
            <Upload className="w-4 h-4 text-slate-500" />
            <span>Import Catalog</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Catalog</span>
          </button>
        </div>
      </div>

      {/* 4 DYNAMIC METRIC SUMMARY CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Products */}
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

        {/* Categories */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <FolderTree className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-cyan-600">Active</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 font-bold uppercase block">Categories</span>
            <div className="text-xl font-heading font-black text-slate-900">
              {new Set(productsList.map(p => p.category || 'General')).size}
            </div>
          </div>
        </div>

        {/* In Stock */}
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

        {/* Out of Stock */}
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

      {/* SEARCH & FILTER CONTROLS BAR (Image 3 match) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 flex-1 min-w-0">
          
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-purple-500"
          >
            <option>All Categories</option>
            <option>Wet Grinders</option>
            <option>Tilting Wet Grinders</option>
            <option>Pulverizers</option>
            <option>Dough Kneaders</option>
            <option>Food Processing</option>
            <option>Mixers</option>
            <option>Extractors</option>
          </select>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-purple-500"
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
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-purple-500"
          >
            <option>All Availability</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-purple-500"
            />
          </div>

        </div>

        {/* Filter & Reset Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button 
            className="flex items-center gap-1.5 px-4 py-2 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filter</span>
          </button>
          <button 
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

      </div>

      {/* PRODUCTS DATA TABLE (Exact match to Image 3) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200 tracking-wider">
              <tr>
                <th className="py-3.5 px-4 w-10">
                  <input 
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" 
                  />
                </th>
                <th className="py-3.5 px-4 min-w-[240px]">Product</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">SKU</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Stock</th>
                <th className="py-3.5 px-4">Availability</th>
                <th className="py-3.5 px-4 text-center">Featured</th>
                <th className="py-3.5 px-4">Last Updated</th>
                <th className="py-3.5 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((p, idx) => {
                  const isChecked = selectedProducts.includes(p.id);
                  const isFeatured = p.featured !== undefined ? p.featured : (p.rating >= 4.9);
                  const stockCount = p.stockCount !== undefined ? p.stockCount : (p.rating >= 4.9 ? 25 : 18);
                  const isOutOfStock = p.availability === 'Out of Stock' || stockCount === 0;
                  const isLowStock = p.availability === 'Low Stock' || (stockCount > 0 && stockCount <= 5);
                  const stockText = isOutOfStock ? '0 Units' : (p.stockUnits || `${stockCount} Units`);
                  const availabilityBadge = isOutOfStock ? 'Out of Stock' : (isLowStock ? 'Low Stock' : 'In Stock');
                  const categoryTag = p.category || 'Wet Grinders';
                  const skuCode = p.sku || `SKE-${(p.category || 'GEN').slice(0, 2).toUpperCase()}-0${idx + 1}`;

                  return (
                    <tr key={p.id} className={`hover:bg-purple-50/30 transition-colors ${isChecked ? 'bg-purple-50/50' : ''}`}>
                      {/* Checkbox */}
                      <td className="py-3.5 px-4">
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleSelectOne(p.id)}
                          className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" 
                        />
                      </td>

                      {/* Product Thumbnail & Title */}
                      <td className="py-3.5 px-4 min-w-[240px]">
                        <div className="flex items-center gap-3">
                          <img 
                            src={p.image || p.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=150&q=80'} 
                            alt={p.name} 
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-100 p-0.5"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 block leading-snug truncate">{p.name}</span>
                            <span className="text-[11px] text-slate-400 block truncate font-normal">
                              {p.shortDesc || p.description?.slice(0, 35) || 'High performance SS body'}
                            </span>
                            {p.badge && (
                              <span className="inline-block mt-0.5 px-2 py-0.5 text-[9px] font-extrabold bg-purple-100 text-purple-700 rounded-md">
                                {p.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Category Pill */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-100/80 inline-block whitespace-nowrap">
                          {categoryTag}
                        </span>
                      </td>

                      {/* SKU */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px] font-bold text-slate-600">
                        <span className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                          {skuCode}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-black text-slate-900 text-sm">
                        {p.price}
                      </td>

                      {/* Stock Units */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-bold text-xs">
                        <span className={isOutOfStock ? 'text-rose-600' : (isLowStock ? 'text-amber-600' : 'text-emerald-600')}>
                          {stockText}
                        </span>
                      </td>

                      {/* Availability Badge */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1.5 w-max ${
                          isOutOfStock
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : (isLowStock 
                              ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200')
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${isOutOfStock ? 'bg-rose-500' : (isLowStock ? 'bg-amber-500' : 'bg-emerald-500')}`} />
                          <span>{availabilityBadge}</span>
                        </span>
                      </td>

                      {/* Featured Star */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <button
                          onClick={() => toggleFeatured(p.id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isFeatured ? 'text-purple-600 hover:bg-purple-100' : 'text-slate-300 hover:text-slate-400 hover:bg-slate-100'
                          }`}
                          title="Toggle Featured status"
                        >
                          <Star className={`w-4 h-4 ${isFeatured ? 'fill-purple-600' : ''}`} />
                        </button>
                      </td>

                      {/* Last Updated */}
                      <td className="py-3.5 px-4 text-slate-500 text-[11px] font-bold whitespace-nowrap">
                        {p.lastUpdated || 'Active'}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => onViewProduct && onViewProduct(p)}
                            className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                            title="View Product"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onEditProduct && onEditProduct(p)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Product"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="10" className="py-12 text-center text-slate-400 font-medium">
                    No products found matching your search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER (Exact match to Image 3) */}
        <div className="bg-slate-50/70 border-t border-slate-200 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          
          <div className="text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-800">{paginatedProducts.length > 0 ? (currentPageNum - 1) * itemsPerPage + 1 : 0}</span> to <span className="font-bold text-slate-800">{Math.min(currentPageNum * itemsPerPage, totalItems)}</span> of <span className="font-bold text-slate-800">{totalItems}</span> products
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            
            {/* Page number buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
                disabled={currentPageNum === 1}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPageNum(pageNum)}
                  className={`w-8 h-8 rounded-lg font-bold text-xs transition-colors ${
                    currentPageNum === pageNum
                      ? 'bg-[#6A1B9A] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-white hover:border border-slate-200'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <span className="px-1 text-slate-400">...</span>

              <button
                onClick={() => setCurrentPageNum(13)}
                className={`w-8 h-8 rounded-lg font-bold text-xs transition-colors ${
                  currentPageNum === 13
                    ? 'bg-[#6A1B9A] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-white hover:border border-slate-200'
                }`}
              >
                13
              </button>

              <button
                onClick={() => setCurrentPageNum(Math.min(totalPages, currentPageNum + 1))}
                disabled={currentPageNum === totalPages}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Items per page selector */}
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none"
            >
              <option value={10}>10 / page</option>
              <option value={25}>25 / page</option>
              <option value={50}>50 / page</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
}
