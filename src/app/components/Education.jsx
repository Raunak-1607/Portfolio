import Image from 'next/image'

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'American International University-Bangladesh',
    shortName: 'AIUB',
    duration: '2023 – 2027',
    status: 'Currently Enrolled',
    description:
      'Pursuing an undergraduate degree focused on software engineering principles, algorithms, data structures, database architecture, and modern full-stack web engineering.',
    logo: '/aiub-logo.webp',
    keyAreas: [
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Web Technologies & Frameworks',
      'Database Management Systems',
      'Software Engineering & Design',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#0f0f1a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Education</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map(({ degree, institution, shortName, duration, status, description, logo, keyAreas }) => (
            <div
              key={institution}
              className="relative bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#00e5ff]/20 shadow-2xl hover:border-[#00e5ff]/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Subtle decorative glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-all pointer-events-none" />

              {/* Top Row: Logo & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg flex-shrink-0">
                    <Image
                      src={logo}
                      alt={`${shortName} Monogram`}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl leading-snug">
                      {institution}
                    </h3>
                    <p className="text-[#00e5ff] font-semibold text-xs sm:text-sm mt-0.5">
                      {shortName} • Department of CSE
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="self-start sm:self-auto flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">{status}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#00e5ff]/10 mb-6" />

              {/* Degree & Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1 font-semibold">
                    Degree Program
                  </span>
                  <p className="text-white text-base sm:text-lg font-bold">{degree}</p>
                </div>
                <div className="sm:text-right mt-2 sm:mt-0">
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1 font-semibold">
                    Timeline
                  </span>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-xs sm:text-sm font-semibold border border-[#00e5ff]/25">
                    {duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                {description}
              </p>

              {/* Coursework & Focus Areas (NO percentages!) */}
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-3 font-semibold">
                  Core Academic Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {keyAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg bg-[#0f0f1a] border border-white/5 text-gray-300 text-xs hover:border-[#00e5ff]/30 transition-colors"
                    >
                      {area}
                    </span>
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
