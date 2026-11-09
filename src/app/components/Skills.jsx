const skillCategories = [
  {
    category: 'Languages',
    emoji: '🌐',
    description: 'Programming, scripting, and markup languages.',
    skills: [
      { name: 'HTML5', tag: 'Markup', color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' },
      { name: 'CSS3', tag: 'Styling', color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
      { name: 'JavaScript (JS)', tag: 'Core', color: 'border-yellow-500/30 text-yellow-300 bg-yellow-500/10' },
      { name: 'TypeScript (TS)', tag: 'Typed', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Java', tag: 'OOP', color: 'border-amber-600/30 text-amber-500 bg-amber-600/10' },
      { name: 'C++', tag: 'Systems', color: 'border-blue-600/30 text-blue-400 bg-blue-600/10' },
      { name: 'Python', tag: 'Scripting', color: 'border-teal-500/30 text-teal-300 bg-teal-500/10' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    emoji: '💻',
    description: 'Frontend UI frameworks, styling toolkits, and server runtimes.',
    skills: [
      { name: 'React', tag: 'UI Library', color: 'border-cyan-400/30 text-cyan-300 bg-cyan-400/10' },
      { name: 'Next.js', tag: 'Full-Stack', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Tailwind CSS', tag: 'Styling', color: 'border-teal-400/30 text-teal-300 bg-teal-400/10' },
      { name: 'HeroUI', tag: 'UI Components', color: 'border-purple-400/30 text-purple-300 bg-purple-400/10' },
      { name: 'daisyUI', tag: 'Tailwind Plugin', color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10' },
      { name: 'Node.js', tag: 'Runtime', color: 'border-green-500/30 text-green-400 bg-green-500/10' },
      { name: 'Express.js', tag: 'Backend API', color: 'border-gray-400/30 text-gray-300 bg-gray-400/10' },
    ],
  },
  {
    category: 'Database & Deployment',
    emoji: '🗄️',
    description: 'Relational & NoSQL databases and cloud hosting platforms.',
    extraNote: 'Also experienced with Oracle databases!',
    skills: [
      { name: 'MongoDB', tag: 'NoSQL / Project', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
      { name: 'MySQL', tag: 'Relational DB', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Oracle DB', tag: 'Enterprise DB', color: 'border-red-500/30 text-red-400 bg-red-500/10' },
      { name: 'Vercel', tag: 'Production Host', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Netlify', tag: 'Cloud Platform', color: 'border-teal-400/30 text-teal-300 bg-teal-400/10' },
    ],
  },
  {
    category: 'Tools & Design',
    emoji: '🎨',
    description: 'Development environment, version control, UI design, and documentation.',
    skills: [
      { name: 'VS Code', tag: 'Editor', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
      { name: 'Git', tag: 'Version Control', color: 'border-orange-600/30 text-orange-400 bg-orange-600/10' },
      { name: 'GitHub', tag: 'Code Hosting', color: 'border-white/30 text-white bg-white/10' },
      { name: 'Figma', tag: 'UI / UX Design', color: 'border-pink-500/30 text-pink-400 bg-pink-500/10' },
      { name: 'Notion', tag: 'Workflow & Notes', color: 'border-gray-300/30 text-gray-200 bg-gray-300/10' },
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
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Skills &amp; Technologies</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Technologies, frameworks, databases, and tools I use to build full-stack web products.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map(({ category, emoji, description, skills, extraNote }) => (
            <div
              key={category}
              className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#00e5ff]/15 shadow-xl hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl" role="img" aria-label={category}>
                    {emoji}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{category}</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-5">{description}</p>

                {/* Skill Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {skills.map(({ name, tag, color }) => (
                    <div
                      key={name}
                      className="p-3 rounded-xl bg-[#0f0f1a] border border-white/5 hover:border-[#00e5ff]/40 transition-all hover:-translate-y-0.5 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] group-hover/item:shadow-[0_0_8px_#00e5ff]" />
                        <span className="text-white font-semibold text-xs sm:text-sm tracking-tight truncate">
                          {name}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border self-start ${color}`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Note if any (e.g. Oracle Database) */}
              {extraNote && (
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="text-xs text-gray-400 italic">
                    💡 {extraNote}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
