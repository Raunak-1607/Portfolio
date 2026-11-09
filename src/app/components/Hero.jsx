'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const roles = ['Web Developer', 'Full Stack Builder', 'React & Next.js Dev', 'MERN Stack Developer']

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
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0f0f1a] relative overflow-hidden pt-24 pb-16 sm:py-32"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#00e5ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#00bcd4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
              Available for new projects
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#00e5ff]">Raunak Biswas</span>
            </h1>

            <div className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-5 min-h-[36px] sm:min-h-[44px] flex items-center justify-center md:justify-start">
              <span className="text-[#00e5ff]">{displayed}</span>
              <span className="animate-pulse text-[#00e5ff] ml-1 font-mono">|</span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 sm:mb-10">
              Passionate Web Developer specializing in building high-performance, responsive full-stack applications.
              Focused on modern frontend architectures, robust backend APIs, and intuitive user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm sm:text-base hover:bg-white transition-all duration-300 shadow-lg shadow-[#00e5ff]/25 hover:shadow-xl hover:shadow-[#00e5ff]/40"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-[#00e5ff] text-[#00e5ff] font-bold text-sm sm:text-base hover:bg-[#00e5ff] hover:text-[#0f0f1a] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
              <span className="text-xs text-gray-500 uppercase tracking-wider hidden sm:inline">Connect:</span>
              <a
                href="https://github.com/Raunak-1607"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00e5ff]/20 flex items-center justify-center text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/raunak-biswas1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00e5ff]/20 flex items-center justify-center text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:raunakbiswas302@gmail.com"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00e5ff]/20 flex items-center justify-center text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all"
                aria-label="Send Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image with subtle ring effect */}
          <div className="flex-shrink-0 relative my-4 sm:my-0">
            <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#00e5ff]/30 to-transparent blur-md" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00e5ff]/40 animate-spin" style={{ animationDuration: '30s' }} />

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#00e5ff]/70 shadow-2xl shadow-[#00e5ff]/30 relative z-10 bg-[#1a1a2e]">
                <Image
                  src="/me.jpeg"
                  alt="Raunak Biswas"
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
