import { ArrowRight, Phone } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section
      id="solutions"
      className="relative py-24 overflow-hidden"
      aria-label="Contact CTA"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.08 0 0) 0%, oklch(0.10 0 0) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Red glow left */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.24 27 / 0.20) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Blue glow right */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.60 0.18 250 / 0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, oklch(0.55 0.24 27 / 0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left text */}
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
              Mission-Critical Audio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance text-foreground">
            Ready to design your <span className="text-primary">perfect system?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            Our systems engineers work directly with architects, venue operators, and
            integrators to deliver bespoke audio solutions — from initial acoustics
            assessment to commissioning day.
          </p>
        </div>

        {/* Right CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <button className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-semibold tracking-widest uppercase hover:brightness-110 transition-all duration-200">
            Request a Consultation
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <button className="inline-flex items-center gap-2 border border-[oklch(0.30_0_0)] text-foreground px-7 py-3.5 rounded text-sm font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-200">
            <Phone size={14} />
            Call Us
          </button>
        </div>
      </div>
    </section>
  )
}
