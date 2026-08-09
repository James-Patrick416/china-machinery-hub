import Link from "next/link";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-zinc-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Wrench className="h-4 w-4" />
              </div>
              <span className="text-base tracking-tight">
                China Machinery <span className="text-emerald-500">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Direct factory sourcing, shipping logistics, farm analytics, and practical machine maintenance training for East Africa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/catalog" className="hover:text-zinc-100 transition-colors">
                  Machinery Catalog
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-zinc-100 transition-colors">
                  Farm Profit Calculator
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-zinc-100 transition-colors">
                  Chik Training Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Machinery */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Equipment
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-zinc-200">Maize & Posho Mills</li>
              <li className="hover:text-zinc-200">Commercial Oil Presses</li>
              <li className="hover:text-zinc-200">Animal Feed Mixers</li>
              <li className="hover:text-zinc-200">Grain & Food Dryers</li>
              <li className="hover:text-zinc-200">Packaging Equipment</li>
            </ul>
          </div>

          {/* Column 4: Regional Hub & Support */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Regional Hub
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Kenya, Uganda & Tanzania Delivery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>+254 700 000000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>info@chinamachinerike.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} China Machinery Hub. All rights reserved.</p>
          <p>Serving Migori, Kisumu, Nairobi, Kampala, Dar es Salaam</p>
        </div>
      </div>
    </footer>
  );
}