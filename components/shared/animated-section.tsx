'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: AnimatedSectionProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'ul' | 'ol';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'span';
}) {
  const MotionTag = motion[as];
  return <MotionTag variants={fadeUp} className={cn(className)}>{children}</MotionTag>;
}
