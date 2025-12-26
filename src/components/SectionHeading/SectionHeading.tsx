interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    <>
      <div className={`relative lg:max-w-[50dvw] ${className}`}>
        <h2 className="ftracking-wider animate-[var(--animate-fade-in)] bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-primary-content)] bg-clip-text text-3xl text-transparent transition-all duration-300 hover:drop-shadow-[0_2px_8px_var(--color-accent)] md:text-4xl">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-transparent" />
      </div>
      <div className={`relative lg:max-w-[50dvw] ${className}`}>
        {subtitle && (
          <p className="mt-4 animate-[var(--animate-fade-up)] text-base leading-relaxed font-[var(--font-inter)] text-pretty text-[color:var(--color-tertiary-content)] md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </>
  )
}

export default SectionHeading
