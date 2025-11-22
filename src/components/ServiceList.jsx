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

export default function ServiceList(){
  const navigate = useNavigate()
  return (
    <section className="container mx-auto py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p className="mt-3 text-slate-600">Comprehensive, secure and scalable services for exam delivery, training and facility operations.</p>
      </div>

      {/* Single-row layout on large screens: 5 columns in one row */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
        {services.map((s, idx)=>{
          const Icon = ICONS[s.id] || Clipboard
          return (
            <div key={s.id} className={`rounded-xl p-[2px] bg-gradient-to-b from-primary to-accent`}>
              <article
                tabIndex={0}
                role="button"
                onClick={()=>navigate(`/services/${s.slug}`)}
                onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') navigate(`/services/${s.slug}`) }}
                className="card-focus group relative rounded-lg bg-white shadow-sm transition transform hover:-translate-y-1 hover:shadow-md overflow-visible h-full flex flex-col min-h-[320px] will-change-transform"
              >
                {/* Top image placeholder */}
                <div className="h-36 lg:h-44 w-full bg-gray-100 overflow-hidden relative rounded-t-lg">
                  <img src="/src/assets/images/service-placeholder.svg" alt={`${s.title} image`} className="w-full h-full object-cover" />
                </div>

                {/* Icon badge moved out so it's not clipped by the image container */}
                <div className="-mt-7 flex justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-primary shadow-md">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>

                {/* Content area */}
                <div className="pt-2 p-6 flex-1 flex flex-col justify-between">
                  <div className="min-h-[86px] lg:min-h-[112px]">{
                    /* Title + summary block kept at fixed min-height so cards align */
                  }
                    <h3 className="text-lg lg:text-xl font-semibold text-slate-900 leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm lg:text-base text-slate-600 max-w-xs lg:max-w-sm">{s.short}</p>
                  </div>

                  <div className="mt-6">
                    <button onClick={(e)=>{e.stopPropagation(); navigate(`/services/${s.slug}`)}} className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-b from-primary to-accent text-white rounded-md shadow-sm hover:brightness-95 transition">View Service</button>
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
