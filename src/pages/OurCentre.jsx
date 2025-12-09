import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
// directional variants helper
const dirVariants = (dir = 'up', dist = 12) => {
  const d = dist
  // add a gentle default transition so most variants are smooth and noticeable
  const showTrans = { transition: { duration: 0.95, ease: 'easeOut' } }
  if (dir === 'left') return { hidden: { opacity: 0, x: -d }, show: { opacity: 1, x: 0, ...showTrans } }
  if (dir === 'right') return { hidden: { opacity: 0, x: d }, show: { opacity: 1, x: 0, ...showTrans } }
  if (dir === 'down') return { hidden: { opacity: 0, y: d }, show: { opacity: 1, y: 0, ...showTrans } }
  return { hidden: { opacity: 0, y: -d }, show: { opacity: 1, y: 0, ...showTrans } }
}

function MotionCounter({ valueString, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const match = String(valueString).match(/^(\d+)/)
  const target = match ? parseInt(match[0], 10) : 0
  const suffix = String(valueString).slice(match ? match[0].length : 0)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 18 })
  React.useEffect(() => { if (inView) mv.set(target) }, [inView, mv, target])
  const [display, setDisplay] = React.useState(0)
  React.useEffect(() => { const unsub = spring.on('change', (v) => setDisplay(Math.round(v))); return () => unsub() }, [spring])
  return <span ref={ref} className={className}>{display}{suffix}</span>
}
import PageContainer from '../components/PageContainer'
import LocationMap from '../components/LocationMap'
import IMG1 from '../assets/about_apex.png'
import IMG2 from '../assets/apex_gallery.png'
import IMG3 from '../assets/apex_gallery2.png'
import IMG4 from '../assets/apex_gallery3.png'
import centreReel from '../assets/images/Stop_Motion_Exam_Centre_Timelapse_Video.mp4'

const centreStats = [
  { value: '181', label: 'Secured workstations' },
  { value: '8 Labs', label: 'Examination labs' },
  { value: '181+', label: 'Waiting room capacity' },
  { value: '2 x 20kVA', label: 'UPS power reserve' }
]

const focusHighlights = [
  'Redundant high-speed internet with automatic failover',
  'Fully air-conditioned labs, waiting areas, and operational spaces for consistent comfort',
  'Dedicated spaces for operations, staff coordination, and equipment',
  'On-site technical and facility support teams for every examination slot'
]

const galleryImages = [
  { src: IMG1, alt: 'Exam control room', meta: 'Command + monitoring' },
  { src: IMG2, alt: 'Workstations', meta: 'Exam lab · mirrored rows' },
  { src: IMG3, alt: 'Waiting room', meta: '181+ candidate capacity' },
  { src: IMG4, alt: 'Operations view', meta: 'Staff room + prep' }
]

const evidenceStrip = [
  { src: IMG2, caption: 'Examination Lab', detail: 'Mirrored layout for focused sitting' },
  { src: IMG3, caption: 'Waiting Room', detail: 'Dedicated holding for upcoming cohorts' },
  { src: IMG4, caption: 'Operations Wing', detail: 'Staff, biometrics, storage' }
]

const walkthroughSteps = [
  'Arrival and identity verification at the campus entry point',
  'Candidate orientation and secure locker allocation in waiting areas',
  'Biometric verification and guided movement to examination labs',
  'Live session oversight with on-call issue resolution and support'
]

