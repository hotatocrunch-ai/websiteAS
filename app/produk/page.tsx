import type { Metadata } from 'next';
import { categories, products } from '@/constants/products';
import { siteConfig } from '@/constants/site';
import { ProductCatalogClient } from '@/components/product/product-catalog-client';

export const metadata: Metadata = {
  title: 'Katalog Produk',
  description:
    'Katalog lengkap produk Agus Collection: seragam sekolah, seragam perusahaan, kaos custom, polo shirt, wearpack, jaket, bahan kain, dan atribut sekolah dengan kualitas premium dan harga langsung pabrik.',
  alternates: { canonical: '/produk' },
  openGraph: {
    title: 'Katalog Produk | Agus Collection',
    description:
      'Semua produk konveksi premium Agus Collection tersedia lengkap. Seragam sekolah, perusahaan, kaos custom, polo shirt, wearpack, jaket, dan bahan kain.',
    url: `${siteConfig.url}/produk`,
  },
};

export default function ProdukPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  const activeCategory = searchParams.kategori ?? 'semua';
  return (
    <ProductCatalogClient
      categories={categories}
      products={products}
      activeCategory={activeCategory}
    />
  );
}
