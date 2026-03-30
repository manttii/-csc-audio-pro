import Link from 'next/link'
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Cello Series',      href: '#' },
    { label: 'Contrabass Series', href: '#' },
    { label: 'Harp Series',       href: '#' },
    { label: 'Signal Processing', href: '#' },
  ],
  Solutions: [
    { label: 'Live Events',         href: '#' },
    { label: 'Fixed Installation',  href: '#' },
    { label: 'Home Theater',        href: '#' },
    { label: 'Broadcast & Studio',  href: '#' },
  ],
  Company: [
    { label: 'About CSC',        href: '#' },
    { label: 'Careers',          href: '#' },
    { label: 'Press & Media',    href: '#' },
    { label: 'Distributor Map',  href: '#' },
  ],
}

const socialLinks = [
  { label: 'Twitter / X',  href: 'https://twitter.com',   Icon: Twitter   },
  { label: 'Instagram',    href: 'https://instagram.com', Icon: Instagram },
  { label: 'LinkedIn',     href: 'https://linkedin.com',  Icon: Linkedin  },
  { label: 'YouTube',      href: 'https://youtube.com',   Icon: Youtube   },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[oklch(0.06_0_0)] border-t border-[oklch(0.18_0_0)]"
      aria-label="Site footer"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, oklch(0.55 0.24 27 / 0.5) 40%, oklch(0.60 0.18 250 / 0.4) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-sm flex items-center justify-center border border-primary bg-primary/10">
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
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-pretty">
              Engineering world-class professional audio systems since 2004. Trusted by
              over 2,000 mission-critical venues worldwide.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded border border-[oklch(0.22_0_0)] text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-foreground">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[oklch(0.18_0_0)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wide">
            &copy; {new Date().getFullYear()} CSC Audio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
