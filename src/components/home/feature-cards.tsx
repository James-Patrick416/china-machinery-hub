import Link from "next/link";
import { ShoppingBag, Calculator, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FeatureCards() {
  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Complete Processing Solution
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Everything You Need to Run a Profitable Mill or Processing Plant
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            We don't just ship machinery—we help you calculate your margins and train your operators.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Pillar 1: Buy Machinery */}
          <div className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-500 border border-emerald-500/20">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-zinc-100">
                1. China Machinery Catalog
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Source Posho mills, oil presses, maize grinders, feed mixers, and packaging lines direct from verified Chinese factories.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Prices in KES & USD with low MOQs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Shipping calculator (China to Migori/Kisumu)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  1-Year warranty & spare parts supply
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/60">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Explore Machinery Catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Profit Calculator */}
          <div className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-500 border border-emerald-500/20">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-zinc-100">
                2. Farm Profit Analyzer
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Determine if a machine will pay for itself before buying. Calculate daily power, labor, raw grain costs, and net ROI.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Break-even point & payback period calculation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Daily NCPB & local market price updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Downloadable PDF reports for SACCO loans
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/60">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Calculate Your Farm ROI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Training Academy */}
          <div className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-500 border border-emerald-500/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-zinc-100">
                3. Chik Training Academy
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Practical online modules covering machine maintenance, operator safety, and HACCP food standards for East Africa.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Audio & video in Swahili, English, and Luo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Step-by-step troubleshooting guides
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Downloadable certificates upon course completion
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/60">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Browse Training Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}