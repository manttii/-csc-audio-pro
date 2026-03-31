'use client'

import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/product-data'
import { ProductImage } from '@/components/ui/product-image'

function ProductList({ activeCategorySlug }: { activeCategorySlug: string }) {
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (window.sessionStorage.getItem('focusProductsSearch') === '1') {
      searchInputRef.current?.focus()
      window.sessionStorage.removeItem('focusProductsSearch')
    }
  }, [])

  const categoryFilteredProducts = useMemo(
    () => ALL_PRODUCTS.filter((p) => p.slug === activeCategorySlug),
    [activeCategorySlug],
  )

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return categoryFilteredProducts
    return categoryFilteredProducts.filter((product) => product.name.toLowerCase().includes(q))
  }, [categoryFilteredProducts, searchQuery])

  const getMiniSpecs = (category: string) => {
    if (category === 'Subwoofers') return 'SPL: 142dB | LF: 18" | 1200W'
    if (category === 'Amplifiers') return 'CH: 4 | 2Ω stable | DSP built-in'
    if (category === 'DSPs') return 'CH: 4 | 2Ω stable | DSP built-in'
    return 'SPL: 135dB | 8Ω | 600W'
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="relative max-w-md">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
        />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full h-11 rounded-lg bg-zinc-900 border border-zinc-800 pl-10 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="group relative bg-zinc-950 border border-zinc-800/90 rounded-lg overflow-hidden p-3 shadow-[0_0_0_1px_rgba(220,38,38,0.12),0_10px_28px_rgba(0,0,0,0.55)] hover:scale-[1.02] hover:border-red-500/90 hover:shadow-[0_0_0_1px_rgba(220,38,38,0.55),0_0_36px_rgba(220,38,38,0.30)] transition-all duration-300"
          >
            <span className="absolute top-2 right-2 z-20 text-[9px] font-bold tracking-[0.18em] uppercase bg-red-600 text-white px-2 py-1 rounded-sm">
              Pro Series
            </span>

            <div className="relative aspect-square bg-zinc-950 rounded-t-md mb-3 overflow-hidden group-hover:bg-zinc-900 transition-colors">
              <ProductImage
                src={product.imageUrl}
                fallbackSrc={product.fallbackUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold uppercase leading-tight text-white">{product.name}</h3>
              <p className="text-red-500 text-[11px] font-mono tracking-wider">{product.category}</p>
              <div className="text-[10px] text-zinc-400 tracking-wide uppercase border-t border-zinc-800 pt-2">
                {getMiniSpecs(product.category)}
              </div>
              <div className="pt-1">
                <button className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-200 group-hover:text-red-500 transition-colors" aria-label={`Learn more about ${product.name}`}>
                  Learn More
                  <ArrowRight size={12} className="text-red-500 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductsCategoryClient({ category }: { category?: string }) {
  const activeCategorySlug = category ?? ''
  const categoryLabel =
    ALL_PRODUCTS.find((p) => p.slug === activeCategorySlug)?.category ?? activeCategorySlug ?? ''

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-black mb-6 md:mb-8 italic border-l-8 border-red-600 pl-4">
          {(categoryLabel || 'Products').toUpperCase()} RANGE
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList activeCategorySlug={activeCategorySlug} />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}

