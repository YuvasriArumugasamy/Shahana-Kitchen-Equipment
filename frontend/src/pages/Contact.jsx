import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, Lock, Calendar } from 'lucide-react';
import { pushCloudNotification } from '../services/cloudNotifications';

export default function Contact({ onOpenQuoteModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Commercial Wet Grinders',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    // Create notification alert for Admin Dashboard
    const newEnquiryAlert = {
      id: Date.now(),
      title: `Enquiry from ${formData.name}`,
      desc: `Phone: ${formData.phone} | Subject: ${formData.subject} | Message: ${formData.message}`,
      time: 'Just now',
      unread: true,
      type: 'enquiry',
      priority: 'High',
      senderName: formData.name,
      senderPhone: formData.phone,
      subject: formData.subject,
      fullMessage: formData.message
    };

    // Push to Render MongoDB Backend & Cloud API so Admin receives it across ALL devices
    await pushCloudNotification(newEnquiryAlert);

    setSubmitted(true);
  };

  return (
    <div className="space-y-8 sm:space-y-12">

      {/* HERO BANNER - STUNNING VIDEO BACKGROUND WITH ANIMATIONS */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center text-white overflow-hidden py-14 sm:py-20">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="/images/ithu_yellam_vachi_oru_super_an (3).mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/80 to-black/75 pointer-events-none"></div>
        <div className="max-w-container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Animated Glowing Badge */}
            <div className="animate-hero-slide-up animation-delay-100 inline-flex items-center gap-2 bg-[#6A1B9A]/90 backdrop-blur-md border border-purple-400/30 text-purple-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-100"></span>
              </span>
              <span>GET IN TOUCH WITH US</span>
            </div>

            {/* Animated Title */}
            <h1 className="animate-hero-slide-up animation-delay-200 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] leading-tight">
              CONTACT <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-300">US</span>
            </h1>

            <p className="animate-hero-slide-up animation-delay-300 text-purple-100 text-sm sm:text-lg max-w-2xl leading-relaxed font-semibold drop-shadow">
              We're here to help you! Get in touch with us for equipment quotes, custom machinery specifications, spare parts inquiries, or site installation support across Tamil Nadu.
            </p>

            <div className="animate-hero-slide-up animation-delay-400 space-y-3 pt-2 text-xs sm:text-sm font-semibold text-purple-100">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-purple-800/90 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-[#6A1B9A] transition-all duration-300 shadow border border-purple-400/30">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919994944123" className="hover:underline font-bold text-white text-xs sm:text-base transition-colors">+91 99949 44123</a>
              </div>

              <a 
                href="https://maps.google.com/?q=5/120+G,+Shop+No.7,+M.S.K.+Building,+Sankaran+Kovil+Road,+Ramayanpatti,+Tirunelveli+-+627358" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 group hover:text-purple-200 transition-colors"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-purple-800/90 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#6A1B9A] transition-all duration-300 shadow border border-purple-400/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm leading-snug hover:underline font-medium">5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 CONTACT CARDS GRID */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* CALL US */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm uppercase">CALL US</h3>
            <a href="tel:+919994944123" className="font-bold text-gray-900 text-xs sm:text-sm block hover:text-[#6A1B9A]">+91 99949 44123</a>
            <p className="text-[11px] sm:text-xs text-gray-500">24h Support Available</p>
          </div>

          {/* WHATSAPP US */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shrink-0">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm uppercase">WHATSAPP US</h3>
            <a href="https://wa.me/919994944123" target="_blank" rel="noreferrer" className="font-bold text-gray-900 text-xs sm:text-sm block hover:text-[#6A1B9A]">+91 99949 44123</a>
            <p className="text-[11px] sm:text-xs text-gray-500">Quick reply on WhatsApp</p>
          </div>

          {/* VISIT US */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm uppercase">VISIT US</h3>
            <a 
              href="https://maps.google.com/?q=5/120+G,+Shop+No.7,+M.S.K.+Building,+Sankaran+Kovil+Road,+Ramayanpatti,+Tirunelveli+-+627358" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] sm:text-xs text-gray-600 hover:text-[#6A1B9A] hover:underline leading-snug block"
            >
              5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Tirunelveli - 627358
            </a>
          </div>

        </div>
      </section>

      {/* FORM & GOOGLE MAP / BUSINESS HOURS SECTION - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Form Box */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
            <h3 className="font-heading font-extrabold text-gray-900 text-sm sm:text-base uppercase mb-1">SEND US A MESSAGE</h3>
            <p className="text-xs text-gray-500 mb-4 sm:mb-6">Fill out the form and our team will get back to you shortly.</p>

            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-3">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Thank You!</h4>
                <p className="text-xs text-gray-600">Your message has been sent successfully. We will call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]" 
                  />
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number *" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]" 
                  />
                </div>
                
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-xs outline-none bg-white text-gray-700 font-medium"
                >
                  <option value="Commercial Wet Grinders">Commercial Wet Grinders</option>
                  <option value="Pulverizer Machines">Pulverizer Machines</option>
                  <option value="Dough Kneaders">Dough Kneaders</option>
                  <option value="Vegetable Cutters">Vegetable Cutters</option>
                  <option value="Spare Parts">Spare Parts</option>
                  <option value="AMC / Repair Support">AMC / Repair Support</option>
                </select>

                <textarea 
                  rows="4" 
                  required 
                  placeholder="Your Message *" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]"
                ></textarea>

                <button type="submit" className="btn-purple w-full py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>

                <p className="text-[10px] sm:text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 shrink-0" />
                  <span>Your information is safe with us. We will never share your details.</span>
                </p>
              </form>
            )}
          </div>

          {/* Right Map & Business Hours Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Google Map Box Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative h-56 sm:h-64">
              <iframe
                title="Shahana Kitchen Equipment Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.468846328328!2d77.683!3d8.733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDQnNTguOCJOIDc3wrA0MCc1OC44IkU!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
