const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 82 },
      { name: 'Next.js', level: 78 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 70 },
      { name: 'Mongoose', level: 68 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vercel', level: 75 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-4xl font-extrabold text-white">My Skills</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="bg-[#1a1a2e] rounded-2xl p-7 border border-[#00e5ff]/10 shadow-xl hover:border-[#00e5ff]/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span>{icon}</span>
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-medium">{name}</span>
                      <span className="text-[#00e5ff] font-semibold">{level}%</span>
                    </div>
                    <div className="h-2 bg-[#0f0f1a] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00bcd4]"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['shadcn/ui', 'Lucide React', 'React Toastify', 'Better Auth', 'JWT', 'npm', 'ESLint'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full border border-[#00e5ff]/30 text-[#00e5ff] text-sm bg-[#1a1a2e] hover:bg-[#00e5ff]/10 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
