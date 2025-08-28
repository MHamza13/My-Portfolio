import ContactSection from '@/components/Contact/ContactSection'
import ServiceCard from '@/components/Services/ServiceCard'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import { serviceData } from '../../appData'

const ServicesPage = () => {
  return (
    <div className="mt-24 space-y-16">
      {/* Page Heading */}
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <h1 className="text-4xl font-bold text-[color:var(--color-accent)]">Our Services</h1>
        <p className="text-[color:var(--color-secondary-content)]">
          We provide a wide range of services to help you grow your business and achieve your goals.
          Explore our offerings below.
        </p>
      </section>

      {/* Services Cards */}
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Call to Action */}
      <div className="mx-auto max-w-6xl">
        <ContactSection />
      </div>
    </div>
  )
}

export default ServicesPage
