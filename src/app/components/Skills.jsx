const skillCategories = [
  {
    category: 'Programming Languages',
    emoji: '🌐',
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
    category: 'Frameworks',
    emoji: '💻',
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
    category: 'AI Tools',
    emoji: '🤖',
    skills: [
      { name: 'Claude code', tag: 'AI Assistant', color: 'border-amber-500/30 text-amber-300 bg-amber-500/10' },
      { name: 'github Copilot', tag: 'Code Companion', color: 'border-sky-400/30 text-sky-300 bg-sky-400/10' },
      { name: 'CodeX', tag: 'AI Generation', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
      { name: 'Gemini', tag: 'Multimodal AI', color: 'border-blue-400/30 text-blue-300 bg-blue-400/10' },
    ],
  },
  {
    category: 'Deployment',
    emoji: '🚀',
    skills: [
      { name: 'Vercel', tag: 'Production Host', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Netlify', tag: 'Edge Platform', color: 'border-teal-400/30 text-teal-300 bg-teal-400/10' },
      { name: 'Firebase', tag: 'Cloud Platform', color: 'border-amber-400/30 text-amber-300 bg-amber-400/10' },
    ],
  },
  {
    category: 'Soft Skill',
    emoji: '🤝',
    skills: [
      { name: 'Leadership', tag: 'Initiative', color: 'border-purple-400/30 text-purple-300 bg-purple-400/10' },
      { name: 'Networking', tag: 'Collaboration', color: 'border-cyan-400/30 text-cyan-300 bg-cyan-400/10' },
      { name: 'Team work', tag: 'Agile Mindset', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
      { name: 'Problem Solving', tag: 'Analytical', color: 'border-sky-400/30 text-sky-300 bg-sky-400/10' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#0f0f1a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Technical Stack &amp; Abilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Skills</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Languages, frameworks, databases, tools, AI companions, and core competencies I utilize.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillCategories.map(({ category, emoji, skills }) => (
            <div
              key={category}
              className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#00e5ff]/15 shadow-xl hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                  <span className="text-xl" role="img" aria-label={category}>
                    {emoji}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{category}</h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, tag, color }) => (
                    <div
                      key={name}
                      className="px-2.5 py-1.5 rounded-lg bg-[#0f0f1a] border border-white/5 hover:border-[#00e5ff]/40 transition-all flex items-center gap-2"
                    >
                      <span className="text-white font-medium text-xs tracking-tight">
                        {name}
                      </span>
                      <span className={`text-[9px] uppercase tracking-wider font-semibold px-1 py-0.2 rounded border ${color}`}>
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
