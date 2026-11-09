const skillCategories = [
  {
    category: 'Frontend Development',
    icon: (
      <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Building interactive, accessible, and high-performance interfaces.',
    skills: [
      { name: 'React', level: 'Core' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Core' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Core' },
    ],
  },
  {
    category: 'Backend Development',
    icon: (
      <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    description: 'Crafting reliable backend logic, server endpoints, and authentication.',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'Better Auth', level: 'Proficient' },
      { name: 'JWT & JOSE', level: 'Proficient' },
      { name: 'API Security', level: 'Proficient' },
    ],
  },
  {
    category: 'Database & Data Modeling',
    icon: (
      <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: 'Structuring schemas, optimizing queries, and managing data lifecycles.',
    skills: [
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'Mongoose', level: 'Proficient' },
      { name: 'Schema Design', level: 'Proficient' },
      { name: 'CRUD Operations', level: 'Core' },
      { name: 'Aggregation', level: 'Familiar' },
      { name: 'Database Security', level: 'Proficient' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: (
      <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: 'Version control, developer workflows, deployment, and testing.',
    skills: [
      { name: 'Git & GitHub', level: 'Core' },
      { name: 'Vercel Deployment', level: 'Proficient' },
      { name: 'VS Code', level: 'Core' },
      { name: 'npm / pnpm', level: 'Proficient' },
      { name: 'Postman', level: 'Proficient' },
      { name: 'Chrome DevTools', level: 'Proficient' },
    ],
  },
]

const ecosystem = [
  'shadcn/ui',
  'Lucide Icons',
  'React Toastify',
  'Better Auth',
  'JOSE / JWT',
  'Responsive Design',
  'RESTful Architecture',
  'Turbopack',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#0f0f1a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Skills &amp; Technologies</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map(({ category, icon, description, skills }) => (
            <div
              key={category}
              className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#00e5ff]/15 shadow-xl hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e5ff]/20 transition-colors">
                    {icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category}</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-6">{description}</p>

                {/* Skill Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {skills.map(({ name, level }) => (
                    <div
                      key={name}
                      className="p-3 rounded-xl bg-[#0f0f1a] border border-white/5 hover:border-[#00e5ff]/40 transition-all hover:-translate-y-0.5 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] group-hover/item:shadow-[0_0_8px_#00e5ff]" />
                        <span className="text-gray-200 font-semibold text-xs sm:text-sm tracking-tight truncate">
                          {name}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Badges */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 uppercase tracking-widest font-semibold">
            Libraries &amp; Ecosystem Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {ecosystem.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full border border-[#00e5ff]/25 text-[#00e5ff] text-xs sm:text-sm bg-[#1a1a2e] hover:bg-[#00e5ff]/15 hover:border-[#00e5ff]/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
