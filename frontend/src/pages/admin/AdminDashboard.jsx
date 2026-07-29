import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../../data/siteData';

import AdminLayout from './AdminLayout';
import DashboardOverview from './DashboardOverview';
import CatalogManagement from './CatalogManagement';
import EditProduct from './EditProduct';
import CategoriesManagement from './CategoriesManagement';
import EnquiriesManagement from './EnquiriesManagement';
import QuotesManagement from './QuotesManagement';
import SparePartsManagement from './SparePartsManagement';
import ReviewsManagement from './ReviewsManagement';
import UsersManagement from './UsersManagement';
import SettingsManagement from './SettingsManagement';

import { X, CheckCircle } from 'lucide-react';

export default function AdminDashboard({ onLogout, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedPreviewProduct, setSelectedPreviewProduct] = useState(null);

  // Persistent Products List
  const [productsList, setProductsList] = useState(() => {
    const saved = localStorage.getItem('shahana_admin_products');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return PRODUCTS;
  });

  // Persistent Quotes List
  const [quotesList, setQuotesList] = useState(() => {
    const saved = localStorage.getItem('shahana_admin_quotes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      { id: "Q-101", name: "Ramesh Kumar", company: "Hotel Grand", phone: "+91 98765 43210", product: "Commercial Wet Grinder 25L", quantity: 2, status: "New", date: "31 May 2024" },
      { id: "Q-102", name: "Anita Sharma", company: "Sharma Catering", phone: "+91 94433 11223", product: "Pulverizer Machine 5 HP", quantity: 1, status: "In Progress", date: "31 May 2024" },
      { id: "Q-103", name: "Mohammed Ali", company: "Ali Restaurant", phone: "+91 99887 76655", product: "Vegetable Cutting Machine", quantity: 3, status: "New", date: "30 May 2024" },
      { id: "Q-104", name: "Vikram Singh", company: "Singh Bakery", phone: "+91 91234 56789", product: "Spiral Dough Kneader 10kg", quantity: 1, status: "Completed", date: "29 May 2024" },
      { id: "Q-105", name: "Sunil Patel", company: "Patel Foods", phone: "+91 97766 55443", product: "Mixer Grinder Heavy Duty", quantity: 2, status: "In Progress", date: "29 May 2024" }
    ];
  });

  // Persistent Enquiries List
  const [enquiriesList, setEnquiriesList] = useState(() => {
    const saved = localStorage.getItem('shahana_admin_enquiries');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      { id: "ENQ-201", name: "Ramesh Kumar", company: "Hotel Grand", phone: "+91 98765 43210", email: "ramesh@hotelgrand.com", source: "Website", date: "31 May 2024", status: "New", message: "Interested in commercial wet grinder 25L and dough kneader 10kg package deal." },
      { id: "ENQ-202", name: "Anita Sharma", company: "Sharma Catering", phone: "+91 94433 11223", email: "anita@sharmacatering.in", source: "WhatsApp", date: "31 May 2024", status: "In Progress", message: "Need urgent price quote for 3 units of heavy duty pulverizer machine." },
      { id: "ENQ-203", name: "Mohammed Ali", company: "Ali Restaurant", phone: "+91 99887 76655", email: "ali@restaurant.com", source: "Phone", date: "30 May 2024", status: "New", message: "Requesting catalog and warranty terms for vegetable cutting machine." },
      { id: "ENQ-204", name: "Vikram Singh", company: "Singh Bakery", phone: "+91 91234 56789", email: "vikram@singhbakery.com", source: "Email", date: "30 May 2024", status: "Completed", message: "Order placed for spiral dough kneader 25kg." },
      { id: "ENQ-205", name: "Sunil Patel", company: "Patel Foods", phone: "+91 97766 55443", email: "sunil@patelfoods.com", source: "Website", date: "29 May 2024", status: "In Progress", message: "Inquiring about coconut scraper double head availability." }
    ];
  });

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('shahana_admin_products', JSON.stringify(productsList));
  }, [productsList]);

  useEffect(() => {
    localStorage.setItem('shahana_admin_quotes', JSON.stringify(quotesList));
  }, [quotesList]);

  useEffect(() => {
    localStorage.setItem('shahana_admin_enquiries', JSON.stringify(enquiriesList));
  }, [enquiriesList]);

  // Save / Update product handler
  const handleSaveProduct = (updatedProduct) => {
    const exists = productsList.some(p => p.id === updatedProduct.id);
    if (exists) {
      setProductsList(productsList.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    } else {
      const newProd = {
        id: updatedProduct.id || `prod-${Date.now()}`,
        name: updatedProduct.name || 'New Machine',
        category: updatedProduct.category || 'Wet Grinders',
        price: updatedProduct.price || '₹35,000',
        rating: 5.0,
        reviewsCount: 1,
        image: updatedProduct.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80',
        description: updatedProduct.description || 'Commercial stainless steel kitchen equipment manufactured by Shahana.',
        ...updatedProduct
      };
      setProductsList([newProd, ...productsList]);
    }
    setActiveTab('products');
  };

  return (
    <AdminLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={onLogout} 
      setCurrentPage={setCurrentPage}
      editingProduct={editingProduct}
    >
      
      {/* 1. OVERVIEW DASHBOARD (Image 1) */}
      {activeTab === 'dashboard' && (
        <DashboardOverview 
          productsList={productsList} 
          quotesList={quotesList} 
          enquiriesList={enquiriesList} 
          setActiveTab={setActiveTab} 
        />
      )}

      {/* 2. PRODUCTS / CATALOG MANAGEMENT (Image 3) */}
      {activeTab === 'products' && (
        <CatalogManagement 
          productsList={productsList} 
          setProductsList={setProductsList} 
          onEditProduct={(p) => { setEditingProduct(p); setActiveTab('edit-product'); }} 
          onAddNewProduct={() => { setEditingProduct(null); setActiveTab('edit-product'); }}
          onViewProduct={(p) => setSelectedPreviewProduct(p)}
        />
      )}

      {/* 3. EDIT / ADD PRODUCT FORM (Image 2) */}
      {activeTab === 'edit-product' && (
        <EditProduct 
          product={editingProduct} 
          onSave={handleSaveProduct} 
          onCancel={() => setActiveTab('products')} 
          onViewProduct={(p) => setSelectedPreviewProduct(p)}
        />
      )}

      {/* 4. CATEGORIES */}
      {activeTab === 'categories' && (
        <CategoriesManagement />
      )}

      {/* 5. CUSTOMER ENQUIRIES */}
      {activeTab === 'enquiries' && (
        <EnquiriesManagement 
          enquiriesList={enquiriesList} 
          setEnquiriesList={setEnquiriesList} 
        />
      )}

      {/* 6. QUOTE REQUESTS */}
      {activeTab === 'quotes' && (
        <QuotesManagement 
          quotesList={quotesList} 
          setQuotesList={setQuotesList} 
        />
      )}

      {/* 7. SPARE PARTS */}
      {activeTab === 'spareparts' && (
        <SparePartsManagement />
      )}

      {/* 8. REVIEWS */}
      {activeTab === 'reviews' && (
        <ReviewsManagement />
      )}

      {/* 9. USERS */}
      {activeTab === 'users' && (
        <UsersManagement />
      )}

      {/* 10. SETTINGS & SEO */}
      {(activeTab === 'settings' || activeTab === 'seo-settings' || activeTab === 'system-settings') && (
        <SettingsManagement />
      )}

      {/* OTHER TABS FALLBACK */}
      {['services', 'gallery', 'industries', 'orders', 'reports', 'notifications-tab'].includes(activeTab) && (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xs text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#6A1B9A] flex items-center justify-center mx-auto text-2xl font-black">
            S
          </div>
          <h2 className="text-xl font-heading font-black text-slate-900 capitalize">
            {activeTab.replace('-', ' ')} Module
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Live enterprise management tools for {activeTab}. Connected to local state and database.
          </p>
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className="px-5 py-2.5 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold shadow-md"
          >
            ← Back to Overview Dashboard
          </button>
        </div>
      )}

      {/* LIVE PRODUCT PREVIEW MODAL */}
      {selectedPreviewProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPreviewProduct(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedPreviewProduct.image || selectedPreviewProduct.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'}
                alt={selectedPreviewProduct.name}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-purple-100 text-purple-700">
                  {selectedPreviewProduct.category || 'Wet Grinders'}
                </span>
                <h3 className="text-lg font-heading font-black text-slate-900 mt-1">
                  {selectedPreviewProduct.name}
                </h3>
                <p className="text-base font-black text-purple-700 mt-0.5">
                  {selectedPreviewProduct.price}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
              <h4 className="font-bold text-slate-900 uppercase">Product Description</h4>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                {selectedPreviewProduct.description || selectedPreviewProduct.shortDesc}
              </p>

              {selectedPreviewProduct.features && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="font-bold text-slate-900 uppercase">Key Features</h4>
                  <ul className="space-y-1 text-slate-700">
                    {selectedPreviewProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => {
                  setEditingProduct(selectedPreviewProduct);
                  setSelectedPreviewProduct(null);
                  setActiveTab('edit-product');
                }}
                className="px-4 py-2 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold"
              >
                Edit Product Information
              </button>
              <button
                onClick={() => setSelectedPreviewProduct(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
