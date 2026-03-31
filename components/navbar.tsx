'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ConsultationModal } from '@/components/consultation-modal'

const navLinks = [
  { label: 'Home',       href: '#'          },
  { label: 'About Us',   href: '#about'     },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Products',   href: '#products'  },
  { label: 'Contact',    href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
        scrolled
          ? 'bg-[oklch(0.06_0_0/0.88)] border-[oklch(0.22_0_0)]'
          : 'bg-[oklch(0.06_0_0/0.60)] border-[oklch(0.18_0_0)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="CSC Audio home">
          <span className="w-7 h-7 rounded-sm flex items-center justify-center border border-primary bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="6" width="2" height="8" rx="1" fill="currentColor" className="text-primary"/>
              <rect x="6" y="3" width="2" height="11" rx="1" fill="currentColor" className="text-primary"/>
              <rect x="10" y="1" width="2" height="13" rx="1" fill="currentColor" className="text-foreground opacity-80"/>
              <rect x="14" y="4" width="2" height="10" rx="1" fill="currentColor" className="text-foreground opacity-50"/>
            </svg>
          </span>
          <span className="text-foreground font-semibold tracking-widest uppercase text-sm">
            CSC <span className="text-primary">Audio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm tracking-wider uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ConsultationModal>
            <button
              id="navbar-request-quote-btn"
              className="text-sm font-medium tracking-widest uppercase px-5 py-2 rounded bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.24_27/0.45)]"
            >
              Request a Quote
            </button>
          </ConsultationModal>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.08_0_0/0.97)] backdrop-blur-xl border-b border-[oklch(0.22_0_0)] px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm tracking-wider uppercase py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ConsultationModal>
              <button
                id="navbar-mobile-request-quote-btn"
                onClick={() => setMenuOpen(false)}
                className="mt-2 w-full text-sm font-medium tracking-widest uppercase px-5 py-2 rounded bg-primary text-primary-foreground hover:brightness-110 transition-all text-center shadow-[0_0_16px_oklch(0.55_0.24_27/0.4)]"
              >
                Request a Quote
              </button>
            </ConsultationModal>
          </nav>
        </div>
      )}
    </header>
  )
}
