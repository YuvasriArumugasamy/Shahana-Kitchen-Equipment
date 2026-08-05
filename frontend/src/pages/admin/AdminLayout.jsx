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

  const unreadCount = notifications.filter(n => n.unread).length;

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
      
      {/* LEFT SIDEBAR (Dark Theme #18102B / #1E1535 matching screenshots) */}
      <aside className={`fixed inset-y-0 left-0 z-40 bg-[#16102A] text-white flex flex-col justify-between transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } hidden lg:flex border-r border-purple-900/30 shadow-2xl`}>
        
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          
          {/* Official Company Logo Header - Big & Prominent Zoomed */}
          <div className="p-3 sm:p-4 border-b border-white/10 shrink-0">
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-md border border-purple-100 flex items-center justify-center w-full min-h-[64px] overflow-hidden">
              <img 
                src="/images/ChatGPT Image Jul 28, 2026, 01_18_49 PM.png" 
                alt="Shahana Kitchen Equipment Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain mix-blend-multiply scale-110 sm:scale-125 transition-transform" 
              />
            </div>
          </div>

          {/* Nav Items */}
          <div className="px-3 py-4 space-y-1 flex-1">
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
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isItemActive
                          ? 'bg-purple-600/90 text-white shadow-md shadow-purple-900/40 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
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
                              className={`w-full text-left px-3 py-2 rounded-lg text-[11px] font-medium transition-colors ${
                                isSubSelected
                                  ? 'bg-purple-500/20 text-purple-300 font-bold border-l-2 border-purple-400'
                                  : 'text-slate-400 hover:text-white hover:bg-white/5'
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 shrink-0" />
                    {sidebarOpen && <span>{item.label}</span>}
                  </div>
                  {sidebarOpen && item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/30 text-purple-200 border border-purple-400/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* User Profile Footer */}
          <div className="p-3 border-t border-white/10 shrink-0 bg-black/20">
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                    alt="Admin Avatar" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-purple-500 shrink-0"
                  />
                  {sidebarOpen && (
                    <div className="text-left truncate">
                      <span className="text-xs font-bold text-white block leading-tight truncate">Admin</span>
                      <span className="text-[10px] text-slate-400 font-medium block truncate">Super Admin</span>
                    </div>
                  )}
                </div>
                {sidebarOpen && <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full bg-[#1E1535] border border-purple-500/30 rounded-xl shadow-2xl p-2 space-y-1 z-50 text-xs text-slate-200">
                  <a 
                    href="/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-left text-purple-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Site</span>
                  </a>
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 text-left font-bold"
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
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden flex">
          <div className="w-72 bg-[#16102A] text-white flex flex-col h-full p-4 overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="bg-white p-2.5 rounded-2xl shadow-md border border-purple-100 flex items-center justify-center flex-1 mr-3 overflow-hidden">
                <img 
                  src="/images/ChatGPT Image Jul 28, 2026, 01_18_49 PM.png" 
                  alt="Shahana Kitchen Equipment Logo" 
                  className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply scale-110" 
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-1 flex-1">
              {navItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'products-parent') {
                        setActiveTab('products');
                      } else {
                        setActiveTab(item.id);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold ${
                      activeTab === item.id ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="w-full py-2.5 text-xs text-purple-300 font-bold bg-white/5 rounded-xl"
              >
                ← Back to Public Website
              </button>
              <button 
                onClick={onLogout}
                className="w-full py-2.5 text-xs text-red-400 font-bold bg-red-950/40 rounded-xl"
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
        
        {/* MOBILE MENU TOGGLE (Mobile only) */}
        <div className="lg:hidden p-3.5 border-b border-slate-200 bg-white flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-slate-700 bg-slate-100 rounded-xl text-xs font-bold"
          >
            <Menu className="w-4 h-4" />
            <span>Admin Menu</span>
          </button>
          <span className="font-heading font-black text-xs text-slate-900 uppercase tracking-tight">Shahana Admin</span>
        </div>

        {/* PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}
