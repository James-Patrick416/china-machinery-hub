"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Contact Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                Get a Custom Quote
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                Ready to Import or Upgrade Your Processing Plant?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fill in your requirements for a free landed-cost estimate delivered to your town in Kenya, Uganda, or Tanzania.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-emerald-500">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Regional Hubs: Migori, Kisumu & Nairobi</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-emerald-500">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+254 700 000000 (WhatsApp Enabled)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-emerald-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>quotes@chinamachinerike.co.ke</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Capture Form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center p-6 bg-zinc-950 rounded-xl border border-zinc-800">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-3" />
                  <h3 className="text-lg font-bold text-zinc-100">Quote Request Received!</h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Our technical sales team will review your specs and contact you via phone/WhatsApp within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Full Name / SACCO Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Omondi / Migori Farmers Group"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7..."
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Machine Needed & Destination Town
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Need 15HP Posho Mill delivered to Migori"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                  >
                    <Send className="h-4 w-4" />
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}