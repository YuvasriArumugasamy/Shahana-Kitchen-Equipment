import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function EnquiriesManagement({ enquiriesList = [], setEnquiriesList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');

  const [enquiries, setEnquiries] = useState(enquiriesList.length > 0 ? enquiriesList : [
    { id: 'ENQ-201', name: 'Ramesh Kumar', company: 'Hotel Grand', phone: '+91 98765 43210', email: 'ramesh@hotelgrand.com', source: 'Website', date: '31 May 2024', status: 'New', message: 'Interested in commercial wet grinder 25L and dough kneader 10kg package deal.' },
    { id: 'ENQ-202', name: 'Anita Sharma', company: 'Sharma Catering', phone: '+91 94433 11223', email: 'anita@sharmacatering.in', source: 'WhatsApp', date: '31 May 2024', status: 'In Progress', message: 'Need urgent price quote for 3 units of heavy duty pulverizer machine.' },
    { id: 'ENQ-203', name: 'Mohammed Ali', company: 'Ali Restaurant', phone: '+91 99887 76655', email: 'ali@restaurant.com', source: 'Phone', date: '30 May 2024', status: 'New', message: 'Requesting catalog and warranty terms for vegetable cutting machine.' },
    { id: 'ENQ-204', name: 'Vikram Singh', company: 'Singh Bakery', phone: '+91 91234 56789', email: 'vikram@singhbakery.com', source: 'Email', date: '30 May 2024', status: 'Completed', message: 'Order placed for spiral dough kneader 25kg.' },
    { id: 'ENQ-205', name: 'Sunil Patel', company: 'Patel Foods', phone: '+91 97766 55443', email: 'sunil@patelfoods.com', source: 'Website', date: '29 May 2024', status: 'In Progress', message: 'Inquiring about coconut scraper double head availability.' }
  ]);

  const updateStatus = (id, newStatus) => {
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const filteredEnquiries = enquiries.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.phone.includes(searchTerm);
    const matchesSource = sourceFilter === 'All' || e.source === sourceFilter;
    return matchesSearch && matchesSource;
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Customer Enquiries ({enquiries.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage incoming B2B machinery lead enquiries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search enquiries..."
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:border-purple-500"
            />
          </div>
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none"
          >
            <option value="All">All Sources</option>
            <option value="Website">Website</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Enquiry ID</th>
                <th className="py-3.5 px-4">Client Name</th>
                <th className="py-3.5 px-4">Company</th>
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">Source</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-center">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredEnquiries.map((e) => (
                <tr key={e.id} className="hover:bg-purple-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-purple-700">{e.id}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{e.name}</td>
                  <td className="py-3.5 px-4 text-slate-600">{e.company}</td>
                  <td className="py-3.5 px-4 text-slate-600">
                    <div className="font-semibold text-slate-800">{e.phone}</div>
                    <div className="text-[10px] text-slate-400">{e.email}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-slate-100 text-slate-700">
                      {e.source}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{e.date}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={e.status}
                      onChange={(evt) => updateStatus(e.id, evt.target.value)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold outline-none border-none ${
                        e.status === 'New' ? 'bg-purple-100 text-purple-700' :
                        e.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={`https://wa.me/${e.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-[11px] hover:bg-emerald-200"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${e.phone}`}
                        className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg font-bold text-[11px] hover:bg-blue-200"
                      >
                        Call
                      </a>
                    </div>
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
