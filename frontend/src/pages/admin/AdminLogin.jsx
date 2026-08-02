import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, ArrowRight, Eye, EyeOff, Sparkles, KeyRound } from 'lucide-react';
import { logoImg } from '../../assets/clientAssets';

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
    <div className="min-h-screen bg-[#0E0617] relative flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Background Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`, 
          backgroundSize: '28px 28px' 
        }}
      ></div>

      {/* Main Glassmorphism Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-9 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7),0_0_50px_rgba(106,27,154,0.35)] border border-purple-200/60 overflow-hidden">
        
        {/* Glowing Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6A1B9A] via-pink-500 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>

        {/* Brand Header */}
        <div className="text-center space-y-3 mb-6 sm:mb-8">
          
          {/* Logo with 3D Ring */}
          <div className="relative inline-block group cursor-pointer" onClick={autoFillDemo}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full p-1 border-2 border-purple-500 shadow-xl flex items-center justify-center mx-auto overflow-hidden">
              <img 
                src={logoImg} 
                alt="MS Shahana Kitchen Equipment Logo" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </div>

          {/* Security Badge */}
          <div className="inline-flex items-center gap-1.5 bg-purple-100/80 border border-purple-300/80 text-[#6A1B9A] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6A1B9A]" />
            <span>ENTERPRISE ADMIN PORTAL</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight">
              ADMIN PORTAL LOGIN
            </h2>
            <p className="text-xs font-medium text-gray-500 mt-1">
              Shahana Kitchen Equipment Enterprise Management
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Email Field */}
          <div>
            <label className="block text-[11px] sm:text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
              Admin Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@shahanakitchen.com"
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 bg-gray-50/80 rounded-2xl border border-gray-200 focus:border-[#6A1B9A] focus:bg-white focus:ring-4 focus:ring-purple-500/15 outline-none text-xs sm:text-sm font-semibold text-gray-900 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[11px] sm:text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
              Security Password
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-3 sm:py-3.5 bg-gray-50/80 rounded-2xl border border-gray-200 focus:border-[#6A1B9A] focus:bg-white focus:ring-4 focus:ring-purple-500/15 outline-none text-xs sm:text-sm font-semibold text-gray-900 transition-all placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#6A1B9A] transition-colors p-1"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-xs text-gray-600 pt-0.5">
            <label className="flex items-center gap-2 cursor-pointer font-medium select-none">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6A1B9A] rounded cursor-pointer" />
              <span>Remember Device</span>
            </label>
            <button type="button" onClick={autoFillDemo} className="text-[#6A1B9A] font-extrabold hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#6A1B9A] via-purple-700 to-purple-900 hover:from-purple-800 hover:to-indigo-950 text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-2xl shadow-xl shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <span>SIGN IN TO DASHBOARD</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Box */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <div className="bg-gradient-to-r from-purple-50/90 to-indigo-50/70 border border-purple-200/80 rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 bg-[#6A1B9A] text-white rounded-xl flex items-center justify-center shrink-0">
                <KeyRound className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 text-[11px]">
                <div className="font-extrabold text-gray-900">Demo Login Access:</div>
                <div className="text-gray-600 font-medium truncate">admin@shahanakitchen.com / admin123</div>
              </div>
            </div>
            <button
              onClick={autoFillDemo}
              className="bg-[#6A1B9A] hover:bg-purple-900 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-xl shrink-0 transition-colors shadow-xs"
            >
              Auto Fill
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
