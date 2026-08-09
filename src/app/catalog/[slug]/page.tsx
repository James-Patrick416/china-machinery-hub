import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Zap, 
  Gauge, 
  CheckCircle2, 
  MessageSquare,
  FileText
} from "lucide-react";
import { getProductBySlug, getProducts } from "@/lib/db/products";

// Fallback lookup if DB is empty
const fallbackProductsMap: Record<string, any> = {
  "combined-posho-mill-15hp": {
    id: "1",
    name: "Heavy Duty Commercial Posho Mill (Combined De-husker)",
    slug: "combined-posho-mill-15hp",
    category: "Grain Milling",
    price_usd: 2850,
    capacity: "800 - 1200 kg/hr",
    power_spec: "15HP Diesel / 415V 3-Phase",
    description: "Industrial Grade maize huller and roller mill designed for processing Grade-1 flour for institutions and retail packaging.",
    features: [
      "Integrated heavy-duty de-husker and huller prior to crushing",
      "High-manganese alloy steel hammers for 3x longer operational lifespan",
      "Dust collection cyclone system included as standard",
      "Dual fuel option: 15HP Changfa Diesel engine or 415V 3-Phase electric motor",
    ],
    landed_cost_est: "KES 420,000 - KES 460,000 (Mombasa clearing & duty included)",
  },
  "recirculating-batch-grain-dryer-5t": {
    id: "2",
    name: "Recirculating Batch Grain Dryer (5-Ton)",
    slug: "recirculating-batch-grain-dryer-5t",
    category: "Drying & Post-Harvest",
    price_usd: 6400,
    capacity: "5 Tons per batch",
    power_spec: "3-Phase Electric + Biomass/Diesel Burner",
    description: "Prevents aflatoxin contamination by reducing moisture content from 22% down to 13.5% in under 6 hours.",
    features: [
      "Recirculating air duct system ensures uniform drying without scorching grains",
      "Multi-fuel burner options: maize cobs, wood pellets, or diesel",
      "Automatic moisture sensor auto-shuts down upon reaching target moisture",
      "Ideal for maize, wheat, barley, and paddy rice processing",
    ],
    landed_cost_est: "KES 950,000 - KES 1,020,000 (Landed to Nairobi/Kisumu)",
  },
  "screw-sunflower-oil-press-75kw": {
    id: "3",
    name: "Cold-Press Sunflower & Seed Oil Extractor",
    slug: "screw-sunflower-oil-press-75kw",
    category: "Oil Extraction",
    price_usd: 1950,
    capacity: "150 - 200 kg/hr",
    power_spec: "7.5kW 380V Electric Motor",
    description: "Heavy-duty alloy steel screw press suitable for sunflower seed, sesame, groundnut, and soybean oil extraction.",
    features: [
      "Vacuum filter system attached for immediate seed meal separation",
      "Temperature controller for precise cold-press oil extraction",
      "Low residual oil rate in press cake (<6.5%)",
      "Continuous 24-hour industrial duty cycle rating",
    ],
    landed_cost_est: "KES 290,000 - KES 320,000 (Landed to destination town)",
  },
  "grain-cleaner-destoner-vibrating": {
    id: "4",
    name: "Multi-Crop Grain Cleaner & De-stoner",
    slug: "grain-cleaner-destoner-vibrating",
    category: "Grain Processing",
    price_usd: 1450,
    capacity: "1500 kg/hr",
    power_spec: "2.2kW Single / 3-Phase",
    description: "Removes stones, dust, chaff, and immature seeds prior to milling to protect roller blades and increase flour purity.",
    features: [
      "Dual vibrating sieve screens with adjustable air-blow deck",
      "Removes heavy debris (stones, iron filings) and light chaff simultaneously",
      "Compact footprint, suitable for inline setup before posho mills",
      "Low power consumption with high output rate",
    ],
    landed_cost_est: "KES 215,000 - KES 240,000 (Landed)",
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let product = await getProductBySlug(slug);

  // Use fallback if DB record not returned
  if (!product && fallbackProductsMap[slug]) {
    product = fallbackProductsMap[slug];
  }

  if (!product) {
    notFound();
  }

  const fallbackData = fallbackProductsMap[slug] || {};
  const features = fallbackData.features || [
    "Heavy-duty industrial build manufactured for African operating conditions",
    "Spare parts available locally through regional support hubs",
    "Includes full video training access via Chik Academy",
  ];
  const landedCost = fallbackData.landed_cost_est || "Contact us for precise quote to your destination town";

  const whatsappMsg = encodeURIComponent(
    `Hi China Machinery Hub, I want a proforma invoice and landed cost for: ${product.name} (Ref: ${product.slug}).`
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Machinery Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
              
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                {product.category}
              </span>
              
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-zinc-100">
                {product.name}
              </h1>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-emerald-500">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Processing Capacity</p>
                    <p className="text-sm font-bold text-zinc-100">{product.capacity}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-emerald-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Power Requirement</p>
                    <p className="text-sm font-bold text-zinc-100">{product.power_spec}</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider mb-4">
                  Key Machinery Highlights
                </h3>
                <ul className="space-y-3">
                  {features.map((feat: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Service Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex items-center gap-3">
                <Truck className="h-6 w-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">Door-Step Clearing</h4>
                  <p className="text-[11px] text-zinc-400">Mombasa / Dar handling</p>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex items-center gap-3">
                <Wrench className="h-6 w-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">Spare Parts Ready</h4>
                  <p className="text-[11px] text-zinc-400">Stocked in Migori & Nairobi</p>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">12 Months Warranty</h4>
                  <p className="text-[11px] text-zinc-400">Factory guaranteed quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA Card (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl">
              
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-xs text-zinc-400 font-medium">Factory Direct FOB Price</span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-zinc-100">
                    ${product.price_usd.toLocaleString()}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">USD</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-zinc-950 p-3.5 border border-zinc-800">
                <p className="text-[11px] font-semibold uppercase text-zinc-400">Est. Landed Price (East Africa)</p>
                <p className="mt-1 text-xs font-bold text-emerald-400">{landedCost}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/254700000000?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-emerald-500"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Proforma via WhatsApp
                </a>

                <Link
                  href="/#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700"
                >
                  <FileText className="h-4 w-4" />
                  Submit Official RFP / Quote Form
                </Link>
              </div>

              <p className="mt-4 text-[11px] text-center text-zinc-500">
                Includes free access to operator video modules on Chik Academy.
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}