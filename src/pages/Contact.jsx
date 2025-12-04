import React, { useEffect } from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import PageContainer from '../components/PageContainer'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'

const contactCards = [
  {
    label: 'Call',
    value: '+91 95605 53909',
    subcopy: 'Programme office',
    href: 'tel:+919560553909',
    icon: Phone
  },
  {
    label: 'Email desk',
    value: 'tusharsalesindia@gmail.com',
    subcopy: 'We respond within 1 business day',
    href: 'mailto:tusharsalesindia@gmail.com',
    icon: Mail
  },
  {
    label: 'Timings',
    value: 'Mon – Sat · 9 AM – 7 PM',
    subcopy: 'Closed on public holidays',
    href: null,
    icon: Clock
  }
]

export default function Contact() {
  useEffect(() => {
    document.title = 'Apex — Contact'
  }, [])

  return (
    <PageContainer>
      <section className="py-16">
        <h1 className="text-4xl font-semibold text-[#1A3F22]">Contact Us</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon
            const content = (
              <>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8A6A2E]">
                  <Icon className="h-4 w-4 text-[#D99201]" />
                  {card.label}
                </div>
                <p className="text-xl font-semibold text-[#1A3F22]">{card.value}</p>
                <p className="text-sm text-[#4C6B37]">{card.subcopy}</p>
              </>
            )

            if (card.href) {
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="rounded-[24px] border border-[#E5DCCB] bg-white p-6 shadow-sm flex flex-col gap-2 hover:border-[#D99201]/60 transition"
                >
                  {content}
                </a>
              )
            }

            return (
              <div
                key={card.label}
                className="rounded-[24px] border border-[#E5DCCB] bg-white p-6 shadow-sm flex flex-col gap-2"
              >
                {content}
              </div>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#E5DCCB] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8A6A2E]">
              <MapPin className="h-4 w-4 text-[#D99201]" />
              Office Location
            </div>
            <p className="mt-3 text-lg font-semibold text-[#1A3F22]">Guru Harkrishan Public School</p>
            <p className="text-sm text-[#4C6B37]">Vasant Vihar, New Delhi – 110057</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#E5DCCB]">
              <LocationMap />
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E5DCCB] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2E]">Send a message</p>
            <ContactForm className="mt-6" />
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
