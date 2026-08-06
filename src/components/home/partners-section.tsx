import { Factory, Anchor, ShieldCheck, Truck } from "lucide-react";

const partners = [
  { name: "Shandong Agri-Machinery Co.", role: "Verified ISO Factory", icon: Factory },
  { name: "Henan Grain Equipment Corp", role: "Maize & Posho Mill Manufacturer", icon: Factory },
  { name: "Mombasa & Dar Sea Logistics", role: "Port Clearing & Transit", icon: Anchor },
  { name: "KEBS & UNBS Standards", role: "Quality Compliance Certified", icon: ShieldCheck },
];

export default function PartnersSection() {
  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950/60 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
          Sourced from Verified Manufacturers & Logistical Partners
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-emerald-500">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-200">{partner.name}</h3>
                  <p className="text-[11px] text-zinc-400">{partner.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}