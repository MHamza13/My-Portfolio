import Image from 'next/image'
import React from 'react'
import profile from '../../assets/images/my.jpeg'

const About = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      {/* Heading & Intro */}
      <div className="mb-12 text-center max-w-3xl">
      
        <p className="mb-6 text-lg leading-relaxed font-[var(--font-inter)] text-[color:var(--color-secondary-content)] md:text-xl">
          Hi 👋, I’m
          <span className="font-semibold text-[color:var(--color-tag)]"> MERN Stack Developer</span>
          with <span className="font-semibold">2 year of experience</span> building modern and
          scalable web applications. I specialize in creating full-stack solutions using
          <span className="font-semibold"> MongoDB, Express.js, React.js, and Node.js</span>. I also
          work with <span className="font-semibold">TypeScript, Next.js, and TailwindCSS</span>. My
          mission is to turn complex problems into simple, elegant, and user-friendly solutions.
        </p>
        <p className="text-lg text-[color:var(--color-secondary-content)]">
          MERN Stack Developer | Passionate about building scalable web apps 🚀
        </p>
      </div>

      {/* Profile Image at Bottom */}
      <div>
        <Image
          src={profile}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-[color:var(--color-accent)] shadow-md"
        />
      </div>
    </div>
  )
}

export default About
