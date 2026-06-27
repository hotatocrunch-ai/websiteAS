import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/constants/products';
import { siteConfig } from '@/constants/site';
import { ProductDetailClient } from '@/components/product/product-detail-client';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const title = `${product.name} — ${product.categoryLabel}`;
  const description = product.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/produk/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/produk/${product.slug}`,
      images: [{ url: product.images[0], width: 1200, height: 900, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.slug,
    category: product.categoryLabel,
    brand: { '@type': 'Brand', name: siteConfig.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: product.priceTiers[product.priceTiers.length - 1].price,
      highPrice: product.priceTiers[0].price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
