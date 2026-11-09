export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#13131f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#00e5ff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">About Me</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Bio Card */}
          <div className="flex-1 bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#00e5ff]/15 shadow-xl w-full">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-3 h-3 rounded-full bg-[#00e5ff]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Who Am I?</h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              Hi! I&apos;m <span className="text-white font-semibold">Raunak Biswas</span>, a dedicated
              Web Developer currently pursuing my Computer Science and Engineering degree at{' '}
              <span className="text-[#00e5ff] font-medium">American International University-Bangladesh (AIUB)</span>.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              I specialize in developing modern web applications utilizing React, Next.js, Node.js, Express,
              and MongoDB. I love solving algorithmic challenges, creating aesthetic user interfaces, and
              implementing scalable backend systems.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am driven by continuous learning and writing clean, maintainable, and well-documented code.
              Always excited to collaborate on innovative projects and contribute to meaningful technology.
            </p>
          </div>

          {/* Stats Cards (NO percentages!) */}
          <div className="w-full lg:w-auto flex-shrink-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              { value: '2023', label: 'Started at AIUB' },
              { value: 'MERN', label: 'Full-Stack Focus' },
              { value: '15+', label: 'Tech & Tools' },
              { value: 'Clean', label: 'Code Quality' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#1a1a2e] border border-[#00e5ff]/20 rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:border-[#00e5ff]/50 transition-all hover:-translate-y-1"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00e5ff] tracking-tight">{value}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
