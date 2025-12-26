import ContactSection from '@/components/Contact/ContactSection'
import ServiceCard from '@/components/Services/ServiceCard'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import { serviceData } from '../../appData'
import Banner from '@/components/layout/Banner'

const ServicesPage = () => {
  return (
    <div className="mt-24 space-y-16">
      <Banner
        page="Our Services"
        title="Expert Solutions for Your Business"
        subtitle="We offer a wide range of services designed to help your business thrive. From building modern web applications to delivering full-stack solutions, our expertise ensures growth, efficiency, and success. Explore our offerings below."
      />

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
