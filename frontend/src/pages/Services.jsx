import React from 'react';
import { Wrench, Shield, Clock, CheckCircle2, Phone, Settings, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuoteModal }) {
  const servicesList = [
    {
      title: "Commercial Machine Installation",
      desc: "Precision floor leveling, 3-phase high torque power wiring connection, water inlet setup, and full operational demo by senior engineers."
    },
    {
      title: "Preventive Maintenance & Repair",
      desc: "Scheduled inspection, motor insulation checks, stone dressing, oil seal changes, and instant breakdown repairs for zero kitchen downtime."
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      desc: "Comprehensive annual maintenance packages tailored for hotels, marriage halls, and hospitals ensuring 365 days of smooth machinery performance."
    },
    {
      title: "Kitchen Setup Consultation",
      desc: "Expert layout planning for commercial kitchens, choosing correct motor power, space optimization, and safety compliance guidance."
    },
    {
      title: "On-Site Service & Emergency Repair",
      desc: "Mobile service units equipped with skilled technicians and spare parts ready to dispatch to hotel sites across Tamil Nadu."
    },
    {
      title: "Machine Relocation & Upgrades",
      desc: "Dismantling, safe transport packaging, and re-installation services when expanding or shifting your restaurant location."
    }
  ];

  return (
    <div className="pt-24 space-y-20">

      {/* SERVICES HERO */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6A1B9A] to-purple-900 text-white py-16">
        <div className="max-w-container mx-auto px-4 text-center max-w-3xl space-y-4">
          <span className="bg-white/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Professional B2B Support
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            Commercial Kitchen Equipment Services
          </h1>
          <p className="text-purple-100 text-base md:text-lg">
            Complete commercial kitchen solutions including expert installation, preventive maintenance, instant repair, and AMC contracts across South India.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-white rounded-card p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group">
              <div className="w-14 h-14 bg-purple-50 text-[#6A1B9A] rounded-2xl flex items-center justify-center group-hover:bg-[#6A1B9A] group-hover:text-white transition-colors">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg">{srv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6A1B9A] hover:underline pt-2"
              >
                <span>Book Service Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE TIMELINE */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12">Our 5-Step Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Service Request', 'Site Inspection', 'Quotation', 'Repair / Installation', 'Customer Handover'].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-card border border-gray-200 shadow-sm text-center">
                <span className="w-10 h-10 bg-[#6A1B9A] text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {i + 1}
                </span>
                <h4 className="font-bold text-gray-900 text-sm">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
