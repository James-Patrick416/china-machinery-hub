import Link from "next/link";
import { Factory, MapPin, Phone, Mail, Landmark, Droplets, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 text-xs">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30">
                <Factory className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="font-extrabold text-zinc-100 tracking-tight text-sm">
                NAIROBI MACHINERY <span className="text-emerald-400">HUB</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-400">
              Direct factory machinery sourcing, bank asset financing support, and post-harvest technology across East Africa.
            </p>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Nairobi Regional Desk, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>+254 722382283</span>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3">
              Equipment Catalog
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/catalog" className="hover:text-emerald-400">Posho Mills & De-huskers</Link></li>
              <li><Link href="/catalog" className="hover:text-emerald-400">Batch Grain Dryers</Link></li>
              <li><Link href="/catalog" className="hover:text-emerald-400">Potato & Carrot Washers</Link></li>
              <li><Link href="/catalog" className="hover:text-emerald-400">Water Tank Kits</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3">
              Services & Financing
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/financing" className="hover:text-emerald-400">Bank Financing Contracts</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">Water Tank Harvesting</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">Farm Data Analytics</Link></li>
              <li><Link href="/calculator" className="hover:text-emerald-400">Agro-ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Value Chains */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3">
              Crop Value Chains
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/academy" className="hover:text-emerald-400">Maize Milling & Drying</Link></li>
              <li><Link href="/academy" className="hover:text-emerald-400">Potato Washing & Grading</Link></li>
              <li><Link href="/academy" className="hover:text-emerald-400">Carrot Brush Cleaning</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-zinc-900 pt-6 text-center text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Nairobi Machinery Hub. Direct Sourcing & WhatsApp Inquiries.</p>
        </div>
      </div>
    </footer>
  );
}