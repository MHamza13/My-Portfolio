'use client'

import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../layout/Logo'

const Footer = () => {
  // Links ko 2 groups me divide kar rahe hain
  const midIndex = Math.ceil(footerLinks.length / 2)
  const firstGroup = footerLinks.slice(0, midIndex)
  const secondGroup = footerLinks.slice(midIndex)

  return (
    <footer className="bg-secondary relative overflow-hidden px-6 md:px-14">
      {/* Background Gradient */}
      <div className="from-accent/20 via-neutral/10 absolute top-0 right-0 z-0 h-[80vh] w-[80vh] rounded-full bg-gradient-to-tr to-transparent blur-[120px]" />

      {/* Top Section */}
      <div className="relative z-20 grid gap-12 md:grid-cols-2 md:py-16 lg:grid-cols-4">
        {/* Brand Info */}
        <div>
          <h5 className="mb-6 flex items-center gap-3">
            <Logo width={36} height={28} />
            <span className="text-neutral text-2xl font-bold">Muhammad Hamza</span>
          </h5>
          <p className="text-tertiary-content text-sm leading-relaxed md:text-base">
            Designing and developing modern digital solutions that empower businesses and inspire
            people across the globe.
          </p>
          <a
            href="#"
            className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline">
            Learn more
          </a>
        </div>

        {/* Useful Links Part 1 */}
        <div>
          <h5 className="text-neutral mb-4 text-lg font-semibold">Company</h5>
          <ul className="space-y-2">
            {firstGroup.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-tertiary-content hover:text-accent text-sm transition-colors duration-200 md:text-base">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Part 2 */}
        <div>
          <h5 className="text-neutral mb-4 text-lg font-semibold">Resources</h5>
          <ul className="space-y-2">
            {secondGroup.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-tertiary-content hover:text-accent text-sm transition-colors duration-200 md:text-base">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info (Contact + Location together) */}
        <div>
          <h5 className="text-neutral mb-4 text-lg font-semibold">Info</h5>
          <ul className="mb-3 space-y-2">
            <li>
              <a
                href="mailto:iamhamza013@gmail.com"
                className="hover:text-accent block text-sm transition-colors md:text-base">
                📧 iamhamza013@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+923194036626"
                className="hover:text-accent block text-sm transition-colors md:text-base">
                📞 +92 319 4036626
              </a>
            </li>
          </ul>
          <address className="text-tertiary-content text-sm leading-relaxed not-italic md:text-base">
            📍 123456, Pakistan <br />
            Karachi 22/5/8, Office 4
          </address>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-neutral/20 my-6 h-px w-full" />

      {/* Bottom Section */}
      <div className="relative z-20 my-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral/10 text-neutral hover:bg-accent flex size-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-tertiary-content text-center text-xs md:text-right md:text-sm">
          © {new Date().getFullYear()} Muhammad Hamza. All Rights Reserved.
        </p>
      </div>

      {/* Background Decorative Circles */}
      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[455px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
