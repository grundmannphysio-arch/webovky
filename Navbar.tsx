export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#060E1A] border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-syne font-800 text-xl text-white">
              Medi<span className="text-[#00B5CC]">Scope</span>
            </span>
            <p className="font-dm text-white/50 text-sm mt-3 leading-relaxed max-w-xs">
              Evidence-based physiotherapy. Čteme studie. Kriticky. Překládáme je do klinické praxe.
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-syne font-600 text-white text-sm uppercase tracking-wider mb-4">
              Kde nás najdeš
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/mediscope.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#00B5CC] text-sm font-dm transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @mediscope.cz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-600 text-white text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <p className="font-dm text-white/50 text-sm leading-relaxed">
              Spolupráce, dotazy nebo jen chceš doporučit studii k rozboru?
            </p>
            <a
              href="https://www.instagram.com/mediscope.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#00B5CC] hover:text-[#00D4EE] text-sm font-dm transition-colors duration-200 cursor-pointer"
            >
              Napiš nám na Instagram
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-white/30 text-xs">
            © {new Date().getFullYear()} MediScope. Všechna práva vyhrazena.
          </p>
          <p className="font-dm text-white/20 text-xs">
            Informace na tomto webu nejsou náhradou lékařského vyšetření.
          </p>
        </div>
      </div>
    </footer>
  )
}
