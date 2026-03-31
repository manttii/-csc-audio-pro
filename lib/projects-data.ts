export interface Project {
  title: string
  slug: string
  description: string
  heroImage: string
  specs: string[]
  gallery: string[]
  videoLink: string
}

export const PROJECTS: Record<string, Project> = {
  'clubs-and-bars': {
    title: 'Clubs & Bars',
    slug: 'clubs-and-bars',
    description: 'Precision-engineered audio for high-energy environments. We focus on uniform coverage and heart-thumping low-end without sacrificing vocal clarity at the bar.',
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200', 
    specs: ['140dB Peak SPL', 'Uniform 360° Coverage', 'Compact Club Subwoofers'],
    gallery: [
      'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800',
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=800',
      'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=800'
    ],
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'auditoriums': {
    title: 'Auditoriums',
    slug: 'auditoriums',
    description: 'Perfectly tuned acoustic environments. Our systems ensure every seat—from the front row to the back balcony—experiences crystal clear speech and rich musicality.',
    heroImage: 'https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=1200',
    specs: ['Zero Latency DSP', 'Acoustic Time Alignment', 'High STI (Speech Transmission Index)'],
    gallery: [
      'https://images.unsplash.com/photo-1563842183312-32b490f05596?q=80&w=800',
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=800',
      'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?q=80&w=800'
    ],
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'live-concerts': {
    title: 'Live Concerts',
    slug: 'live-concerts',
    description: 'Tour-grade performance. High-SPL line arrays designed for rapid rigging and massive throw distances to cover crowds of 50,000+.',
    heroImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200',
    specs: ['145dB+ Max SPL', 'Weather-Resistant Enclosures', 'Fast-Rig Interlocking Mechanics'],
    gallery: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800',
      'https://images.unsplash.com/photo-1540039155732-68041d8e13d4?q=80&w=800',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800'
    ],
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'hotels-and-malls': {
    title: 'Hotels & Malls',
    slug: 'hotels-and-malls',
    description: 'Discreet yet powerful. Multi-zone voice evacuation and background music systems that blend seamlessly into architectural designs while providing mission-critical audio.',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200',
    specs: ['Multi-Zone Routing', 'Fire Safety EN54 Certified', 'In-Ceiling Architecture'],
    gallery: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800',
      'https://images.unsplash.com/photo-1551882547-ff40c0d12c56?q=80&w=800',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800'
    ],
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS[slug]
}
