import React, { useState } from 'react';
import { 
  Package, FolderTree, MessageSquare, FileText, Users, ShoppingCart, 
  Calendar, MoreVertical, ChevronDown, ArrowUpRight
} from 'lucide-react';

export default function DashboardOverview({ 
  productsList = [], 
  quotesList = [], 
  enquiriesList = [], 
  setActiveTab 
}) {
  const [dateRange, setDateRange] = useState('May 1, 2024 - May 31, 2024');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeFilter, setTimeFilter] = useState('This Month');

  // Enquiries source data breakdown
  const sourcesData = [
    { label: 'Website', count: 48, percentage: '33.8%', color: '#6A1B9A' },
    { label: 'WhatsApp', count: 35, percentage: '24.6%', color: '#3B82F6' },
    { label: 'Phone', count: 25, percentage: '17.6%', color: '#10B981' },
    { label: 'Email', count: 20, percentage: '14.1%', color: '#F59E0B' },
    { label: 'Others', count: 14, percentage: '9.9%', color: '#94A3B8' }
  ];

  // SVG Line Chart points for Enquiries Overview
  const chartPoints = [
    { label: 'May 1', val: 15 },
    { label: 'May 4', val: 45 },
    { label: 'May 6', val: 38 },
    { label: 'May 9', val: 58 },
    { label: 'May 11', val: 52 },
    { label: 'May 14', val: 74 },
    { label: 'May 16', val: 44 },
    { label: 'May 19', val: 68 },
    { label: 'May 21', val: 68 },
    { label: 'May 24', val: 88 },
    { label: 'May 26', val: 57 },
    { label: 'May 31', val: 74 }
  ];

  // Quick stats matching Image 1
  const stats = [
    {
      id: 'total-products',
      label: 'Total Products',
      value: productsList.length > 0 ? productsList.length : '128',
      growth: '+12.5%',
      isUp: true,
      bgColor: 'bg-purple-100/70',
      iconColor: 'bg-purple-600 text-white',
      icon: Package
    },
    {
      id: 'total-categories',
      label: 'Total Categories',
      value: '16',
      growth: '+6.3%',
      isUp: true,
      bgColor: 'bg-cyan-100/70',
      iconColor: 'bg-cyan-500 text-white',
      icon: FolderTree
    },
    {
      id: 'total-enquiries',
      label: 'Total Enquiries',
      value: enquiriesList.length > 0 ? enquiriesList.length : '142',
      growth: '+18.7%',
      isUp: true,
      bgColor: 'bg-amber-100/70',
      iconColor: 'bg-amber-500 text-white',
      icon: MessageSquare
    },
    {
      id: 'quote-requests',
      label: 'Quote Requests',
      value: quotesList.length > 0 ? quotesList.length : '89',
      growth: '+15.2%',
      isUp: true,
      bgColor: 'bg-emerald-100/70',
      iconColor: 'bg-emerald-500 text-white',
      icon: FileText
    },
    {
      id: 'total-customers',
      label: 'Total Customers',
      value: '256',
      growth: '+20.1%',
      isUp: true,
      bgColor: 'bg-indigo-100/70',
      iconColor: 'bg-indigo-600 text-white',
      icon: Users
    },
    {
      id: 'total-orders',
      label: 'Total Orders',
      value: '74',
      growth: '+10.8%',
      isUp: true,
      bgColor: 'bg-blue-100/70',
      iconColor: 'bg-blue-600 text-white',
      icon: ShoppingCart
    }
  ];

  // Table status badge formatter
  const renderStatusBadge = (status) => {
    switch(status) {
      case 'New':
        return <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-purple-100 text-purple-700">New</span>;
      case 'In Progress':
        return <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-700">In Progress</span>;
      case 'Completed':
        return <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-700">Completed</span>;
      default:
        return <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* WELCOME BANNER & DATE RANGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight flex items-center gap-2">
            Welcome back, <span className="text-purple-700">Admin! 👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Date Selector */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-purple-300 text-xs font-bold text-slate-700 transition-all"
          >
            <Calendar className="w-4 h-4 text-purple-600" />
            <span>{dateRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showDatePicker && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1 z-50 text-xs font-medium">
              {['May 1, 2024 - May 31, 2024', 'June 1, 2024 - June 30, 2024', 'Last 30 Days', 'This Year 2024'].map((range) => (
                <button
                  key={range}
                  onClick={() => { setDateRange(range); setShowDatePicker(false); }}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${
                    dateRange === range ? 'bg-purple-50 text-purple-700 font-bold' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 6 STAT METRIC CARDS (Exact match to Image 1) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((st) => {
          const IconComp = st.icon;
          return (
            <div 
              key={st.id} 
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl ${st.iconColor} flex items-center justify-center shadow-xs`}>
                  <IconComp className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">{st.label}</span>
                <div className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1">{st.value}</div>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>{st.growth}</span>
                <span className="text-slate-400 font-normal text-[10px]">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CHARTS ROW (Enquiries Overview Line Chart + Enquiries by Source Donut Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Enquiries Overview Line Chart (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-black text-base text-slate-900">Enquiries Overview</h3>
            </div>
            <div className="flex items-center gap-2">
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SVG Smooth Curve Line Chart */}
          <div className="relative h-64 w-full">
            <svg viewBox="0 0 700 240" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6A1B9A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6A1B9A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 60, 120, 180, 240].map((y, i) => (
                <g key={y}>
                  <line x1="40" y1={y} x2="680" y2={y} stroke="#F1F5F9" strokeDasharray="4 4" />
                  <text x="25" y={y + 4} fontSize="10" fill="#94A3B8" textAnchor="end">{100 - i * 25}</text>
                </g>
              ))}

              {/* Area Under Curve */}
              <path
                d="M 50 200 
                   C 90 140, 120 160, 160 110 
                   C 200 130, 240 100, 280 60 
                   C 320 140, 360 90, 400 90 
                   C 440 60, 480 130, 520 100 
                   C 560 70, 600 90, 650 65 
                   L 650 200 Z"
                fill="url(#purpleGradient)"
              />

              {/* Smooth Purple Line */}
              <path
                d="M 50 200 
                   C 90 140, 120 160, 160 110 
                   C 200 130, 240 100, 280 60 
                   C 320 140, 360 90, 400 90 
                   C 440 60, 480 130, 520 100 
                   C 560 70, 600 90, 650 65"
                fill="none"
                stroke="#6A1B9A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Glowing Data Dots */}
              {[
                { x: 50, y: 200 }, { x: 100, y: 140 }, { x: 160, y: 110 }, 
                { x: 220, y: 130 }, { x: 280, y: 60 }, { x: 340, y: 140 }, 
                { x: 400, y: 90 }, { x: 460, y: 90 }, { x: 520, y: 60 }, 
                { x: 580, y: 100 }, { x: 650, y: 65 }
              ].map((pt, index) => (
                <circle
                  key={index}
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  fill="#ffffff"
                  stroke="#6A1B9A"
                  strokeWidth="3"
                  className="hover:r-7 transition-all cursor-pointer"
                />
              ))}

              {/* X Axis Labels */}
              {chartPoints.map((pt, i) => (
                <text key={i} x={50 + i * 54} y="225" fontSize="10" fill="#94A3B8" textAnchor="middle font-medium">
                  {pt.label}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Enquiries by Source Donut Chart (1 Col) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-heading font-black text-base text-slate-900">Enquiries by Source</h3>
          </div>

          <div className="flex flex-col items-center justify-center my-2 relative">
            {/* SVG Donut Chart */}
            <svg width="180" height="180" viewBox="0 0 180 180" className="transform -rotate-90">
              {/* Donut Segments */}
              <circle cx="90" cy="90" r="65" stroke="#94A3B8" strokeWidth="24" fill="transparent" strokeDasharray="40 370" strokeDashoffset="0" />
              <circle cx="90" cy="90" r="65" stroke="#F59E0B" strokeWidth="24" fill="transparent" strokeDasharray="57 370" strokeDashoffset="-40" />
              <circle cx="90" cy="90" r="65" stroke="#10B981" strokeWidth="24" fill="transparent" strokeDasharray="72 370" strokeDashoffset="-97" />
              <circle cx="90" cy="90" r="65" stroke="#3B82F6" strokeWidth="24" fill="transparent" strokeDasharray="101 370" strokeDashoffset="-169" />
              <circle cx="90" cy="90" r="65" stroke="#6A1B9A" strokeWidth="24" fill="transparent" strokeDasharray="138 370" strokeDashoffset="-270" />
            </svg>
            
            {/* Center Total Count */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-heading font-black text-slate-900 leading-none">142</span>
              <span className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Total</span>
            </div>
          </div>

          {/* Legend Breakdown List (Image 1 match) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            {sourcesData.map((src) => (
              <div key={src.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: src.color }} />
                  <span className="font-bold text-slate-700">{src.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-slate-900">{src.count}</span>
                  <span className="text-slate-400 text-[11px] font-semibold">({src.percentage})</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* TABLES ROW (Latest Enquiries & Latest Quote Requests - Image 1 match) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Latest Enquiries Table */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-black text-base text-slate-900">Latest Enquiries</h3>
            <button 
              onClick={() => setActiveTab('enquiries')}
              className="text-xs font-extrabold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl transition-colors"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-100">
                <tr>
                  <th className="py-3 px-3">Name</th>
                  <th className="py-3 px-3">Company</th>
                  <th className="py-3 px-3">Source</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-2 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {[
                  { name: 'Ramesh Kumar', company: 'Hotel Grand', source: 'Website', date: '31 May 2024', status: 'New' },
                  { name: 'Anita Sharma', company: 'Sharma Catering', source: 'WhatsApp', date: '31 May 2024', status: 'In Progress' },
                  { name: 'Mohammed Ali', company: 'Ali Restaurant', source: 'Phone', date: '30 May 2024', status: 'New' },
                  { name: 'Vikram Singh', company: 'Singh Bakery', source: 'Email', date: '30 May 2024', status: 'Completed' },
                  { name: 'Sunil Patel', company: 'Patel Foods', source: 'Website', date: '29 May 2024', status: 'In Progress' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-900">{row.name}</td>
                    <td className="py-3 px-3 text-slate-600">{row.company}</td>
                    <td className="py-3 px-3 text-slate-600">{row.source}</td>
                    <td className="py-3 px-3 text-slate-500">{row.date}</td>
                    <td className="py-3 px-3">{renderStatusBadge(row.status)}</td>
                    <td className="py-3 px-2 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-700 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Quote Requests Table */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-black text-base text-slate-900">Latest Quote Requests</h3>
            <button 
              onClick={() => setActiveTab('quotes')}
              className="text-xs font-extrabold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl transition-colors"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-100">
                <tr>
                  <th className="py-3 px-3">Name</th>
                  <th className="py-3 px-3">Product</th>
                  <th className="py-3 px-3">Quantity</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-2 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {[
                  { name: 'Ramesh Kumar', product: 'Wet Grinder', qty: '2', date: '31 May 2024', status: 'New' },
                  { name: 'Anita Sharma', product: 'Pulverizer Machine', qty: '1', date: '31 May 2024', status: 'In Progress' },
                  { name: 'Mohammed Ali', product: 'Veg Cutting Machine', qty: '3', date: '30 May 2024', status: 'New' },
                  { name: 'Vikram Singh', product: 'Dough Kneader', qty: '1', date: '29 May 2024', status: 'Completed' },
                  { name: 'Sunil Patel', product: 'Mixer Grinder', qty: '2', date: '29 May 2024', status: 'In Progress' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-900">{row.name}</td>
                    <td className="py-3 px-3 text-slate-900 font-semibold">{row.product}</td>
                    <td className="py-3 px-3 text-slate-600 font-bold">{row.qty}</td>
                    <td className="py-3 px-3 text-slate-500">{row.date}</td>
                    <td className="py-3 px-3">{renderStatusBadge(row.status)}</td>
                    <td className="py-3 px-2 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-700 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
