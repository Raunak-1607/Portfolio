import Image from 'next/image'
import data from '../data/data.json'

const techColors = {
  'Next.js': 'bg-white/10 text-white',
  'React': 'bg-[#61dafb]/10 text-[#61dafb]',
  'TypeScript': 'bg-blue-500/10 text-blue-400',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400',
  'Node.js': 'bg-green-500/10 text-green-400',
  'Express.js': 'bg-gray-500/10 text-gray-400',
  'MongoDB': 'bg-green-600/10 text-green-500',
  'Vercel': 'bg-white/10 text-white',
  'default': 'bg-[#00e5ff]/10 text-[#00e5ff]',
}

function getTechColor(tech) {
  return techColors[tech] ?? techColors['default']
}

const allTech = [
  ...data.technology_stack.frontend,
  ...data.technology_stack.backend,
  ...data.technology_stack.database,
  ...data.technology_stack.authentication_and_security,
  ...data.technology_stack.deployment,
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#13131f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-2">What I&apos;ve built</p>
          <h2 className="text-4xl font-extrabold text-white">Projects</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        {/* Project Card */}
        <div className="bg-[#1a1a2e] rounded-3xl overflow-hidden border border-[#00e5ff]/10 shadow-2xl hover:border-[#00e5ff]/30 transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <Image
                src="/image1.png"
                alt={data.project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a2e]/30" />
              {/* Status badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-green-500/20 backdrop-blur-sm border border-green-500/40 px-3 py-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">{data.project.status}</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{data.project.name}</h3>
                    <p className="text-[#00e5ff] text-sm font-medium mt-0.5">{data.project.tagline}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 px-3 py-1 rounded-full">
                    {data.project.project_type}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-5">{data.project.description}</p>

                {/* Features */}
                <div className="mb-5">
                  <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {data.main_features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#00e5ff]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {allTech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border border-white/10 ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <a
                  href={data.project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00e5ff] text-[#0f0f1a] font-bold text-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#00e5ff]/20"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
