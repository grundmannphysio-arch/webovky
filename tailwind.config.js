const tools = [
  {
    name: 'VISA-A',
    full: 'Victorian Institute of Sport Assessment – Achilles',
    category: 'Tendinopatie',
    description: 'Hodnocení závažnosti Achillovy tendinopatie a funkčního stavu. 8 otázek, max. 100 bodů.',
    status: 'Brzy',
  },
  {
    name: 'painDETECT',
    full: 'painDETECT Questionnaire',
    category: 'Pain screening',
    description: 'Screening neuropatické složky bolesti. Validovaný pro MSK populaci.',
    status: 'Brzy',
  },
  {
    name: 'NDI',
    full: 'Neck Disability Index',
    category: 'Krční páteř',
    description: 'Funkční omezení při cervikální patologii. 10 položek, 0–50 bodů.',
    status: 'Brzy',
  },
  {
    name: 'KOOS',
    full: 'Knee Injury and Osteoarthritis Outcome Score',
    category: 'Koleno',
    description: 'Komplexní hodnocení funkce kolenního kloubu. 5 subškál.',
    status: 'Brzy',
  },
]

export default function Tools() {
  return (
    <section id="nastroje" className="py-24 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#00B5CC] font-dm text-sm font-500 uppercase tracking-widest">
            Klinické nástroje
          </span>
          <h2 className="font-syne font-700 text-4xl md:text-5xl text-white mt-3">
            Validované dotazníky.
          </h2>
          <p className="font-dm text-white/60 text-lg mt-4 max-w-2xl leading-relaxed">
            Skórovací systémy a kalkulačky pro každodenní klinickou praxi.
            Bez reklam, bez přihlašování.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00B5CC]/30 transition-colors duration-300 cursor-default"
            >
              {/* Status badge */}
              <span className="absolute top-4 right-4 text-xs font-dm text-[#00B5CC]/70 bg-[#00B5CC]/10 px-2 py-1 rounded-full">
                {tool.status}
              </span>

              {/* Category */}
              <span className="text-xs font-dm text-white/40 uppercase tracking-wider">
                {tool.category}
              </span>

              {/* Name */}
              <h3 className="font-syne font-700 text-2xl text-white mt-2 mb-1">
                {tool.name}
              </h3>
              <p className="font-dm text-[#00B5CC] text-xs mb-3">{tool.full}</p>
              <p className="font-dm text-white/50 text-xs leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="bg-[#00B5CC]/5 border border-[#00B5CC]/20 rounded-2xl p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#00B5CC]/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#00B5CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-dm text-white font-500 text-sm">Nástroje jsou v přípravě</p>
            <p className="font-dm text-white/50 text-xs mt-0.5">
              Sleduj nás na Instagramu pro aktuální informace o spuštění.
            </p>
          </div>
          <a
            href="https://www.instagram.com/mediscope.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 bg-[#00B5CC] hover:bg-[#00D4EE] text-[#0A1628] font-dm font-600 text-sm px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Sledovat
          </a>
        </div>
      </div>
    </section>
  )
}
