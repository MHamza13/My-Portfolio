import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Experience = () => {
  return (
    <div>
      <div className="mx-auto mb-16 space-y-6 text-left">
        <div className="border-l-4 border-[color:var(--color-accent)] pl-4">
          <h4 className="text-lg font-semibold text-[color:var(--color-secondary-content)]">
            MERN Stack Developer – Freelance
          </h4>
          <p className="text-sm text-[color:var(--color-tertiary-content)]">2023 - Present</p>
          <p className="text-[color:var(--color-secondary-content)]">
            Built scalable web applications for small businesses and startups using MERN stack.
          </p>
        </div>
        <div className="border-l-4 border-[color:var(--color-accent)] pl-4">
          <h4 className="text-lg font-semibold text-[color:var(--color-secondary-content)]">
            Bachelor’s in Computer Science
          </h4>
          <p className="text-sm text-[color:var(--color-tertiary-content)]">2020 - 2024</p>
          <p className="text-[color:var(--color-secondary-content)]">
            Learned programming fundamentals, databases, and full-stack development concepts.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] underline underline-offset-4 transition-all duration-200 hover:scale-105 hover:text-[color:var(--color-accent)]/80 md:text-base">
          🚀 Let’s Work Together
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/20 px-6 py-3 text-sm font-medium text-[color:var(--color-accent)] shadow-md transition hover:shadow-[0_6px_20px_var(--color-accent)] md:text-base">
          <FaDownload /> Download Resume
        </a>
      </div>
    </div>
  )
}

export default Experience
