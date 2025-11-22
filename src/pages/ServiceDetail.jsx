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

  return (
    <PageContainer>
      <div style={vars} className="max-w-6xl mx-auto px-4">

        {/* Hero */}
        <motion.header initial="hidden" animate="show" variants={container} className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gradient-to-br from-[var(--pine)] via-[var(--olive)] to-black/20 text-white">
          <div className="flex flex-col lg:flex-row items-stretch">

            <motion.div variants={card} className="w-full lg:w-2/3 p-8 lg:p-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white/10">
                  <ServiceIcon className="h-8 w-8 text-[var(--amber)]" />
                </div>
                <motion.h1 layoutId={`title-${service.slug}`} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  {service.title}
                </motion.h1>
              </div>

              <motion.p variants={card} className="mt-4 text-base sm:text-lg max-w-prose opacity-95">
                {service.description}
              </motion.p>

              <motion.div variants={card} transition={{delay:0.08}} className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[var(--amber)] text-black font-semibold shadow-2xl transform hover:scale-105 transition-all">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>

                <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 text-white/90 hover:bg-white/5 transform hover:-translate-y-1 transition-all">
                  <Mail className="h-4 w-4" />
                  Back to services
                </Link>
              </motion.div>

              {/* quick badges */}
              <motion.div variants={card} className="mt-6 flex gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium inline-flex items-center gap-2"><ShieldCheck className="h-3 w-3"/>Trusted</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium inline-flex items-center gap-2"> <CheckCircle className="h-3 w-3"/>Accredited</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium inline-flex items-center gap-2"> <Star className="h-3 w-3"/>Expert Faculty</span>
              </motion.div>
            </motion.div>

            <aside className="w-full lg:w-1/3 bg-[var(--cream)] flex items-center justify-center p-6" aria-hidden>
              <figure className="w-full">
                  {/* per-service hero image (place files in src/assets/images/) */}
                  <img src={service.heroImage ?? '/mnt/data/255a8ece-8d5a-47f1-9750-926ba8f8af48.png'} alt={service.title} loading="lazy" className="w-full h-64 md:h-72 object-cover rounded-xl border shadow-lg"/>
                  <figcaption className="mt-3 text-xs text-slate-500 text-center">Design inspiration</figcaption>
                </figure>
            </aside>

          </div>
        </motion.header>

        {/* Main content grid */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Article */}
          <motion.article variants={container} initial="hidden" animate="show" className="lg:col-span-2 bg-[var(--cream)] rounded-2xl p-6 shadow-xl ring-1 ring-black/5 border-t-4 border-[var(--olive)]">
            <motion.h2 variants={card} className="text-xl font-semibold text-[var(--pine)]">Overview</motion.h2>
            <motion.p variants={card} className="mt-3 text-slate-700">{service.longDescription ?? service.description}</motion.p>

            {/* Feature cards - animated micro-interactions */}
            <section className="mt-6">
              <motion.h3 variants={card} className="font-semibold text-[var(--olive)]">Key features</motion.h3>
              <motion.div variants={container} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((f,i)=> {
                      const Icon = FEATURE_ICONS[service.featureIcons?.[i]] || Camera
                      return (
                        <motion.div key={i} variants={card} whileHover={{scale:1.012}} whileTap={{scale:0.995}} transition={{type:'spring', stiffness:300}} className="p-4 rounded-xl bg-gradient-to-br from-[var(--cream)] to-[#fbfdf9] border border-slate-100 shadow-md flex gap-3 items-start">
                          <div className="flex-shrink-0 mt-1 bg-[var(--pine)]/5 rounded-lg p-3 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-[var(--amber)]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800">{f}</h4>
                            <p className="mt-1 text-xs text-slate-500">{service.featureBlurb ? service.featureBlurb[i] ?? 'Part of the full offering.' : 'Part of the full offering.'}</p>
                          </div>
                        </motion.div>
                      )
                    })}
              </motion.div>
            </section>

            {/* Testimonials / Success stories */}
            <section className="mt-6">
              <motion.h3 variants={card} className="font-semibold text-[var(--pine)]">Student Success</motion.h3>
              <motion.div variants={container} className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Array.from({length:3}).map((_,i)=> (
                  <motion.blockquote key={i} variants={card} whileHover={{translateY:-4}} className="p-4 rounded-lg bg-[linear-gradient(90deg,var(--cream),#f6efe3)] border shadow-sm">
                    <p className="text-sm text-slate-700">"This course changed the way I approach exams and projects. Highly recommended."</p>
                    <footer className="mt-3 text-xs text-slate-500">— Student {i+1}</footer>
                  </motion.blockquote>
                ))}
              </motion.div>
            </section>

            {/* FAQ */}
            <section className="mt-6">
              <motion.h3 variants={card} className="font-semibold text-[var(--pine)]">FAQ</motion.h3>
              <motion.div variants={container} className="mt-3 space-y-2">
                <details className="group p-4 rounded-lg border border-slate-100 bg-[var(--cream)]" open>
                  <summary className="cursor-pointer font-medium">How do I request a quote?</summary>
                  <p className="mt-2 text-slate-700">Use the Contact button above or reach out on our Contact page — we reply within one business day.</p>
                </details>

                <details className="group p-4 rounded-lg border border-slate-100 bg-[var(--cream)]">
                  <summary className="cursor-pointer font-medium">What's the typical timeline?</summary>
                  <p className="mt-2 text-slate-700">Timelines vary by project size. Small jobs: 1-2 weeks. Medium: 3-6 weeks. We'll propose a schedule with your quote.</p>
                </details>
              </motion.div>
            </section>

          </motion.article>

          {/* Right: Summary / Contact */}
          <motion.aside variants={card} initial="hidden" animate="show" className="bg-[var(--cream)] rounded-2xl p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-slate-500">Service</h4>
                <p className="font-semibold text-[var(--pine)]">{service.title}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--amber)]/95 text-black">Popular</span>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <div>
                <dt className="font-medium text-slate-700">Category</dt>
                <dd className="mt-1">{service.category ?? 'General'}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Delivery</dt>
                <dd className="mt-1">{service.delivery ?? 'Flexible'}</dd>
              </div>
            </dl>

            <motion.div whileHover={{scale:1.02}} className="mt-6">
              <Link to="/contact" className="w-full block text-center px-4 py-3 rounded-2xl bg-[var(--pine)] text-white font-semibold shadow hover:opacity-95 transition"><Phone className="h-4 w-4 inline-block mr-2"/>Contact Us</Link>
            </motion.div>

            <div className="mt-6 text-xs text-slate-400">Have questions? We're here to help — use Contact Us.</div>

            <div className="mt-4 flex gap-2 items-center justify-center">
              <motion.button whileTap={{scale:0.98}} className="px-4 py-2 rounded-lg border border-slate-200 text-sm">Call: +91 98765 43210</motion.button>
              <motion.button whileTap={{scale:0.98}} className="px-4 py-2 rounded-lg border border-slate-200 text-sm">Chat</motion.button>
            </div>

          </motion.aside>

        </main>

      </div>
    </PageContainer>
  )
}
