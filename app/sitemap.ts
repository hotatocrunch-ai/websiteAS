import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';
import { products, categories } from '@/constants/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: '/', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/produk', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/tentang', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kontak', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const categoryRoutes = categories.map((c) => ({
    url: `/produk?kategori=${c.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  const productRoutes = products.map((p) => ({
    url: `/produk/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.url}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
