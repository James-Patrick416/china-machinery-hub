"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Factory, 
  Calculator, 
  BookOpen, 
  Landmark, 
  Wrench, 
  ShoppingBag 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Equipment Catalog", href: "/catalog", icon: ShoppingBag },
    { name: "Bank Financing", href: "/financing", icon: Landmark },
    { name: "Water & Analytics", href: "/services", icon: Wrench },
    { name: "ROI Calculator", href: "/calculator", icon: Calculator },
    { name: "Chik Academy", href: "/academy", icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors">
              <Factory className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-sm font-black tracking-tight text-zinc-100 block leading-none">
                CHINA MACHINERY <span className="text-emerald-400">HUB</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
                Direct Agro-Imports & Financing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-emerald-400"
                >
                  <Icon className="h-3.5 w-3.5 text-zinc-400 group-hover:text-emerald-400" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="https://wa.me/254700000000?text=Hello%20China%20Machinery%20Hub,%20I%20would%20like%20to%20inquire%20about%20machinery%20imports."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 shadow-sm shadow-emerald-950"
            >
              Get Instant Quote
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-emerald-400"
              >
                <Icon className="h-4 w-4 text-emerald-400" />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <a
              href="https://wa.me/254700000000?text=Hello%20China%20Machinery%20Hub,%20I%20would%20like%20to%20inquire%20about%20machinery%20imports."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white"
            >
              Get Instant Quote via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}