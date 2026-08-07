import React, { useState } from 'react';
import { SPARE_PARTS } from '../../data/siteData';
import { Plus, Trash2 } from 'lucide-react';

export default function SparePartsManagement() {
  const [parts, setParts] = useState(SPARE_PARTS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPart, setNewPart] = useState({ name: '', category: 'Belts', price: '₹750', compatibility: '' });

  const handleAddPart = (e) => {
    e.preventDefault();
    const item = {
      id: `sp-${Date.now()}`,
      name: newPart.name,
      category: newPart.category,
      price: newPart.price,
      compatibility: newPart.compatibility || 'Universal Fit',
      image: '/images/v belt.webp'
    };
    setParts([item, ...parts]);
    setShowAddModal(false);
    setNewPart({ name: '', category: 'Belts', price: '₹750', compatibility: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete spare part?')) {
      setParts(parts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Spare Parts Inventory ({parts.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage genuine machinery replacement spare parts
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20 transition-all w-max"
        >
          <Plus className="w-4 h-4" />
          <span>Add Spare Part</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Part Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Compatibility</th>
                <th className="py-3.5 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {parts.map((p) => (
                <tr key={p.id} className="hover:bg-purple-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover bg-slate-100 border border-slate-200" />
                    <span>{p.name}</span>
                  </td>
                  <td className="py-3.5 px-4 text-purple-700 font-bold">{p.category}</td>
                  <td className="py-3.5 px-4 font-black text-slate-900">{p.price}</td>
                  <td className="py-3.5 px-4 text-slate-600">{p.compatibility}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button onClick={() => handleDelete(p.id)} className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-heading font-black text-slate-900">Add Spare Part</h3>
            <form onSubmit={handleAddPart} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Part Name *</label>
                <input
                  type="text"
                  required
                  value={newPart.name}
                  onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                  placeholder="e.g. Heavy Duty V-Belt"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Price (₹)</label>
                  <input
                    type="text"
                    value={newPart.price}
                    onChange={(e) => setNewPart({ ...newPart, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Compatibility</label>
                  <input
                    type="text"
                    value={newPart.compatibility}
                    onChange={(e) => setNewPart({ ...newPart, compatibility: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
                    placeholder="e.g. Wet Grinders 25L"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold">Save Part</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
