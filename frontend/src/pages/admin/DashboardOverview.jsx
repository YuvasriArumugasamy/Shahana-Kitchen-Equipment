import React, { useState } from 'react';
import { 
  Package, Bell, Settings, Calendar, ChevronDown, ArrowUpRight, 
  ArrowRight, ShieldCheck, Layers, Plus, CheckCircle2, AlertTriangle, FileText, MessageSquare
} from 'lucide-react';

export default function DashboardOverview({ 
  productsList = [], 
  notifications = [], 
  setActiveTab 
}) {
  const [dateRange, setDateRange] = useState('May 1, 2024 - May 31, 2024');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const safeNotifs = Array.isArray(notifications) ? notifications : [];
  const safeProds = Array.isArray(productsList) ? productsList : [];

  const unreadCount = safeNotifs.filter(n => n && n.unread).length;
  const recentProducts = safeProds.slice(0, 5);
  const recentNotifications = safeNotifs.slice(0, 5);

  const stats = [
    {
      id: 'products',
      label: 'Total Products',
      value: safeProds.length,
      growth: 'Active Catalog',
      bgColor: 'bg-purple-100/70',
      iconColor: 'bg-purple-600 text-white',
      icon: Package,
      targetTab: 'products'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      value: safeNotifs.length,
      growth: `${unreadCount} unread`,
      bgColor: 'bg-amber-100/70',
      iconColor: 'bg-amber-500 text-white',
      icon: Bell,
      targetTab: 'notifications'
    },
    {
      id: 'unread-alerts',
      label: 'Unread Alerts',
      value: unreadCount,
      growth: 'Needs Action',
      bgColor: 'bg-red-100/70',
      iconColor: 'bg-red-600 text-white',
      icon: AlertTriangle,
      targetTab: 'notifications'
    },
    {
      id: 'system-settings',
      label: 'System Status',
      value: 'Online',
      growth: 'All services live',
      bgColor: 'bg-emerald-100/70',
      iconColor: 'bg-emerald-600 text-white',
      icon: ShieldCheck,
      targetTab: 'settings'
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* WELCOME BANNER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight flex items-center gap-2">
            Welcome back, <span className="text-purple-700">Admin! 👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Real-time management dashboard for Shahana Kitchen Equipment
          </p>
        </div>
      </div>

      {/* 4 CORE STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st) => {
          const IconComp = st.icon;
          return (
            <div 
              key={st.id}
              onClick={() => setActiveTab(st.targetTab)}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl ${st.iconColor} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">{st.label}</span>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 mt-1">{st.value}</div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-purple-700">
                <span>{st.growth}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* TWO COLUMNS: REAL TIME NOTIFICATIONS & PRODUCT CATALOG OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* RECENT NOTIFICATIONS FEED */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-heading font-black text-sm sm:text-base text-slate-900 flex items-center gap-2 min-w-0">
              <Bell className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="truncate">Recent Notifications</span>
            </h3>
            <button 
              onClick={() => setActiveTab('notifications')}
              className="text-xs font-extrabold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {recentNotifications.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">No recent notifications</p>
            ) : (
              recentNotifications.map((n) => (
                <div 
                  key={n.id}
                  onClick={() => setActiveTab('notifications')}
                  className={`p-3.5 rounded-2xl border text-xs flex items-start gap-3 transition-colors cursor-pointer ${
                    n.unread ? 'bg-purple-50/50 border-purple-100' : 'bg-slate-50/50 border-slate-100 opacity-80'
                  }`}
                >
                  <div className="p-2 bg-white rounded-xl shadow-xs shrink-0 mt-0.5">
                    {n.type === 'stock' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                    {n.type === 'quote' && <FileText className="w-4 h-4 text-purple-600" />}
                    {n.type === 'enquiry' && <MessageSquare className="w-4 h-4 text-emerald-600" />}
                    {(!n.type || n.type === 'system') && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1 space-y-0.5 min-w-0">
                    <div className="flex items-center justify-between font-bold text-slate-900 gap-2">
                      <span className="truncate">{n.title}</span>
                      <span className="text-[10px] text-slate-400 font-normal shrink-0">{n.time}</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-1">{n.desc}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PRODUCT CATALOG QUICK LIST */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-heading font-black text-sm sm:text-base text-slate-900 flex items-center gap-2 min-w-0">
              <Package className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="truncate">Products Overview</span>
            </h3>
            <button 
              onClick={() => setActiveTab('products')}
              className="text-xs font-extrabold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap"
            >
              <span>Manage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {recentProducts.map((prod) => (
              <div 
                key={prod.id}
                onClick={() => setActiveTab('products')}
                className="py-3 flex items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-xl transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image || prod.images?.[0] || 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=400&q=80'}
                    alt={prod.name}
                    className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{prod.name}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold">{prod.category || 'Kitchen Equipment'}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-700">In Stock</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
