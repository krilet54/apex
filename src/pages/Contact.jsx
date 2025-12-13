import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import PageContainer from '../components/PageContainer'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'

const contactCards = [
  {
    label: 'Call',
    subcopy: 'Contact Our Team',
    numbers: [
      { display: '+91 9560553909', href: 'tel:+919560553909' },
      { display: '+91 9560509196', href: 'tel:+919560509196' },
      { display: '011 3589 1079', href: 'tel:01135891079' }
    ],
    href: null,
    icon: Phone
  },
  {
    label: 'Email desk',
    value: 'apexexamcentre@gmail.com',
    subcopy: 'We respond within 1 business day',
    href: 'mailto:apexexamcentre@gmail.com',
    icon: Mail
  },
  {
    label: 'Timings',
    value: 'Mon – Sun · 9 AM – 7 PM',
    subcopy: '',
    href: null,
    icon: Clock
  }
]

export default function Contact() {
  useEffect(() => {
    document.title = 'APEX — Contact'
  }, [])

  const popup = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.36, ease: 'easeOut' } }
  }

  const panel = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } }
  }

  return (
    <PageContainer>
      <section className="py-16">
        <h1 className="text-4xl font-semibold text-[#1A3F22]">Contact Us</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon

            const commonProps = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.2 }, variants: popup }

            // Use a motion.div wrapper for all cards so the animation is identical.
            // Keep an inner anchor for clickable items so links still work.
            return (
              <motion.div
                key={card.label}
                className="rounded-[24px] border border-[#E5DCCB] bg-white p-6 shadow-sm flex flex-col gap-2"
                {...commonProps}
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6A2E]">
                  <Icon className="h-4 w-4 text-[#D99201]" />
                  {card.label}
                </div>
                {card.numbers ? (
                  <>
                    <p className="text-sm text-[#4C6B37]">{card.subcopy}</p>
                    <div className="mt-2 space-y-1">
                      {card.numbers.map((num) => (
                        <a
                          key={num.display}
                          href={num.href}
                          className="block text-lg font-semibold text-[#1A3F22] hover:underline"
                        >
                          {num.display}
                        </a>
                      ))}
                    </div>
                  </>
                ) : card.href ? (
                  <a href={card.href} className="w-full h-full flex flex-col items-center justify-center text-center">
                    <p className="text-xl font-semibold text-[#1A3F22]">{card.value}</p>
                    <p className="text-sm text-[#4C6B37]">{card.subcopy}</p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center flex-1">
                    <p className="text-xl font-semibold text-[#1A3F22]">{card.value}</p>
                    <p className="text-sm text-[#4C6B37]">{card.subcopy}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div className="rounded-[28px] border border-[#E5DCCB] bg-white p-8 shadow-sm" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={panel}>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6A2E]">
              <MapPin className="h-4 w-4 text-[#D99201]" />
              Office Location
            </div>
            <p className="mt-3 text-lg font-semibold text-[#1A3F22]">Guru Harkrishan Public School</p>
            <p className="text-sm text-[#4C6B37]">Vasant Vihar, New Delhi – 110057</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#E5DCCB]">
              <LocationMap />
            </div>
          </motion.div>

          <motion.div className="rounded-[28px] border border-[#E5DCCB] bg-white p-8 shadow-sm" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={panel}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6A2E]">Send a message</p>
            <ContactForm className="mt-6" />
          </motion.div>
        </div>
      </section>
    </PageContainer>
  )
}
