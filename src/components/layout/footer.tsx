import Link from "next/link";
import { Factory, MapPin, Phone, Mail, Landmark, Droplets, ShieldCheck, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 text-xs">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Company & Office Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30">
                <Factory className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="font-extrabold text-zinc-100 tracking-tight text-sm">
                CHINA MACHINERY <span className="text-emerald-400">HUB</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-400">
              Direct factory machinery sourcing, bank asset financing facilitation, and post-harvest technology across East Africa.
            </p>
            
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Nairobi Regional Desk, Commercial Center, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>+254 700 000 000 / +254 711 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>info@chinamachineryhub.co.ke</span>
              </div>
            </div>
          </div>

          {/* Equipment Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3 flex items-center gap-1.5">
              <Factory className="h-3.5 w-3.5 text-emerald-400" />
              Equipment Catalog
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  Commercial Posho Mills & De-huskers
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  Recirculating Grain Dryers (Aflatoxin Control)
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  Potato & Carrot Washing-Grading Lines
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  Cold-Press Sunflower Seed Oil Mills
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  10,000L Water Harvesting & Tank Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Services & Financing */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3 flex items-center gap-1.5">
              <Landmark className="h-3.5 w-3.5 text-emerald-400" />
              Financing & Services
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/financing" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  KDC & Bank Financing Contracts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <Droplets className="h-3 w-3 text-emerald-400" />
                  Water Tank Fixing & Harvesting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Farm Telemetry & Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition-colors">
                  Agro-Machinery ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/admin/quotes" className="hover:text-emerald-400 transition-colors text-zinc-500">
                  Staff Admin Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Crop Value Chains & Knowledge */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3 flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              Crop Value Chains
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/academy" className="hover:text-emerald-400 transition-colors">
                  Maize: Milling, Drying & De-stoning
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-emerald-400 transition-colors">
                  Potatoes: Washing, Grading & Crisps
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-emerald-400 transition-colors">
                  Carrots: Mud Cleaning & Cold Storage
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-emerald-400 transition-colors">
                  Agro-Processing Feasibility Reports
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-zinc-900 pt-6 text-center text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} China Machinery Hub. All rights reserved. Registered Equipment Import & Technical Support Partner.</p>
        </div>
      </div>
    </footer>
  );
}