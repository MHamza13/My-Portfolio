import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="from-secondary/95 to-secondary/75 relative my-12 grid grid-cols-1 gap-12 overflow-hidden rounded-4xl bg-gradient-to-br p-8 shadow-xl md:my-20 md:grid-cols-2 md:p-12 lg:gap-16 lg:p-16">
      {/* Left Content */}
      <div className="flex flex-col justify-between gap-10">
        <div>
          <h3 className="text-neutral text-3xl font-bold md:text-4xl">Let’s Talk</h3>
          <h4 className="text-accent mt-2 text-2xl font-bold md:text-3xl">We’d love to help</h4>
          <p className="text-neutral mt-6 max-w-md text-base leading-relaxed">
            Have a project in mind or just want to say hello? We’re here to collaborate, brainstorm,
            and craft innovative solutions that bring your ideas to life. Drop us a message — we’d
            love to hear from you!
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:iamhamza013@gmail.com"
            className="text-neutral hover:text-accent group flex items-center gap-2 font-light transition-colors duration-300">
            <MsgIcon className="group-hover:text-accent transition-transform duration-300 group-hover:scale-110" />
            iamhamza013@gmail.com
          </a>
          <a
            href="tel:+923123456789"
            className="text-neutral hover:text-accent group flex items-center gap-2 font-light transition-colors duration-300">
            <PhoneIcon className="group-hover:text-accent transition-transform duration-300 group-hover:scale-110" />
            +92 319 4036626
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="rounded-3xl bg-white/5 p-6 shadow-inner backdrop-blur-md md:p-8">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
