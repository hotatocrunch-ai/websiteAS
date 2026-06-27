import { HeroSection } from '@/components/sections/hero-section';
import { TrustBar } from '@/components/sections/trust-bar';
import { StatsCounter } from '@/components/sections/stats-counter';
import { ProductCategories } from '@/components/sections/product-categories';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel';
import { CTASection } from '@/components/sections/cta-section';
import { FaqSection } from '@/components/sections/faq-section';
import { siteConfig } from '@/constants/site';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Mojokerto',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    openingHours: 'Mo-Sa 08:00-17:00',
    priceRange: 'Rp 32.000 - Rp 175.000',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <ProductCategories />
      <StatsCounter />
      <FeaturedProducts />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialCarousel />
      <CTASection />
      <FaqSection />
    </>
  );
}
