import React from 'react'
import Image from 'next/image'
import BannerImg from '../../assets/images/banner.webp'

interface BannerProps {
  page?: string
  title?: string
  subtitle?: string
}

const Banner: React.FC<BannerProps> = ({ page, title, subtitle }) => {
  return (
    <div className="relative h-96 w-full md:h-[30rem] lg:h-[20rem]">
      {/* Background Image */}
      <Image
        src={BannerImg}
        alt="Banner"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="-z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        {page && (
          <p className="mb-2 text-lg tracking-wider text-[color:var(--color-accent)] uppercase md:text-xl">
            {page}
          </p>
        )}
        {title && <h1 className="text-3xl font-extrabold drop-shadow-lg md:text-5xl">{title}</h1>}
        {subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-100 md:text-xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default Banner
