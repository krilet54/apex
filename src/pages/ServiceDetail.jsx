import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, ShieldCheck, CheckCircle, Star, Phone, Mail, Laptop, Users, BookOpen, Home, Monitor, UserCheck, Clipboard, Mic, Calendar, Video, Key, Droplet, Trash2 } from 'lucide-react'
import services from '../data/services'
import PageContainer from '../components/PageContainer'

export default function ServiceDetail(){
  const { slug } = useParams()
  const service = services.find(s=> s.slug === slug)

  useEffect(()=>{
    document.title = service? `Apex — ${service.title}`: 'Apex — Service'
  }, [service])

  if(!service) return (
    <PageContainer>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="max-w-3xl mx-auto bg-[var(--cream)]/95 backdrop-blur rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-[var(--pine)]">Service not found</h2>
        <Link to="/services" className="inline-block mt-4 text-[var(--amber)] font-medium hover:underline">Back to services</Link>
      </motion.div>
    </PageContainer>
  )

  // Color variables (easy to tweak)
  const vars = {
    '--pine': '#1a3f22',
    '--olive': '#58761B',
    '--amber': '#d99201',
    '--cream': '#F6EFE3'
  }

  // framer-motion presets
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: 'beforeChildren' } }
  }

  const card = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const float = { hidden: { y: 0 }, show: { y: [0, -6, 0], transition: { duration: 4.5, repeat: Infinity } } }

  // mapping for service-specific hero icon (uses `service.icon` from data)
  const ICONS = { Laptop, Users, BookOpen, ShieldCheck, Home }
  const ServiceIcon = ICONS[service.icon] || Camera

  // mapping for feature icons (uses `service.featureIcons` entries)
  const FEATURE_ICONS = { Monitor, Camera, ShieldCheck, Users, UserCheck, Clipboard, BookOpen, Mic, Calendar, Video, Key, Home, Droplet, Trash2 }

  // provide default details if none present so the Details section isn't empty
  const details = (service.details && service.details.length) ? service.details : [
    { q: 'How is this service delivered?', a: `Our ${service.title} offering can be delivered on-site or remotely depending on your needs. We tailor deployment, staffing and technology to fit your schedule and scale.` },
    { q: 'What is the typical timeline?', a: 'Smaller engagements can be scheduled within 1–2 weeks; larger programmes are planned with milestones and a timeline agreed during scoping.' },
    { q: 'How do I request a quote?', a: 'Use the Contact button to request an estimate — we respond within one business day with next steps.' }
  ]

  return (
    <>
      {/* Full-bleed hero (spans full viewport width) */}
      <motion.header initial="hidden" animate="show" variants={container} style={vars} className="relative w-full left-0 right-0 overflow-hidden text-white">
        {/* background image */}
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${service.heroImage})` }} aria-hidden />

        {/* heavy diagonal olive overlay (sits above image, beneath text) */}
        <div className="absolute inset-0" aria-hidden
             style={{
               background: 'linear-gradient(135deg, rgba(88,118,27,0.96) 0%, rgba(88,118,27,0.96) 52%, rgba(0,0,0,0.18) 100%)'
             }} />

        <div className="relative" style={{ minHeight: '48vh' }}>
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl p-6 lg:p-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[var(--amber)]/95">
                  <ServiceIcon className="h-8 w-8 text-black" />
                </div>
                <motion.h1 layoutId={`title-${service.slug}`} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  {service.title}
                </motion.h1>
              </div>

              <motion.p variants={card} className="mt-4 text-lg max-w-prose opacity-95 text-white/95">
                {service.description}
              </motion.p>

              <motion.div variants={card} transition={{delay:0.08}} className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--amber)] text-black font-semibold shadow-sm hover:brightness-95 transition">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>

                <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition">
                  <Mail className="h-4 w-4" />
                  Back to services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <PageContainer>
        <div style={vars} className="max-w-6xl mx-auto px-4">

          {/* Main content grid (flattened, minimal cards removed) */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Article */}
          <article className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[var(--pine)] mb-3">Overview</h2>
            <p className="text-slate-700 mb-6">{service.longDescription ?? service.description}</p>

            {/* Features (simple list, no card wrappers) */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">What we cover</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                {service.features.map((f, i) => {
                  const iconName = service.featureIcons?.[i]
                  const Icon = iconName ? FEATURE_ICONS[service.featureIcons?.[i]] || Camera : Camera
                  return (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--pine)] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-slate-800">{f}</div>
                    </li>
                  )
                })}
              </ul>
            </section>

            {/* Details / FAQ (plain sections) */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Details</h3>
              <div className="space-y-4">
                {details.map((d, idx) => (
                  <details key={idx} className="group" open={idx === 0}>
                    <summary className="cursor-pointer font-medium">{d.q}</summary>
                    <p className="mt-2 text-sm text-slate-700">{d.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          {/* Right: Summary / Contact (simpler) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="p-4">
                <h4 className="text-sm text-slate-500">Service</h4>
                <p className="font-semibold text-[var(--pine)]">{service.title}</p>

                <dl className="mt-4 text-sm text-slate-600">
                  <div>
                    <dt className="font-medium text-slate-700">Category</dt>
                    <dd className="mt-1">{service.category ?? 'General'}</dd>
                  </div>
                  <div className="mt-2">
                    <dt className="font-medium text-slate-700">Delivery</dt>
                    <dd className="mt-1">{service.delivery ?? 'Flexible'}</dd>
                  </div>
                </dl>

                <div className="mt-4">
                  <Link to="/contact" className="w-full block text-center px-4 py-2 rounded-md bg-[var(--pine)] text-white font-semibold">Contact Us</Link>
                </div>
              </div>
            </div>
          </aside>

        </main>

      </div>
      </PageContainer>
    </>
  )
}
