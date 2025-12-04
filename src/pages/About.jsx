import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import about_img from '../assets/about_apex.png'

// helper to create directional variants
const dirVariants = (dir = 'up', dist = 12) => {
  const d = dist
  if (dir === 'left') return { hidden: { opacity: 0, x: -d }, show: { opacity: 1, x: 0 } }
  if (dir === 'right') return { hidden: { opacity: 0, x: d }, show: { opacity: 1, x: 0 } }
  if (dir === 'down') return { hidden: { opacity: 0, y: d }, show: { opacity: 1, y: 0 } }
  return { hidden: { opacity: 0, y: -d }, show: { opacity: 1, y: 0 } }
}

// Motion number counter: extracts leading number and animates it
import { useRef } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

function MotionCounter({ valueString, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  // extract leading number
  const match = String(valueString).match(/^(\d+)/)
  const target = match ? parseInt(match[0], 10) : 0
  const suffix = String(valueString).slice(match ? match[0].length : 0)

  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 100, damping: 20 })
  useEffect(() => {
    if (inView) mv.set(target)
    // reset when leaving not necessary
  }, [inView, mv, target])

  const [display, setDisplay] = React.useState(0)
  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v)))
    return () => unsub()
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}

const operationalStats = [
  { value: '14+', label: 'Years executing government mandates' },
  { value: '40+', label: 'Critical missions completed' },
  { value: '7 Labs', label: 'Synchronous exam floors' },
  { value: '172+', label: 'Secured workstations' }
]

const focusAreas = [
  'Defence-grade security planning and SOPs',
  'Precision infrastructure integration across IT + facilities',
  'Exam-day runbooks with rehearsal and escalation ladders',
  'Human-centric experience from entry to clearance'
]

const milestones = [
  { year: '2011', detail: 'Signals Corps deployments across Army HQ and command theatres.' },
  { year: '2016', detail: 'Pan-India defence infrastructure rollouts and training grids.' },
  { year: '2020', detail: 'Pivoted discipline toward academic testing operations.' },
  { year: '2024', detail: 'Commissioned Apex Online Examination Centre for global awarding bodies.' }
]

const deliveryTenets = [
  'Single programme office accountable for technology + facilities.',
  'Transparent reporting with daily readiness signals.',
  'Native compliance support for awarding body documentation.',
  'Proactive risk rehearsal and contingency mapping.'
]

