"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight, Zap, Gauge, Tag } from "lucide-react";
import { getProducts, Product } from "@/lib/db/products";

// Static fallback data in case database is empty during initial load
const fallbackProducts: Product[] = [
  {
    id: "1",
    name: "Heavy Duty Commercial Posho Mill (Combined De-husker)",
    slug: "combined-posho-mill-15hp",
    category: "Grain Milling",
    price_usd: 2850,
    capacity: "800 - 1200 kg/hr",
    power_spec: "15HP Diesel / 415V 3-Phase",
    description: "Industrial Grade maize huller and roller mill designed for processing Grade-1 flour for institutions and retail packaging.",
    is_featured: true,
  },
  {
    id: "2",
    name: "Recirculating Batch Grain Dryer (5-Ton)",
    slug: "recirculating-batch-grain-dryer-5t",
    category: "Drying & Post-Harvest",
    price_usd: 6400,
    capacity: "5 Tons per batch",
    power_spec: "3-Phase Electric + Biomass/Diesel Burner",
    description: "Prevents aflatoxin contamination by reducing moisture content from 22% down to 13.5% in under 6 hours.",
    is_featured: true,
  },
  {
    id: "3",
    name: "Cold-Press Sunflower & Seed Oil Extractor",
    slug: "screw-sunflower-oil-press-75kw",
    category: "Oil Extraction",
    price_usd: 1950,
    capacity: "150 - 200 kg/hr",
    power_spec: "7.5kW 380V Electric Motor",
    description: "Heavy-duty alloy steel screw press suitable for sunflower seed, sesame, groundnut, and soybean oil extraction.",
    is_featured: true,
  },
  {
    id: "4",
    name: "Multi-Crop Grain Cleaner & De-stoner",
    slug: "grain-cleaner-destoner-vibrating",
    category: "Grain Processing",
    price_usd: 1450,
    capacity: "1500 kg/hr",
    power_spec: "2.2kW Single / 3-Phase",
    description: "Removes stones, dust, chaff, and immature seeds prior to milling to protect roller blades and increase flour purity.",
    is_featured: false,
  },
];

const categories = [
  "All",
  "Grain Milling",
  "Drying & Post-Harvest",
  "Oil Extraction",
  "Grain Processing",
];

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      if (data && data.length > 0) {
        setProducts(data);
      }
      setLoading(false);
    }
    loadProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Machinery & Equipment Catalog
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Import Direct Agro-Processing Machinery
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Factory-direct machinery imported from Henan & Shandong, tailored for East African agricultural processors, SACCOs, and commercial farmers.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 flex flex-col gap-4 border-y border-zinc-800/80 py-6 md:flex-row md:items-center md:justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search posho mills, grain dryers, oil presses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 pl-10 pr-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-zinc-500 hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-zinc-950 font-bold"
                    : "bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/80"
            >
              <div>
                {/* Category & Price */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <Tag className="h-3 w-3" />
                    {product.category}
                  </span>
                  <span className="text-sm font-extrabold text-zinc-100">
                    ${product.price_usd.toLocaleString()} <span className="text-[10px] text-zinc-400 font-normal">FOB</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-800/80 pt-4 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Gauge className="h-4 w-4 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-zinc-500">Capacity</p>
                      <p className="font-semibold text-zinc-200">{product.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Zap className="h-4 w-4 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-zinc-500">Power Spec</p>
                      <p className="font-semibold text-zinc-200">{product.power_spec}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <Link
                  href={`/catalog/${product.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
                >
                  View Full Specs & Freight Quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-xl border border-dashed border-zinc-800">
            <p className="text-sm text-zinc-400">
              No machinery found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-xs font-semibold text-emerald-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}