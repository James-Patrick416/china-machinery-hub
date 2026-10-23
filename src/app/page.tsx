import Link from "next/link";
import { 
  Factory, 
  MessageSquare, 
  Landmark, 
  Droplets, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle2,
  Building2
} from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function HomePage() {
  const whatsappPhone = "254722382283";
  const heroWhatsappMessage = encodeURIComponent(
    "Hello China Machinery Hub, I would like to inquire about agricultural machinery importing, financing, and factory quotes."
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden border-b border-zinc-800 py-20 sm:py-32 min-h-[85vh] flex items-center">
        <HeroSlideshow />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <Factory className="h-3.5 w-3.5" />
              Direct China Import Platform for Kenya
            </span>
            
            <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl leading-tight">
              Smarter Agro-Processing Machinery, <span className="text-emerald-400">Direct From Factory</span>.
            </h1>
            
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              We source, import, and deliver verified commercial post-harvest equipment—from posho mills and grain dryers to 4WD tractors, potato washers, water tanks, and farm data telemetry.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${whatsappPhone}?text=${heroWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="h-4 w-4" />
                Inquire Directly on WhatsApp
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-md px-6 py-3.5 text-xs font-bold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
              >
                Browse Equipment Catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Verified Factories</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Landmark className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>KDC Bank Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Mombasa CIF Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/40 border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <Building2 className="h-4 w-4" /> Who We Are
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-zinc-100">
                Direct Factory Sourcing & Agro-Engineering Partner
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                China Machinery Hub (Nairobi) bridges Chinese manufacturer-direct agro-equipment with East African agricultural enterprises, commercial farms, SACCOs, and cooperatives. We handle factory verification, machinery customization, Mombasa CIF logistics, and field commissioning.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Full duty evaluation & Mombasa port clearing support</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Spare parts supply & local technical backup</span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">140+</span>
                  <h3 className="mt-1 text-xs font-bold text-zinc-200">Verified Catalog Items</h3>
                </div>
                <p className="mt-3 text-[11px] text-zinc-400">Posho mills, grain dryers, oil expellers, and 4WD tractors.</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100%</span>
                  <h3 className="mt-1 text-xs font-bold text-zinc-200">Factory Transparency</h3>
                </div>
                <p className="mt-3 text-[11px] text-zinc-400">Direct WhatsApp communication and clear CIF Mombasa pricing.</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">KDC Bank</span>
                  <h3 className="mt-1 text-xs font-bold text-zinc-200">Asset Financing</h3>
                </div>
                <p className="mt-3 text-[11px] text-zinc-400">Support for low-interest development loan applications.</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">Turnkey</span>
                  <h3 className="mt-1 text-xs font-bold text-zinc-200">Water & Telemetry</h3>
                </div>
                <p className="mt-3 text-[11px] text-zinc-400">Commercial rain harvesting and equipment data logging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Complete Agricultural Sourcing
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-zinc-100">
              Integrated Technical & Machinery Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-100">140+ Machine Gallery</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Browse full specs for grain mills, recirculating dryers, oil presses, and potato washing lines.
                </p>
              </div>
              <Link href="/catalog" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                View Catalog <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Landmark className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-100">Bank Asset Financing</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Guidance on securing low-interest equipment loans through Kenya Development Corporation (KDC).
                </p>
              </div>
              <Link href="/financing" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                Financing Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-100">Water Tanks & Data Telemetry</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Commercial rain harvesting installation, water tank fitting, and machine runtime analytics.
                </p>
              </div>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                Services Overview <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}