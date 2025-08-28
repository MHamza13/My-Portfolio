'use client'

import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import { Project, Testimonial } from '@/lib/types'
import { eCommerce, tecnoSphere } from '@/utils/images'

export default async function Home() {
  const projects: Project[] = [
    {
      id: '2',
      priority: 1,
      title: 'E-Commerce Store',
      shortDescription:
        'Full-featured MERN stack eCommerce platform with product management, authentication, cart, orders, and admin dashboard.',
      cover: eCommerce,
      livePreview: 'https://my-store-orpin-chi.vercel.app/',
      type: 'Personal Project 💻',
      siteAge: '8 months old',
      category: 'E-Commerce',
    },
    {
      id: '3',
      priority: 1,
      title: 'Tecno Sphere IT Solutions',
      shortDescription:
        'Official company website for Tecno Sphere showcasing IT services, products, and portfolio.',
      cover: tecnoSphere,
      livePreview: 'https://tecnosphere.com.pk/',
      visitors: '15K+ Visitors',
      earned: '$1.2K Revenue',
      type: 'Company 🚀',
      category: 'Company',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      title: 'Project Manager',
      company: 'TechSphere Solutions',
      feedback:
        'Working with this team was a seamless experience. Their attention to detail, commitment to deadlines, and innovative solutions helped us achieve our business goals much faster. Highly recommended for any web development project.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      stars: 5,
      createdAt: '2025-07-15',
    },
    {
      name: 'Sophia Williams',
      title: 'CTO',
      company: 'PixelForge Technologies',
      feedback:
        'The team exceeded our expectations at every stage of the project. From concept to launch, they delivered outstanding results with remarkable professionalism and creativity.',
      image: 'https://i.pravatar.cc/150?img=47',
      stars: 5,
      createdAt: '2025-01-01',
    },
    {
      name: 'James Carter',
      title: 'Managing Director',
      company: 'StackVerse Digital',
      feedback:
        'The professionalism and technical expertise of the team were outstanding. They not only met our requirements but also suggested improvements that added real value to our project.',
      image: 'https://i.pravatar.cc/150?img=20',
      stars: 5,
      createdAt: '2025-04-12',
    },
    {
      name: 'Alex Johnson',
      title: 'CEO',
      company: 'InnoTech Labs',
      feedback:
        'Their web development services were top-notch. The team’s ability to adapt to our needs and deliver a scalable solution truly impressed us. I would gladly recommend them to anyone looking for reliable IT partners.',
      image: 'https://i.pravatar.cc/150?img=28',
      stars: 5,
      createdAt: '2025-01-20',
    },
    {
      name: 'Daniel Roberts',
      title: 'CEO',
      company: 'TechnoSphere IT Solutions',
      feedback:
        'Choosing TechnoSphere was one of the best decisions for our business. Their team combined creativity with technical expertise and delivered a solution that exceeded our expectations. Truly a partner we can trust.',
      image: 'https://i.pravatar.cc/150?img=33',
      stars: 5,
      createdAt: '2025-01-15',
    },
  ]

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  )
}
