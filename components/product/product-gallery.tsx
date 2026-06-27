'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className="group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={images[active]}
              alt={`${alt} - gambar ${active + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                'object-cover transition-transform duration-500 ease-out',
                zoom && 'scale-110',
              )}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Lihat gambar ${i + 1}`}
            className={cn(
              'relative aspect-square overflow-hidden rounded-xl border-2 bg-slate-100 transition-all duration-300',
              active === i
                ? 'border-gold shadow-gold-glow'
                : 'border-slate-200 hover:border-gold/40',
            )}
          >
            <Image
              src={img}
              alt={`${alt} thumbnail ${i + 1}`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
