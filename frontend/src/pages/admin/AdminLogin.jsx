import React, { useState } from 'react';
import { Lock, Mail, Shield, User, ArrowRight } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@shahanakitchen.com');
  const [password, setPassword] = useState('admin123');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-[#6A1B9A] to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-card max-w-md w-full p-8 shadow-2xl space-y-6 border border-purple-100 relative">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-[#6A1B9A] to-purple-900 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto shadow-lg">
            S
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-gray-900">Admin Portal Login</h2>
          <p className="text-xs text-gray-500">Shahana Kitchen Equipment Enterprise Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Admin Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#6A1B9A] outline-none text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#6A1B9A] outline-none text-sm font-medium"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#6A1B9A]" />
              <span>Remember Device</span>
            </label>
            <span className="text-[#6A1B9A] font-semibold hover:underline cursor-pointer">Forgot Password?</span>
          </div>

          <button
            type="submit"
            className="btn-purple w-full py-3.5 text-sm font-bold shadow-lg flex items-center justify-center gap-2"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
          Demo Admin Credentials: <strong className="text-gray-900">admin@shahanakitchen.com / admin123</strong>
        </div>
      </div>
    </div>
  );
}
