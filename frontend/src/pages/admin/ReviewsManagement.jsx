import React, { useState } from 'react';
import { REVIEWS } from '../../data/siteData';
import { Star, CheckCircle2, Trash2, EyeOff } from 'lucide-react';

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState(REVIEWS.map(r => ({ ...r, status: 'Approved' })));

  const toggleStatus = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: r.status === 'Approved' ? 'Hidden' : 'Approved' } : r));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete review?')) {
      setReviews(reviews.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
          Client Reviews & Testimonials ({reviews.length})
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
          Moderate B2B client reviews displayed on website
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-base text-slate-900">{rev.name}</h3>
                <p className="text-xs text-slate-500">{rev.type} • {rev.city}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                rev.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'
              }`}>
                {rev.status}
              </span>
            </div>

            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-xs text-slate-700 italic leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              "{rev.comment}"
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold">
              <button
                onClick={() => toggleStatus(rev.id)}
                className="text-purple-600 hover:underline flex items-center gap-1"
              >
                {rev.status === 'Approved' ? <EyeOff className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                <span>{rev.status === 'Approved' ? 'Hide Review' : 'Approve Review'}</span>
              </button>

              <button onClick={() => handleDelete(rev.id)} className="text-rose-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
