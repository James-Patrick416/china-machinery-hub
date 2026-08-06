import { CheckCircle2, Factory, ShieldAlert, Truck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text & Value proposition */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
              Direct China Sourcing
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl leading-tight">
              Bridging Chinese Manufacturing with East African Agribusiness
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Buying food processing machinery overseas often comes with risks: wrong voltage specs, missing spare parts, or zero local maintenance support. 
            </p>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              We eliminate the middlemen by working directly with ISO-certified machinery factories in China. We customize machines to match East African power grids (415V 3-Phase / 240V Single Phase or Heavy Duty Diesel) and guarantee replacement parts locally.
            </p>

            {/* Key Operational Highlights */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200">Customized for Local Power & Crops</h3>
                  <p className="text-xs text-zinc-400">Specially tuned for East African yellow & white maize, sunflower, and groundnuts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200">Doorstep Logistics & Clearing</h3>
                  <p className="text-xs text-zinc-400">Port clearing at Mombasa/Dar es Salaam handled directly to your local farm or premises.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200">On-Site Installation & Spare Parts</h3>
                  <p className="text-xs text-zinc-400">Stocked replacement belts, rollers, screens, and motors in our regional warehouses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Info Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-zinc-100 border-b border-zinc-800 pb-4">
              How Our Supply Chain Works
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 font-bold text-emerald-500">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Order & Factory Verification</h4>
                  <p className="mt-0.5 text-zinc-400">Machine is built and tested at factory in China. Video demo sent before shipping.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 font-bold text-emerald-500">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Sea Freight & Customs Clearance</h4>
                  <p className="mt-0.5 text-zinc-400">30-40 days shipping to Mombasa. Duty and KRA clearance fully managed.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 font-bold text-emerald-500">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Regional Transport & Setup</h4>
                  <p className="mt-0.5 text-zinc-400">Delivered by truck to your hub (Migori, Kisumu, Eldoret, Kampala) + setup training.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800 flex items-center gap-3 text-xs text-zinc-400">
              <ShieldAlert className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>All shipments covered by transit insurance & 12-month structural warranty.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}