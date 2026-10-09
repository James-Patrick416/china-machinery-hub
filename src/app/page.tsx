import Link from "next/link";
import { 
  Factory, 
  MessageSquare, 
  Landmark, 
  Droplets, 
  BarChart3, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  CheckCircle2 
} from "lucide-react";

export default function HomePage() {
  const whatsappPhone = "254722382283"; // Replace with active WhatsApp business number
  const heroWhatsappMessage = encodeURIComponent(
    "Hello Nairobi Machinery Hub, I would like to inquire about agricultural machinery importing, financing, and factory quotes."
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-linear-to-b from-zinc-900 via-zinc-950 to-zinc-950 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <Factory className="h-3.5 w-3.5" />
              Direct Nairobi Import Platform for Kenya
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl leading-tight">
              Smarter Agro-Processing Machinery, <span className="text-emerald-400">Direct From Factory</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              We source, import, and deliver verified commercial post-harvest equipment—from posho mills and grain dryers to potato washers and water harvesting systems across Kenya.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${whatsappPhone}?text=${heroWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950"
              >
                <MessageSquare className="h-4 w-4" />
                Inquire Directly on WhatsApp
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3.5 text-xs font-bold text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
              >
                Browse Equipment Catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Key Pillars */}
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

      {/* Services & Value Chain Ecosystem Overview */}
      <section className="py-16 border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Complete Agricultural Sourcing
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-zinc-100">
              Integrated Technical & Machinery Solutions
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              Explore our core service channels designed to support commercial farming enterprises and SACCOs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Equipment Catalog */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-100">140+ Machine Gallery</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Browse full specs for grain mills, recirculating dryers, oil presses, and carrot/potato washing lines.
                </p>
              </div>
              <Link
                href="/catalog"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                View Catalog <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Card 2: Bank Financing */}
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
              <Link
                href="/financing"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                Financing Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Card 3: Water Harvesting & Data */}
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
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                Services Overview <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WhatsApp Quick Inquiry Banner */}
      <section className="py-14 bg-zinc-900/60 border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Direct Communication Channel
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-100">
            Have Questions About Sourcing or Pricing?
          </h2>
          <p className="mt-2 text-xs text-zinc-400 max-w-xl mx-auto">
            Connect with our technical sourcing specialists directly on WhatsApp for machine specs, CIF Mombasa estimates, and site readiness guidance.
          </p>
          <div className="mt-6">
            <a
              href={`https://wa.me/${whatsappPhone}?text=${heroWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950"
            >
              <MessageSquare className="h-4 w-4" />
              Start WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}