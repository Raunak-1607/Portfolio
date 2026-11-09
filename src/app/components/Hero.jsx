'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const roles = ['Web Developer', 'Full Stack Enthusiast', 'React Developer', 'Next.js Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout
    const currentRole = roles[roleIndex]

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0f0f1a] relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00bcd4]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-16 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-3">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Raunak Biswas
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10">
            <span className="text-[#00e5ff]">{displayed}</span>
            <span className="animate-pulse text-[#00e5ff]">|</span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-10">
            I build modern, responsive, and performant web applications. Passionate about clean code,
            great UI, and turning ideas into reality.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-7 py-3 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-[#00e5ff]/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-7 py-3 rounded-full border border-[#00e5ff] text-[#00e5ff] font-bold hover:bg-[#00e5ff] hover:text-[#0f0f1a] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-10 justify-center md:justify-start">
            <a
              href="https://github.com/Raunak-1607"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00e5ff] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raunak-biswas1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00e5ff] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#00e5ff]/50 shadow-2xl shadow-[#00e5ff]/20 relative">
            <Image
              src="/me.jpeg"
              alt="Raunak Biswas"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00e5ff]/30 scale-110 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>Scroll down</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
