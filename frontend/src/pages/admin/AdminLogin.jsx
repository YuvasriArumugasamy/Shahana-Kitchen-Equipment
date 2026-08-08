import React, { useState } from 'react';
import { 
  Lock, Mail, ShieldCheck, ArrowRight, Eye, EyeOff, Shield, User, X, Sparkles, KeyRound, ArrowLeft 
} from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

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
        localStorage.setItem('shahana_admin_auth', 'true');
        onLoginSuccess();
      } else {
        setError('Invalid email or password');
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }
    }, 600);
  };

  const autoFillDemo = () => {
    setEmail('admin@shahanakitchen.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-[#FAF6FF] relative flex flex-col justify-between items-center py-8 sm:py-12 px-4 select-none font-sans overflow-hidden">
      
      {/* Clean Background */}

      {/* Subtle Tech Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(#6A1B9A 1.5px, transparent 1.5px)`, 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* Top Brand Header Section */}
      <div className="relative z-10 w-full max-w-md mx-auto text-center space-y-3.5 pt-2">
        
        {/* Levitate Logo with 3D Hover Effect */}
        <div className="flex items-center justify-center cursor-pointer group" onClick={autoFillDemo}>
          <div className="p-2 rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-purple-100 group-hover:scale-105 group-hover:shadow-purple-900/15 transition-all duration-300">
            <img 
              src="/images/shahana-logo-combined.png" 
              alt="Shahana Kitchen Equipment Logo" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-xs" 
            />
          </div>
        </div>


        {/* Titles with 3D Gradient */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight">
            Admin Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold">
            Sign in to access your administrative management dashboard
          </p>
        </div>
      </div>

      {/* Main Glassmorphism Login Card */}
      <div className={`relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[32px] p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(106,27,154,0.18)] border border-purple-200/80 mt-12 mb-6 transition-all duration-300 ${
        isShaking ? 'animate-bounce' : ''
      }`}>
        
        {/* Floating Levitating Shield Icon Badge */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-20 h-20 bg-white rounded-full p-1.5 shadow-xl flex items-center justify-center border border-purple-100">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#6A1B9A] to-[#4C1D95] shadow-lg flex items-center justify-center text-white border-2 border-white transform hover:rotate-6 transition-transform">
              <Shield className="w-9 h-9 fill-white/20 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Dark Toast Error Alert Notification */}
        {error && (
          <div className="mt-4 mb-2 p-3.5 bg-[#0D1322] border border-slate-800 text-white text-xs sm:text-sm font-bold rounded-2xl flex items-center gap-3 shadow-2xl animate-hero-slide-up">
            <div className="w-6 h-6 rounded-full bg-[#EF4444] flex items-center justify-center shrink-0 shadow-md animate-pulse">
              <X className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
            <span className="tracking-wide">{error}</span>
          </div>
        )}

        {/* Real-time Login Form */}
        <form onSubmit={handleLogin} className="space-y-5 pt-4 sm:pt-6">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
              ADMIN EMAIL ADDRESS
            </label>
            <div className="flex items-center gap-3 p-1.5 pl-3 rounded-2xl border border-purple-200/90 bg-[#FBF8FF] focus-within:border-[#6A1B9A] focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-500/20 shadow-xs transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#6A1B9A] group-focus-within:bg-[#6A1B9A] group-focus-within:text-white flex items-center justify-center shrink-0 transition-colors">
                <User className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter admin email address"
                className="w-full bg-transparent outline-none text-xs sm:text-sm font-bold text-gray-900 placeholder:text-gray-400 py-1"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
              SECURITY PASSWORD
            </label>
            <div className="flex items-center gap-3 p-1.5 pl-3 pr-2.5 rounded-2xl border border-purple-200/90 bg-[#FBF8FF] focus-within:border-[#6A1B9A] focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-500/20 shadow-xs transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#6A1B9A] group-focus-within:bg-[#6A1B9A] group-focus-within:text-white flex items-center justify-center shrink-0 transition-colors">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="w-full bg-transparent outline-none text-xs sm:text-sm font-bold text-gray-900 placeholder:text-gray-400 py-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-[#6A1B9A] transition-colors p-1 shrink-0"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#8B5CF6] via-[#6A1B9A] to-[#4C1D95] hover:from-[#7C3AED] hover:to-[#3B0764] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-2xl shadow-xl shadow-purple-900/30 hover:shadow-purple-900/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer mt-2 shine-overlay"
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

      </div>

      {/* Clean Copyright Footer */}
      <div className="relative z-10 text-center text-xs text-gray-500 font-semibold pt-4">
        © {new Date().getFullYear()} <span className="font-bold text-[#6A1B9A]">Shahana Kitchen Equipments</span>. All rights reserved.
      </div>

    </div>
  );
}
