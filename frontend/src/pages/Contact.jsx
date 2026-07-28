import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, Lock, Calendar } from 'lucide-react';

export default function Contact({ onOpenQuoteModal }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 space-y-12">

      {/* HERO BANNER WITH KITCHEN BACKGROUND - Exact Reference Match */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white overflow-hidden py-16">
        <div className="max-w-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
              CONTACT <span className="text-purple-300">US</span>
            </h1>
            <p className="text-purple-100 text-sm max-w-lg leading-relaxed">
              We're here to help you! Get in touch with us for any queries, support or business enquiries.
            </p>

            <div className="space-y-3 pt-2 text-xs font-semibold text-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+918675767640" className="hover:underline font-bold text-white text-sm">+91 86757 67640</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@shahanakitchen.com</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358</span>
              </div>
            </div>
          </div>

          {/* Right Commercial Kitchen Image */}
          <div className="lg:col-span-6">
            <div className="rounded-card overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-2">
              <img src="/images/caterin unit installation.png" alt="Commercial Kitchen Setup" className="w-full h-72 object-cover rounded-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* 4 CONTACT CARDS GRID - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CALL US */}
          <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-sm uppercase">CALL US</h3>
            <a href="tel:+918675767640" className="font-bold text-gray-900 text-sm block hover:text-[#6A1B9A]">+91 86757 67640</a>
            <p className="text-xs text-gray-500">Mon - Sat : 9.00 AM - 7.00 PM</p>
          </div>

          {/* WHATSAPP US */}
          <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-sm uppercase">WHATSAPP US</h3>
            <a href="https://wa.me/918675767640" target="_blank" rel="noreferrer" className="font-bold text-gray-900 text-sm block hover:text-[#6A1B9A]">+91 86757 67640</a>
            <p className="text-xs text-gray-500">Quick reply on WhatsApp</p>
          </div>

          {/* EMAIL US */}
          <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-sm uppercase">EMAIL US</h3>
            <span className="font-bold text-gray-900 text-xs block truncate">info@shahanakitchen.com</span>
            <p className="text-xs text-gray-500">We reply within 24 hrs</p>
          </div>

          {/* VISIT US */}
          <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm text-center space-y-2 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-gray-900 text-sm uppercase">VISIT US</h3>
            <p className="text-xs text-gray-600 leading-snug">5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Tirunelveli - 627358</p>
          </div>

        </div>
      </section>

      {/* FORM & GOOGLE MAP / BUSINESS HOURS SECTION - Exact Reference Match */}
      <section className="max-w-container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form Box */}
          <div className="lg:col-span-6 bg-white rounded-card p-8 border border-gray-200 shadow-sm">
            <h3 className="font-heading font-extrabold text-gray-900 text-base uppercase mb-1">SEND US A MESSAGE</h3>
            <p className="text-xs text-gray-500 mb-6">Fill out the form and our team will get back to you shortly.</p>

            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900 text-lg">Thank You!</h4>
                <p className="text-xs text-gray-600">Your message has been sent successfully. We will call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name *" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]" />
                  <input type="tel" required placeholder="Phone Number *" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]" />
                </div>
                <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]" />
                
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs outline-none bg-white text-gray-700">
                  <option>Select Subject / Machine Category</option>
                  <option>Commercial Wet Grinders</option>
                  <option>Pulverizer Machines</option>
                  <option>Dough Kneaders</option>
                  <option>Vegetable Cutters</option>
                  <option>Spare Parts</option>
                  <option>AMC / Repair Support</option>
                </select>

                <textarea rows="4" required placeholder="Your Message *" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs outline-none focus:border-[#6A1B9A]"></textarea>

                <button type="submit" className="btn-purple w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Your information is safe with us. We will never share your details.</span>
                </p>
              </form>
            )}
          </div>

          {/* Right Map & Business Hours Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Google Map Box Placeholder */}
            <div className="bg-white rounded-card overflow-hidden border border-gray-200 shadow-sm relative h-64">
              <iframe
                title="Shahana Kitchen Equipment Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.468846328328!2d77.683!3d8.733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDQnNTguOCJOIDc3wrA0MCc1OC44IkU!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* Business Hours Box */}
            <div className="bg-white rounded-card p-6 border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-heading font-extrabold text-gray-900 text-xs uppercase border-b border-gray-100 pb-2">
                BUSINESS HOURS
              </h3>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#6A1B9A]" /> Monday - Saturday</span>
                  <span className="font-bold">9.00 AM - 7.00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-400" /> Sunday</span>
                  <span className="font-bold text-red-500">Closed</span>
                </div>
              </div>

              {/* Emergency Support Note Box */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#6A1B9A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Emergency Support (For Existing Customers)</h4>
                  <p className="text-[11px] text-gray-600">Available on WhatsApp during business hours.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
