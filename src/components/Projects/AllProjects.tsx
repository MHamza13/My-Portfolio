'use client'
import React, { useMemo, useState } from 'react'
import { Project } from '@/lib/types'
import ProjectCard from '@/components/Projects/ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

// helper to normalize/slug category strings for stable keys
const slug = (v: string) =>
  v
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const AllProjects: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState('All')

  // ✅ Build a unique, case-insensitive category list with a safe fallback
  const categories = useMemo(() => {
    const map = new Map<string, string>() // key: lowercase, value: original label
    projects.forEach((p) => {
      const raw =
        typeof p.category === 'string' && p.category.trim().length ? p.category.trim() : 'Other'
      const key = raw.toLowerCase()
      if (!map.has(key)) map.set(key, raw)
    })
    return ['All', ...Array.from(map.values())]
  }, [projects])

  // ✅ Filter using normalized comparison
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects
    const target = activeTab.toLowerCase()
    return projects.filter((p) => {
      const cat =
        typeof p.category === 'string' && p.category.trim().length
          ? p.category.trim().toLowerCase()
          : 'other'
      return cat === target
    })
  }, [activeTab, projects])

  return (
    <section className="mt-16 border-t border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-6 text-center text-3xl font-bold text-[color:var(--color-accent)] md:text-4xl">
          All Projects
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed font-[var(--font-inter)] text-[color:var(--color-secondary-content)]">
          Explore all the projects I have built using MERN stack and modern web technologies.
        </p>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={`tab-${slug(category)}`} // ✅ stable unique key
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === category
                  ? 'bg-[color:var(--color-accent)] text-[color:var(--color-tab)]'
                  : 'bg-[color:var(--color-secondary)]/30 text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/20'
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            // ✅ safe stable key generation (always string)
            let stableKey: string

            if ('id' in project && project.id !== undefined) {
              stableKey = String(project.id)
            } else if ('slug' in project && (project as { slug?: string }).slug) {
              stableKey = (project as { slug: string }).slug
            } else if (
              'priority' in project &&
              (project as { priority?: number }).priority !== undefined
            ) {
              stableKey = `${project.title ?? 'project'}-${(project as { priority: number }).priority}`
            } else {
              stableKey = `${project.title ?? 'project'}-${index}`
            }

            return <ProjectCard key={stableKey} data={project} />
          })}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-center text-lg text-[color:var(--color-secondary-content)]">
            No projects found for this category.
          </p>
        )}
      </div>
    </section>
  )
}

export default AllProjects
