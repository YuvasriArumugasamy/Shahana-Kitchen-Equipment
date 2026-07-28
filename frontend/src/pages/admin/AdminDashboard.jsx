import React, { useState } from 'react';
import { PRODUCTS, SPARE_PARTS, REVIEWS } from '../../data/siteData';
import { 
  LayoutDashboard, ShoppingBag, Settings, Wrench, MessageSquare, 
  Users, Image as ImageIcon, LogOut, Plus, Trash2, Edit3, CheckCircle, 
  TrendingUp, FileText, Search, ShieldAlert, BarChart3 
} from 'lucide-react';

export default function AdminDashboard({ onLogout, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [productsList, setProductsList] = useState(PRODUCTS);
  const [quotesList, setQuotesList] = useState([
    { id: "Q-101", name: "Ramesh Kumar", company: "Hotel Sri Balaji", phone: "+91 98765 43210", product: "Tilting Wet Grinder (25L)", status: "Pending", date: "2026-07-27" },
    { id: "Q-102", name: "Anand", company: "New Anandha Bhavan", phone: "+91 94433 11223", product: "Pulverizer 5 HP", status: "Contacted", date: "2026-07-26" },
    { id: "Q-103", name: "Suresh", company: "Royal Caterers", phone: "+91 99887 76655", product: "Dough Kneader 10kg", status: "Completed", date: "2026-07-25" }
  ]);

  const [newProd, setNewProd] = useState({
    name: '', category: 'Wet Grinders', capacity: '', motor: '', price: '', description: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const item = {
      id: `custom-${Date.now()}`,
      name: newProd.name,
      category: newProd.category,
      capacity: newProd.capacity || 'Custom',
      motor: newProd.motor || '2 HP',
      material: '304 Food Grade Stainless Steel',
      voltage: '230V / 415V',
      price: newProd.price || '₹35,000',
      rating: 5.0,
      reviewsCount: 1,
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&w=800&q=80',
      description: newProd.description || 'Commercial stainless steel kitchen equipment manufactured by Shahana.',
      features: ['304 Food Grade Stainless Steel', 'Heavy Duty Motor', '1 Year Warranty'],
      applications: ['Hotels', 'Restaurants']
    };
    setProductsList([item, ...productsList]);
    setShowAddModal(false);
    setNewProd({ name: '', category: 'Wet Grinders', capacity: '', motor: '', price: '', description: '' });
  };

  const handleDeleteProduct = (id) => {
    setProductsList(productsList.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#181024] text-white flex flex-col justify-between p-6 shrink-0">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6A1B9A] flex items-center justify-center font-bold text-lg text-white">
              S
            </div>
            <div>
              <span className="font-heading font-extrabold text-base tracking-tight block">SHAHANA</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block">Enterprise Admin</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 text-sm font-semibold">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
              { id: 'products', label: `Products (${productsList.length})`, icon: ShoppingBag },
              { id: 'quotes', label: `Quotes (${quotesList.length})`, icon: FileText },
              { id: 'spareparts', label: `Spare Parts (${SPARE_PARTS.length})`, icon: Settings },
              { id: 'reviews', label: `Reviews (${REVIEWS.length})`, icon: MessageSquare }
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#6A1B9A] text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-gray-800">
          <button
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full text-left text-xs text-purple-300 hover:underline block"
          >
            ← Back to Public Website
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900/40 text-xs font-bold transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-extrabold text-gray-900 capitalize">{activeTab} Management</h1>
            <p className="text-xs text-gray-500">Shahana Kitchen Equipment B2B Control Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-purple-100 text-[#6A1B9A] text-xs font-bold px-3 py-1.5 rounded-full border border-purple-200">
              Admin Status: Active
            </span>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm space-y-2">
                <span className="text-xs text-gray-500 font-bold uppercase">Total Listed Products</span>
                <div className="text-3xl font-heading font-extrabold text-[#6A1B9A]">{productsList.length}</div>
                <span className="text-[11px] text-emerald-600 font-semibold">Active Catalog</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm space-y-2">
                <span className="text-xs text-gray-500 font-bold uppercase">Quote Enquiries</span>
                <div className="text-3xl font-heading font-extrabold text-[#6A1B9A]">{quotesList.length}</div>
                <span className="text-[11px] text-purple-600 font-semibold">3 New Pending</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm space-y-2">
                <span className="text-xs text-gray-500 font-bold uppercase">Spare Parts Items</span>
                <div className="text-3xl font-heading font-extrabold text-[#6A1B9A]">{SPARE_PARTS.length}</div>
                <span className="text-[11px] text-emerald-600 font-semibold">In Stock Backup</span>
              </div>
              <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm space-y-2">
                <span className="text-xs text-gray-500 font-bold uppercase">Client Satisfaction</span>
                <div className="text-3xl font-heading font-extrabold text-emerald-600">4.9 / 5.0</div>
                <span className="text-[11px] text-gray-500">500+ B2B Projects</span>
              </div>
            </div>

            {/* Recent Enquiries Table */}
            <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-lg text-gray-900">Recent Quotation Requests</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 text-gray-700 font-bold uppercase border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4">Quote ID</th>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Company</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Required Product</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {quotesList.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-bold text-[#6A1B9A]">{q.id}</td>
                        <td className="py-3 px-4 font-semibold text-gray-900">{q.name}</td>
                        <td className="py-3 px-4 text-gray-600">{q.company}</td>
                        <td className="py-3 px-4 text-gray-600">{q.phone}</td>
                        <td className="py-3 px-4 text-gray-900 font-medium">{q.product}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                            q.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {q.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGEMENT */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600 font-semibold">Manage listed commercial machinery products</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="btn-purple px-4 py-2 text-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Machine</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-700 font-bold uppercase border-b border-gray-200">
                  <tr>
                    <th className="py-3.5 px-4">Machine Name</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Capacities</th>
                    <th className="py-3.5 px-4">B2B Price</th>
                    <th className="py-3.5 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {productsList.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="py-3.5 px-4 font-bold text-gray-900 flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                        <span>{p.name}</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#6A1B9A] font-semibold">{p.category}</td>
                      <td className="py-3.5 px-4 text-gray-600">{p.capacity}</td>
                      <td className="py-3.5 px-4 font-bold text-gray-900">{p.price}</td>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete Machine"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ADD PRODUCT MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-card max-w-lg w-full p-6 shadow-2xl space-y-4">
              <h3 className="text-xl font-heading font-bold text-gray-900">Add New Commercial Machine</h3>
              <form onSubmit={handleAddProduct} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Machine Name *</label>
                  <input
                    type="text"
                    required
                    value={newProd.name}
                    onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs outline-none"
                    placeholder="e.g. Commercial Wet Grinder 40L"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                    <select
                      value={newProd.category}
                      onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs outline-none bg-white"
                    >
                      <option>Wet Grinders</option>
                      <option>Tilting Wet Grinders</option>
                      <option>Pulverizers</option>
                      <option>Dough Kneaders</option>
                      <option>Vegetable Cutters</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Price (₹)</label>
                    <input
                      type="text"
                      value={newProd.price}
                      onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs outline-none"
                      placeholder="₹42,000"
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="submit" className="btn-purple flex-1 py-2.5 text-xs font-bold">Save Machine</button>
                  <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
