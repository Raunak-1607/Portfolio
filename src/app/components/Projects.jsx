import Image from 'next/image'
import data from '../data/data.json'

export default function Projects() {
  const projects = data.projects || []

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#13131f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Featured Projects</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            A selection of full-stack web applications built with modern frontend frameworks and scalable backend architectures.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl border border-[#00e5ff]/20 shadow-xl hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Top: Browser Window Mockup Preview */}
              <div>
                <div className="p-3 sm:p-4 bg-[#0c0c16]/70 border-b border-white/5">
                  <div className="rounded-xl border border-white/10 bg-[#0f0f1a] overflow-hidden shadow-lg">
                    {/* Browser Chrome Header */}
                    <div className="px-3 py-2 bg-[#161626] border-b border-white/10 flex items-center justify-between gap-2">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                      </div>

                      {/* URL Pill */}
                      <div className="flex-1 max-w-[240px] sm:max-w-xs mx-auto flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0f0f1a] border border-white/5 text-gray-400 text-[11px]">
                        <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="truncate text-gray-300 font-mono text-[10px] sm:text-[11px]">
                          {project.display_url}
                        </span>
                      </div>

                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#00e5ff] hover:text-white flex items-center gap-1 flex-shrink-0"
                        title="Open live website"
                      >
                        <span className="hidden sm:inline">Visit</span>
                        <span>↗</span>
                      </a>
                    </div>

                    {/* Screenshot Container - Well proportioned & crisp */}
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[16/9] bg-[#0c0c16] overflow-hidden group/img cursor-pointer"
                      title={`Open ${project.name} live web app`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                        className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
                      />

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-[#0f0f1a]/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-full bg-[#00e5ff] text-[#0f0f1a] font-bold text-xs sm:text-sm shadow-xl flex items-center gap-1.5">
                          View Live App ↗
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Project Metadata & Content */}
                <div className="p-5 sm:p-6 lg:p-7">
                  {/* Title & Status */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-[#00e5ff] text-xs sm:text-sm font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-gray-400">
                        <svg className="w-3.5 h-3.5 text-[#00e5ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#0f0f1a] text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Dual CTA Buttons */}
              <div className="px-5 sm:px-6 lg:px-7 pb-6 pt-2 border-t border-white/5 flex items-center gap-3">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#00e5ff] text-[#0f0f1a] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-md shadow-[#00e5ff]/20"
                >
                  <span>Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {project.client_github && project.server_github ? (
                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.client_github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-[#00e5ff]/50 bg-[#0f0f1a] font-medium text-xs transition-all"
                      title="Client GitHub Repository"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>Client</span>
                    </a>
                    <a
                      href={project.server_github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-[#00e5ff]/50 bg-[#0f0f1a] font-medium text-xs transition-all"
                      title="Server GitHub Repository"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>Server</span>
                    </a>
                  </div>
                ) : project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-[#00e5ff]/50 bg-[#0f0f1a] font-medium text-xs sm:text-sm transition-all"
                    title="View GitHub Repository"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
