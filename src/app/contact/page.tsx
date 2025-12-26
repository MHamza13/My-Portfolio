'use client'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import ContactSection from '@/components/Contact/ContactSection'
import React from 'react'
import Banner from '@/components/layout/Banner'

const ContactPage = () => {
  return (
    <div className="mt-16 bg-[color:var(--color-secondary)]/10">
      {/* Hero Section */}
      <Banner
        page="Get in Touch"
        title="Let's Connect"
        subtitle="Have a project, question, or just want to say hello? I’m always open to discussing new ideas, collaborations, or opportunities. Reach out and let’s make something amazing together!"
      />

      {/* Contact Info */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pt-12 md:grid-cols-3">
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/20 p-6 text-center shadow-md">
          <FaPhoneAlt className="mx-auto mb-3 text-3xl text-[color:var(--color-accent)]" />
          <h3 className="text-lg font-semibold text-[color:var(--color-secondary-content)]">
            Phone
          </h3>
          <p className="mt-2 text-[color:var(--color-tertiary-content)]">+92 319 4036626</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/20 p-6 text-center shadow-md">
          <FaEnvelope className="mx-auto mb-3 text-3xl text-[color:var(--color-accent)]" />
          <h3 className="text-lg font-semibold text-[color:var(--color-secondary-content)]">
            Email
          </h3>
          <p className="mt-2 text-[color:var(--color-tertiary-content)]">iamhamza013@gmail.com</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/20 p-6 text-center shadow-md">
          <FaMapMarkerAlt className="mx-auto mb-3 text-3xl text-[color:var(--color-accent)]" />
          <h3 className="text-lg font-semibold text-[color:var(--color-secondary-content)]">
            Location
          </h3>
          <p className="mt-2 text-[color:var(--color-tertiary-content)]">Lahore, Pakistan</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-6xl px-4 pb-0">
        <ContactSection />
      </div>
    </div>
  )
}

export default ContactPage
