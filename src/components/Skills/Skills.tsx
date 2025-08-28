'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section relative overflow-hidden">
      <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r py-6">
        <div className="flex items-center gap-6 lg:gap-12">
          {skills.map(({ name, icon }, index) => (
            <div
              key={index}
              className="group flex items-center rounded-xl bg-[color:var(--s)]/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[color:var(--s)]/20 hover:shadow-[0_0_15px_var(--a)]">
              <Image
                src={icon}
                alt={`${name} skill icon`}
                width={44}
                height={44}
                className="mx-2 size-10 object-contain transition-transform duration-300 group-hover:scale-110 lg:size-12"
              />
              <span className="font-inter text-sm font-semibold tracking-wide text-[color:var(--pc)] lg:text-lg">
                {name}
              </span>
            </div>
          ))}
        </div>
      </MarqueeWrapper>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:var(--p)]/10 to-[color:var(--p)]/10" />
    </section>
  )
}

export default Skills
