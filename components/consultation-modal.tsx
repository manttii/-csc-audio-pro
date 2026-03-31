'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send, Loader, CheckCircle } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string
  contact: string
  projectType: string
  preferredTime: string
}

interface FormErrors {
  name?: string
  contact?: string
  projectType?: string
  preferredTime?: string
}

interface ConsultationModalProps {
  /** Any element that should open the modal when clicked */
  children: React.ReactNode
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { value: 'home-theater',    label: 'Home Theater'     },
  { value: 'mall',            label: 'Mall'             },
  { value: 'cinema',          label: 'Cinema'           },
  { value: 'studio',          label: 'Studio'           },
  { value: 'religious-place', label: 'Religious Place'  },
  { value: 'other',           label: 'Other'            },
]

const PREFERRED_TIMES = [
  { value: 'morning',   label: 'Morning   (9 AM – 12 PM)'  },
  { value: 'afternoon', label: 'Afternoon (12 PM – 5 PM)'  },
  { value: 'evening',   label: 'Evening   (5 PM – 8 PM)'   },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function ConsultationModal({ children }: ConsultationModalProps) {
  const [open, setOpen]       = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState<FormState>({
    name: '',
    contact: '',
    projectType: '',
    preferredTime: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  // ── Validation ──────────────────────────────────────────────────────────────
  function validate(): boolean {
    const next: FormErrors = {}
    if (!form.name.trim())        next.name         = 'Name is required.'
    if (!form.contact.trim())     next.contact      = 'Email or phone is required.'
    if (!form.projectType)        next.projectType   = 'Please select a project type.'
    if (!form.preferredTime)      next.preferredTime = 'Please select a preferred time.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  // ── Handlers ────────────────────────────────────────────────────────────────
  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      // Reset state after the close animation (~300 ms)
      setTimeout(() => {
        setSubmitted(false)
        setLoading(false)
        setForm({ name: '', contact: '', projectType: '', preferredTime: '' })
        setErrors({})
      }, 300)
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* The trigger is whatever element the parent passes in */}
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
          bg-zinc-950 border border-zinc-800
          shadow-[0_0_60px_oklch(0.55_0.24_27/0.15)]
          sm:max-w-lg p-0 overflow-hidden
        "
      >
        {/* ── Red accent bar ── */}
        <div
          className="h-[3px] w-full"
          style={{
            background: 'linear-gradient(90deg, oklch(0.55 0.24 27), oklch(0.55 0.24 27 / 0.3) 70%, transparent)',
          }}
        />

        <div className="px-7 pb-7 pt-5">
          {submitted ? (
            // ── Success state ──
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 border border-primary/30">
                <CheckCircle className="size-6 text-primary" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
                  Request Received.
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                  Our lead engineer will contact you within 24 hours.
                </DialogDescription>
              </DialogHeader>
              <button
                onClick={() => handleOpenChange(false)}
                className="mt-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* ── Header ── */}
              <DialogHeader className="mb-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-1">
                  Free Consultation
                </p>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  Book a{' '}
                  <span className="text-primary">Consultation</span>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm mt-1">
                  Tell us about your project and we'll get back to you within 24 hours.
                </DialogDescription>
              </DialogHeader>

              {/* ── Form ── */}
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cm-name"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="cm-name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="
                      w-full rounded bg-zinc-900 border border-zinc-800 px-4 py-2.5
                      text-sm text-foreground placeholder:text-zinc-600
                      focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30
                      transition-colors duration-200
                      aria-[invalid=true]:border-red-500/60
                    "
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'cm-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="cm-name-error" className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email / Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cm-contact"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Email / Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    id="cm-contact"
                    type="text"
                    autoComplete="email"
                    placeholder="hello@example.com  or  +91 98765 43210"
                    value={form.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
                    className="
                      w-full rounded bg-zinc-900 border border-zinc-800 px-4 py-2.5
                      text-sm text-foreground placeholder:text-zinc-600
                      focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30
                      transition-colors duration-200
                    "
                    aria-invalid={!!errors.contact}
                    aria-describedby={errors.contact ? 'cm-contact-error' : undefined}
                  />
                  {errors.contact && (
                    <p id="cm-contact-error" className="text-xs text-red-500">{errors.contact}</p>
                  )}
                </div>

                {/* Project Type + Preferred Time – side by side on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cm-project-type"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Project Type <span className="text-primary">*</span>
                    </label>
                    <Select
                      value={form.projectType}
                      onValueChange={(v) => handleChange('projectType', v)}
                    >
                      <SelectTrigger
                        id="cm-project-type"
                        className="
                          w-full bg-zinc-900 border-zinc-800 text-sm text-foreground
                          data-[placeholder]:text-zinc-600
                          focus:border-primary/60 focus:ring-1 focus:ring-primary/30
                          h-10 rounded
                        "
                        aria-invalid={!!errors.projectType}
                      >
                        <SelectValue placeholder="Select type…" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800 text-foreground">
                        {PROJECT_TYPES.map((pt) => (
                          <SelectItem
                            key={pt.value}
                            value={pt.value}
                            className="text-sm focus:bg-zinc-800 focus:text-foreground cursor-pointer"
                          >
                            {pt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-xs text-red-500">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cm-preferred-time"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Preferred Time <span className="text-primary">*</span>
                    </label>
                    <Select
                      value={form.preferredTime}
                      onValueChange={(v) => handleChange('preferredTime', v)}
                    >
                      <SelectTrigger
                        id="cm-preferred-time"
                        className="
                          w-full bg-zinc-900 border-zinc-800 text-sm text-foreground
                          data-[placeholder]:text-zinc-600
                          focus:border-primary/60 focus:ring-1 focus:ring-primary/30
                          h-10 rounded
                        "
                        aria-invalid={!!errors.preferredTime}
                      >
                        <SelectValue placeholder="Select slot…" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800 text-foreground">
                        {PREFERRED_TIMES.map((pt) => (
                          <SelectItem
                            key={pt.value}
                            value={pt.value}
                            className="text-sm focus:bg-zinc-800 focus:text-foreground cursor-pointer"
                          >
                            {pt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && (
                      <p className="text-xs text-red-500">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  id="cm-submit"
                  type="submit"
                  disabled={loading}
                  className="
                    mt-1 w-full flex items-center justify-center gap-2
                    bg-red-600 hover:bg-red-500 active:scale-[0.98]
                    text-white font-semibold text-sm tracking-widest uppercase
                    px-6 py-3 rounded
                    shadow-[0_0_20px_oklch(0.55_0.24_27/0.4)]
                    hover:shadow-[0_0_28px_oklch(0.55_0.24_27/0.55)]
                    transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
                  "
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin size-4" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Request
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-zinc-600">
                  No spam. We respect your privacy.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
