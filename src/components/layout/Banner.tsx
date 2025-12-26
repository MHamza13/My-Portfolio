import React from 'react'
import Image from '../../assets/images/banner.jpg'

interface BannerProps {
  page?: string // optional page label
  title?: string // optional title
  subtitle?: string // optional subtitle
  imageUrl?: string // optional background image URL
}

const Banner: React.FC<BannerProps> = ({ page, title, subtitle }) => {
  const bgImage = "https://i.pinimg.com/736x/43/d4/88/43d48855fe57e0affda1009061933507.jpg"

  return (
    <div
      className="relative flex h-96 w-full items-center justify-center text-center md:h-[30rem] lg:h-[20rem]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-white">
        {page && (
          <p className="mb-2 text-lg tracking-wider text-[color:var(--color-accent)] uppercase md:text-xl">{page}</p>
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
