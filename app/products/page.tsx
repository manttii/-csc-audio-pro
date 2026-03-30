'use client'

import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'

const SPEAKER_IMAGE_URL = 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800'
const TECH_GEAR_IMAGE_URL = 'https://images.unsplash.com/photo-1558444479-c84851830060?q=80&w=800'
const STAGE_MONITOR_IMAGE_URL = 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800'

const ALL_PRODUCTS = [
  { name: 'TH-15', category: 'Subwoofers', slug: 'subwoofers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'TH-18', category: 'Subwoofers', slug: 'subwoofers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'TH-218', category: 'Subwoofers', slug: 'subwoofers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'HB-18', category: 'Subwoofers', slug: 'subwoofers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'HB-218', category: 'Subwoofers', slug: 'subwoofers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'CF-10', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'CF-12', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'CF-15', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'FT-12', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'FT-15', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'LA-208', category: 'Line Arrays', slug: 'line-arrays', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'LA-210', category: 'Line Arrays', slug: 'line-arrays', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'LA-212', category: 'Line Arrays', slug: 'line-arrays', imageUrl: SPEAKER_IMAGE_URL },
  { name: 'M-12', category: 'Stage Monitors', slug: 'stage-monitors', imageUrl: STAGE_MONITOR_IMAGE_URL },
  { name: 'M-15', category: 'Stage Monitors', slug: 'stage-monitors', imageUrl: STAGE_MONITOR_IMAGE_URL },
  { name: 'H-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: TECH_GEAR_IMAGE_URL },
  { name: 'D-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: TECH_GEAR_IMAGE_URL },
  { name: 'MA-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: TECH_GEAR_IMAGE_URL },
  { name: 'DSP-206', category: 'DSPs', slug: 'dsps', imageUrl: TECH_GEAR_IMAGE_URL },
  { name: 'DSP-408', category: 'DSPs', slug: 'dsps', imageUrl: TECH_GEAR_IMAGE_URL },
]

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
            <div className="relative aspect-[4/3] bg-zinc-800 rounded-md mb-3 overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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