'use client'
import { skillList } from '@/appData'
import Skills from '@/components/Skills/Skills'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Experience from '@/components/Experience'
import About from '@/components/about/About'
import Banner from '@/components/layout/Banner'

const AboutPage = () => {
  return (
    <section className="mt-3 border-t border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 py-16">
      <div className="">
        <Banner
          page="About Us"
          title="Welcome to Our Company"
          subtitle="We build amazing web applications and solutions"
        />

        <div className="mx-auto max-w-6xl py-12">
          <SectionHeading title="// My Core Skills" />
        </div>
        <Skills skills={skillList} />
        <div className="mx-auto max-w-6xl py-12">
          <About />
        </div>

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
