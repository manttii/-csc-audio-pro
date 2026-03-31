'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ConsultationModal } from '@/components/consultation-modal'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Radial glow — red */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 70% 55%, oklch(0.55 0.24 27 / 0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Radial glow — blue */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 20% 60%, oklch(0.60 0.18 250 / 0.10) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Fine grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, oklch(0.96 0 0) 0px, oklch(0.96 0 0) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, oklch(0.96 0 0) 0px, oklch(0.96 0 0) 1px, transparent 1px, transparent 60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 lg:px-10 pt-24 pb-20">
        <div className="flex flex-col gap-7">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
              Pro Audio Systems
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-balance text-foreground">
            Powering the Sound{' '}
            <span className="relative inline-block">
              <span className="text-primary">to Perfection.</span>
              <span
                className="pointer-events-none absolute -bottom-1 left-0 w-full h-px"
                style={{
                  background: 'linear-gradient(90deg, oklch(0.55 0.24 27), transparent)',
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Sub */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md text-pretty">
            High-Performance Pro-Audio Systems for Mission-Critical Venues. Engineered for
            concert halls, live events, and bespoke home theaters.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="#products"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:brightness-110 transition-all duration-200"
            >
              Explore Solutions
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <ConsultationModal>
              <button
                id="hero-book-consultation-btn"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase transition-colors duration-200"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </button>
            </ConsultationModal>
          </div>

          {/* Spec strip */}
          <div className="flex items-center gap-6 mt-4 pt-6 border-t border-[oklch(0.22_0_0)]">
            {[
              { label: 'Frequency Range', value: '20Hz – 20kHz' },
              { label: 'Max SPL',         value: '145 dB'       },
              { label: 'Dispersion',      value: '120° H / 10° V' },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col gap-0.5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
