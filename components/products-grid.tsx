'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { CATEGORIES } from '@/lib/product-data'

const gridCategories = [
  ...CATEGORIES,
  {
    name: 'Search Products',
    slug: '',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
    tone: 'blue',
    specs: ['OPEN: Full Catalog', 'FILTER: Live Search', 'JUMP: Instant'],
  },
] as const

export default function ProductsGrid() {
  return (
    <section
      id="products"
      className="relative py-28 bg-background overflow-hidden"
      aria-label="Product series"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, oklch(0.60 0.18 250 / 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
                Product Range
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance text-foreground">
              Engineered to<br />
              <span className="text-primary">Perform.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-pretty leading-relaxed text-sm sm:text-base">
            Discover the full hardware ecosystem. Built for touring, installs, and critical
            listening environments.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {gridCategories.map((category, index) => (
            <Link
              key={category.name}
              href={category.name === 'Search Products' ? '/products' : `/products/${category.slug}`}
              className="block"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  borderColor:
                    category.tone === 'blue' ? 'oklch(0.62 0.19 255)' : 'oklch(0.55 0.24 27)',
                  boxShadow:
                    category.tone === 'blue'
                      ? '0 0 0 1px oklch(0.62 0.19 255 / 0.85), 0 0 34px oklch(0.62 0.19 255 / 0.35)'
                      : '0 0 0 1px oklch(0.55 0.24 27 / 0.85), 0 0 34px oklch(0.55 0.24 27 / 0.35)',
                }}
                className="group relative h-44 min-h-44 sm:h-48 lg:h-44 bg-zinc-950 border border-zinc-800/90 rounded-lg overflow-hidden p-3 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="pt-1 text-left uppercase font-bold text-sm sm:text-base tracking-wider text-white leading-tight break-words">
                    {category.name}
                  </span>
                  <div className="grid grid-cols-1 gap-1 border-t border-zinc-700/70 pt-2">
                    {category.specs.map((spec) => (
                      <span key={spec} className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-zinc-300">
                        {spec}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 pt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-200 group-hover:text-red-500 transition-colors">
                      View Range
                      <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
