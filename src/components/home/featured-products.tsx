import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Truck, Zap } from "lucide-react";

// Sample top-selling machinery featured on the homepage
const featuredProducts = [
  {
    id: "posho-mill-heavy-duty",
    name: "Combined Posho & Maize Mill (15HP)",
    category: "Grain Processing",
    badge: "Top Seller in Nyanza",
    capacity: "800 - 1,200 kg/hr",
    power: "15HP Electric / Diesel Engine",
    priceUSD: "$2,450",
    priceKES: "Approx. KES 318,000",
    deliveryTime: "45 Days (China → Doorstep)",
    warranty: "1 Year Factory Warranty",
    description:
      "Heavy-duty dual-head roller mill for high-output grade-1 maize flour and sifted posho production.",
  },
  {
    id: "screw-oil-press-6yl",
    name: "Automatic Screw Oil Press Machine",
    category: "Oil Extraction",
    badge: "High Margin Potential",
    capacity: "150 - 200 kg/hr",
    power: "7.5 kW Electric Motor",
    priceUSD: "$1,850",
    priceKES: "Approx. KES 240,000",
    deliveryTime: "40 Days (China → Doorstep)",
    warranty: "1 Year Factory Warranty",
    description:
      "Cold and hot pressing for sunflower seeds, peanuts, sesame, and soybean oil processing with integrated filter tanks.",
  },
  {
    id: "grain-dryer-recirculating",
    name: "Recirculating Batch Grain Dryer (5-Ton)",
    category: "Post-Harvest Drying",
    badge: "Essential for Co-ops",
    capacity: "5 Tons per Batch",
    power: "Biomass / Diesel Burner",
    priceUSD: "$6,200",
    priceKES: "Approx. KES 806,000",
    deliveryTime: "50 Days (China → Doorstep)",
    warranty: "1 Year Factory Warranty",
    description:
      "Prevents post-harvest loss and aflatoxin contamination by reducing grain moisture from 25% down to 13.5%.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
              Factory Direct Equipment
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Most Popular Processing Machines
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400">
              Tested and proven for small-scale processors, farmer groups, and SACCOs across East Africa.
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors shrink-0"
          >
            View Full Catalog (15+ Machines)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => {
            const whatsappMessage = encodeURIComponent(
              `Hi, I am interested in getting a official quote for the ${product.name} (${product.priceUSD}). Please send details.`
            );

            return (
              <div
                key={product.id}
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                      {product.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-100 leading-snug">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs List */}
                  <div className="mt-6 space-y-2 rounded-lg bg-zinc-950/80 p-3.5 border border-zinc-800/80 text-xs">
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Output Capacity:</span>
                      <span className="font-semibold text-zinc-200">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500">Power Requirement:</span>
                      <span className="font-semibold text-zinc-200">{product.power}</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Truck className="h-3 w-3 text-emerald-500" /> Sourcing:
                      </span>
                      <span className="font-semibold text-zinc-200">{product.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span className="text-zinc-500 flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-emerald-500" /> Warranty:
                      </span>
                      <span className="font-semibold text-zinc-200">{product.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA Buttons */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl font-extrabold text-zinc-100">{product.priceUSD}</span>
                      <span className="ml-2 text-xs text-zinc-400">FOB / Door Delivery Available</span>
                    </div>
                    <span className="text-xs font-medium text-emerald-500">{product.priceKES}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/254700000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}