import Link from "next/link";
import { 
  Landmark, 
  FileCheck2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  BadgePercent,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Bank Financing & Machinery Contracts | China Machinery Hub",
  description: "Secure bank-backed asset financing (including Kenya Development Corporation - KDC) using signed contracts and official Proforma invoices.",
};

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Asset Financing & Institutional Support
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            Bank-Backed Machinery Financing in Kenya
          </h1>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            We partner with major development finance institutions, commercial banks, and SACCOs (such as the Kenya Development Corporation - KDC) to facilitate loan approvals based on verified equipment supply contracts and Proforma quotes.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <Landmark className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-base font-bold text-zinc-100">Development Banks</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Tailored financing terms for institutional projects, co-operatives, and commercial agribusiness ventures through KDC and agriculture credit funds.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <FileCheck2 className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-base font-bold text-zinc-100">Binding Supply Contracts</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              We issue official, bank-ready supply agreements and CIF Proforma invoices backed by factory specifications and inspection guarantees.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <Building2 className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-base font-bold text-zinc-100">Physical Office Support</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Visit our physical office in Kenya for in-person contract signing, bank documentation review, and technical verification consultations.
            </p>
          </div>
        </div>

        {/* How Financing Works Step-by-Step */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
            <BadgePercent className="h-5 w-5 text-emerald-400" />
            4 Steps to Secure Bank Financing for Your Machinery
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Select Equipment & Generate Instant Proforma Quote</h4>
                <p className="mt-1 text-xs text-zinc-400">
                  Browse our machinery catalog (grain mills, dryers, root crop washers, water storage systems) and download an instant PDF Proforma Invoice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Sign Supply Agreement at Our Kenya Office</h4>
                <p className="mt-1 text-xs text-zinc-400">
                  Meet our technical team at our physical office to finalize technical specifications and sign the binding purchase/supply agreement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Submit Contract Package to Your Bank / KDC</h4>
                <p className="mt-1 text-xs text-zinc-400">
                  Present the signed contract, machinery ROI feasibility report, and Proforma invoice to your bank or financing partner for credit approval.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                4
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Direct Factory Import & Local Installation</h4>
                <p className="mt-1 text-xs text-zinc-400">
                  Upon loan disbursement or letter of credit (LC) issuance, we dispatch equipment from Henan/Shandong ports directly to Mombasa with full installation support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            Document Package Provided by China Machinery Hub
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              Official Proforma Invoice (CIF Mombasa / ICD Nairobi)
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              Technical Machine Specifications & Power Ratings
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              Contract Agreement for Supply & Warranty
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              Projected ROI & Payback Feasibility Breakdown
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center rounded-2xl border border-emerald-900/40 bg-emerald-950/20 p-8">
          <h3 className="text-lg font-bold text-zinc-100">Need Guidance on Financing Your Equipment?</h3>
          <p className="mt-2 text-xs text-zinc-400 max-w-xl mx-auto">
            Contact our desk to discuss bank documentation, contract terms, or schedule an appointment at our physical office.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Explore Machinery Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/254722382283?text=Hello%20Nairobi%20Machinery%20Hub,%20I%20need%20assistance%20with%20bank%20financing%20and%20contract%20documents."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700"
            >
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              Speak with Financing Advisor
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}