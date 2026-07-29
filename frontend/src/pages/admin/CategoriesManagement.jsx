import React, { useState } from 'react';
import { FolderTree, Plus, Edit3, Trash2, Package } from 'lucide-react';

export default function CategoriesManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Wet Grinders', slug: 'wet-grinders', count: 24, status: 'Active', desc: 'Commercial wet grinding equipment for hotels & restaurants' },
    { id: 2, name: 'Tilting Wet Grinders', slug: 'tilting-wet-grinders', count: 18, status: 'Active', desc: 'Heavy duty tilting grinders with hydraulic & manual tilt' },
    { id: 3, name: 'Pulverizers', slug: 'pulverizers', count: 16, status: 'Active', desc: 'Dry spice and grain pulverizing machinery' },
    { id: 4, name: 'Dough Kneaders', slug: 'dough-kneaders', count: 12, status: 'Active', desc: 'Spiral dough mixers for bakeries and pizza shops' },
    { id: 5, name: 'Vegetable Cutters', slug: 'vegetable-cutters', count: 15, status: 'Active', desc: 'Multi-blade vegetable slicing and dicing machines' },
    { id: 6, name: 'Mixer Machines', slug: 'mixer-machines', count: 10, status: 'Active', desc: 'Heavy duty commercial food mixers' },
    { id: 7, name: 'Coconut Scrapers', slug: 'coconut-scrapers', count: 8, status: 'Active', desc: 'Countertop double head coconut scrapers' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCat, setNewCat] = useState({ name: '', desc: '' });

  const handleAddCategory = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now(),
      name: newCat.name,
      slug: newCat.name.toLowerCase().replace(/\s+/g, '-'),
      count: 0,
      status: 'Active',
      desc: newCat.desc || 'Commercial kitchen machinery category'
    };
    setCategories([...categories, item]);
    setShowAddModal(false);
    setNewCat({ name: '', desc: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete category?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Categories Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Organize product catalog categories and taxonomy
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#6A1B9A] hover:bg-[#5A1582] text-white rounded-xl text-xs font-bold shadow-md shadow-purple-900/20 transition-all w-max"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <FolderTree className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {cat.status}
              </span>
            </div>

            <div>
              <h3 className="font-heading font-black text-base text-slate-900">{cat.name}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cat.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-700">
                <Package className="w-4 h-4 text-purple-600" />
                <span>{cat.count} Listed Machinery</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 text-slate-400 hover:text-purple-600 rounded-lg">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(cat.id)} className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-heading font-black text-slate-900">Add New Category</h3>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  value={newCat.name}
                  onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                  placeholder="e.g. Industrial Peelers"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Description</label>
                <textarea
                  rows="3"
                  value={newCat.desc}
                  onChange={(e) => setNewCat({ ...newCat, desc: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
                  placeholder="Commercial food preparation machinery..."
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold">
                  Save Category
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
