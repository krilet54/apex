import React from 'react'
import { useNavigate } from 'react-router-dom'
import services from '../data/services'
import { Laptop, Users, ShieldCheck, Clipboard, Home } from 'lucide-react'

const ICONS = {
  'online-exam-centre': Laptop,
  'manpower-outsourcing': Users,
  'seminar-training-centres': Users,
  'exam-security-services': ShieldCheck,
  'housekeeping-services': Home
}

export default function ServiceList() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-[#1A3F22]">
          Our Services
        </h2>
        <p className="mt-3 text-[#58761B]">
          Comprehensive, secure and scalable services for exam delivery, training and facility operations.
        </p>
      </div>

      {/* Card Grid */}
      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {services.map((s) => {
          const Icon = ICONS[s.id] || Clipboard
          return (
            <div
              key={s.id}
              className="rounded-xl border border-[#D99201]/20 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
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
                {/* Image Area */}
                <div className="h-36 lg:h-44 w-full overflow-hidden rounded-t-xl relative bg-[#1A3F22]/5">
                    <img
                      src={s.heroImage ?? '/src/assets/images/service-placeholder.svg'}
                      alt={`${s.title} image`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Icon */}
                <div className="-mt-7 flex justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-[#1A3F22] flex items-center justify-center border-4 border-white shadow-md">
                    <Icon size={20} className="text-[#D99201]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between px-6 pb-6 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A3F22] leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#58761B]">
                      {s.short}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/services/${s.slug}`)
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-white rounded-md bg-gradient-to-b from-[#D99201] to-[#905A01] hover:brightness-110 transition"
                    >
                      View Service
                    </button>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
