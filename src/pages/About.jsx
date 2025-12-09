import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import about_img from '../assets/about_apex.png'
import lab_img from '../assets/images/examination lab.png'

// helper to create directional variants
const dirVariants = (dir = 'up', dist = 12) => {
  const d = dist
  if (dir === 'left') return { hidden: { opacity: 0, x: -d }, show: { opacity: 1, x: 0 } }
  if (dir === 'right') return { hidden: { opacity: 0, x: d }, show: { opacity: 1, x: 0 } }
  if (dir === 'down') return { hidden: { opacity: 0, y: d }, show: { opacity: 1, y: 0 } }
  return { hidden: { opacity: 0, y: -d }, show: { opacity: 1, y: 0 } }
}

const capabilityColumns = [
  {
    title: 'Purpose-Built Facilities',
    copy: 'Designed for secure, large-scale examination delivery'
  },
  {
    title: 'Trained Operational Teams',
    copy: 'Invigilation, IT, and on-site support staff'
  },
  {
    title: 'Redundant Systems',
    copy: 'Power, network, and operational continuity ensured'
  },
  {
    title: 'Compliance-Ready Setup',
    copy: 'Aligned with global testing and security standards'
  }
]

const focusAreas = [
  'Secure Examination Operations',
  'Integrated Infrastructure & Technology',
  'Standardised Exam-Day Execution',
  'Candidate-Centric Experience'
]

const deliveryTenets = [
  'Single-point accountability across examination operations, technology, and facilities.',
  'Continuous readiness through structured checks and real-time oversight.',
  'Compliance-aligned documentation supporting audit and awarding body requirements.',
  'Planned contingencies ensuring reliable and uninterrupted examination delivery.'
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
              <motion.h1
                className="mt-4 text-4xl lg:text-[44px] font-semibold leading-tight"
                variants={dirVariants('left', 16)}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Trusted Infrastructure Partners for High-Stakes Examination Programmes
              </motion.h1>

              <motion.p
                className="mt-4 text-sm lg:text-base text-white/80 leading-relaxed"
                variants={dirVariants('down', 14)}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                APEX operates at the intersection of technology, infrastructure, and disciplined operations to support the secure delivery of high-stakes examinations. Our centre is purpose-designed, professionally managed, and supported by trained teams, enabling consistent, reliable assessment delivery for national and international examination bodies.
              </motion.p>

              <motion.div
                className="mt-10 overflow-x-auto"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.6 }}
              >
                <table className="w-full min-w-[520px] border border-white/20 text-left rounded-2xl overflow-hidden">
                  <tbody>
                    {capabilityColumns.map((item, i) => (
                      <motion.tr
                        key={item.title}
                        variants={dirVariants('left', 10)}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        className={i === 0 ? 'bg-white/5' : 'border-t border-white/15 bg-white/5'}
                      >
                        <th className="w-1/3 px-5 py-4 align-top text-xs uppercase tracking-[0.35em] text-white/70">
                          {item.title}
                        </th>
                        <td className="px-5 py-4 text-sm text-white/90">
                          {item.copy}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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

            <motion.div className="relative space-y-5" variants={{ hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.7 }}>
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
              <motion.img
                src={about_img}
                alt="Operations control room"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-64"
                loading="lazy"
                initial={{ opacity: 0, x: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{ willChange: 'transform,opacity' }}
              />
              <motion.img
                src={lab_img}
                alt="Examination lab overview"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-64"
                loading="lazy"
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
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
              <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 12)} transition={{ duration: 0.6 }}>To be recognised by our clients as the most dependable and proficient partner in examination and assessment delivery.</motion.h2>
              <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 12)} transition={{ duration: 0.9 }}>
                We combine disciplined execution and thoughtful innovation to achieve consistently reliable outcomes.
              </motion.p>
            </div>
            <div className="grid gap-6 text-sm text-[#1C4B26]">
              <motion.div className="border-l-2 border-[#D99201] pl-5" variants={dirVariants('right', 8)} transition={{ duration: 0.55 }}>
                <p className="uppercase tracking-[0.3em] text-xs text-[#9F6B1F]">Mission</p>
                <p className="mt-2">Secure, high-quality examination and training delivery.</p>
              </motion.div>
              <motion.div className="border-l-2 border-[#1A3F22] pl-5" variants={dirVariants('right', 8)} transition={{ duration: 0.6, delay: 0.06 }}>
                <p className="uppercase tracking-[0.3em] text-xs text-[#1A3F22]">Ethos</p>
                <p className="mt-2">Operate with discipline, transparency, and responsible governance.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div>
            <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Who we are</motion.p>
            <motion.h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>Professionally managed examination and training services.</motion.h2>
            <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)} transition={{ duration: 0.9 }}>
              APEX Examination & Training Centre is a professionally managed examination and training services provider supporting secure, large-scale assessment delivery.
            </motion.p>
            <motion.p className="mt-4 text-[#4C6B37] leading-relaxed" variants={dirVariants('down', 10)} transition={{ duration: 0.95, delay: 0.04 }}>
              Operating from a purpose-designed facility in Vasant Vihar, New Delhi, APEX combines technology-enabled infrastructure, trained operational teams, and structured processes to meet the requirements of national and international examination bodies, academic institutions, and corporate assessment partners.
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

        <motion.section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#102616] to-[#0B1F13] text-white p-10 lg:p-12" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <motion.p className="text-xs uppercase tracking-[0.35em] text-white/60" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Delivery Principles</motion.p>
              <motion.h2 className="mt-3 text-3xl font-semibold" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>Clear, controlled, and consistently executed examination delivery.</motion.h2>
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
          <motion.p className="text-xs uppercase tracking-[0.35em] text-[#58761B]" variants={dirVariants('left', 6)} transition={{ duration: 0.45 }}>Engage With Us</motion.p>
          <motion.h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]" variants={dirVariants('left', 10)} transition={{ duration: 0.6 }}>Share your examination requirements. Receive a clear delivery plan.</motion.h2>
          <motion.p className="mt-3 text-[#4C6B37]" variants={dirVariants('down', 10)} transition={{ duration: 0.9 }}>
            Outline your scope, timelines, and assessment needs, and we will respond with a compliant, structured delivery approach.
          </motion.p>
          <motion.div className="mt-6 flex flex-wrap justify-center gap-4" variants={dirVariants('down', 8)} transition={{ duration: 0.6 }}>
            <Link to="/contact" className="btn-base btn-primary">Contact Our Team</Link>
            <Link to="/our-centre" className="btn-base btn-outline">Schedule a Walkthrough</Link>
          </motion.div>
        </motion.section>
      </PageContainer>
    </>
  )
}
