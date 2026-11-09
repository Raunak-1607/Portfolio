'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.slice(1))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f1a]/95 backdrop-blur-md border-b border-[#00e5ff]/10 shadow-lg shadow-black/40 py-3'
          : 'bg-[#0f0f1a]/80 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl sm:text-2xl font-black text-[#00e5ff] tracking-tight hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>Raunak</span>
          <span className="text-white group-hover:text-[#00e5ff] transition-colors">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`text-sm font-medium transition-colors relative py-1 group ${
                    isActive ? 'text-[#00e5ff]' : 'text-gray-300 hover:text-[#00e5ff]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00e5ff] rounded transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="/Raunak_Biswas_Resume.docx"
            download="Raunak_Biswas_Resume.docx"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00e5ff] text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff] hover:text-[#0f0f1a] transition-all duration-300 shadow-sm shadow-[#00e5ff]/20 hover:shadow-md hover:shadow-[#00e5ff]/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-[#00e5ff] transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-[#00e5ff]/10 ${
          menuOpen ? 'max-h-[420px] opacity-100 bg-[#131322]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-3 pb-6 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`py-2 px-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-[#00e5ff] bg-[#00e5ff]/10 font-semibold'
                    : 'text-gray-300 hover:text-[#00e5ff] hover:bg-white/5'
                }`}
              >
                <span>{label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />}
              </a>
            )
          })}
          <div className="pt-2">
            <a
              href="/Raunak_Biswas_Resume.docx"
              download="Raunak_Biswas_Resume.docx"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#00e5ff] text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff] hover:text-[#0f0f1a] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
