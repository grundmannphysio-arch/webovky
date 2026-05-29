export default function About() {
  const team = [
    {
      name: 'Martin',
      role: 'Fyzioterapeut, MSK & Pain Science',
      description:
        'Fyzioterapeut zaměřený na MSK, sportovní medicínu a pain science. Provádí diagnostický ultrazvuk, věnuje se výzkumu v oblasti pain phenotypingu u amputovaných.',
      instagram: 'https://www.instagram.com/mediscope.cz',
    },
  ]

  return (
    <section id="o-nas" className="py-24 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-[#00B5CC] font-dm text-sm font-500 uppercase tracking-widest">
            O nás
          </span>
          <h2 className="font-syne font-700 text-4xl md:text-5xl text-white mt-3">
            Klinici, kteří čtou studie.
          </h2>
          <p className="font-dm text-white/60 text-lg mt-4 max-w-2xl leading-relaxed">
            MediScope vznikl z frustrace z propasti mezi výzkumem a praxí.
            Každý týden procházíme literaturu a překládáme to, co skutečně
            mění, jak přemýšlíme o pacientech.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B5CC]/40 transition-colors duration-300 cursor-default"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-[#00B5CC]/20 border border-[#00B5CC]/40 flex items-center justify-center mb-6">
                <span className="font-syne font-700 text-[#00B5CC] text-xl">
                  {member.name[0]}
                </span>
              </div>

              <h3 className="font-syne font-700 text-xl text-white mb-1">
                {member.name}
              </h3>
              <p className="font-dm text-[#00B5CC] text-sm mb-4">{member.role}</p>
              <p className="font-dm text-white/60 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#00B5CC] text-sm font-dm transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          ))}

          {/* MediScope card */}
          <div className="bg-gradient-to-br from-[#00B5CC]/10 to-[#00B5CC]/5 border border-[#00B5CC]/20 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-full bg-[#00B5CC] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#0A1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-syne font-700 text-xl text-white mb-1">MediScope</h3>
            <p className="font-dm text-[#00B5CC] text-sm mb-4">Journal Club & Edukační platforma</p>
            <p className="font-dm text-white/60 text-sm leading-relaxed mb-6">
              Podcast, Instagram a Journal Club zaměřený na kritické čtení studií
              a přenos výzkumu do české klinické praxe.
            </p>
            <a
              href="https://www.instagram.com/mediscope.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#00B5CC] text-sm font-dm transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @mediscope.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
