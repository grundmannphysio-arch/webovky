'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <span className="font-syne font-800 text-xl text-white tracking-tight">
            Medi<span className="text-[#00B5CC]">Scope</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#o-nas"
            className="text-white/70 hover:text-white text-sm font-dm transition-colors duration-200 cursor-pointer"
          >
            O nás
          </a>
          <a
            href="#co-delame"
            className="text-white/70 hover:text-white text-sm font-dm transition-colors duration-200 cursor-pointer"
          >
            Co děláme
          </a>
          <a
            href="#nastroje"
            className="text-white/70 hover:text-white text-sm font-dm transition-colors duration-200 cursor-pointer"
          >
            Nástroje
          </a>
          <a
            href="#kontakt"
            className="text-white/70 hover:text-white text-sm font-dm transition-colors duration-200 cursor-pointer"
          >
            Kontakt
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://www.instagram.com/mediscope.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#00B5CC] hover:bg-[#00D4EE] text-[#0A1628] font-dm font-600 text-sm px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Instagram
        </a>
      </div>
    </nav>
  )
}
