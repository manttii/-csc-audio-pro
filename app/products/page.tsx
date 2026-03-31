'use client'

import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { ALL_PRODUCTS } from '@/lib/product-data'
import { ProductImage } from '@/components/ui/product-image'

function ProductList() {
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // Master page should be searchable immediately.
    searchInputRef.current?.focus()

    if (window.sessionStorage.getItem('focusProductsSearch') === '1') {
      window.sessionStorage.removeItem('focusProductsSearch')
    }
  }, [])

  const filteredProducts = ALL_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
        {filteredProducts.map((product) => (
          <div key={product.name} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg hover:border-red-600 transition-all group">
            <div className="relative aspect-square bg-zinc-950 border-b border-zinc-800 rounded-t-md mb-3 overflow-hidden p-4 group-hover:bg-zinc-900 transition-colors">
              <ProductImage
                src={product.imageUrl}
                fallbackSrc={product.fallbackUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            </div>
            <h3 className="text-lg font-bold uppercase leading-tight">{product.name}</h3>
            <p className="text-red-600 text-[11px] font-mono tracking-wider mt-1">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-black mb-6 md:mb-8 italic border-l-8 border-red-600 pl-4">
          INVENTORY
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}