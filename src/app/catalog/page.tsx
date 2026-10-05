"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  fallbackProducts, 
  Product 
} from "@/lib/db/products";
import DownloadProformaBtn from "@/components/DownloadProformaBtn";
import { 
  Search, 
  MessageSquare, 
  Factory, 
  SlidersHorizontal, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(fallbackProducts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    return fallbackProducts.filter((product) => {
      const refId = product.ref_id ?? "";
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        refId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = 
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const createWhatsAppLink = (product: Product) => {
    const phone = "254700000000"; // Replace with client's active WhatsApp phone number
    const refId = product.ref_id || product.id;
    const message = encodeURIComponent(
      `Hello China Machinery Hub, I am interested in inquiring about ${product.name} (Ref ID: ${refId}). Please send me the price quote, capacity specifications, and availability.`
    );
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <Factory className="h-4 w-4" /> Direct China Import Machinery Catalog
            </span>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
              Agro-Equipment & Industrial Line Gallery
            </h1>
            <p className="mt-2 text-xs text-zinc-400 max-w-2xl">
              Explore 140+ verified agricultural machines sourced directly from Henan and Shandong manufacturers. Click any unit to request a direct factory quote via WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800">
            <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Showing <strong className="text-emerald-400">{filteredProducts.length}</strong> equipment units</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by Machine Name or Ref ID (e.g. CMH-024)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 pl-9 pr-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Category Dropdown/Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <SlidersHorizontal className="h-4 w-4 text-zinc-500 shrink-0 hidden sm:block" />
            <div className="flex gap-1.5">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 bg-zinc-950 overflow-hidden">
                <Image
                  src={product.image_url || "/images/machinery/machine-01.webp"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                
                {/* Ref ID Badge */}
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800 text-[10px] font-mono font-bold text-emerald-400">
                  {product.ref_id || product.id}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  {!product.inquire_only ? (
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md">
                      Priced Unit
                    </span>
                  ) : (
                    <span className="bg-zinc-900/80 text-zinc-300 border border-zinc-700 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md">
                      Factory Quote
                    </span>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-zinc-100 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-3">
                  
                  {/* Price or Inquiry Banner */}
                  {!product.inquire_only ? (
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400">Estimated CIF:</span>
                      <span className="text-sm font-black text-emerald-400">
                        ${product.price_usd.toLocaleString()} USD
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">Pricing:</span>
                      <span className="font-semibold text-zinc-300 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        Inquire for CIF Quote
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {!product.inquire_only ? (
                      <div className="w-full">
                        <DownloadProformaBtn product={product} />
                      </div>
                    ) : (
                      <a
                        href={createWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        Ask Price on WhatsApp
                      </a>
                    )}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center py-12 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <p className="text-sm text-zinc-400">No machinery matching &quot;{searchTerm}&quot; was found.</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="mt-3 text-xs font-semibold text-emerald-400 hover:underline"
            >
              Clear Filters & View All 140 Machines
            </button>
          </div>
        )}

      </div>
    </div>
  );
}