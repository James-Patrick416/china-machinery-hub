import Link from "next/link";
import { 
  Droplets, 
  BarChart3, 
  Wrench, 
  TrendingUp, 
  CheckCircle2, 
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
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Integrated Technical Solutions
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            Water Harvesting & Value Chain Data Analytics
          </h1>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Beyond importing heavy machinery, we offer expert environmental water conservation services and IoT data telemetry to help commercial farmers and SACCOs boost overall yield efficiency.
          </p>
        </div>

        {/* Section 1: Water Harvesting & Tank Solutions */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="flex items-center gap-3 text-emerald-400 mb-4">
            <Droplets className="h-7 w-7" />
            <h2 className="text-xl font-bold text-zinc-100">1. Water Harvesting & Tank Fixing Expert Services</h2>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            Reliable water supply is critical for crop washing, post-harvest processing, and drought resilience. Our environmental technical team provides end-to-end water conservation engineering across Kenya.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <Wrench className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Water Tank Fixing & Installation</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Professional setup of high-density polyethylene and steel tanks with concrete pad mounting and anti-leak seals.
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <Droplets className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Rainwater Harvesting Systems</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Guttering, leaf catchers, and first-flush filtration engineering for commercial farm structures and processing sheds.
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900/80 p-5 border border-zinc-800/80">
              <ShieldCheck className="h-5 w-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-zinc-100">Maintenance & Leak Repair</h3>
              <p className="mt-1 text-[11px] text-zinc-400">
                Rapid response repair services for cracked storage units, fittings, pressure pumps, and solar borehole hookups.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
            <span className="text-xs text-zinc-400">Need a custom tank fixing or harvesting quote?</span>
            <a
              href="https://wa.me/254700000000?text=Hello%20China%20Machinery%20Hub,%20I%20am%20interested%20in%20your%20Water%20Tank%20Fixing%20and%20Harvesting%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Request Water Expert Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Section 2: Farm & Value Chain Data Analytics */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="flex items-center gap-3 text-emerald-400 mb-4">
            <BarChart3 className="h-7 w-7" />
            <h2 className="text-xl font-bold text-zinc-100">2. Value Chain Performance & Data Analytics</h2>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            We gather real-time operational data from production to processing across key value chains—including **Maize, Potatoes, and Carrots**—to pinpoint bottlenecks and increase farm profitability.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                <Cpu className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-100">Machine Telemetry & Efficiency</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Track fuel/power consumption, throughput per hour, and maintenance schedules on posho mills, grain dryers, and potato washers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                <Activity className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-100">Post-Harvest Loss Prevention</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Monitor grain moisture trends and temperature fluctuations during drying to keep aflatoxin levels below strict packaging thresholds.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                <TrendingUp className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-100">Crop Yield & Processing Metrics</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Analyze raw input vs. high-grade output ratios for maize flour, washed potatoes, and graded carrots to maximize profit per bag.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                <Building2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-100">SACCO & Investor Reporting</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Generate automated performance logs required by bank lenders and SACCO directors to demonstrate asset productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Chains Addressed */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
            Key Kenyan Value Chains We Support
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <span className="text-emerald-400 font-bold block mb-1">Maize Value Chain</span>
              <span className="text-zinc-400">De-husking → De-stoning → Moisture Drying → Milling Grade-1 Flour.</span>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <span className="text-emerald-400 font-bold block mb-1">Potato Value Chain</span>
              <span className="text-zinc-400">Soil Cleaning → High-Pressure Washing → Size Grading → Crisp Processing.</span>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <span className="text-emerald-400 font-bold block mb-1">Carrot Value Chain</span>
              <span className="text-zinc-400">Field Harvesting → De-mudding → Brush Washing → Cold Storage Prep.</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            Calculate Your Machinery ROI Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}