import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck, Truck, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          {/* Simple Location & Sourcing Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Direct China Sourcing for Kenya, Uganda & Tanzania
          </div>

          {/* Clear, Human Headline */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl sm:leading-tight">
            Import Food Processing Machinery Direct from China. Delivered to Your Town.
          </h1>

          {/* Grounded Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            From Posho Mills and Oil Presses to Grain Dryers and Feed Mixers. We handle sourcing, shipping logistics, spare parts, and on-site operator training.
          </p>

          {/* Action Buttons (CTAs) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 shadow-sm"
            >
              View Machinery Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <Calculator className="h-4 w-4 text-emerald-500" />
              Calculate Farm ROI
            </Link>
          </div>

          {/* Trust / Value Callouts */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-zinc-800/80 pt-8 text-left">
            <div className="flex items-start gap-3 rounded-lg border border-zinc-900 bg-zinc-900/40 p-3.5">
              <Truck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Doorstep Logistics</h2>
                <p className="mt-0.5 text-xs text-zinc-400">Direct delivery to Migori, Kisumu, Eldoret & Kampala.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-zinc-900 bg-zinc-900/40 p-3.5">
              <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">1-Year Warranty</h2>
                <p className="mt-0.5 text-xs text-zinc-400">Guaranteed local replacement parts and technician support.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-zinc-900 bg-zinc-900/40 p-3.5">
              <Wrench className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Local Training</h2>
                <p className="mt-0.5 text-xs text-zinc-400">Swahili & Luo maintenance and operation video guides.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}