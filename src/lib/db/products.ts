import { createClient } from "@/lib/supabase/client";

export interface Product {
  id: string;
  ref_id?: string;
  name: string;
  slug: string;
  category: string;
  price_usd: number;
  capacity: string;
  power_spec: string;
  description: string;
  is_featured: boolean;
  image_url?: string;
  inquire_only?: boolean;
}

// Core Featured Products with pricing for Proforma Invoices & Calculators
const coreProducts: Product[] = [
  {
    id: "core-1",
    ref_id: "CMH-CORE-01",
    name: "Heavy Duty Commercial Posho Mill (Combined De-husker)",
    slug: "combined-posho-mill-15hp",
    category: "Grain Milling",
    price_usd: 2850,
    capacity: "800 - 1200 kg/hr",
    power_spec: "15HP Diesel / 415V 3-Phase",
    description: "Industrial grade maize huller and roller mill designed for processing Grade-1 flour for institutions, SACCOs, and retail packaging.",
    is_featured: true,
    image_url: "/images/machinery/machine-01.webp",
    inquire_only: false,
  },
  {
    id: "core-2",
    ref_id: "CMH-CORE-02",
    name: "Recirculating Batch Grain Dryer (5-Ton)",
    slug: "recirculating-batch-grain-dryer-5t",
    category: "Drying & Post-Harvest",
    price_usd: 6400,
    capacity: "5 Tons per batch",
    power_spec: "3-Phase Electric + Biomass/Diesel Burner",
    description: "Prevents aflatoxin contamination in maize and wheat by reducing moisture content from 22% down to 13.5% in under 6 hours.",
    is_featured: true,
    image_url: "/images/machinery/machine-02.webp",
    inquire_only: false,
  },
  {
    id: "core-3",
    ref_id: "CMH-CORE-03",
    name: "Commercial Potato & Carrot Washer-Grader Line",
    slug: "potato-carrot-washer-grader-2t",
    category: "Root Crop Processing",
    price_usd: 3800,
    capacity: "2,000 kg/hr",
    power_spec: "5.5kW 380V 3-Phase",
    description: "High-pressure roller brush washing, destoning, and size-grading station for fresh potato and carrot market distribution.",
    is_featured: true,
    image_url: "/images/machinery/machine-05.webp",
    inquire_only: false,
  },
];

// Helper categories for auto-generated items
const categories = [
  "Grain Milling & Processing",
  "Root Crop Lines (Carrot & Potato)",
  "Water Storage & Irrigation",
  "Oil Extraction & Refining",
  "Agro-Packaging & Conveyors",
];

// Generate products for all 140 WebP images
const generatedFactoryProducts: Product[] = Array.from({ length: 140 }, (_, index) => {
  const itemNum = index + 1;
  const numStr = String(itemNum).padStart(2, "0");
  const category = categories[index % categories.length];

  return {
    id: `factory-${itemNum}`,
    ref_id: `CMH-${String(itemNum).padStart(3, "0")}`,
    name: `Industrial ${category.split(" ")[0]} Machinery Unit #${itemNum}`,
    slug: `factory-machinery-unit-${itemNum}`,
    category,
    price_usd: 0,
    capacity: "Factory Standard Specs",
    power_spec: "Custom Motor / Diesel Configuration",
    description: `Direct import agricultural equipment unit. Verified Chinese factory sourcing with local warranty and Mombasa CIF shipping options.`,
    is_featured: itemNum <= 8,
    image_url: `/images/machinery/machine-${numStr}.webp`,
    inquire_only: true,
  };
});

export const fallbackProducts: Product[] = [...coreProducts, ...generatedFactoryProducts];

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackProducts;
    }
    return data as Product[];
  } catch {
    return fallbackProducts;
  }
}