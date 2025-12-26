'use client'

import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// ✅ type banaya
type FloatingWord = {
  id: number
  word: string
  isError: boolean
  left: string
  startTop: string
  duration: number
  delay: number
}

const codingWords = [
  'const',
  'function',
  'return',
  'if()',
  'else',
  'while()',
  'for()',
  'await',
  'async',
  '<div>',
  '</>',
  'useState',
  'props',
  '{ }',
  '=>',
  'try{}',
  'catch(e)',
  'null',
  'true',
  'false',
]

const errorWords = [
  'ReferenceError',
  'Unexpected token ;',
  'TypeError',
  'SyntaxError',
  'Cannot read property',
  '404 Not Found',
]

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({
    roles: [
      'MERN STACK DEVELOPER',
      'FULLSTACK JAVASCRIPT DEVELOPER',
      'REACT & NODE.js ENGINEER',
      'WEB APPLICATION DEVELOPER',
    ],
  })

  // ✅ type specify kiya FloatingWord[]
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([])

  useEffect(() => {
    const words: FloatingWord[] = Array.from({ length: 25 }).map((_, i) => {
      const isError = Math.random() < 0.2
      const word = isError
        ? errorWords[Math.floor(Math.random() * errorWords.length)]
        : codingWords[Math.floor(Math.random() * codingWords.length)]

      return {
        id: i,
        word,
        isError,
        left: `${Math.random() * 100}%`,
        startTop: `-${Math.random() * 100}px`,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      }
    })
    setFloatingWords(words)
  }, [])

  return (
    <section className="bg-primary relative mt-16 min-h-[calc(100dvh-4rem)] overflow-hidden">
      {/* === Animated Coding Words Background === */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {floatingWords.map(({ id, word, isError, left, startTop, duration, delay }) => (
          <motion.span
            key={id}
            className={`absolute font-mono text-[0.75rem] md:text-sm ${
              isError ? 'text-red-500/70' : 'text-accent/40'
            }`}
            style={{
              left,
              top: startTop,
              textShadow: isError
                ? '0 0 6px rgba(255, 0, 0, 0.8), 0 0 12px rgba(255, 0, 0, 0.6)'
                : '0 0 6px rgba(59, 130, 246, 0.6), 0 0 12px rgba(59, 130, 246, 0.4)',
            }}
            animate={{
              y: ['-10%', '110vh'], // top → bottom
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay,
              ease: 'linear',
            }}>
            {word}
          </motion.span>
        ))}
      </div>

      {/* === Hero Content === */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Muhammad Hamza
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            Building Scalable Web Solutions with MERN Stack Expertise.
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="/contact"
              aria-label="Connect with me"
              className="bg-accent hover:bg-accent/90 hover:shadow-accent/40 focus:ring-accent/60 min-w-32 rounded-xl px-7 py-3.5 text-center text-sm font-semibold text-[#00071E] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:outline-none active:scale-95">
              🚀 Hire Me
            </a>
            <a
              href="https://www.linkedin.com/in/m-hamza-4b6909291/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="bg-secondary text-neutral hover:bg-secondary/80 hover:shadow-secondary/40 focus:ring-secondary/50 rounded-xl px-7 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:outline-none active:scale-95">
              💼 LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative rounded-full overflow-hidden size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Muhammad Hamza - Full Stack Developer"
              className="object-contain mt-6"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56  transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