export default function OurCentre() {
  useEffect(() => {
    document.title = 'Apex — Our Centre'
  }, [])

  return (
    <>
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#122A18] to-[#1D3C24] text-white py-12 lg:py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <motion.h1 className="mt-4 text-4xl lg:text-[44px] font-semibold leading-tight" variants={dirVariants('left', 16)} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.95, ease: 'easeOut' }}>
              A purpose-built examination floor designed for control and consistency.
            </motion.h1>
            <motion.p className="mt-4 text-white/80 leading-relaxed" variants={dirVariants('down', 14)} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.95, ease: 'easeOut' }}>
              Located within Guru Harkrishan Public School, Vasant Vihar, the facility integrates candidate management, technology, and security through a centrally managed operational framework.
            </motion.p>
            <motion.div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              {centreStats.map((stat, i) => (
                <motion.div key={stat.label} className="border-l border-white/30 pl-4" variants={dirVariants('left', 10)} transition={{ duration: 0.85, delay: i * 0.06, ease: 'easeOut' }}>
                  <p className="text-2xl font-semibold text-white"><MotionCounter valueString={stat.value} /></p>
                  <p className="mt-1 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-8 flex flex-wrap gap-4" variants={dirVariants('down', 12)} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.85, ease: 'easeOut' }}>
              <Link to="/contact" className="btn-base btn-primary">
                Book The Centre
              </Link>
              <Link to="/about" className="btn-base btn-outline-light">
                Learn About Apex
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
            <motion.img
              src={IMG1}
              alt="Apex exam lab"
              className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-80"
              loading="lazy"
              initial={{ opacity: 0, x: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              style={{ willChange: 'transform,opacity' }}
            />
          </div>
        </div>
      </section>

      <PageContainer>
        <section className="mt-14">
          <motion.div className="flex items-center justify-between flex-wrap gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <div>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 8)}>Visual evidence</motion.p>
              <motion.h2 className="mt-2 text-2xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>What candidates experience on-site</motion.h2>
            </div>
            <motion.div variants={dirVariants('right', 10)}>
              <Link to="/contact" className="text-sm font-medium text-[#1A3F22] underline decoration-dotted">Request full gallery access</Link>
            </motion.div>
          </motion.div>

          <motion.div className="mt-6 overflow-x-auto pb-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="flex gap-6 min-w-max" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              {evidenceStrip.map((item) => (
                <motion.div key={item.caption} className="w-[280px] rounded-[28px] overflow-hidden border border-[#E5DCCB] bg-white shadow-sm" variants={dirVariants('up', 10)}>
                  <motion.img src={item.src} alt={item.caption} className="h-48 w-full object-cover" loading="lazy"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.95, ease: 'easeOut' }}
                    style={{ willChange: 'transform,opacity' }}
                  />
                  <div className="p-4">
                    <motion.p className="text-sm uppercase tracking-[0.3em] text-[#58761B]" variants={dirVariants('left', 6)}>{item.caption}</motion.p>
                    <motion.p className="mt-2 text-[#1C4B26] text-sm" variants={dirVariants('right', 6)}>{item.detail}</motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="mt-16 rounded-[32px] border border-[#E8E0CF] bg-white p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)}>Infrastructure snapshot</motion.p>
              <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>Designed for clarity, control, and reliable examination delivery.</motion.h2>
              <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)}>
                Each examination lab supports clear orientation, focused testing, and orderly candidate movement within fully air-conditioned, acoustically balanced environments. Adjacent waiting areas are designed to maintain smooth, congestion-free flow.
              </motion.p>
            </motion.div>
            <motion.div className="space-y-4 text-sm text-[#1C4B26]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {focusHighlights.map((item, idx) => (
                <motion.div key={item} className="border-l-2 border-[#D99201] pl-4" variants={dirVariants('right', 8)} transition={{ duration: 0.65, delay: idx * 0.04, ease: 'easeOut' }}>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-[28px] border border-[#E5DCCB] p-6 lg:p-8 bg-white">
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('left', 8)}>Photo journal</motion.p>
            <motion.div className="mt-6 grid gap-4 sm:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {galleryImages.map((image, idx) => (
                <motion.div key={image.alt} className="relative overflow-hidden rounded-2xl" variants={dirVariants('up', 10)}>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="h-48 w-full object-cover rounded-2xl"
                    loading="lazy"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.95, ease: 'easeOut', delay: idx * 0.04 }}
                    style={{ willChange: 'transform,opacity' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
                    <motion.p className="text-sm font-medium text-white" variants={dirVariants('left', 6)}>{image.alt}</motion.p>
                    <motion.p className="text-xs text-white/80" variants={dirVariants('right', 6)}>{image.meta}</motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div className="relative rounded-[28px] overflow-hidden border border-[#E5DCCB] bg-black" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('up', 10)}>
            <motion.video
              className="h-full w-full object-cover"
              src={centreReel}
              autoPlay
              muted
              loop
              playsInline
              controls
              initial={{ opacity: 0, scale: 0.995 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ willChange: 'transform,opacity' }}
            />
            <motion.div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm" variants={dirVariants('left', 6)}>Live capture · Examination floor perspective</motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)}>Candidate Walkthrough</motion.p>
            <motion.h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>A clearly structured journey from arrival to exit.</motion.h3>
            <motion.ul className="mt-5 space-y-4 text-sm text-[#1C4B26]" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              {walkthroughSteps.map((step, index) => (
                <motion.li key={step} className="flex gap-3" variants={dirVariants('right', 8)}>
                  <motion.span className="text-[#D99201] font-semibold" variants={dirVariants('left', 6)}>0{index + 1}</motion.span>
                  <motion.span variants={dirVariants('right', 6)}>{step}</motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        <section className="mt-14 rounded-[32px] border border-[#EADFC8] bg-[#FFFAF2] p-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)}>Access & Logistics</motion.p>
              <motion.h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>Central, well-connected, and discreetly managed.</motion.h3>
              <motion.p className="mt-3 text-[#4C6B37]" variants={dirVariants('down', 8)}>
                Easy access from Vasant Vihar and Munirka metro stations, RK Puram Sector 5 bus stop, and designated school entry points ensures orderly, predictable movement for candidates and staff.
              </motion.p>
              <motion.p className="mt-3 text-sm text-[#1C4B26]" variants={dirVariants('down', 8)}>Guru Harkrishan Public School, Vasant Vihar, New Delhi – 110057</motion.p>
            </motion.div>
            <motion.div className="rounded-[24px] overflow-hidden border border-[#E5DCCB]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('up', 8)}>
              <LocationMap />
            </motion.div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#102616] to-[#0B1F13] text-white p-10 text-center">
          <motion.p className="text-xs uppercase tracking-[0.35em] text-white/60" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('down', 8)}>Visit us now</motion.p>
          <motion.h3 className="mt-4 text-3xl font-semibold" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('down', 12)}>Walk the floors, validate readiness in person.</motion.h3>
          <motion.p className="mt-3 text-white/80" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('down', 10)}>Schedule an on-site walkthrough with our team and experience the examination flow end-to-end.</motion.p>
          <motion.div className="mt-6 flex flex-wrap justify-center gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={dirVariants('down', 8)}>
              <Link to="/contact" className="btn-base btn-primary">Visit Us Now</Link>
            </motion.div>
          </motion.div>
        </section>
      </PageContainer>
    </>
  )
}
