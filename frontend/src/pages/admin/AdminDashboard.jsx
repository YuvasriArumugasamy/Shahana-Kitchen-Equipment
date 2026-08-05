import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../../data/siteData';

import AdminLayout from './AdminLayout';
import DashboardOverview from './DashboardOverview';
import CatalogManagement from './CatalogManagement';
import EditProduct from './EditProduct';
import NotificationsManagement from './NotificationsManagement';
import SettingsManagement from './SettingsManagement';

import { X, CheckCircle } from 'lucide-react';

export default function AdminDashboard({ onLogout, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedPreviewProduct, setSelectedPreviewProduct] = useState(null);

  // Persistent Products List synced 100% with siteData catalog & user edits
  const [productsList, setProductsList] = useState(() => {
    const saved = localStorage.getItem('shahana_admin_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge real siteData product defaults with any saved edits in localStorage
          const merged = PRODUCTS.map(realProd => {
            const savedItem = parsed.find(p => p.id === realProd.id);
            return savedItem ? { ...realProd, ...savedItem, image: savedItem?.image || realProd.image } : realProd;
          });
          const customProducts = parsed.filter(p => !PRODUCTS.some(real => real.id === p.id));
          return [...merged, ...customProducts];
        }
      } catch (e) { console.error(e); }
    }
    return PRODUCTS;
  });

  // Persistent Notifications List
  const [notifications, setNotifications] = useState([]);

  // Save products to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('shahana_admin_products', JSON.stringify(productsList));
  }, [productsList]);

  // Real-time synchronization for Admin Notifications across ALL devices (Mobile, Laptop, Cloud)
  useEffect(() => {
    const syncNotifs = async () => {
      try {
        const cloudData = await fetchCloudNotifications();
        if (cloudData && Array.isArray(cloudData)) {
          setNotifications(cloudData);
        }
      } catch (e) {
        console.error("Error reading admin notifications:", e);
      }
    };

    syncNotifs();

    // Auto-poll cloud every 10 seconds so Admin gets live customer messages from ANY device
    const intervalId = setInterval(syncNotifs, 10000);

    window.addEventListener('storage', syncNotifs);
    window.addEventListener('shahana_notification_added', syncNotifs);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', syncNotifs);
      window.removeEventListener('shahana_notification_added', syncNotifs);
    };
  }, []);

  // Save / Update product handler
  const handleSaveProduct = (updatedProduct) => {
    const exists = productsList.some(p => p.id === updatedProduct.id);
    let newList;
    if (exists) {
      newList = productsList.map(p => p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p);
    } else {
      const newProd = {
        id: updatedProduct.id || `prod-${Date.now()}`,
        name: updatedProduct.name || 'New Machine',
        category: updatedProduct.category || 'Wet Grinders',
        rating: 5.0,
        reviewsCount: 1,
        image: updatedProduct.image || updatedProduct.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80',
        description: updatedProduct.description || 'Commercial stainless steel kitchen equipment manufactured by Shahana.',
        ...updatedProduct
      };
      newList = [newProd, ...productsList];
    }
    setProductsList(newList);
    localStorage.setItem('shahana_admin_products', JSON.stringify(newList));
    setActiveTab('products');
  };

  // Update and persist notifications handler to Cloud & LocalStorage
  const handleSetNotifications = (updatedVal) => {
    let newNotifs = typeof updatedVal === 'function' ? updatedVal(notifications) : updatedVal;
    setNotifications(newNotifs);
    updateCloudNotifications(newNotifs);
  };

  return (
    <AdminLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      notifications={notifications}
      setNotifications={handleSetNotifications}
      editingProduct={editingProduct}
      onLogout={onLogout}
      setCurrentPage={setCurrentPage}
    >
      
      {/* 1. DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <DashboardOverview 
          productsList={productsList} 
          notifications={notifications}
          setActiveTab={setActiveTab} 
        />
      )}

      {/* 2. NOTIFICATIONS MANAGEMENT */}
      {activeTab === 'notifications' && (
        <NotificationsManagement 
          notifications={notifications} 
          setNotifications={handleSetNotifications} 
        />
      )}

      {/* 3. PRODUCTS MANAGEMENT */}
      {activeTab === 'products' && (
        <CatalogManagement 
          productsList={productsList} 
          setProductsList={setProductsList} 
          onEditProduct={(p) => { setEditingProduct(p); setActiveTab('edit-product'); }} 
          onAddNewProduct={() => { setEditingProduct(null); setActiveTab('edit-product'); }}
          onViewProduct={(p) => setSelectedPreviewProduct(p)}
        />
      )}

      {/* 4. EDIT / ADD PRODUCT FORM */}
      {activeTab === 'edit-product' && (
        <EditProduct 
          product={editingProduct} 
          onSave={handleSaveProduct} 
          onCancel={() => setActiveTab('products')} 
          onViewProduct={(p) => setSelectedPreviewProduct(p)}
        />
      )}

      {/* 5. SETTINGS */}
      {activeTab === 'settings' && (
        <SettingsManagement />
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
