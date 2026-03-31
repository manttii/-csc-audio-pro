'use client'

import { MapPin, Phone, Mail, ArrowRight, Headphones } from 'lucide-react'

const offices = [
  {
    region: 'United Kingdom',
    city: 'Leicester',
    address: '12 Meridian Business Park\nLeicester, LE19 1WZ',
    phone: '+44 116 234 5678',
    email: 'uk@cscaudio.com',
    accent: 'red' as const,
    tag: 'HQ',
  },
  {
    region: 'Europe',
    city: 'Frankfurt, Germany',
    address: 'Mainzer Landstraße 50\n60325 Frankfurt am Main',
    phone: '+49 69 1234 5678',
    email: 'eu@cscaudio.com',
    accent: 'blue' as const,
    tag: 'EU Hub',
  },
  {
    region: 'India',
    city: 'Chandigarh',
    address: 'SCO 45-46, Sector 17C\nChandigarh, 160017',
    phone: '+91 172 234 5678',
    email: 'in@cscaudio.com',
    accent: 'red' as const,
    tag: 'APAC',
  },
]

const accentMap = {
  red:  {
    border:    'oklch(0.55 0.24 27 / 0.35)',
    borderHov: 'oklch(0.55 0.24 27 / 0.70)',
    glow:      'oklch(0.55 0.24 27 / 0.12)',
    tag:       'oklch(0.55 0.24 27)',
    tagBg:     'oklch(0.55 0.24 27 / 0.12)',
    dot:       'oklch(0.55 0.24 27)',
  },
  blue: {
    border:    'oklch(0.60 0.18 250 / 0.35)',
    borderHov: 'oklch(0.60 0.18 250 / 0.70)',
    glow:      'oklch(0.60 0.18 250 / 0.10)',
    tag:       'oklch(0.60 0.18 250)',
    tagBg:     'oklch(0.60 0.18 250 / 0.12)',
    dot:       'oklch(0.60 0.18 250)',
  },
}

export default function GlobalPresence() {
  return (
    <>
      {/* ── GLOBAL PRESENCE SECTION ── */}
      <section
        id="global"
        className="relative py-28 overflow-hidden"
        aria-label="Global Presence"
      >
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(oklch(0.25 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.25 0 0 / 0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden="true"
        />
        {/* Top divider */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, oklch(0.55 0.24 27 / 0.35), oklch(0.60 0.18 250 / 0.35), transparent)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <div className="mb-16 flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ background: 'oklch(0.55 0.24 27)' }} />
              <span
                className="text-xs tracking-[0.3em] uppercase font-medium"
                style={{ color: 'oklch(0.55 0.24 27)' }}
              >
                Worldwide Network
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance text-foreground">
              Global{' '}
              <span style={{ color: 'oklch(0.60 0.18 250)' }}>Presence</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              With offices across three continents, CSC Audio delivers world-class
              engineering, support, and installation services wherever your project
              demands it.
            </p>
          </div>

          {/* Office cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => {
              const c = accentMap[office.accent]
              return (
                <article
                  key={office.city}
                  className="group relative rounded-xl p-8 flex flex-col gap-6 transition-all duration-300"
                  style={{
                    background: 'oklch(0.10 0 0)',
                    border: `1px solid ${c.border}`,
                    boxShadow: `0 0 0 0 ${c.glow}`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.border = `1px solid ${c.borderHov}`
                    el.style.boxShadow = `0 0 40px 4px ${c.glow}, inset 0 0 20px 0 ${c.glow}`
                    el.style.background = 'oklch(0.12 0 0)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.border = `1px solid ${c.border}`
                    el.style.boxShadow = `0 0 0 0 ${c.glow}`
                    el.style.background = 'oklch(0.10 0 0)'
                  }}
                >
                  {/* Tag + pin row */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                      style={{ background: c.tagBg, color: c.tag }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: c.dot }}
                        aria-hidden="true"
                      />
                      {office.tag}
                    </div>
                    <MapPin size={16} className="shrink-0 mt-0.5 text-muted-foreground" />
                  </div>

                  {/* Region / City */}
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium">
                      {office.region}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mt-1">
                      {office.address}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px w-full"
                    style={{ background: `linear-gradient(90deg, ${c.border}, transparent)` }}
                    aria-hidden="true"
                  />

                  {/* Contact details */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/link"
                    >
                      <Phone
                        size={13}
                        className="shrink-0"
                        style={{ color: c.tag }}
                        aria-hidden="true"
                      />
                      <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">
                        {office.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/link"
                    >
                      <Mail
                        size={13}
                        className="shrink-0"
                        style={{ color: c.tag }}
                        aria-hidden="true"
                      />
                      <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">
                        {office.email}
                      </span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GLOWING CTA BANNER ── */}
      <section
        className="relative py-32 overflow-hidden"
        aria-label="Free Audio Consultation CTA"
      >
        {/* Deep background */}
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.07 0 0)' }}
          aria-hidden="true"
        />
        {/* Large centre glow — red */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.55 0.24 27 / 0.18) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
        {/* Blue glow — left edge */}
        <div
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.60 0.18 250 / 0.14) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          aria-hidden="true"
        />
        {/* Blue glow — right edge */}
        <div
          className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.60 0.18 250 / 0.14) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          aria-hidden="true"
        />
        {/* Top border glow */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 5%, oklch(0.55 0.24 27 / 0.6) 50%, transparent 95%)' }}
          aria-hidden="true"
        />
        {/* Bottom border glow */}
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 5%, oklch(0.60 0.18 250 / 0.4) 50%, transparent 95%)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center gap-8">
          {/* Icon badge */}
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl"
            style={{
              background: 'oklch(0.55 0.24 27 / 0.12)',
              border: '1px solid oklch(0.55 0.24 27 / 0.35)',
            }}
          >
            <Headphones size={28} style={{ color: 'oklch(0.55 0.24 27)' }} aria-hidden="true" />
          </div>

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ background: 'oklch(0.55 0.24 27 / 0.6)' }} />
            <span
              className="text-xs tracking-[0.35em] uppercase font-semibold"
              style={{ color: 'oklch(0.55 0.24 27)' }}
            >
              Free Expert Session
            </span>
            <span className="h-px w-10" style={{ background: 'oklch(0.55 0.24 27 / 0.6)' }} />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground leading-tight">
            Get Your{' '}
            <span
              className="relative inline-block"
              style={{
                color: 'oklch(0.55 0.24 27)',
                textShadow: '0 0 40px oklch(0.55 0.24 27 / 0.5)',
              }}
            >
              Free Audio
            </span>{' '}
            Consultation
          </h2>

          {/* Sub-copy */}
          <p className="text-muted-foreground text-base leading-relaxed text-pretty max-w-2xl">
            Speak directly with a CSC Audio systems engineer. We&apos;ll assess your
            venue, define coverage requirements, and deliver a tailored proposal — at
            zero cost to you.
          </p>

          {/* CTA button */}
          <button
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 overflow-hidden"
            style={{
              background: 'oklch(0.55 0.24 27)',
              boxShadow: '0 0 30px oklch(0.55 0.24 27 / 0.40)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 60px oklch(0.55 0.24 27 / 0.65)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 30px oklch(0.55 0.24 27 / 0.40)'
            }}
          >
            Book a Free Consultation
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>

          {/* Trust note */}
          <p className="text-muted-foreground text-xs tracking-wide">
            No commitment required &nbsp;·&nbsp; Response within 24 hours &nbsp;·&nbsp; Trusted by 2,000+ venues
          </p>
        </div>
      </section>
    </>
  )
}
