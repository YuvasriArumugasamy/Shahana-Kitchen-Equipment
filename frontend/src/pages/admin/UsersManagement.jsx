import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function UsersManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin', email: 'admin@shahanakitchen.com', role: 'Super Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    { id: 2, name: 'Sales Manager', email: 'sales@shahanakitchen.com', role: 'Sales Lead', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    { id: 3, name: 'Inventory Manager', email: 'stock@shahanakitchen.com', role: 'Catalog Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' }
  ]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            User & Role Management ({users.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage admin team members, sub-admins, and access privileges
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6A1B9A] text-white rounded-xl text-xs font-bold">
          <Plus className="w-4 h-4" />
          <span>Add Admin User</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-extrabold uppercase border-b border-slate-200">
            <tr>
              <th className="py-3.5 px-4">User</th>
              <th className="py-3.5 px-4">Email</th>
              <th className="py-3.5 px-4">Role</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {users.map((u) => (
              <tr key={u.id}>
                <td className="py-3.5 px-4 flex items-center gap-3 font-bold text-slate-900">
                  <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover border border-purple-300" />
                  <span>{u.name}</span>
                </td>
                <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">{u.email}</td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-purple-100 text-purple-700">
                    {u.role}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {u.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
