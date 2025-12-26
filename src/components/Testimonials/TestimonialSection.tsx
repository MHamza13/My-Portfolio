import { Testimonial } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react' // ✅ proper type import

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

// ✅ typed slider
const AutoPlay = (delay = 3000) => {
  return (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    function clearNextTimeout() {
      clearTimeout(timeout)
    }
    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, delay)
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })
    slider.on('dragStarted', clearNextTimeout)
    slider.on('animationEnded', nextTimeout)
    slider.on('updated', nextTimeout)
  }
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'snap',
      rtl: false,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { perView: 2, spacing: 24 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 32 },
        },
      },
    },
    [AutoPlay(3000)], // autoplay delay = 3s
  )

  return (
    <section id="testimonials" className="py-16">
      <SectionHeading
        title="// Testimonials"
        subtitle="Don't just take our word for it - see what actual users of our service have to say about their experience."
      />

      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider mt-12">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="keen-slider__slide">
            <TestimonialCard testimonial={testimonial} handleActiveCard={() => {}} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
