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
  { value: '172', label: 'Secured workstations' },
  { value: '7 Labs', label: 'Parallel exam rooms' },
  { value: '175+', label: 'Waiting lounge capacity' },
  { value: '40 kVA', label: 'UPS power reserve' }
]

const focusHighlights = [
  'Dual-line high-speed internet with auto failover',
  'Biometric entry, CCTV coverage and discreet screening',
  'Dedicated command, staff and equipment rooms',
  'On-site technical + housekeeping teams for every slot'
]

const labBreakdown = [
  { title: 'Cluster A', detail: 'Four labs · 31 stations each · primary deployments' },
  { title: 'Cluster B', detail: 'Two labs · 21 stations each · staggered schedules' },
  { title: 'Special Lab', detail: 'One lab · 6 stations · accommodations & viva' }
]

const galleryImages = [
  { src: IMG1, alt: 'Exam control room', meta: 'Command + monitoring' },
  { src: IMG2, alt: 'Workstations', meta: 'Cluster A · 31 stations' },
  { src: IMG3, alt: 'Candidate lounge', meta: 'Waiting lounge · 175 pax' },
  { src: IMG4, alt: 'Operations view', meta: 'Staff room + prep' }
]

const evidenceStrip = [
  { src: IMG2, caption: 'Cluster A', detail: '31-seat lab with mirrored layout' },
  { src: IMG3, caption: 'Candidate Lounge', detail: 'Separate holding for next batch' },
  { src: IMG4, caption: 'Operations Wing', detail: 'Staff, biometrics, storage' }
]

const walkthroughSteps = [
  'Arrival + ID screening at school gate',
  'Orientation and locker assignment in lounge',
  'Biometric verification + escort to lab clusters',
  'Live monitoring and rapid resolution from command desk'
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
              A purpose-built examination floor that mirrors defence-grade control.
            </motion.h1>
            <motion.p className="mt-4 text-white/80 leading-relaxed" variants={dirVariants('down', 14)} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.95, ease: 'easeOut' }}>
              Located inside Guru Harkrishan Public School, Vasant Vihar, the facility keeps candidate handling, technology and security under a single command desk.
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
              <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>Neutral interiors, disciplined controls.</motion.h2>
              <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)}>
                Each lab is acoustically balanced, air-conditioned and mirrored for rapid candidate orientation. Waiting lounges hold entire next batches to keep circulation calm.
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

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] items-stretch">
          <div className="rounded-[28px] bg-[#F8F4EA] p-8 border border-[#E5DCCB] h-full">
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#9F6B1F]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('left', 6)}>Lab configuration</motion.p>
            <motion.h3 className="mt-4 text-2xl font-semibold text-[#1A3F22]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('left', 12)}>Parallel readiness for varied cohorts.</motion.h3>
            <div className="mt-6 space-y-5 text-sm text-[#1C4B26]">
              {labBreakdown.map((lab, idx) => (
                <motion.div key={lab.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { delay: idx * 0.06 } } }}>
                  <motion.p className="font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)}>{lab.title}</motion.p>
                  <motion.p variants={dirVariants('right', 10)}>{lab.detail}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E5DCCB] p-6 lg:p-8 bg-white h-full">
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
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)}>Walkthrough</motion.p>
            <motion.h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>From entry to exit, rehearsed routines.</motion.h3>
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
              <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)}>Access + logistics</motion.p>
              <motion.h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)}>Central, connected and discreet.</motion.h3>
              <motion.p className="mt-3 text-[#4C6B37]" variants={dirVariants('down', 8)}>
                Vasant Vihar and Munirka metro stations, RK Puram Sec-5 bus stop and secure school entry points keep movement predictable.
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
          <motion.p className="mt-3 text-white/80" initial="hidden" whileInView="show" viewport={{ once: true }} variants={dirVariants('down', 10)}>Schedule an on-site walkthrough with our programme office and experience the examination flow end-to-end.</motion.p>
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
