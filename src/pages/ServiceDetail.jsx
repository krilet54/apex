import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ShieldCheck, CheckCircle, Star, Phone, Mail, Laptop, Users, BookOpen, Home, Monitor, UserCheck, Clipboard, Mic, Calendar, Video, Key, Droplet, Trash2 } from 'lucide-react'
import services from '../data/services'
import PageContainer from '../components/PageContainer'

// Directional animation variants helper
const dirVariants = (dir = 'up', dist = 12) => {
  const d = dist
  const showTrans = { transition: { duration: 0.95, ease: 'easeOut' } }
  if (dir === 'left') return { hidden: { opacity: 0, x: -d }, show: { opacity: 1, x: 0, ...showTrans } }
  if (dir === 'right') return { hidden: { opacity: 0, x: d }, show: { opacity: 1, x: 0, ...showTrans } }
  if (dir === 'down') return { hidden: { opacity: 0, y: d }, show: { opacity: 1, y: 0, ...showTrans } }
  return { hidden: { opacity: 0, y: -d }, show: { opacity: 1, y: 0, ...showTrans } }
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const service = services.find(s=> s.slug === slug)

  useEffect(()=>{
    document.title = service ? `APEX — ${service.title}` : 'APEX — Service'
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

  // framer-motion presets with smoother, longer transitions
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } }
  }

  const card = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: 'easeOut' } }
  }

  const float = { hidden: { y: 0 }, show: { y: [0, -8, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } } }

  // mapping for service-specific hero icon (uses `service.icon` from data)
  const ICONS = { Laptop, Users, BookOpen, ShieldCheck, Home }
  const ServiceIcon = ICONS[service.icon] || Camera

  // mapping for feature icons (uses `service.featureIcons` entries)
  const FEATURE_ICONS = { Monitor, Camera, ShieldCheck, Users, UserCheck, Clipboard, BookOpen, Mic, Calendar, Video, Key, Home, Droplet, Trash2 }

  // unified FAQ details for all services
  const details = [
    {
      q: 'What is the typical timeline?',
      a: 'Smaller engagements can be scheduled within 3–5 days. Larger programmes are planned with defined milestones and an agreed timeline following the scoping discussion.'
    },
    {
      q: 'How do I request a quote?',
      a: 'Use the Contact button to request an estimate. Our team responds within one business day with the required details and next steps.'
    }
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
            <motion.div className="max-w-3xl p-6 lg:p-12" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <motion.div className="flex items-center gap-4" variants={dirVariants('down', 16)}>
                <motion.div className="flex items-center justify-center w-16 h-16 rounded-md bg-[var(--amber)]/95" variants={dirVariants('down', 16)}>
                  <ServiceIcon className="h-8 w-8 text-black" />
                </motion.div>
                <motion.h1 layoutId={`title-${service.slug}`} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight" variants={dirVariants('down', 16)}>
                  {service.title}
                </motion.h1>
              </motion.div>

              <motion.p variants={dirVariants('down', 16)} className="mt-4 text-lg max-w-prose opacity-95 text-white/95">
                {service.description}
              </motion.p>

              <motion.div variants={card} transition={{delay:0.12}} className="mt-6 flex flex-wrap gap-3">
                <motion.div variants={dirVariants('down', 8)} transition={{duration: 0.8, ease: 'easeOut'}}>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--amber)] text-black font-semibold shadow-sm hover:brightness-95 transition">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Link>
                </motion.div>

                <motion.div variants={dirVariants('down', 10)} transition={{duration: 0.85, ease: 'easeOut'}}>
                  <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition">
                    <Mail className="h-4 w-4" />
                    Back to services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <PageContainer>
        <div style={vars} className="max-w-6xl mx-auto px-4">

          {/* Main content grid (flattened, minimal cards removed) */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Article */}
          <motion.article className="lg:col-span-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <motion.h2 className="text-2xl font-bold text-[var(--pine)] mb-3" variants={dirVariants('left', 12)}>Overview</motion.h2>
            <motion.p className="text-slate-700 mb-6" variants={dirVariants('left', 12)}>{service.longDescription ?? service.description}</motion.p>

            {/* Features (simple list, no card wrappers) */}
            <motion.section className="mb-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.h3 className="text-xl font-semibold mb-3" variants={dirVariants('left', 10)}>What we cover</motion.h3>
              <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" variants={{hidden: {}, show: { transition: { staggerChildren: 0.08 } }}}>
                {service.features.map((f, i) => {
                  const iconName = service.featureIcons?.[i]
                  const Icon = iconName ? FEATURE_ICONS[service.featureIcons?.[i]] || Camera : Camera
                  return (
                    <motion.li key={i} className="flex items-center gap-3" variants={dirVariants('left', 8)}>
                      <motion.div className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--pine)] text-white" variants={{ hidden: { scale: 0.8 }, show: { scale: 1, transition: { duration: 0.5 } } }}>
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <div className="text-slate-800">{f}</div>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </motion.section>

            {/* Details / FAQ (plain sections) */}
            <motion.section className="mb-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.h3 className="text-xl font-semibold mb-3" variants={dirVariants('left', 10)}>Details</motion.h3>
              <motion.div className="space-y-4" variants={{hidden: {}, show: { transition: { staggerChildren: 0.08 } }}}>

                  {details.map((d, idx) => {
                    const DetailItem = ({ item, defaultOpen = false, id }) => {
                      const [open, setOpen] = useState(defaultOpen)
                      const contentId = `detail-content-${id}`
                      return (
                        <motion.div key={id} className="group" variants={card}>
                          <motion.button
                            type="button"
                            onClick={() => setOpen(o => !o)}
                            className="w-full flex items-center gap-3 justify-start cursor-pointer font-medium"
                            variants={dirVariants('left', 6)}
                            aria-expanded={open}
                            aria-controls={contentId}
                          >
                            <motion.span
                              animate={{ rotate: open ? 90 : 0 }}
                              transition={{ duration: 0.28 }}
                              className="ml-0"
                              style={{ display: 'inline-flex' }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.span>

                            <span>{item.q}</span>
                          </motion.button>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                id={contentId}
                                key="content"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.32 }}
                                className="mt-2 text-sm text-slate-700"
                                role="region"
                                aria-labelledby={contentId + '-label'}
                              >
                                {item.a}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    }

                    return <DetailItem key={idx} id={idx} item={d} defaultOpen={idx === 0} />
                  })}
                </motion.div>
            </motion.section>
          </motion.article>

          {/* Right: Summary / Contact (simpler) */}
          <motion.aside className="lg:col-span-1" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <div className="sticky top-20">
              <motion.div className="p-4" variants={card}>
                <motion.h4 className="text-sm text-slate-500" variants={dirVariants('down', 12)}>Service</motion.h4>
                <motion.p className="font-semibold text-[var(--pine)]" variants={dirVariants('down', 14)}>{service.title}</motion.p>

                <motion.dl className="mt-4 text-sm text-slate-600" variants={{hidden: {}, show: { transition: { staggerChildren: 0.08 } }}}>
                  <motion.div variants={dirVariants('down', 10)}>
                    <dt className="font-medium text-slate-700">Category</dt>
                    <dd className="mt-1">{service.category ?? 'General'}</dd>
                  </motion.div>
                  <motion.div className="mt-2" variants={dirVariants('down', 10)}>
                    <dt className="font-medium text-slate-700">Delivery</dt>
                    <dd className="mt-1">{service.delivery ?? 'Flexible'}</dd>
                  </motion.div>
                </motion.dl>

                <motion.div className="mt-4" variants={dirVariants('down', 8)}>
                  <Link to="/contact" className="w-full block text-center px-4 py-2 rounded-md bg-[var(--pine)] text-white font-semibold hover:bg-[var(--pine)]/90 transition">Contact Us</Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.aside>

        </main>

      </div>
      </PageContainer>
    </>
  )
}
