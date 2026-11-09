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
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-[#1a1a2e]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-bold text-[#00e5ff] tracking-wide hover:text-white transition-colors"
        >
          RB<span className="text-white">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`text-sm font-medium transition-colors relative pb-1 group ${
                  activeSection === href.slice(1)
                    ? 'text-[#00e5ff]'
                    : 'text-gray-300 hover:text-[#00e5ff]'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#00e5ff] rounded transition-all duration-300 ${
                    activeSection === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00e5ff] text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff] hover:text-[#1a1a2e] transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-[#00e5ff] transition-colors p-1"
          aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 gap-4 bg-[#1a1a2e]/98">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`block text-sm font-medium transition-colors ${
                  activeSection === href.slice(1)
                    ? 'text-[#00e5ff]'
                    : 'text-gray-300 hover:text-[#00e5ff]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00e5ff] text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff] hover:text-[#1a1a2e] transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
