export default function About() {
  return (
    <section id="about" className="py-24 bg-[#13131f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#00e5ff]" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Card */}
          <div className="flex-1 bg-[#1a1a2e] rounded-2xl p-8 border border-[#00e5ff]/10 shadow-xl">
            <h3 className="text-2xl font-bold text-[#00e5ff] mb-4">Who Am I?</h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              Hi! I&apos;m <span className="text-white font-semibold">Raunak Biswas</span>, a passionate
              Web Developer who loves building full-stack web applications with clean, efficient, and
              scalable code. I enjoy turning complex problems into simple, beautiful, and intuitive
              digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-5">
              I&apos;m constantly learning and exploring new technologies to stay at the cutting edge
              of web development. When I&apos;m not coding, I like to explore new ideas, contribute to
              open-source, and improve my problem-solving skills.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing maintainable code and building products that make a real
              difference. Let&apos;s build something amazing together!
            </p>
          </div>

          {/* Stats */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-6">
            {[
              { value: '1+', label: 'Years Learning' },
              { value: '5+', label: 'Projects Built' },
              { value: '10+', label: 'Technologies' },
              { value: '100%', label: 'Passion' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#1a1a2e] border border-[#00e5ff]/20 rounded-2xl p-6 text-center shadow-lg hover:border-[#00e5ff]/50 transition-colors"
              >
                <p className="text-3xl font-extrabold text-[#00e5ff]">{value}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
