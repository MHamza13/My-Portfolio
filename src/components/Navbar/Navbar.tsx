'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  { label: '_home', href: '/' },
  { label: '_about', href: '/about' },
  { label: '_projects', href: '/projects' },
  { label: '_services', href: '/services' },
  { label: '_contact-me', href: '/contact' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsVisible(!isVisible)

  return (
    <>
      <nav className="bg-primary/70 fixed top-0 left-0 z-50 w-full border-b border-transparent bg-clip-padding shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <Logo />
            <span className="text-primary-content group-hover:text-accent text-lg font-bold tracking-wide transition-colors">
              Muhammad Hamza
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:items-center">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <li key={href} className="group relative px-6">
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-primary-content group-hover:text-accent'
                    }`}>
                    {label}
                  </Link>
                  <span
                    className={`bg-accent absolute bottom-[-6px] left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`}
                  />
                </li>
              )
            })}

            {/* Resume Button */}
            <li className="ml-4">
              <a
                href="https://drive.google.com/file/d/1YrS4_Lkfqb6r4PQaFugR_IXsIWCIYApQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 rounded-lg px-4 py-1 text-sm font-medium text-white shadow transition">
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isVisible ? (
                <CloseIcon className="text-primary-content h-7 w-7" />
              ) : (
                <BurgerIcon className="text-primary-content h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`bg-primary/90 fixed top-0 left-0 z-40 h-screen w-screen transform backdrop-blur-xl transition-all duration-500 md:hidden ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
          <div className="border-border flex items-center justify-between border-b px-6 py-5">
            <span className="text-primary-content text-xl font-semibold">_menu</span>
            <button onClick={toggleMenu}>
              <CloseIcon className="text-primary-content h-7 w-7" />
            </button>
          </div>
          <ul className="flex flex-col gap-8 p-10 text-center">
            {navItems.map(({ label, href }, i) => (
              <li key={href} style={{ animationDelay: `${i * 0.1}s` }} className="animate-fade-up">
                <Link
                  href={href}
                  onClick={() => setIsVisible(false)}
                  className={`block text-2xl font-medium transition-colors ${
                    pathname === href ? 'text-accent' : 'text-primary-content hover:text-accent'
                  }`}>
                  {label}
                </Link>
              </li>
            ))}

            {/* Resume Button Mobile */}
            <li className="mt-8">
              <a
                href="https://drive.google.com/file/d/1YrS4_Lkfqb6r4PQaFugR_IXsIWCIYApQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 w-full rounded-lg px-6 py-2 text-lg font-medium text-white shadow transition">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
