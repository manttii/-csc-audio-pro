export const SPEAKER_IMAGE_URL = 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800'
export const TECH_GEAR_IMAGE_URL = '/products/amplifiers/amp1.png'
export const STAGE_MONITOR_IMAGE_URL = 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800'
export const CEILING_SPEAKER_IMAGE_URL = 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=800'
export const LOUDSPEAKER_IMAGE_URL = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800'
export const LINE_ARRAY_IMAGE_URL = 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800'

export interface Category {
  name: string
  slug: string
  imageUrl: string
  tone: 'red' | 'blue'
  specs: string[]
}

export const CATEGORIES: Category[] = [
  {
    name: 'Subwoofers',
    slug: 'subwoofers',
    imageUrl: SPEAKER_IMAGE_URL,
    tone: 'red',
    specs: ['MAX SPL: 145dB', 'LF DRIVER: 2x18"', 'CONFIG: Cardioid'],
  },
  {
    name: 'Loudspeakers',
    slug: 'loudspeakers',
    imageUrl: LOUDSPEAKER_IMAGE_URL,
    tone: 'red',
    specs: ['MAX SPL: 139dB', 'HF DRIVER: 1.4"', 'THROW: Long-Range'],
  },
  {
    name: 'Stage Monitors',
    slug: 'stage-monitors',
    imageUrl: STAGE_MONITOR_IMAGE_URL,
    tone: 'red',
    specs: ['WEDGE: Coaxial', 'POWER: 700W RMS', 'COVERAGE: 80°'],
  },
  {
    name: 'Line Arrays',
    slug: 'line-arrays',
    imageUrl: LINE_ARRAY_IMAGE_URL,
    tone: 'red',
    specs: ['MODULE: 3-Way', 'COUPLING: Fast-Rig', 'PATTERN: 120°'],
  },
  {
    name: 'Ceiling Speakers',
    slug: 'ceiling-speakers',
    imageUrl: CEILING_SPEAKER_IMAGE_URL,
    tone: 'red',
    specs: ['PROFILE: Low-Depth', 'VOICING: Wide', 'INSTALL: Quick-Lock'],
  },
  {
    name: 'Amplifiers',
    slug: 'amplifiers',
    imageUrl: '/products/amplifiers/amp1.png',
    tone: 'blue',
    specs: ['CLASS: D', 'CHANNELS: 4', 'OUTPUT: 4 x 1500W'],
  },
  {
    name: 'DSPs',
    slug: 'dsps',
    imageUrl: '/products/dsps/dsp1.png',
    tone: 'blue',
    specs: ['I/O: 4x8', 'LATENCY: <1ms', 'FILTERS: FIR + IIR'],
  },
]

export interface Product {
  name: string
  category: string
  slug: string
  imageUrl: string
  fallbackUrl: string
  specs?: string[]
}

