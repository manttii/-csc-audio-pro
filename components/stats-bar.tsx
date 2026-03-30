const stats = [
  {
    value:   '20',
    unit:    'Years',
    label:   'Of Trust',
    detail:  'Delivering world-class audio since 2004',
  },
  {
    value:   '50+',
    unit:    'Products',
    label:   'In Our Range',
    detail:  'Line arrays, subs, amplifiers & processors',
  },
  {
    value:   '2000+',
    unit:    'Installations',
    label:   'Large-Scale Venues',
    detail:  'Stadiums, arenas, theaters & luxury residences',
  },
]

export default function StatsBar() {
  return (
    <section
      id="about"
      className="relative bg-[oklch(0.08_0_0)] border-y border-[oklch(0.20_0_0)] py-0"
      aria-label="Company statistics"
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, oklch(0.55 0.24 27 / 0.5) 30%, oklch(0.60 0.18 250 / 0.5) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[oklch(0.20_0_0)]">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="group relative flex flex-col gap-2 px-8 py-10 hover:bg-[oklch(0.10_0_0)] transition-colors duration-300"
            >
              {/* index */}
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                0{i + 1}
              </span>
              {/* big number */}
              <div className="flex items-end gap-2">
                <span
                  className="text-5xl font-extrabold tabular-nums text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {stat.value}
                </span>
                <span className="text-lg font-semibold text-primary pb-1">{stat.unit}</span>
              </div>
              {/* label */}
              <span className="text-sm font-semibold tracking-widest uppercase text-foreground">
                {stat.label}
              </span>
              {/* detail */}
              <span className="text-xs text-muted-foreground leading-relaxed">
                {stat.detail}
              </span>
              {/* bottom hover bar */}
              <span
                className="absolute bottom-0 left-8 w-0 h-px bg-primary group-hover:w-16 transition-all duration-500"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, oklch(0.60 0.18 250 / 0.4) 40%, oklch(0.55 0.24 27 / 0.4) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
