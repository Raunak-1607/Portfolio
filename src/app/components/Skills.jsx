const skillCategories = [
  {
    category: 'Programming Languages',
    emoji: '🌐',
    accent: 'from-cyan-400/20 via-cyan-400/5 to-transparent',
    skills: [
      { name: 'JavaScript', tag: 'Core', color: 'border-yellow-500/30 text-yellow-300 bg-yellow-500/10' },
      { name: 'TypeScript', tag: 'Typed', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Python', tag: 'Scripting', color: 'border-teal-500/30 text-teal-300 bg-teal-500/10' },
      { name: 'Java', tag: 'OOP', color: 'border-amber-600/30 text-amber-500 bg-amber-600/10' },
      { name: 'C', tag: 'Procedural', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
      { name: 'C++', tag: 'Systems', color: 'border-blue-600/30 text-blue-400 bg-blue-600/10' },
    ],
  },
  {
    category: 'Full-Stack Frameworks',
    emoji: '💻',
    accent: 'from-violet-400/20 via-violet-400/5 to-transparent',
    skills: [
      { name: 'React.js', tag: 'UI Library', color: 'border-cyan-400/30 text-cyan-300 bg-cyan-400/10' },
      { name: 'Next.js', tag: 'Full-Stack', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Express.js', tag: 'Backend API', color: 'border-gray-400/30 text-gray-300 bg-gray-400/10' },
      { name: 'Node.js', tag: 'Runtime', color: 'border-green-500/30 text-green-400 bg-green-500/10' },
      { name: 'Tailwind CSS', tag: 'Styling', color: 'border-teal-400/30 text-teal-300 bg-teal-400/10' },
      { name: 'HeroUI', tag: 'Component UI', color: 'border-purple-400/30 text-purple-300 bg-purple-400/10' },
      { name: 'daisyUI', tag: 'Tailwind Plugin', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
    ],
  },
  {
    category: 'Database Technologies',
    emoji: '🗄️',
    accent: 'from-emerald-400/20 via-emerald-400/5 to-transparent',
    skills: [
      { name: 'MongoDB', tag: 'NoSQL', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
      { name: 'MySQL', tag: 'Relational DB', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Oracle DB', tag: 'Enterprise DB', color: 'border-red-500/30 text-red-400 bg-red-500/10' },
      { name: 'PostgreSQL', tag: 'Relational DB', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
      { name: 'Redis', tag: 'In-Memory Cache', color: 'border-red-600/30 text-red-400 bg-red-600/10' },
    ],
  },
  {
    category: 'Tools & Technologies',
    emoji: '🛠️',
    accent: 'from-orange-400/20 via-orange-400/5 to-transparent',
    skills: [
      { name: 'Git', tag: 'Version Control', color: 'border-orange-600/30 text-orange-400 bg-orange-600/10' },
      { name: 'GitHub', tag: 'Code Hosting', color: 'border-white/30 text-white bg-white/10' },
      { name: 'VS Code', tag: 'Editor', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Figma', tag: 'UI / UX Design', color: 'border-pink-500/30 text-pink-400 bg-pink-500/10' },
      { name: 'Notion', tag: 'Productivity', color: 'border-gray-300/30 text-gray-200 bg-gray-300/10' },
      { name: 'Postman', tag: 'API Testing', color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' },
      { name: 'npm', tag: 'Package Manager', color: 'border-red-500/30 text-red-400 bg-red-500/10' },
    ],
  },
  {
    category: 'AI Workflow',
    emoji: '🤖',
    accent: 'from-fuchsia-400/20 via-fuchsia-400/5 to-transparent',
    skills: [
      { name: 'Claude Code', tag: 'AI Assistant', color: 'border-amber-500/30 text-amber-300 bg-amber-500/10' },
      { name: 'GitHub Copilot', tag: 'Code Companion', color: 'border-sky-400/30 text-sky-300 bg-sky-400/10' },
      { name: 'Codex', tag: 'AI Generation', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
      { name: 'Gemini', tag: 'Multimodal AI', color: 'border-blue-400/30 text-blue-300 bg-blue-400/10' },
    ],
  },
  {
    category: 'Deployment',
    emoji: '🚀',
    accent: 'from-sky-400/20 via-sky-400/5 to-transparent',
    skills: [
      { name: 'Vercel', tag: 'Production Host', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Netlify', tag: 'Edge Platform', color: 'border-teal-400/30 text-teal-300 bg-teal-400/10' },
      { name: 'Firebase', tag: 'Cloud Platform', color: 'border-amber-400/30 text-amber-300 bg-amber-400/10' },
    ],
  },
  {
    category: 'Professional Strengths',
    emoji: '🤝',
    accent: 'from-amber-400/20 via-amber-400/5 to-transparent',
    skills: [
      { name: 'Leadership', tag: 'Initiative', color: 'border-purple-400/30 text-purple-300 bg-purple-400/10' },
      { name: 'Networking', tag: 'Collaboration', color: 'border-cyan-400/30 text-cyan-300 bg-cyan-400/10' },
      { name: 'Teamwork', tag: 'Agile Mindset', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
      { name: 'Problem Solving', tag: 'Analytical', color: 'border-sky-400/30 text-sky-300 bg-sky-400/10' },
    ],
  },
]

export default function Skills() {
  const totalSkills = skillCategories.reduce((total, category) => total + category.skills.length, 0)

  return (
    <section id="skills" className="relative overflow-hidden bg-[#0f0f1a] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00e5ff]/5 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 flex flex-col items-center justify-between gap-6 text-center sm:mb-16 lg:flex-row lg:text-left">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00e5ff]">
              Technical Toolkit
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Skills that ship ideas.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              A focused stack for designing polished interfaces and building dependable full-stack products.
            </p>
          </div>
          <div className="rounded-2xl border border-[#00e5ff]/20 bg-[#121c2b]/80 px-5 py-4 shadow-[0_0_30px_rgba(0,229,255,0.07)] backdrop-blur-sm">
            <p className="text-2xl font-black text-white">{totalSkills}+</p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00e5ff]">Tools and strengths</p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {skillCategories.map(({ category, emoji, accent, skills }, index) => (
            <div
              key={category}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151527]/90 p-5 shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e5ff]/40 hover:shadow-[#00e5ff]/10 sm:p-6"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl shadow-inner shadow-white/5" role="img" aria-label={category}>
                    {emoji}
                  </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00e5ff]">{String(index + 1).padStart(2, '0')}</p>
                      <h3 className="mt-0.5 text-base font-bold tracking-tight text-white sm:text-lg">{category}</h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                    {skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map(({ name, tag, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f0f1a]/75 px-3 py-2 transition-colors hover:border-[#00e5ff]/30 hover:bg-[#101827]"
                    >
                      <span className="text-xs font-medium tracking-tight text-slate-100">
                        {name}
                      </span>
                      <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${color}`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
