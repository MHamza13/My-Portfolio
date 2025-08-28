'use client'

import { Testimonial } from '@/lib/types'
import { isInViewport } from '@/utils'
import { StarIcon } from '@/utils/icons'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image, stars },
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const observer = isInViewport(cardRef.current, handleActiveCard)

    return () => {
      observer?.disconnect()
    }
  }, [handleActiveCard]) // ✅ sirf handleActiveCard dependency

  return (
    <div
      ref={cardRef}
      className="bg-secondary/80 border-border flex max-w-full shrink-0 flex-col items-center justify-between gap-6 rounded-2xl border p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:max-w-[425px]">
      <p className="text-neutral relative text-center text-lg leading-8 italic">
        <span className="text-accent absolute -top-3 -left-3 text-3xl">“</span>
        <span className="line-clamp-3"> {feedback}</span>
        <span className="text-accent absolute -right-3 -bottom-6 text-3xl">”</span>
      </p>

      <div>
        <div className="mb-4 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }, (_, idx) => (
            <StarIcon
              key={idx}
              className={`h-5 w-5 ${idx < stars ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="border-accent mx-auto rounded-full border-2 shadow-md"
          />
          <p className="text-neutral mt-2 text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
