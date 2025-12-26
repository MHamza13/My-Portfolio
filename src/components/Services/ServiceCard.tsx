'use client'
import Image from 'next/image'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  return (
    <div className="service-card flex animate-[var(--animate-fade-in)] flex-col items-center rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_15px_var(--color-accent)]">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={56}
        height={56} 
        className="my-2 size-14 animate-[var(--animate-fade-up)] object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <h5 className="mt-3 mb-4 text-center text-lg tracking-wide text-[color:var(--color-accent)] md:text-xl">
        {title}
      </h5>
      <div className="rounded-xl bg-[color:var(--color-primary)]/20 p-4">
        <p className="text-center text-sm leading-relaxed text-[color:var(--color-primary-content)] md:text-base">
          {shortDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
