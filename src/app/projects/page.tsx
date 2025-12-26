import React from 'react'
import AllProjects from '@/components/Projects/AllProjects'
import { Project } from '@/lib/types'
import { eCommerce, tecnoSphere } from '@/utils/images'
import Banner from '@/components/layout/Banner'

const page = async () => {
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

  return (
    <div className="mt-3 border-t border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 py-16">
      <Banner
        page="Projects"
        title="Showcase of My Work"
        subtitle="Discover a collection of projects I have built using MERN stack and modern web technologies, demonstrating my skills in full-stack development, problem-solving, and creating scalable web applications."
      />

      <AllProjects projects={projects} />
    </div>
  )
}

export default page
