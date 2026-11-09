'use client'

import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'raunakbiswas302@gmail.com',
    href: 'mailto:raunakbiswas302@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Raunak-1607',
    href: 'https://github.com/Raunak-1607',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/raunak-biswas1',
    href: 'https://www.linkedin.com/in/raunak-biswas1/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const MY_EMAIL = 'raunakbiswas302@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`

    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#13131f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Contact Me</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let&apos;s Connect</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Whether you have a job opportunity, a project proposal, or just want to discuss web technologies,
              feel free to reach out. I will respond to your inquiry as soon as possible!
            </p>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl sm:rounded-2xl bg-[#1a1a2e] border border-[#00e5ff]/15 hover:border-[#00e5ff]/40 transition-all group shadow-md"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] group-hover:bg-[#00e5ff] group-hover:text-[#0f0f1a] transition-all flex-shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">{label}</p>
                    <p className="text-gray-200 font-medium text-xs sm:text-sm truncate">{value}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-[#00e5ff] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#00e5ff]/15 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl sm:text-2xl">Email Client Opened!</h4>
                <p className="text-gray-300 text-sm max-w-md">
                  Your mail app was launched with your message ready to send to{' '}
                  <span className="text-[#00e5ff] font-semibold">{MY_EMAIL}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm text-gray-300 font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#0f0f1a] border border-[#00e5ff]/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#00e5ff] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm text-gray-300 font-semibold mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full bg-[#0f0f1a] border border-[#00e5ff]/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#00e5ff] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm text-gray-300 font-semibold mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-[#0f0f1a] border border-[#00e5ff]/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#00e5ff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm sm:text-base hover:bg-white transition-all duration-300 shadow-lg shadow-[#00e5ff]/25 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
                <p className="text-center text-[11px] text-gray-500">
                  Submitting directly prepares an email addressed to {MY_EMAIL}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
