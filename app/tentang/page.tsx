import type { Metadata } from 'next';
import { siteConfig } from '@/constants/site';
import { AboutClient } from '@/components/about/about-client';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Agus Collection adalah perusahaan konveksi yang berfokus pada produksi seragam berkualitas tinggi untuk sekolah, perusahaan, instansi pemerintah, komunitas, hingga kebutuhan custom apparel.',
  alternates: { canonical: '/tentang' },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Mojokerto',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
