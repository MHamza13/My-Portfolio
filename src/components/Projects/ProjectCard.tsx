'use client'
import { useState } from 'react'
import { Project } from '@/lib/types'
import Image, { StaticImageData } from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string | StaticImageData; text: string }> = ({ icon, text }) => (
  <li className="flex animate-[var(--animate-fade-up)] items-center gap-2">
    <Image
      src={icon}
      alt={text}
      width={20}
      height={20}
      className="size-5 object-contain md:size-6"
    />
    <span className="text-sm font-[var(--font-inter)] text-[color:var(--color-tertiary-content)] md:text-base">
      {text}
    </span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <div className="project-card flex animate-[var(--animate-fade-in)] flex-col justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_25px_var(--color-accent)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <h3 className="text-lg font-[var(--font-inter)] font-semibold tracking-wide text-[color:var(--color-secondary-content)] md:text-xl">
                {title}
              </h3>
              {type && (
                <span
                  className={`h-7 w-fit rounded-md bg-[color:var(--color-primary)]/10 px-3 py-1 text-sm font-medium backdrop-blur-[80px] ${
                    type === 'New 🔥'
                      ? 'animate-[var(--animate-blink)] text-[color:var(--color-tag)]'
                      : 'text-[color:var(--color-accent)]'
                  }`}>
                  {type}
                </span>
              )}
            </div>
            <ul className="mt-4 flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-6">
              {(visitors || numberOfSales) && (
                <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
              )}
              {siteAge && <IconText text={siteAge} icon={Timer} />}
              {earned && <IconText text={earned} icon={Earning} />}
              {(ratings || githubStars) && (
                <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
              )}
            </ul>
          </div>
          <figure className="flex cursor-pointer justify-end overflow-hidden">
            <Image
              src={cover as string | StaticImageData}
              width={160}
              height={90}
              alt={`${title} cover`}
              className="h-[90px] w-[160px] rounded-lg object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </figure>
        </div>

        <div>
          <div className="hide-scrollbar my-5 h-[100px] overflow-auto rounded-xl bg-[color:var(--color-primary)]/20 px-5 py-3 text-[color:var(--color-primary-content)]">
            <p className="text-sm leading-relaxed font-[var(--font-inter)] font-normal md:text-base">
              {shortDescription}
            </p>
          </div>
          <div className="flex gap-6">
            {livePreview && (
              <a
                href={livePreview}
                className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] underline underline-offset-4 transition-all duration-200 hover:scale-105 hover:text-[color:var(--color-accent)]/80 md:text-base"
                target="_blank"
                rel="noopener noreferrer">
                <PreviewIcon className="h-auto w-5 md:w-6" />
                <span>Live Preview</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] underline underline-offset-4 transition-all duration-200 hover:scale-105 hover:text-[color:var(--color-accent)]/80 md:text-base"
                target="_blank"
                rel="noopener noreferrer">
                <GithubIcon className="h-auto w-5 md:w-6" />
                <span>Github Link</span>
              </a>
            )}
            <button
              onClick={() => setIsOpen(true)}
              className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] underline underline-offset-4 transition-all duration-200 hover:scale-105 hover:text-[color:var(--color-accent)]/80 md:text-base"
              rel="noopener noreferrer">
              <PreviewIcon className="h-auto w-5 md:w-6" />
              <span>Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}>
          <div
            className="relative h-[90vh] w-[90%] max-w-3xl overflow-hidden overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={cover as string | StaticImageData}
              alt={`${title} preview`}
              width={1000}
              height={600}
              className="h-auto w-full rounded-xl object-contain"
            />
            <button
              className="absolute top-2 right-2 rounded-full bg-white/80 px-3 py-1 font-bold text-black shadow hover:bg-white"
              onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
