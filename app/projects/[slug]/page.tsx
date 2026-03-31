import { getProjectBySlug, PROJECTS } from '@/lib/projects-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Massive Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" /> Case Study
            </p>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tight mb-6">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Detail Area */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          
          {/* Left Column: Specs & CTA */}
          <div className="lg:col-span-4 flex flex-col gap-10 sticky top-28 self-start lg:pr-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] text-primary uppercase mb-6 border-b border-border pb-4">
                Key Specifications
              </h3>
              <ul className="flex flex-col gap-4">
                {project.specs.map(spec => (
                  <li key={spec} className="bg-zinc-950 border border-zinc-800 p-4 rounded-md text-sm text-zinc-300 font-medium tracking-wide">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg text-center shadow-[0_0_40px_rgba(220,38,38,0.05)]">
              <h3 className="text-xl font-bold mb-3 text-white">Need a Similar System?</h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Connect with our acoustic engineers to outline specifications and SPL targets for your upcoming venue.
              </p>
              <ConsultationModal>
                <button className="w-full bg-primary hover:brightness-110 active:scale-95 text-white font-semibold text-sm tracking-widest uppercase py-4 rounded shadow-[0_0_20px_oklch(0.55_0.24_27/0.3)] hover:shadow-[0_0_30px_oklch(0.55_0.24_27/0.5)] transition-all">
                  Request Quote
                </button>
              </ConsultationModal>
            </div>
          </div>

          {/* Right Column: Gallery & Video */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:border-l lg:border-zinc-800 lg:pl-12">
            <div>
               <h3 className="text-xs tracking-[0.3em] text-primary uppercase mb-6 border-b border-border pb-4">
                 Venue Gallery
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {project.gallery.map((img, i) => (
                   <div key={i} className={`relative bg-zinc-900 rounded-md overflow-hidden ${i === 2 ? 'md:col-span-2 aspect-[16/6]' : 'aspect-square md:aspect-video'}`}>
                     <Image
                       src={img}
                       alt={`${project.title} Venue Image ${i + 1}`}
                       fill
                       className="object-cover hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                     />
                   </div>
                 ))}
               </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] text-primary uppercase mb-6 border-b border-border pb-4">
                Project Walkthrough
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <iframe
                  src={project.videoLink}
                  title={`${project.title} Video Walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  )
}
