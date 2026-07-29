import React, { useState } from 'react';
import { Printer } from 'lucide-react';

export default function QuotesManagement({ quotesList = [], setQuotesList }) {
  const [quotes, setQuotes] = useState(quotesList.length > 0 ? quotesList : [
    { id: 'Q-101', name: 'Ramesh Kumar', company: 'Hotel Grand', phone: '+91 98765 43210', product: 'Commercial Wet Grinder 25L', quantity: 2, status: 'New', date: '31 May 2024' },
    { id: 'Q-102', name: 'Anita Sharma', company: 'Sharma Catering', phone: '+91 94433 11223', product: 'Pulverizer Machine 5 HP', quantity: 1, status: 'In Progress', date: '31 May 2024' },
    { id: 'Q-103', name: 'Mohammed Ali', company: 'Ali Restaurant', phone: '+91 99887 76655', product: 'Vegetable Cutting Machine', quantity: 3, status: 'New', date: '30 May 2024' },
    { id: 'Q-104', name: 'Vikram Singh', company: 'Singh Bakery', phone: '+91 91234 56789', product: 'Spiral Dough Kneader 10kg', quantity: 1, status: 'Completed', date: '29 May 2024' },
    { id: 'Q-105', name: 'Sunil Patel', company: 'Patel Foods', phone: '+91 97766 55443', product: 'Mixer Grinder Heavy Duty', quantity: 2, status: 'In Progress', date: '29 May 2024' }
  ]);

  const updateStatus = (id, newStatus) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status: newStatus } : q));
  };

  const handlePrintQuote = (q) => {
    window.print();
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Quote Requests ({quotes.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            B2B Commercial Machinery Quotation Proposals
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-xs transition-all w-max"
        >
          <Printer className="w-4 h-4 text-purple-600" />
          <span>Print All Quotes</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Quote ID</th>
                <th className="py-3.5 px-4">Client Name</th>
                <th className="py-3.5 px-4">Company</th>
                <th className="py-3.5 px-4">Phone</th>
                <th className="py-3.5 px-4">Requested Machinery</th>
                <th className="py-3.5 px-4">Qty</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {quotes.map((q) => (
                <tr key={q.id} className="hover:bg-purple-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-purple-700">{q.id}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{q.name}</td>
                  <td className="py-3.5 px-4 text-slate-600">{q.company}</td>
                  <td className="py-3.5 px-4 text-slate-800 font-semibold">{q.phone}</td>
                  <td className="py-3.5 px-4 text-slate-900 font-bold">{q.product}</td>
                  <td className="py-3.5 px-4 font-black text-slate-900">{q.quantity}</td>
                  <td className="py-3.5 px-4 text-slate-500">{q.date}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={q.status}
                      onChange={(evt) => updateStatus(q.id, evt.target.value)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold outline-none border-none ${
                        q.status === 'New' ? 'bg-purple-100 text-purple-700' :
                        q.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => handlePrintQuote(q)}
                      className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                      title="Print Quote PDF"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
