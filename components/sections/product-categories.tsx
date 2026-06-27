'use client';

import { SectionHeading } from '@/components/shared/section-heading';
import { CategoryCard } from '@/components/product/category-card';
import { categories } from '@/constants/products';

export function ProductCategories() {
  return (
    <section id="kategori" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kategori Produk"
          title="Solusi Konveksi untuk Setiap Kebutuhan"
          description="Dari seragam sekolah hingga bahan kain grosir — semua dikerjakan dengan standar kualitas yang sama dan pengerjaan tepat waktu."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {categories.map((category, i) => (
            <CategoryCard key={category.slug} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
