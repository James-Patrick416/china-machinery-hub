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
  created_at?: string;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      console.warn("Supabase fetch fallback or empty table:", error?.message);
      return [];
    }

    return data as Product[];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_featured", true);

    if (error || !data) return [];
    return data as Product[];
  } catch (err) {
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) return null;
    return data as Product;
  } catch (err) {
    return null;
  }
}