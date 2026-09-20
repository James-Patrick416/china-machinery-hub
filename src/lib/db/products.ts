import { createClient } from "@/lib/supabase/client";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price_usd: number;
  capacity: string;
  power_spec: string;
  description: string;
  is_featured: boolean;
}

export const fallbackProducts: Product[] = [
  {
    id: "1",
    name: "Heavy Duty Commercial Posho Mill (Combined De-husker)",
    slug: "combined-posho-mill-15hp",
    category: "Grain Milling",
    price_usd: 2850,
    capacity: "800 - 1200 kg/hr",
    power_spec: "15HP Diesel / 415V 3-Phase",
    description: "Industrial grade maize huller and roller mill designed for processing Grade-1 flour for institutions, SACCOs, and retail packaging.",
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
    description: "Prevents aflatoxin contamination in maize and wheat by reducing moisture content from 22% down to 13.5% in under 6 hours.",
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
  {
    id: "5",
    name: "Commercial Potato & Carrot Washer-Grader Line",
    slug: "potato-carrot-washer-grader-2t",
    category: "Root Crop Processing",
    price_usd: 3800,
    capacity: "2,000 kg/hr",
    power_spec: "5.5kW 380V 3-Phase",
    description: "High-pressure roller brush washing, destoning, and size-grading station for fresh potato and carrot market distribution.",
    is_featured: true,
  },
  {
    id: "6",
    name: "10,000L Heavy-Duty Reinforced Water Storage Tank & Pump Kit",
    slug: "10000l-water-harvesting-tank-kit",
    category: "Water Storage & Irrigation",
    price_usd: 1250,
    capacity: "10,000 Liters",
    power_spec: "1.5HP Submersible / Solar Compatible",
    description: "UV-stabilized anti-bacterial rainwater harvesting tank complete with rapid-fixing support frame, filtration mesh, and booster pump.",
    is_featured: true,
  },
  {
    id: "7",
    name: "IoT Smart Farm & Processing Analytics Terminal",
    slug: "iot-smart-farm-data-analytics-terminal",
    category: "Data Analytics & Sensors",
    price_usd: 850,
    capacity: "Real-Time Telemetry Data",
    power_spec: "Solar Powered + 12V Battery Backup",
    description: "Monitors machinery runtime, moisture levels, power efficiency, and output yields for maize mills, potato lines, and water systems.",
    is_featured: false,
  },
];

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