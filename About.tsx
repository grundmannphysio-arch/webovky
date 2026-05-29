const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Journal Club',
    description:
      'Každý týden rozebíráme jednu studii. Metodologie, výsledky, limity, klinická implikace. Žádné headlines bez kontextu.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Instagram & Reels',
    description:
      'Kratké datově ukotvené příspěvky. Hlavní výsledek studie na první větě. Epistemické hedging povinný.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Klinické nástroje',
    description:
      'Validované dotazníky, skórovací systémy a kalkulačky pro klinickou praxi. Přehledně, bez reklam.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Pain Science & MSK',
    description:
      'Fyzioterapie, sportovní medicína, diagnostický ultrazvuk. Zaměřujeme se na to, co má základ v důkazech.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="co-delame" className="py-24 bg-[#0D1E35]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#00B5CC] font-dm text-sm font-500 uppercase tracking-widest">
            Co děláme
          </span>
          <h2 className="font-syne font-700 text-4xl md:text-5xl text-white mt-3">
            Věda přeložená do praxe.
          </h2>
          <p className="font-dm text-white/60 text-lg mt-4 max-w-2xl leading-relaxed">
            Propast mezi výzkumem a klinikou existuje. Překonáváme ji každý týden
            — kritickým čtením, ne popularizací.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B5CC]/40 hover:bg-white/8 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00B5CC]/10 border border-[#00B5CC]/20 flex items-center justify-center text-[#00B5CC] mb-6 group-hover:bg-[#00B5CC]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-syne font-700 text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-dm text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
