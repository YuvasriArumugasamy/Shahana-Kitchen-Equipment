import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, ShoppingBag, FolderTree, Wrench, Settings, Image as ImageIcon, 
  Building2, FileText, MessageSquare, Star, Users, ShoppingCart, BarChart3, 
  Globe, Sliders, Bell, Shield, Search, Menu, X, Maximize, ChevronDown, 
  LogOut, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight
} from 'lucide-react';

export default function AdminLayout({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  setCurrentPage, 
  children,
  editingProduct,
  unreadNotificationsCount = 5
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(activeTab.startsWith('product'));

  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Quote Request", desc: "Ramesh Kumar requested quote for 2x Wet Grinder", time: "10 mins ago", unread: true, type: "quote" },
    { id: 2, title: "Enquiry Received", desc: "Anita Sharma sent an enquiry via WhatsApp", time: "45 mins ago", unread: true, type: "enquiry" },
    { id: 3, title: "Low Stock Alert", desc: "Vegetable Cutting Machine is low on stock (5 Units)", time: "2 hours ago", unread: true, type: "stock" },
    { id: 4, title: "New Review Approved", desc: "Hotel Sri Balaji rated 5 stars", time: "5 hours ago", unread: true, type: "review" },
    { id: 5, title: "System Backup Complete", desc: "Automated cloud catalog backup completed", time: "Yesterday", unread: false, type: "system" }
  ]);

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

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { 
      id: 'products-parent', 
      label: 'Products', 
      icon: ShoppingBag, 
      hasSub: true,
      subItems: [
        { id: 'products', label: 'Catalog & Products' },
        { id: 'edit-product-new', label: 'Add New Product' }
      ]
    },
    { id: 'categories', label: 'Categories', icon: FolderTree },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'spareparts', label: 'Spare Parts', icon: Settings },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'industries', label: 'Industries', icon: Building2 },
    { id: 'quotes', label: 'Quote Requests', icon: FileText, badge: '3' },
    { id: 'enquiries', label: 'Enquiries', icon: MessageSquare, badge: '5' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Website Settings', icon: Sliders }
  ];

  const getBreadcrumb = () => {
    if (activeTab === 'dashboard') return 'Dashboard';
    if (activeTab === 'products') return 'Catalog Management';
    if (activeTab === 'edit-product') return 'Products > Edit Product';
    if (activeTab === 'categories') return 'Categories Management';
    if (activeTab === 'quotes') return 'Quote Requests';
    if (activeTab === 'enquiries') return 'Customer Enquiries';
    if (activeTab === 'spareparts') return 'Spare Parts Inventory';
    if (activeTab === 'reviews') return 'Reviews Moderation';
    if (activeTab === 'users') return 'User & Role Management';
    if (activeTab === 'settings' || activeTab === 'seo-settings') return 'Website & SEO Settings';
    return activeTab.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* LEFT SIDEBAR (Dark Theme #18102B / #1E1535 matching screenshots) */}
      <aside className={`fixed inset-y-0 left-0 z-40 bg-[#16102A] text-white flex flex-col justify-between transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } hidden lg:flex border-r border-purple-900/30 shadow-2xl`}>
        
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          
          {/* Logo Header */}
          <div className="p-5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-900/50 shrink-0 border border-purple-400/30">
                <span className="font-heading text-lg font-black tracking-wider">S</span>
              </div>
              {sidebarOpen && (
                <div className="truncate">
                  <span className="font-heading font-black text-sm tracking-tight text-white block uppercase leading-tight">
                    SHAHANA
                  </span>
                  <span className="text-[10px] text-purple-300 font-semibold tracking-wider block uppercase opacity-80">
                    Kitchen Equipment
                  </span>
                </div>
              )}
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
                  <button 
                    onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-left text-purple-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Site</span>
                  </button>
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
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-white">
                  S
                </div>
                <span className="font-heading font-black text-sm text-white uppercase">SHAHANA ADMIN</span>
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
        
        {/* TOP NAVBAR (Matching top bar in screenshots) */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-xs">
          
          <div className="flex items-center gap-4">
            {/* Sidebar toggle button (desktop) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Breadcrumb Title */}
            <div>
              <h2 className="text-base sm:text-lg font-heading font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                {getBreadcrumb()}
              </h2>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Global Search Bar */}
            <div className="relative hidden md:block w-64 lg:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-9 pr-4 py-2 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-xs text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
              />
            </div>

            {/* Notifications Icon with Badge */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-purple-600 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white shadow-xs">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown Drawer */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="font-heading font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <span>Notifications</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-100 text-purple-700 font-bold">
                        {notifications.filter(n => n.unread).length} New
                      </span>
                    </h4>
                    <button 
                      onClick={() => setNotifications(notifications.map(n => ({ ...n, unread: false })))}
                      className="text-[11px] font-bold text-purple-600 hover:underline"
                    >
                      Mark all as read
                    </button>
                  </div>

                  <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                    {notifications.map((n) => (
                      <div 
                        key={n.id} 
                        className={`p-3 rounded-xl border text-xs transition-colors flex gap-3 ${
                          n.unread ? 'bg-purple-50/50 border-purple-100' : 'bg-slate-50/50 border-slate-100 opacity-75'
                        }`}
                      >
                        <div className="shrink-0 mt-0.5">
                          {n.type === 'quote' && <FileText className="w-4 h-4 text-purple-600" />}
                          {n.type === 'enquiry' && <MessageSquare className="w-4 h-4 text-emerald-600" />}
                          {n.type === 'stock' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                          {n.type === 'review' && <Star className="w-4 h-4 text-indigo-600" />}
                          {n.type === 'system' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <div className="font-bold text-slate-900 flex items-center justify-between">
                            <span>{n.title}</span>
                            <span className="text-[10px] text-slate-400 font-normal">{n.time}</span>
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{n.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-center">
                    <button 
                      onClick={() => { setActiveTab('notifications-tab'); setNotificationsOpen(false); }}
                      className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center justify-center gap-1 w-full py-1"
                    >
                      <span>View All Notifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors hidden sm:flex"
              title="Toggle Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* Profile Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                alt="Admin Profile" 
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-500 shadow-xs"
              />
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-slate-900 block leading-tight">Admin</span>
                <span className="text-[10px] text-slate-500 font-semibold block leading-tight">Super Admin</span>
              </div>
            </div>

          </div>

        </header>

        {/* PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}
