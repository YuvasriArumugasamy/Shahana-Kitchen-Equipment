import React, { useState } from 'react';
import { 
  Bell, CheckCircle2, AlertTriangle, FileText, MessageSquare, Star, 
  Trash2, Check, Filter, Plus, Info, X, Clock, AlertCircle, ShieldAlert
} from 'lucide-react';

import { requestPushPermission, showBrowserNotification } from '../../services/firebaseConfig';
import { deleteCloudNotification } from '../../services/cloudNotifications';

export default function NotificationsManagement({ notifications = [], setNotifications }) {
  const [filter, setFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [pushEnabled, setPushEnabled] = useState(() => typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted');

  const handleEnablePush = async () => {
    const granted = await requestPushPermission();
    if (granted) {
      setPushEnabled(true);
      alert('Firebase Push Notifications enabled successfully on this browser!');
    } else {
      alert('Push Notifications permission was denied or not supported by browser.');
    }
  };

  const handleTestNotification = () => {
    showBrowserNotification(
      'Shahana Kitchen Equipment 🔔',
      'Test Notification Active! Real-time alerts enabled.',
      '/images/shahana-logo-new.webp'
    );
  };

  const safeNotifs = Array.isArray(notifications) ? notifications : [];

  // Filtered notifications list
  const filteredNotifications = safeNotifs.filter(n => {
    if (!n) return false;
    if (filter === 'unread') return n.unread;
    if (filter === 'read') return !n.unread;
    if (filter !== 'all') return n.type === filter;
    return true;
  });

  const unreadCount = safeNotifs.filter(n => n && n.unread).length;

  const getCleanId = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return String(val);
    if (typeof val === 'object') {
      if (val._id) return getCleanId(val._id);
      if (val.$oid) return String(val.$oid);
      if (typeof val.toString === 'function') {
        const str = val.toString();
        if (str !== '[object Object]') return str;
      }
    }
    return String(val);
  };

  const handleMarkAsRead = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const cleanId = getCleanId(id);
    setNotifications(prev => {
      const list = Array.isArray(prev) ? prev : (notifications || []);
      return list.map(n => getCleanId(n.id) === cleanId ? { ...n, unread: false } : n);
    });
  };

  const handleDelete = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const cleanId = getCleanId(id);
    deleteCloudNotification(id);
    setNotifications(prev => {
      const list = Array.isArray(prev) ? prev : (notifications || []);
      return list.filter(n => getCleanId(n.id) !== cleanId);
    });
    if (selectedNotification && getCleanId(selectedNotification.id) === cleanId) {
      setSelectedNotification(null);
    }
  };

  const handleCreateNotification = (e) => {
    e.preventDefault();
    if (!newNotification.title || !newNotification.desc) return;

    const created = {
      id: Date.now(),
      title: newNotification.title,
      desc: newNotification.desc,
      time: 'Just now',
      unread: true,
      type: newNotification.type,
      priority: newNotification.priority
    };

    setNotifications([created, ...notifications]);
    setNewNotification({ title: '', desc: '', type: 'system', priority: 'Normal' });
    setShowAddModal(false);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'quote':
        return <FileText className="w-5 h-5 text-purple-600" />;
      case 'enquiry':
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'stock':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'review':
        return <Star className="w-5 h-5 text-indigo-600" />;
      case 'system':
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'quote':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">Quote</span>;
      case 'enquiry':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Enquiry</span>;
      case 'stock':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">Stock Alert</span>;
      case 'review':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700">Review</span>;
      case 'system':
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 font-bold">System</span>;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight flex items-center gap-3">
            <span>Notifications Center</span>
            {unreadCount > 0 && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow-md shadow-purple-900/20">
                {unreadCount} Unread
              </span>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Monitor real-time system alerts, product inventory notifications, and customer inquiries
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleEnablePush}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
              pushEnabled
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>{pushEnabled ? 'Push Alerts Enabled' : 'Enable Push Alerts'}</span>
          </button>

          <button
            onClick={handleTestNotification}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"
          >
            <Bell className="w-4 h-4" />
            <span>Test Notification</span>
          </button>
        </div>
      </div>

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Total Alerts</span>
            <span className="text-2xl font-heading font-black text-slate-900">{notifications.length}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Unread Alerts</span>
            <span className="text-2xl font-heading font-black text-slate-900">{unreadCount}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">System Status</span>
            <span className="text-2xl font-heading font-black text-emerald-600">Active</span>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        {[
          { id: 'all', label: 'All Notifications' },
          { id: 'unread', label: 'Unread Only' },
          { id: 'quote', label: 'Quote Requests' },
          { id: 'read', label: 'Read' },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
              filter === t.id
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredNotifications.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Bell className="w-6 h-6" />
            </div>
            <p className="text-slate-500 font-bold text-sm">No notifications found for this filter</p>
          </div>
        ) : (
          filteredNotifications.map((n) => (
            <div 
              key={n.id}
              onClick={() => setSelectedNotification(n)}
              className={`p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer ${
                n.unread ? 'bg-purple-50/30' : ''
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100/60 shrink-0 mt-0.5">
                  {getTypeIcon(n.type)}
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-heading font-black text-sm text-slate-900 leading-snug">{n.title}</span>
                    {getTypeBadge(n.type)}
                    {n.unread && (
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0 inline-block shadow-xs" title="Unread" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium break-words max-w-2xl">{n.desc}</p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {n.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons - Cleanly aligned on top right */}
              <div className="flex items-center gap-1.5 shrink-0 pt-0.5" onClick={e => e.stopPropagation()}>
                {n.unread && (
                  <button
                    type="button"
                    onClick={(e) => handleMarkAsRead(n.id, e)}
                    className="p-2 text-purple-600 hover:bg-purple-100 rounded-xl text-xs font-bold transition-all border border-purple-100 bg-purple-50/60"
                    title="Mark as Read"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => handleDelete(n.id, e)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-slate-200/80 hover:border-rose-200"
                  title="Delete Notification"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* NOTIFICATION DETAILS MODAL */}
      {selectedNotification && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-xl">
                  {getTypeIcon(selectedNotification.type)}
                </div>
                <div>
                  <h3 className="font-heading font-black text-slate-900 text-base">Alert Details</h3>
                  <span className="text-[10px] text-slate-400 font-bold">{selectedNotification.time}</span>
                </div>
              </div>
              <button onClick={() => setSelectedNotification(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">Title</span>
                <p className="font-bold text-slate-900 text-sm mt-0.5">{selectedNotification.title}</p>
              </div>

              {selectedNotification.senderName && (
                <div className="bg-purple-50/70 p-3 rounded-xl border border-purple-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>Customer: {selectedNotification.senderName}</span>
                    {selectedNotification.senderPhone && (
                      <span className="text-purple-700 font-mono">{selectedNotification.senderPhone}</span>
                    )}
                  </div>
                  {selectedNotification.subject && (
                    <div className="text-[11px] text-slate-500 font-medium">Subject: {selectedNotification.subject}</div>
                  )}
                </div>
              )}

              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">Message Content</span>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl mt-1 border border-slate-100">
                  {selectedNotification.fullMessage || selectedNotification.desc}
                </p>
              </div>

              {selectedNotification.senderPhone && (
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`tel:${selectedNotification.senderPhone}`}
                    className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors"
                  >
                    📞 Call Customer
                  </a>
                  <a
                    href={`https://wa.me/${selectedNotification.senderPhone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold text-center transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-500">Category:</span>
                {getTypeBadge(selectedNotification.type)}
              </div>
            </div>

            {selectedNotification.unread && (
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    handleMarkAsRead(selectedNotification.id);
                    setSelectedNotification({ ...selectedNotification, unread: false });
                  }}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-xs font-bold hover:bg-purple-200 transition-colors"
                >
                  Mark as Read
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
