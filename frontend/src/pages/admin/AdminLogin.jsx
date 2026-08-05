import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, ArrowRight, Eye, EyeOff, Shield, User, AlertCircle } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Strict Admin Authentication Check
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      if (cleanEmail === 'admin@shahanakitchen.com' && cleanPassword === 'admin123') {
        setError('');
        onLoginSuccess();
      } else {
        setError('Access Denied! Incorrect email or password. Only admin@shahanakitchen.com with admin123 is allowed.');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EEFE] via-[#F8F3FF] to-[#FAF6FF] flex flex-col justify-center items-center py-10 px-4 select-none font-sans">
      
      {/* Top Brand Header Section */}
      <div className="w-full max-w-md mx-auto text-center space-y-3 mb-8">
        <div className="flex items-center justify-center">
          <img 
            src="/images/ChatGPT Image Jul 28, 2026, 01_18_49 PM.png" 
            alt="Shahana Kitchen Equipment Logo" 
            className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply drop-shadow-xs" 
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#E9D5FF]/90 text-[#6A1B9A] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-purple-300/60 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6A1B9A]" />
            <span>ENTERPRISE ADMIN PORTAL</span>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight">
            Admin Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Sign in to access your administrative management dashboard
          </p>
        </div>
      </div>

      {/* Main Production Clean Login Card */}
      <div className="relative w-full max-w-md bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(106,27,154,0.1)] border border-purple-100/80">
        
        {/* Floating Top Shield Icon Badge */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20">
          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#6A1B9A] to-[#4C1D95] shadow-lg flex items-center justify-center text-white border-2 border-white">
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 fill-white/20 text-white" />
            </div>
          </div>
        </div>

        {/* Error Notification Alert */}
        {error && (
          <div className="mt-4 mb-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-2xl flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Real-time Login Form */}
        <form onSubmit={handleLogin} className="space-y-5 pt-4 sm:pt-6">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
              ADMIN EMAIL ADDRESS
            </label>
            <div className="flex items-center gap-3 p-1.5 pl-3 rounded-2xl border border-purple-100 bg-[#FBF8FF] focus-within:border-[#6A1B9A] focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-500/15 transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#6A1B9A] flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter admin email address"
                className="w-full bg-transparent outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400 py-1"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
              SECURITY PASSWORD
            </label>
            <div className="flex items-center gap-3 p-1.5 pl-3 pr-2.5 rounded-2xl border border-purple-100 bg-[#FBF8FF] focus-within:border-[#6A1B9A] focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-500/15 transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#6A1B9A] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="w-full bg-transparent outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400 py-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-[#6A1B9A] transition-colors p-1 shrink-0"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] via-[#6A1B9A] to-[#4C1D95] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-2xl shadow-lg shadow-purple-900/25 hover:shadow-purple-900/40 transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer mt-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <span>SIGN IN TO DASHBOARD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

      </div>

      {/* Clean Copyright Footer */}
      <div className="text-center text-xs text-gray-500 font-medium pt-4">
        © {new Date().getFullYear()} <span className="font-bold text-[#6A1B9A]">Shahana Kitchen Equipments</span>. All rights reserved.
      </div>

    </div>
  );
}
