import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Gauge, 
  Tag,
  Globe
} from "lucide-react";
import { getProducts, Product } from "@/lib/db/products";
// Adjust to "@/component/DownloadProformaBtn" if your directory is named "component"
import DownloadProformaBtn from "@/components/DownloadProformaBtn";

// Static fallback data in case database is loading/empty
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Attempt database fetch, fall back to local array
  const dbProducts = await getProducts();
  const allProducts = dbProducts && dbProducts.length > 0 ? dbProducts : fallbackProducts;
  
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Calculate estimated freight and CIF cost
  const estFreight = Math.round(product.price_usd * 0.12);
  const totalCifEst = product.price_usd + estFreight;

  // WhatsApp pre-filled inquiry link
  const waMessage = encodeURIComponent(
    `Hello China Machinery Hub, I am interested in the ${product.name} (Ref: ${product.slug}). Please provide shipping availability and a detailed CIF quote to Mombasa.`
  );
  const whatsappUrl = `https://wa.me/254700000000?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Back Navigation */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Equipment Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Title & Badges */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  <Tag className="h-3.5 w-3.5" />
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  <Globe className="h-3.5 w-3.5 text-emerald-400" />
                  Origin: Henan/Shandong Port
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-100">
                {product.name}
              </h1>
            </div>

            {/* Overview Description */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                Equipment Overview
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                  <Gauge className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Processing Capacity</p>
                    <p className="text-sm font-semibold text-zinc-100">{product.capacity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-zinc-900/80 p-4 border border-zinc-800">
                  <Zap className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Power Requirements</p>
                    <p className="text-sm font-semibold text-zinc-100">{product.power_spec}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Import Guarantee */}
            <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-6 border-dashed">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Verified Importer Support
              </h3>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  Includes factory test video before container loading in Qingdao/Shanghai.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  12-Month core structural and motor warranty with local spare parts access.
                </li>
              </ul>
            </div>

          </div>

          {/* Pricing & Action Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 sticky top-8">
              
              <div className="border-b border-zinc-800 pb-4 mb-4">
                <p className="text-xs text-zinc-500 font-medium">Factory FOB Price (China)</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-extrabold text-zinc-100">
                    ${product.price_usd.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400">USD</span>
                </div>
              </div>

              {/* Landed Cost Estimate */}
              <div className="space-y-2 text-xs text-zinc-400 border-b border-zinc-800 pb-4 mb-6">
                <div className="flex justify-between">
                  <span>Factory FOB Price:</span>
                  <span className="text-zinc-200 font-medium">${product.price_usd.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3 w-3 text-emerald-400" />
                    Est. Sea Freight:
                  </span>
                  <span className="text-zinc-200 font-medium">${estFreight.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-800/60 font-semibold text-zinc-100">
                  <span>Est. CIF Mombasa:</span>
                  <span className="text-emerald-400">${totalCifEst.toLocaleString()} USD</span>
                </div>
              </div>

              {/* Action Triggers */}
              <div className="space-y-3">
                {/* Instant PDF Generator */}
                <DownloadProformaBtn product={product} />

                {/* Direct WhatsApp Verification */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Full Quote via WhatsApp
                </a>
              </div>

              <p className="mt-4 text-[11px] text-zinc-500 text-center leading-normal">
                Proforma quotes are valid for 14 days and include freight estimations to East African ports.
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}