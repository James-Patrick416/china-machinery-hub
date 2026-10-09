import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fallbackProducts } from "@/lib/db/products";
import { 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  Factory, 
  Zap, 
  Gauge 
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = fallbackProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const refId = product.ref_id || product.id;
  const phone = "254700000000"; // Replace with active WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello China Machinery Hub, I am inquiring about ${product.name} (Ref ID: ${refId}). Please send me pricing, technical specifications, and delivery details.`
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Back Link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Equipment Catalog
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image */}
          <div className="relative aspect-4/3 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            <Image
              src={product.image_url || "/images/machinery/machine-01.webp"}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-zinc-800 text-xs font-mono font-bold text-emerald-400">
              {refId}
            </div>
          </div>

          {/* Machine Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <Factory className="h-4 w-4" /> {product.category}
              </span>
              <h1 className="mt-2 text-2xl sm:text-3xl font-black text-zinc-100">
                {product.name}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                Technical Overview
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Gauge className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Capacity: <strong>{product.capacity}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Power: <strong>{product.power_spec}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Direct factory import with local technical support</span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950"
            >
              <MessageSquare className="h-4 w-4" />
              Inquire on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}