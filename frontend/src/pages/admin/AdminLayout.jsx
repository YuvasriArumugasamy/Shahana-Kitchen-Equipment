import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Settings, Sliders, Bell, Menu, X, ChevronDown, 
  LogOut, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, FileText, MessageSquare, Star
} from 'lucide-react';

export default function AdminLayout({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  setCurrentPage, 
  children,
  editingProduct,
  notifications: notificationsProp,
  setNotifications: setNotificationsProp
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(activeTab.startsWith('product'));

  const [localNotifications, setLocalNotifications] = useState([]);

  const notifications = notificationsProp || localNotifications;
  const setNotifications = setNotificationsProp || setLocalNotifications;

  useEffect(() => {
    if (activeTab.startsWith('product')) {
      setProductsMenuOpen(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => console.log(e));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const safeNotifs = Array.isArray(notifications) ? notifications : [];
  const unreadCount = safeNotifs.filter(n => n && n.unread).length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount > 0 ? String(unreadCount) : null },
    { 
      id: 'products-parent', 
      label: 'Products', 
      icon: ShoppingBag, 
      hasSub: true,
      subItems: [
        { id: 'products', label: 'All Products' },
        { id: 'edit-product-new', label: 'Add New Product' }
      ]
    },
    { id: 'settings', label: 'Settings', icon: Sliders }
  ];

  const getBreadcrumb = () => {
    if (activeTab === 'dashboard') return 'Dashboard Overview';
    if (activeTab === 'notifications') return 'Notifications Center';
    if (activeTab === 'products') return 'Product Catalog Management';
    if (activeTab === 'edit-product') return 'Products > Edit Product';
    if (activeTab === 'settings') return 'Admin & Website Settings';
    return activeTab.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* LEFT SIDEBAR (Clean White Theme) */}
      <aside className={`fixed inset-y-0 left-0 z-40 bg-white text-slate-800 flex flex-col justify-between transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } hidden lg:flex border-r border-slate-200 shadow-xl`}>
        
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          
          {/* Official Company Logo Header - Large & Clear */}
          <div className="px-2.5 py-3 sm:px-3.5 sm:py-4 shrink-0 border-b border-slate-100 bg-white">
            <div className="flex items-center justify-center w-full">
              <img 
                src="/images/logo.png" 
                alt="Shahana Kitchen Equipment Logo" 
                className="w-full h-16 sm:h-20 object-contain" 
              />
            </div>
          </div>

          {/* Nav Items */}
          <div className="px-3 py-4 space-y-1.5 flex-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isSubActive = item.hasSub && (activeTab === 'products' || activeTab === 'edit-product' || activeTab === 'categories');
              const isItemActive = activeTab === item.id || (item.id === 'products-parent' && isSubActive);

              if (item.hasSub) {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        if (!sidebarOpen) setSidebarOpen(true);
                        setProductsMenuOpen(!productsMenuOpen);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                        isItemActive
                          ? 'bg-[#6A1B9A] text-white shadow-md shadow-purple-900/20'
                          : 'text-slate-600 hover:text-[#6A1B9A] hover:bg-purple-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4 shrink-0" />
                        {sidebarOpen && <span>{item.label}</span>}
                      </div>
                      {sidebarOpen && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsMenuOpen ? 'rotate-180' : ''}`} />
                      )}
                    </button>

                    {/* Submenu */}
                    {sidebarOpen && productsMenuOpen && (
                      <div className="pl-9 pr-2 space-y-1 pt-1 pb-1">
                        {item.subItems.map((sub) => {
                          const isSubSelected = (sub.id === 'edit-product-new' && activeTab === 'edit-product' && !editingProduct?.id) || activeTab === sub.id;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => {
                                if (sub.id === 'edit-product-new') {
                                  setActiveTab('edit-product');
                                } else {
                                  setActiveTab(sub.id);
                                }
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-[11px] font-bold transition-colors ${
                                isSubSelected
                                  ? 'bg-purple-100 text-[#6A1B9A] border-l-2 border-[#6A1B9A]'
                                  : 'text-slate-500 hover:text-[#6A1B9A] hover:bg-purple-50/50'
                              }`}
                            >
                              • {sub.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === item.id
                      ? 'bg-[#6A1B9A] text-white shadow-md shadow-purple-900/20'
                      : 'text-slate-600 hover:text-[#6A1B9A] hover:bg-purple-50/80'
                  }`}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 shrink-0" />
                    {sidebarOpen && <span>{item.label}</span>}
                  </div>
                  {sidebarOpen && item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 text-[#6A1B9A] border border-purple-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* User Profile Footer */}
          <div className="p-3 border-t border-slate-100 shrink-0 bg-slate-50/80">
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-200/50 transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                    alt="Admin Avatar" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-purple-600 shrink-0"
                  />
                  {sidebarOpen && (
                    <div className="text-left truncate">
                      <span className="text-xs font-extrabold text-slate-900 block leading-tight truncate">Admin</span>
                      <span className="text-[10px] text-slate-500 font-semibold block truncate">Super Admin</span>
                    </div>
                  )}
                </div>
                {sidebarOpen && <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 space-y-1 z-50 text-xs text-slate-700">
                  <a 
                    href="/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-purple-50 text-left text-purple-700 font-bold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Site</span>
                  </a>
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-50 text-red-600 text-left font-bold"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </aside>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden flex">
          <div className="w-72 bg-white text-slate-800 flex flex-col h-full p-4 overflow-y-auto border-r border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="bg-white flex items-center justify-center flex-1 mr-2">
                <img 
                  src="/images/logo.png" 
                  alt="Shahana Kitchen Equipment Logo" 
                  className="w-full h-14 sm:h-16 object-contain" 
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-1.5 flex-1">
              {navItems.map((item) => {
                const IconComp = item.icon;
                const isSubActive = item.hasSub && (activeTab === 'products' || activeTab === 'edit-product' || activeTab === 'categories');
                const isItemActive = activeTab === item.id || (item.id === 'products-parent' && isSubActive);

                if (item.hasSub) {
                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                          isItemActive ? 'bg-[#6A1B9A] text-white shadow-md' : 'text-slate-600 hover:bg-purple-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {productsMenuOpen && (
                        <div className="pl-8 pr-2 space-y-1 pt-1 pb-1">
                          {item.subItems.map((sub) => {
                            const isSubSelected = (sub.id === 'edit-product-new' && activeTab === 'edit-product' && !editingProduct?.id) || activeTab === sub.id;
                            return (
                              <button
                                key={sub.id}
                                onClick={() => {
                                  if (sub.id === 'edit-product-new') {
                                    setActiveTab('edit-product');
                                  } else {
                                    setActiveTab(sub.id);
                                  }
                                  setMobileMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-[11px] font-bold transition-colors ${
                                  isSubSelected
                                    ? 'bg-purple-100 text-[#6A1B9A] border-l-2 border-[#6A1B9A]'
                                    : 'text-slate-500 hover:text-[#6A1B9A] hover:bg-purple-50/50'
                                }`}
                              >
                                • {sub.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                      activeTab === item.id ? 'bg-[#6A1B9A] text-white shadow-md' : 'text-slate-600 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 text-[#6A1B9A] border border-purple-200">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a 
                href="/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs text-purple-700 font-bold bg-purple-50 hover:bg-purple-100 rounded-xl flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Live Site</span>
              </a>
              <button 
                onClick={onLogout}
                className="w-full py-2.5 text-xs text-red-600 font-bold bg-red-50 hover:bg-red-100 rounded-xl"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
        sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'
      }`}>
        
        {/* MOBILE MENU TOGGLE (Mobile only - Strictly Fixed Top Bar with Uiverse.io Hamburger & Right Logo) */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 px-4 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shadow-xs">
          <div className="uiverse-hamburger-container">
            <input 
              type="checkbox" 
              id="label-check-admin" 
              className="uiverse-label-check" 
              checked={mobileMenuOpen}
              onChange={(e) => setMobileMenuOpen(e.target.checked)}
            />
            <label htmlFor="label-check-admin" className="uiverse-hamburger-label" title="Toggle Admin Menu">
              <div className="uiverse-line1"></div>
              <div className="uiverse-line2"></div>
              <div className="uiverse-line3"></div>
            </label>
          </div>

          {/* Shahana Kitchen Equipment Logo on Right Side (Enlarged) */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Shahana Kitchen Equipment Logo" 
              className="h-12 sm:h-14 w-auto object-contain scale-125 origin-right pr-2" 
            />
          </div>
        </div>
        
        {/* Spacer for fixed top bar on mobile */}
        <div className="lg:hidden h-16 shrink-0" />

        {/* PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}