export default function About() {
  useEffect(() => {
    document.title = 'Apex — About'
  }, [])

  return (
    <>
      <motion.section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#122A18] to-[#1E3E25] text-white py-10 lg:py-16 shadow-2xl border-y border-white/10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } }
            }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70"
                variants={dirVariants('left', 6)}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                Since 2011
              </motion.div>

              <motion.h1
                className="mt-4 text-4xl lg:text-[44px] font-semibold leading-tight"
                variants={dirVariants('left', 16)}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Defence-born infrastructure partners for high-stakes examination programmes.
              </motion.h1>

              <motion.p
                className="mt-4 text-sm lg:text-base text-white/80 leading-relaxed"
                variants={dirVariants('down', 14)}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                Apex operates at the intersection of mission-critical IT, facilities engineering and operations control. We combine defence discipline with hospitality-level experience to deliver examination centres that run flawlessly under pressure.
              </motion.p>

              <motion.div
                className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.6 }}
              >
                {operationalStats.map((stat, i) => (
                  <motion.div key={stat.label} className="border-l border-white/30 pl-4"
                    variants={dirVariants('left', 10)}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <p className="text-2xl font-semibold text-white"><MotionCounter valueString={stat.value} /></p>
                    <p className="mt-1 leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="mt-8 flex flex-wrap gap-4" variants={dirVariants('down', 12)} transition={{ duration: 0.55 }}>
                <Link to="/contact" className="btn-base btn-primary">
                  Engage Apex
                </Link>
                <Link to="/our-centre" className="btn-base btn-outline-light">
                  Tour the Centre
                </Link>
              </motion.div>
            </div>

            <motion.div className="relative" variants={{ hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.7 }}>
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
              <motion.img
                src={about_img}
                alt="Apex operations floor"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-80"
                loading="lazy"
                initial={{ opacity: 0, x: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{ willChange: 'transform,opacity' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <PageContainer>
        <motion.section className="mt-16 rounded-[36px] border border-[#E8E0CF] bg-white p-10 lg:p-12" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, ease: 'easeOut' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Vision Statement</motion.p>
              <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)} transition={{ duration: 0.6 }}>Infrastructure trusted by ministries, examining bodies and defence establishments.</motion.h2>
              <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 12)} transition={{ duration: 0.9 }}>
                We design calm, precise environments that allow candidates, invigilators and stakeholders to operate with complete confidence.
              </motion.p>
            </div>
            <div className="grid gap-6 text-sm text-[#1C4B26]">
              <motion.div className="border-l-2 border-[#D99201] pl-5" variants={dirVariants('right', 8)} transition={{ duration: 0.55 }}>
                <p className="uppercase tracking-[0.3em] text-xs text-[#9F6B1F]">Mission</p>
                <p className="mt-2">Deliver defence-grade readiness for every examination day.</p>
              </motion.div>
              <motion.div className="border-l-2 border-[#1A3F22] pl-5" variants={dirVariants('right', 8)} transition={{ duration: 0.6, delay: 0.06 }}>
                <p className="uppercase tracking-[0.3em] text-xs text-[#1A3F22]">Ethos</p>
                <p className="mt-2">Operate with restraint, documentation and proactive governance.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div>
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Who we are</motion.p>
            <motion.h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>Government programme specialists with an examination focus.</motion.h2>
            <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)} transition={{ duration: 0.9 }}>
              Apex grew within the Corps of Signals ecosystem, solving for secure IT rooms, network-hardening and rapid deployments. Today we translate that discipline into the exam and certification space, where compliance windows and user experience matter equally.
            </motion.p>
            <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)} transition={{ duration: 0.95, delay: 0.04 }}>
              Our teams cover infrastructure, technology and candidate handling from a single command desk—removing silos and accelerating decision making.
            </motion.p>
          </div>
          <motion.div className="rounded-[30px] bg-[#F8F4EA] p-8 border border-[#E5DCCB]" initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9F6B1F]">Focus areas</p>
            <motion.ul className="mt-4 space-y-3 text-sm text-[#1C4B26]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
              {focusAreas.map((item, idx) => (
                <motion.li key={item} variants={{ hidden: { opacity: 0, x: 6 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.45, delay: idx * 0.03 }}>{item}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.section>

        <motion.section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.65 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#D99201]/20 to-transparent blur-2xl" aria-hidden />
            <motion.img src={about_img} alt="Apex operations floor" className="relative rounded-[28px] border border-[#E4D7C0] shadow-xl w-full object-cover h-80" loading="lazy"
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              style={{ willChange: 'transform,opacity' }}
            />
          </div>
          <div>
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.55 }}>Milestones</motion.p>
            <motion.h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>A single line of accountability since 2011.</motion.h2>
            <motion.div className="mt-6 space-y-5" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {milestones.map((milestone, i) => (
                <motion.div key={milestone.year} className="flex gap-6" variants={dirVariants('right', 8)} transition={{ duration: 0.45, delay: i * 0.03 }}>
                  <p className="text-xl font-semibold text-[#D99201] w-16">{milestone.year}</p>
                  <p className="text-sm text-[#1C4B26]">{milestone.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#102616] to-[#0B1F13] text-white p-10 lg:p-12" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-white/60" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Delivery tenets</motion.p>
              <motion.h2 className="mt-3 text-3xl font-semibold" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>We keep programmes calm, visible and audit-ready.</motion.h2>
            </div>
            <div>
              <motion.ul className="space-y-4 text-sm text-white/80" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                {deliveryTenets.map((tenet, i) => (
                  <motion.li key={tenet} variants={dirVariants('right', 8)} transition={{ duration: 0.45, delay: i * 0.03 }}>{tenet}</motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-16 rounded-[32px] border border-[#EADFC8] bg-[#FFFAF2] p-10 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Engage us</motion.p>
          <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>Brief the programme office, receive a blueprint within a week.</motion.h2>
          <motion.p className="mt-3 text-[#4C6B37]" variants={dirVariants('down', 10)} transition={{ duration: 0.9 }}>Share mandate, intake capacity and evaluation calendar—we will respond with a compliant, minimal operations model.</motion.p>
          <motion.div className="mt-6 flex flex-wrap justify-center gap-4" variants={dirVariants('down', 8)} transition={{ duration: 0.6 }}>
            <Link to="/contact" className="btn-base btn-primary">Contact Programme Office</Link>
            <Link to="/our-centre" className="btn-base btn-outline">Schedule a walkthrough</Link>
          </motion.div>
        </motion.section>
      </PageContainer>
    </>
  )
}
