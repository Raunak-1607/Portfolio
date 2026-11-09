import Image from 'next/image'

const educationData = [
  {
    institution: 'American International University-Bangladesh',
    shortName: 'AIUB',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    timeline: '2023 – 2027',
    status: 'Currently Enrolled',
    statusColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    pulseColor: 'bg-emerald-400',
    description:
      'Pursuing an undergraduate degree focused on software engineering principles, algorithms, data structures, database systems, and modern full-stack web development.',
    logo: '/aiub-logo.webp',
  },
  {
    institution: 'Dinajpur Govt. City College',
    shortName: 'DGCC',
    degree: 'Higher Secondary Certificate (HSC)',
    timeline: 'Passing Year: 2023',
    status: 'Completed',
    statusColor: 'bg-[#00e5ff]/15 border-[#00e5ff]/30 text-[#00e5ff]',
    pulseColor: 'bg-[#00e5ff]',
    description:
      'Completed Higher Secondary Certificate (HSC) in Science group with a strong analytical foundation in Mathematics, Physics, and Information & Communication Technology.',
    logo: '/dinajpur-college.jpg',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#0f0f1a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Education</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            My formal educational milestones from college to university studies.
          </p>
        </div>

        {/* Education Cards List */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {educationData.map(({ institution, shortName, degree, timeline, status, statusColor, pulseColor, description, logo }) => (
            <div
              key={institution}
              className="relative bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#00e5ff]/20 shadow-xl hover:border-[#00e5ff]/50 transition-all duration-300 overflow-hidden group hover:-translate-y-0.5"
            >
              {/* Subtle decorative glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-all pointer-events-none" />

              {/* Top Row: Logo & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg flex-shrink-0">
                    <Image
                      src={logo}
                      alt={`${shortName} logo`}
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
                      {shortName}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`self-start sm:self-auto flex items-center gap-2 border px-3.5 py-1.5 rounded-full ${statusColor}`}>
                  <span className={`w-2 h-2 rounded-full ${pulseColor} animate-pulse`} />
                  <span className="text-xs font-semibold">{status}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#00e5ff]/10 mb-5" />

              {/* Degree & Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-0.5 font-semibold">
                    Degree
                  </span>
                  <p className="text-white text-base sm:text-lg font-bold">{degree}</p>
                </div>
                <div className="sm:text-right mt-1 sm:mt-0">
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-0.5 font-semibold">
                    Timeline
                  </span>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-xs sm:text-sm font-semibold border border-[#00e5ff]/25">
                    {timeline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
