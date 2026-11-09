import Image from 'next/image'
import data from '../data/data.json'

const stackGroups = [
  { label: 'Frontend', items: data.technology_stack.frontend, color: 'text-[#61dafb] border-[#61dafb]/30 bg-[#61dafb]/10' },
  { label: 'Backend', items: data.technology_stack.backend, color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
  { label: 'Database', items: data.technology_stack.database, color: 'text-green-400 border-green-400/30 bg-green-400/10' },
  { label: 'Auth & Security', items: data.technology_stack.authentication_and_security, color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  { label: 'Deployment', items: data.technology_stack.deployment, color: 'text-purple-400 border-purple-400/30 bg-purple-400/10' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#13131f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Featured Portfolio Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Projects</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        {/* Featured Project Card */}
        <div className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl border border-[#00e5ff]/20 shadow-2xl overflow-hidden hover:border-[#00e5ff]/40 transition-all duration-300">
          {/* Card Header Bar */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-[#00e5ff]/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {data.project.name}
                  </h3>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {data.project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
                    {data.project.project_type}
                  </span>
                </div>
                <p className="text-[#00e5ff] text-sm sm:text-base font-medium">
                  {data.project.tagline}
                </p>
              </div>

              {/* Live CTA button */}
              <a
                href={data.project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm hover:bg-white transition-all shadow-lg shadow-[#00e5ff]/25 hover:shadow-xl self-start sm:self-auto"
              >
                <span>Live Demo</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Browser Window Mockup showcasing the image properly */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#0c0c16]/50">
            <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#0f0f1a] overflow-hidden shadow-2xl">
              {/* Browser Top Navigation Bar */}
              <div className="px-4 py-3 bg-[#161626] border-b border-white/10 flex items-center gap-3">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#0f0f1a] border border-white/5 text-gray-400 text-xs">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="truncate text-gray-300 font-mono text-[11px]">{data.project.live_url}</span>
                </div>

                <a
                  href={data.project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00e5ff] hover:underline flex items-center gap-1 ml-auto"
                >
                  <span className="hidden sm:inline">Open in new tab</span>
                  <span className="sm:hidden font-mono text-[11px] truncate max-w-[180px]">book-nook-green-three.vercel.app</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Full Image Container - Showing the whole project screenshot clearly without cutting off */}
              <a
                href={data.project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-[16/10] sm:aspect-[1888/916] bg-[#0c0c16] overflow-hidden group/img cursor-pointer"
                title="Click to visit BookNook live site"
              >
                <Image
                  src="/image1.png"
                  alt={`${data.project.name} application preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1100px"
                  className="object-contain sm:object-cover sm:object-top transition-transform duration-500 group-hover/img:scale-[1.01]"
                  priority
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0f0f1a]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm shadow-xl flex items-center gap-2">
                    Open Live Application
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              Preview of {data.project.name} interface • Click image to launch live web app
            </p>
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Overview & Key Features */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                  Project Overview
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {data.project.description}
                </p>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                  Core Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.main_features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#00e5ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center">
                <a
                  href={data.project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm hover:bg-white transition-all shadow-md"
                >
                  Visit Live Web App ↗
                </a>
                <span className="text-xs text-gray-400">
                  Built with Next.js, Express.js &amp; MongoDB
                </span>
              </div>
            </div>

            {/* Right: Categorized Tech Stack */}
            <div className="lg:col-span-5 bg-[#0f0f1a] rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                  Technology Stack
                </h4>

                <div className="space-y-4">
                  {stackGroups.map(({ label, items, color }) => (
                    <div key={label}>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">
                        {label}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${color}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database & Security summary */}
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 space-y-1">
                <p>
                  <strong className="text-gray-300">Database:</strong> MongoDB collection with real-time copy tracking.
                </p>
                <p>
                  <strong className="text-gray-300">Security:</strong> JWT verification via JOSE and JWKS endpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
