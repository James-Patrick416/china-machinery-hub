import { MetadataRoute } from "next";
import { getProducts } from "@/lib/db/products";

const fallbackSlugs = [
  "combined-posho-mill-15hp",
  "recirculating-batch-grain-dryer-5t",
  "screw-sunflower-oil-press-75kw",
  "grain-cleaner-destoner-vibrating",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://china-machinery-hub.vercel.app/";

  // Static site routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roi-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chik-academy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Fetch products from DB
  let productSlugs = fallbackSlugs;
  try {
    const products = await getProducts();
    if (products && products.length > 0) {
      productSlugs = Array.from(
        new Set([...products.map((p) => p.slug), ...fallbackSlugs])
      );
    }
  } catch (err) {
    console.error("Error generating product sitemap entries:", err);
  }

  // Dynamic product routes
  const catalogRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${baseUrl}/catalog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...catalogRoutes];
}