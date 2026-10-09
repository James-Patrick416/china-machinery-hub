import Link from "next/link";
import { 
  Droplets, 
  BarChart3, 
  Wrench, 
  TrendingUp, 
  MessageSquare, 
  ArrowRight, 
  Activity, 
  Cpu, 
  ShieldCheck,
  Building2
} from "lucide-react";

export const metadata = {
  title: "Water Harvesting & Value Chain Analytics Services | China Machinery Hub",
  description: "Water tank installation and conservation solutions alongside data-driven farm and machinery performance analytics across Kenyan crop value chains.",
};

export default function ServicesPage() {
  const whatsappPhone = "254722382283";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Integrated Technical Services
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            Water Harvesting & Value Chain Data Analytics
          </h1>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Beyond importing heavy machinery, we offer expert water conservation engineering and IoT data telemetry to help commercial farmers and SACCOs boost yield efficiency.
          </p>
        </div>

        {/* Section 1: Water Harvesting */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <Droplets className="h-7 w-7" />
              <h2 className="text-xl font-bold text-zinc-100">1. Water Harvesting & Tank Fixing Services</h2>
            </div>
            <a
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello China Machinery Hub, I would like to inquire about Water Tank Fixing & Harvesting Services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Inquire on WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <Wrench className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Water Tank Fixing & Installation</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Setup of polyethylene and steel tanks with concrete mounting and anti-leak seals.
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <Droplets className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Rainwater Harvesting Systems</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Commercial guttering and first-flush filtration engineering for farm structures.
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <ShieldCheck className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Maintenance & Repairs</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Rapid repairs for storage units, pressure pumps, and solar borehole hookups.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Data Analytics */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <BarChart3 className="h-7 w-7" />
              <h2 className="text-xl font-bold text-zinc-100">2. Farm & Machinery Data Analytics</h2>
            </div>
            <a
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello China Machinery Hub, I am inquiring about Farm Telemetry & Machinery Data Analytics.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Inquire on WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
              <Cpu className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-zinc-100">Machine Telemetry</h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Track power usage, runtime, and maintenance on mills and washers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
              <Activity className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-zinc-100">Post-Harvest Metrics</h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Monitor grain moisture trends to eliminate post-harvest losses.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}