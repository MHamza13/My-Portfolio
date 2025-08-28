'use client'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  
} from 'react-icons/fa'
import ContactSection from '@/components/Contact/ContactSection'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="mt-16 bg-[color:var(--color-secondary)]/10">
      {/* Hero Section */}
      <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-secondary)]/20 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[color:var(--color-accent)]">Get in Touch</h1>
        <p className="mx-auto max-w-2xl text-lg text-[color:var(--color-secondary-content)]">
          I’d love to hear from you! Whether you have a project in mind, a question, or just want to
          say hi – feel free to reach out.
        </p>
      </div>

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
