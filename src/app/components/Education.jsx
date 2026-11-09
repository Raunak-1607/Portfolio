import Image from 'next/image'

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'American International University-Bangladesh',
    shortName: 'AIUB',
    duration: '2023 – 2027',
    status: 'Ongoing',
    description:
      'Studying core computer science subjects including algorithms, data structures, software engineering, object-oriented programming, and modern web technologies.',
    logo: '/aiub-logo.webp',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-2">
            My academic background
          </p>
          <h2 className="text-4xl font-extrabold text-white">Education</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map(({ degree, institution, shortName, duration, status, description, logo }) => (
            <div
              key={institution}
              className="relative bg-[#1a1a2e] rounded-3xl p-8 border border-[#00e5ff]/20 shadow-2xl hover:border-[#00e5ff]/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Background glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-all duration-500 pointer-events-none" />

              {/* Top Row: Logo + Status */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-5">
                  {/* University Logo */}
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-lg flex-shrink-0">
                    <Image
                      src={logo}
                      alt={`${shortName} logo`}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-snug">{institution}</h3>
                    <p className="text-[#00e5ff] font-semibold text-sm mt-0.5">{shortName}</p>
                  </div>
                </div>

                {/* Status badge */}
                <div className="flex-shrink-0 flex items-center gap-1.5 bg-green-500/15 border border-green-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">{status}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#00e5ff]/10 mb-6" />

              {/* Degree info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Degree</p>
                  <p className="text-gray-200 font-semibold">{degree}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-sm font-semibold border border-[#00e5ff]/20">
                    {duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">{description}</p>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  <span>Degree Progress</span>
                  <span className="text-[#00e5ff]">~75%</span>
                </div>
                <div className="h-1.5 bg-[#0f0f1a] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00bcd4]" />
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>2023</span>
                  <span>Expected 2027</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
