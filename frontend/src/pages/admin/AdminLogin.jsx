import React, { useState } from 'react';
import { 
  Lock, Mail, ShieldCheck, ArrowRight, Eye, EyeOff, Shield, User, KeyRound, 
  RotateCw, Settings, CheckCircle2, UserCheck, Sparkles 
} from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@shahanakitchen.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 600);
  };

  const autoFillDemo = () => {
    setEmail('admin@shahanakitchen.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EEFE] via-[#F8F3FF] to-[#FAF6FF] flex flex-col justify-between items-center py-6 sm:py-10 px-4 select-none font-sans">
      
      {/* Top Header Section */}
      <div className="w-full max-w-lg mx-auto text-center space-y-3 pt-2">
        
        {/* Brand Logo */}
        <div className="flex items-center justify-center cursor-pointer" onClick={autoFillDemo}>
          <img 
            src="/images/ChatGPT Image Jul 28, 2026, 01_18_49 PM.png" 
            alt="Shahana Kitchen Equipment Logo" 
            className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply drop-shadow-xs" 
          />
        </div>

        {/* Security Badge */}
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#E9D5FF]/90 text-[#6A1B9A] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-purple-300/60 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6A1B9A]" />
            <span>ENTERPRISE ADMIN PORTAL</span>
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight">
            Admin Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Shahana Kitchen Equipments Enterprise Management
          </p>
        </div>
      </div>

      {/* Main Login Card with Protruding Shield Badge */}
      <div className="relative w-full max-w-md bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(106,27,154,0.1)] border border-purple-100/80 mt-12 mb-6">
        
        {/* Floating Top Shield Icon Badge */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20">
          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#6A1B9A] to-[#4C1D95] shadow-lg flex items-center justify-center text-white border-2 border-white">
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 fill-white/20 text-white" />
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleLogin} className="space-y-4 pt-4 sm:pt-6">
          
          {/* Email Field */}
          <div className="space-y-1">
            <label className="block text-[10px] sm:text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                placeholder="admin@shahanakitchen.com"
                className="w-full bg-transparent outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400 py-1"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="block text-[10px] sm:text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                placeholder="••••••••"
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

          {/* Options Row */}
          <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
            <label className="flex items-center gap-2 cursor-pointer font-semibold select-none text-gray-700">
              <input 
                type="checkbox" 
                defaultChecked 
                className="w-4 h-4 accent-[#6A1B9A] rounded cursor-pointer border-gray-300" 
              />
              <span>Remember Device</span>
            </label>
            <button 
              type="button" 
              onClick={autoFillDemo} 
              className="text-[#6A1B9A] font-extrabold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit CTA Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] via-[#6A1B9A] to-[#4C1D95] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-2xl shadow-lg shadow-purple-900/25 hover:shadow-purple-900/40 transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
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

        {/* Divider */}
        <div className="relative my-5 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-100"></div>
          </div>
          <span className="relative bg-white px-3 text-[11px] font-semibold text-gray-400">
            or continue with
          </span>
        </div>

        {/* Demo Access Card */}
        <div className="bg-[#F7F0FE] rounded-2xl p-3.5 border border-purple-100/90 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 bg-purple-200/80 text-[#6A1B9A] rounded-xl flex items-center justify-center shrink-0">
              <UserCheck className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0 text-xs">
              <div className="font-extrabold text-gray-900 leading-tight">Demo Login Access</div>
              <div className="text-gray-500 font-medium text-[11px] truncate">Explore the portal with demo credentials.</div>
            </div>
          </div>
          <button
            type="button"
            onClick={autoFillDemo}
            className="bg-white hover:bg-purple-50 text-[#6A1B9A] font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-purple-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
          >
            <span>Access Demo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Footer Feature Badges & Copyright */}
      <div className="w-full max-w-xl mx-auto space-y-6 pt-2 pb-2">
        
        {/* 3 Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
          
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#6A1B9A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-gray-900 leading-tight">Secure Access</div>
              <div className="text-[10.5px] text-gray-500 font-medium">Enterprise-grade security</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#6A1B9A] flex items-center justify-center shrink-0">
              <RotateCw className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-gray-900 leading-tight">Real-time Sync</div>
              <div className="text-[10.5px] text-gray-500 font-medium">Live data and analytics</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#6A1B9A] flex items-center justify-center shrink-0">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-gray-900 leading-tight">Smart Management</div>
              <div className="text-[10.5px] text-gray-500 font-medium">Streamline your operations</div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 font-medium">
          © 2025 <span className="font-bold text-[#6A1B9A]">Shahana Kitchen Equipments</span>. All rights reserved.
        </div>

      </div>

    </div>
  );
}
