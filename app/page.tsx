import Navbar          from '@/components/navbar'
import HeroSection     from '@/components/hero-section'
import StatsBar        from '@/components/stats-bar'
import ProductsGrid    from '@/components/products-grid'
import SolutionsGrid   from '@/components/solutions-grid'
import GlobalPresence  from '@/components/global-presence'
import Footer          from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsGrid />
      <SolutionsGrid />
      <GlobalPresence />
      <Footer />
    </main>
  )
}
