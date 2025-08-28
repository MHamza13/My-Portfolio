import Image from 'next/image'
import React from 'react'
import profile from '../../assets/images/hero-dev.png'

const About = () => {
  return (
    <div>
      {/* Profile & Heading */}
      <div className="mb-12 flex flex-col items-center gap-6">
        <Image
          src={profile}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-[color:var(--color-accent)] shadow-md"
        />
        <div>
          <h2 className="mb-2 text-center text-3xl font-bold text-[color:var(--color-accent)] md:text-4xl">
            About Me
          </h2>
          <p className="text-lg text-[color:var(--color-secondary-content)]">
            MERN Stack Developer | Passionate about building scalable web apps 🚀
          </p>
        </div>
      </div>
      {/* Intro */}
      <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed font-[var(--font-inter)] text-[color:var(--color-secondary-content)] md:text-xl">
        Hi 👋, I’m
        <span className="font-semibold text-[color:var(--color-tag)]"> MERN Stack Developer</span>
        with <span className="font-semibold">2 year of experience</span> building modern and
        scalable web applications. I specialize in creating full-stack solutions using
        <span className="font-semibold"> MongoDB, Express.js, React.js, and Node.js</span>. I also
        work with <span className="font-semibold">TypeScript, Next.js, and TailwindCSS</span>. My
        mission is to turn complex problems into simple, elegant, and user-friendly solutions.
      </p>
    </div>
  )
}

export default About
