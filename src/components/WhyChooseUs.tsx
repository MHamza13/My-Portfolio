import React from 'react'
import { FaUsers, FaDollarSign, FaHeadset } from 'react-icons/fa'

const WhyChooseUs = () => {
  const items = [
    {
      title: 'Expert Team',
      description: 'Our team is skilled and experienced in delivering quality results.',
      icon: <FaUsers className="h-10 w-10 text-[color:var(--color-accent)]" />,
    },
    {
      title: 'Affordable Pricing',
      description: 'We provide high-quality services at competitive and transparent prices.',
      icon: <FaDollarSign className="h-10 w-10 text-[color:var(--color-accent)]" />,
    },
    {
      title: '24/7 Support',
      description: 'We are always available to support our clients anytime, anywhere.',
      icon: <FaHeadset className="h-10 w-10 text-[color:var(--color-accent)]" />,
    },
  ]

  return (
    <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 py-12 shadow-sm">
      {/* Section Heading */}
      <h2 className="mb-4 text-center text-3xl font-bold text-[color:var(--color-accent)]">
        Why Choose Us?
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-[color:var(--color-secondary-content)]">
        We are committed to delivering high-quality solutions that are tailored to your needs. Here
        are a few reasons why clients trust us and keep coming back.
      </p>

      {/* Features */}
      <ul className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center rounded-xl bg-[color:var(--color-secondary)]/20 p-6 text-center shadow transition duration-300 hover:scale-[1.05] hover:shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-accent)]/10">
              {item.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-[color:var(--color-accent)]">
              {item.title}
            </h3>
            <p className="text-sm text-[color:var(--color-secondary-content)]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhyChooseUs
