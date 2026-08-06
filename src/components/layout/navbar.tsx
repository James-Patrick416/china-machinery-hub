"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare, Wrench } from "lucide-react";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Profit Calculator", href: "/calculator" },
  { name: "Training Academy", href: "/training" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-zinc-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Wrench className="h-5 w-5" />
          </div>
          <span className="text-lg tracking-tight sm:text-xl">
            China Machinery <span className="text-emerald-500">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}