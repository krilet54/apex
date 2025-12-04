import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import services from '../data/services'
import { Laptop, Users, ShieldCheck, Clipboard, Home } from 'lucide-react'

const ICONS = {
  'online-exam-centre': Laptop,
  'manpower-outsourcing': Users,
  'seminar-training-centres': Users,
  'exam-security-services': ShieldCheck,
  'housekeeping-services': Home
}

export default function ServiceList({ showHeading = true, withContainer = true }) {
  const navigate = useNavigate()

  const content = (
    <>
      {showHeading && (
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#1A3F22]">Our Services</h2>
          <p className="mt-3 text-[#58761B]">
            Comprehensive, secure and scalable services for exam delivery, training and facility operations.
          </p>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((s, index) => {
          const Icon = ICONS[s.id] || Clipboard
          const transition = { duration: 0.6, ease: 'easeOut', delay: index * 0.08 }
          return (
            <motion.div
              key={s.id}
              className="rounded-[28px] border border-[#E5DCCB] bg-white/90 backdrop-blur shadow-[0_15px_40px_rgba(10,31,17,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={transition}
            >
              <article
                tabIndex={0}
                role="button"
                onClick={() => navigate(`/services/${s.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(`/services/${s.slug}`)
                }}
                className="group flex flex-col h-full"
              >
                <div className="relative h-40 overflow-hidden rounded-t-[28px]">
                  <img
                    src={s.heroImage ?? '/src/assets/images/service-placeholder.svg'}
                    alt={`${s.title} image`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="-mt-8 px-6 relative z-10 flex justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1A3F22] shadow-[0_15px_35px_rgba(16,40,23,0.25)] border border-[#E5DCCB]">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between px-6 pb-6 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A3F22] leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm text-[#4C6B37]">{s.short}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/services/${s.slug}`)
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1A3F22]"
                  >
                    View service
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </article>
            </motion.div>
          )
        })}
      </div>
    </>
  )

  return (
    <section className="py-10">
      {withContainer ? (
        <div className="container mx-auto px-4">{content}</div>
      ) : (
        <>{content}</>
      )}
    </section>
  )
}