export const ALL_PRODUCTS: Product[] = [
  // Subwoofers
  { name: 'TH-15', category: 'Subwoofers', slug: 'subwoofers', imageUrl: '/products/subwoofers/sub1.jpg', fallbackUrl: SPEAKER_IMAGE_URL },
  { name: 'TH-18', category: 'Subwoofers', slug: 'subwoofers', imageUrl: '/products/subwoofers/sub2.jpg', fallbackUrl: SPEAKER_IMAGE_URL },
  { name: 'TH-218', category: 'Subwoofers', slug: 'subwoofers', imageUrl: '/products/subwoofers/sub3.jpg', fallbackUrl: SPEAKER_IMAGE_URL },
  { name: 'HB-18', category: 'Subwoofers', slug: 'subwoofers', imageUrl: '/products/subwoofers/sub4.jpg', fallbackUrl: SPEAKER_IMAGE_URL },
  { name: 'HB-218', category: 'Subwoofers', slug: 'subwoofers', imageUrl: '/products/subwoofers/sub5.jpg', fallbackUrl: SPEAKER_IMAGE_URL },
  
  // Loudspeakers
  { name: 'CF-10', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: '/products/loudspeakers/ls1.jpg', fallbackUrl: LOUDSPEAKER_IMAGE_URL },
  { name: 'CF-12', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: '/products/loudspeakers/ls2.jpg', fallbackUrl: LOUDSPEAKER_IMAGE_URL },
  { name: 'CF-15', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: '/products/loudspeakers/ls3.jpg', fallbackUrl: LOUDSPEAKER_IMAGE_URL },
  { name: 'FT-12', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: '/products/loudspeakers/ls4.jpg', fallbackUrl: LOUDSPEAKER_IMAGE_URL },
  { name: 'FT-15', category: 'Loudspeakers', slug: 'loudspeakers', imageUrl: '/products/loudspeakers/ls5.jpg', fallbackUrl: LOUDSPEAKER_IMAGE_URL },
  
  // Line Arrays
  { name: 'LA-208', category: 'Line Arrays', slug: 'line-arrays', imageUrl: '/products/line-arrays/la1.jpg', fallbackUrl: LINE_ARRAY_IMAGE_URL },
  { name: 'LA-210', category: 'Line Arrays', slug: 'line-arrays', imageUrl: '/products/line-arrays/la2.jpg', fallbackUrl: LINE_ARRAY_IMAGE_URL },
  { name: 'LA-212', category: 'Line Arrays', slug: 'line-arrays', imageUrl: '/products/line-arrays/la3.jpg', fallbackUrl: LINE_ARRAY_IMAGE_URL },
  
  // Stage Monitors
  { name: 'M-12', category: 'Stage Monitors', slug: 'stage-monitors', imageUrl: '/products/stage-monitors/sm1.jpg', fallbackUrl: STAGE_MONITOR_IMAGE_URL },
  { name: 'M-15', category: 'Stage Monitors', slug: 'stage-monitors', imageUrl: '/products/stage-monitors/sm2.jpg', fallbackUrl: STAGE_MONITOR_IMAGE_URL },
  
  // Ceiling Speakers (Newly Added per request)
  { name: 'CSC-C6 High-Fidelity', category: 'Ceiling Speakers', slug: 'ceiling-speakers', imageUrl: '/products/ceiling/speaker1.jpg', fallbackUrl: CEILING_SPEAKER_IMAGE_URL, specs: ['6.5" Woofer', 'Premium Sound'] },
  { name: 'CSC-C8 Pro Series', category: 'Ceiling Speakers', slug: 'ceiling-speakers', imageUrl: '/products/ceiling/speaker2.jpg', fallbackUrl: CEILING_SPEAKER_IMAGE_URL, specs: ['8" Woofer', 'High SPL'] },
  { name: 'CSC-C10 Commercial', category: 'Ceiling Speakers', slug: 'ceiling-speakers', imageUrl: '/products/ceiling/speaker3.jpg', fallbackUrl: CEILING_SPEAKER_IMAGE_URL, specs: ['10" Woofer', 'Wide Dispersion'] },
  { name: 'CSC-C4 Compact', category: 'Ceiling Speakers', slug: 'ceiling-speakers', imageUrl: '/products/ceiling/speaker4.jpg', fallbackUrl: CEILING_SPEAKER_IMAGE_URL, specs: ['4" Woofer', 'Low Profile'] },
  
  // Amplifiers (fixed paths and added specs)
  { name: 'H-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: '/products/amplifiers/amp1.png', fallbackUrl: TECH_GEAR_IMAGE_URL, specs: ['Class-D Power', 'Rack-Mountable', 'High Output'] },
  { name: 'D-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: '/products/amplifiers/amp1.png', fallbackUrl: TECH_GEAR_IMAGE_URL, specs: ['Class-D Power', 'Rack-Mountable', 'DSP Built-in'] },
  { name: 'MA-Series', category: 'Amplifiers', slug: 'amplifiers', imageUrl: '/products/amplifiers/amp1.png', fallbackUrl: TECH_GEAR_IMAGE_URL, specs: ['Class-D Power', 'Rack-Mountable', 'Multi-channel'] },
  
  // DSPs (fixed paths)
  { name: 'DSP-206', category: 'DSPs', slug: 'dsps', imageUrl: '/products/dsps/dsp1.png', fallbackUrl: TECH_GEAR_IMAGE_URL, specs: ['2 In / 6 Out', '<1ms Latency'] },
  { name: 'DSP-408', category: 'DSPs', slug: 'dsps', imageUrl: '/products/dsps/dsp1.png', fallbackUrl: TECH_GEAR_IMAGE_URL, specs: ['4 In / 8 Out', 'FIR Filters'] },
]
