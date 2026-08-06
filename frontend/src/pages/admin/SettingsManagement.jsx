import React, { useState } from 'react';
import { Save, Check } from 'lucide-react';

export default function SettingsManagement() {
  const defaultSettings = {
    companyName: 'Shahana Kitchen Equipment',
    phonePrimary: '+91 99949 44123',
    whatsappNumber: '919994944123',
    email: 'shahanakitchenequipment@gmail.com',
    address: '5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358, Tamil Nadu',
    siteTitle: 'Shahana Kitchen Equipment | Commercial Kitchen Machinery Manufacturer',
    metaDescription: 'Leading commercial kitchen equipment manufacturer in Tirunelveli, Tamil Nadu. Commercial wet grinders, pulverizers, dough kneaders, vegetable cutters, and custom SS fabrication.',
    currencySymbol: '₹',
    enableQuoteModal: true,
    enableWhatsAppFloat: true
  };

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('shahana_admin_settings');
      if (saved) return { ...defaultSettings, ...JSON.parse(saved) };
    } catch (e) {}
    return defaultSettings;
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('shahana_admin_settings', JSON.stringify(settings));
    } catch (e) {}
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {saved && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg">
          <Check className="w-5 h-5 bg-white/20 rounded-full p-1" />
          <span>Website settings updated successfully!</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Website & SEO Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Configure contact details, SEO meta info, and site features
          </p>
        </div>

        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20"
        >
          <Save className="w-4 h-4" />
          <span>Save Settings</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-4">
          <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
            Company Contact Information
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name</label>
            <input
              type="text"
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Phone</label>
              <input
                type="text"
                value={settings.phonePrimary}
                onChange={(e) => setSettings({ ...settings, phonePrimary: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={settings.whatsappNumber}
                onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Official Email</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Factory Address</label>
            <textarea
              rows="3"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-4">
          <h3 className="font-heading font-black text-base text-slate-900 border-b border-slate-100 pb-3">
            Global SEO & Metadata
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Global Website Title</label>
            <input
              type="text"
              value={settings.siteTitle}
              onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Global Meta Description</label>
            <textarea
              rows="4"
              value={settings.metaDescription}
              onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
            />
          </div>

          <div className="pt-2 space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-xs font-bold text-slate-800">Enable Floating WhatsApp Button</span>
              <input
                type="checkbox"
                checked={settings.enableWhatsAppFloat}
                onChange={(e) => setSettings({ ...settings, enableWhatsAppFloat: e.target.checked })}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-xs font-bold text-slate-800">Enable Interactive Quotation Modal</span>
              <input
                type="checkbox"
                checked={settings.enableQuoteModal}
                onChange={(e) => setSettings({ ...settings, enableQuoteModal: e.target.checked })}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
