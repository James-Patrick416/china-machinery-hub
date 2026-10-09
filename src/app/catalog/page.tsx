"use client";

import Image from "next/image";
import { fallbackProducts, Product } from "@/lib/db/products";
import { MessageSquare, Factory, CheckCircle2 } from "lucide-react";

export default function CatalogPage() {
  const createWhatsAppLink = (product: Product) => {
    const phone = "254722382283"; // Replace with client's WhatsApp number
    const refId = product.ref_id || product.id;
    const message = encodeURIComponent(
      `Hello Nairobi Machinery Hub, I am inquiring about ${product.name} (Ref ID: ${refId}). Please send me the pricing, technical specifications, and delivery details.`
    );
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="pb-8 border-b border-zinc-800">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
            <Factory className="h-4 w-4" /> Direct China Import Machinery Catalog
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
            Agro-Equipment & Processing Lines
          </h1>
          <p className="mt-2 text-xs text-zinc-400 max-w-2xl">
            Explore verified agricultural machinery sourced directly from top factory manufacturers. Click any unit to inquire directly with our team on WhatsApp.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fallbackProducts.map((product) => (
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
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Availability:</span>
                    <span className="font-semibold text-zinc-300 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      Factory Direct Import
                    </span>
                  </div>

                  {/* Single Action: WhatsApp Inquire */}
                  <a
                    href={createWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm shadow-emerald-950"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}