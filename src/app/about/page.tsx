'use client'
import { skillList } from '@/appData'
import Skills from '@/components/Skills/Skills'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Experience from '@/components/Experience'
import About from '@/components/about/About'

const AboutPage = () => {
  return (
    <section className="mt-16 border-t border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 py-16">
      <div className="">
        <About />
        <div className="mx-auto max-w-6xl py-12">
          <SectionHeading title="// My Core Skills" />
        </div>
        <Skills skills={skillList} />
        <div className="mx-auto max-w-6xl">
          {/* Experience / Timeline */}
          <div className="py-12">
            <SectionHeading title="// Experience & Education" />
          </div>
          <Experience />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
