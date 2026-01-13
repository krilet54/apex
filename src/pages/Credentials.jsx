import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Clock, CheckCircle2 } from 'lucide-react'
import PageContainer from '../components/PageContainer'
import { InfrastructureStats, ClientsSection } from '../components/home/HomeSections'
import heroImage from '../assets/apex_gallery2.png'

// helper to create directional variants
const dirVariants = (dir = 'up', dist = 12) => {
  const d = dist
  if (dir === 'left') return { hidden: { opacity: 0, x: -d }, show: { opacity: 1, x: 0 } }
  if (dir === 'right') return { hidden: { opacity: 0, x: d }, show: { opacity: 1, x: 0 } }
  if (dir === 'down') return { hidden: { opacity: 0, y: d }, show: { opacity: 1, y: 0 } }
  return { hidden: { opacity: 0, y: -d }, show: { opacity: 1, y: 0 } }
}

export default function Credentials() {
  useEffect(() => {
    document.title = 'APEX — Credentials'
  }, [])

  return (
    <>
      <motion.section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#122A18] to-[#1E3E25] text-white py-10 lg:py-16 border-y border-white/10 shadow-2xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
            <div>
              <motion.h2
                className="text-2xl font-semibold uppercase tracking-[0.25em] text-[#6DE5A9]"
                variants={dirVariants('left', 16)}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Credentials
              </motion.h2>
              <motion.h1
                className="mt-3 text-xl lg:text-[34px] font-semibold leading-tight"
                variants={dirVariants('left', 16)}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Trusted Experience in High-Stakes Examination Delivery
              </motion.h1>
              <motion.p
                className="mt-4 max-w-3xl text-base text-white/80 leading-relaxed"
                variants={dirVariants('down', 14)}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                APEX Training and Examination Centre has established itself as a reliable and trusted examination partner for globally recognised, high-stakes professional and academic assessments.
              </motion.p>
              <motion.p
                className="mt-3 max-w-3xl text-base text-white/80 leading-relaxed"
                variants={dirVariants('down', 12)}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Our centre is regularly chosen to conduct examinations that demand the highest standards of infrastructure, security, accuracy, and operational discipline.
              </motion.p>
            </div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
              <motion.img
                src={heroImage}
                alt="Examination environment at APEX"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-64 lg:h-72"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{ willChange: 'transform,opacity' }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <PageContainer className="pb-0">
        <motion.section
          className="mt-12 mb-0 space-y-10 text-[#1A3F22]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Examinations Successfully Conducted + Recent Sessions */}
          <motion.div
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start"
            variants={dirVariants('up', 10)}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold">Examinations Successfully Conducted</h2>
              <p className="mt-3 text-[#4C6B37] leading-relaxed">
                We have successfully conducted multiple examination sessions for internationally reputed examination bodies, including examinations administered through the British Council and other global testing partners.
              </p>
              <p className="mt-3 text-[#4C6B37] leading-relaxed text-sm lg:text-base">
                These examinations are categorised as high-stakes assessments, requiring strict adherence to global examination protocols, secure candidate handling, controlled testing environments, and real-time operational monitoring.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full bg-[#F5F3E8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#58761B]">
                Recent Examination Sessions
              </div>
              <div className="mt-4 relative pl-6 border-l border-[#E5DCCB] space-y-4 text-[#1C4B26] text-sm lg:text-base">
                <div className="relative">
                  <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#D99201]" />
                  <p className="pl-2">
                    <span className="font-semibold">Association of Chartered Certified Accountants (ACCA)</span> — <span className="font-semibold">September 2025</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#D99201]" />
                  <p className="pl-2">
                    <span className="font-semibold">Institute and Faculty of Actuaries (IFoA)</span> — <span className="font-semibold">September 2025</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#D99201]" />
                  <p className="pl-2">
                    <span className="font-semibold">BITS Pilani – WILP</span> — <span className="font-semibold">September 2025</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#D99201]" />
                  <p className="pl-2">
                    <span className="font-semibold">Chartered Financial Analyst (CFA)</span> — <span className="font-semibold">November 2025</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#D99201]" />
                  <p className="pl-2">
                    <span className="font-semibold">Association of Chartered Certified Accountants (ACCA)</span> — <span className="font-semibold">December 2025</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming & Committed + Confirmed & Tentative */}
          <motion.div
            className="rounded-[32px] border border-[#E8E0CF] bg-[#FFFAF2] px-6 py-8 lg:px-10 lg:py-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
            variants={dirVariants('up', 10)}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold">Upcoming &amp; Committed Examination Sessions</h3>
                <p className="mt-3 text-[#4C6B37] leading-relaxed">
                  In line with our continued engagement with international examination bodies, APEX is committed to delivering several upcoming examination sessions in the coming months.
                </p>
                <p className="mt-3 text-[#4C6B37] leading-relaxed text-sm lg:text-base">
                  These scheduled engagements reflect the continued trust placed in APEX by prestigious examination authorities.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#58761B]">
                  Confirmed &amp; Tentative Future Commitments
                </div>
                <div className="mt-4 relative pl-6 border-l border-[#E5DCCB] space-y-4 text-[#1C4B26] text-sm lg:text-base">
                  <div className="relative">
                    <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#2AA56C]" />
                    <p className="pl-2">
                      <span className="font-semibold">Chartered Financial Analyst (CFA)</span> — <span className="font-semibold">February 2026</span>
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#2AA56C]" />
                    <p className="pl-2">
                      <span className="font-semibold">Association of Chartered Certified Accountants (ACCA)</span> — <span className="font-semibold">March 2026</span>
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#2AA56C]" />
                    <p className="pl-2">
                      <span className="font-semibold">Institute and Faculty of Actuaries (IFoA)</span> — <span className="font-semibold">April 2026</span>
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-[#2AA56C]" />
                    <p className="pl-2">
                      <span className="font-semibold">BITS Pilani – WILP</span> — <span className="font-semibold">March &amp; May 2026 (Tentative)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* High-Stakes Examination Capability + Why This Matters (service-portfolio style band) */}
          <motion.div
            className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#FFFAF2] py-16 overflow-hidden"
            variants={dirVariants('up', 10)}
          >
            <div className="absolute inset-0 pointer-events-none opacity-50" aria-hidden>
              <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-[#D99201]/10 blur-3xl" />
              <div className="absolute -bottom-20 left-0 h-44 w-44 rounded-full bg-[#2AA56C]/10 blur-3xl" />
            </div>
            <div className="relative container mx-auto px-6 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold">High-Stakes Examination Capability</h3>
                <p className="mt-3 text-[#4C6B37] leading-relaxed">
                  High-stakes examinations demand absolute precision, reliability, and integrity. APEX is equipped with:
                </p>
                <ul className="mt-4 space-y-3 text-[#1C4B26] text-sm lg:text-base">
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5DCCB]">
                        <Shield className="h-3.5 w-3.5 text-[#58761B]" />
                      </div>
                      <span>Secure, fully monitored computer-based testing environments</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5DCCB]">
                        <Zap className="h-3.5 w-3.5 text-[#58761B]" />
                      </div>
                      <span>Robust power and network redundancy</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5DCCB]">
                        <Users className="h-3.5 w-3.5 text-[#58761B]" />
                      </div>
                      <span>Trained invigilation and technical support teams</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5DCCB]">
                        <Clock className="h-3.5 w-3.5 text-[#58761B]" />
                      </div>
                      <span>Controlled candidate flow and access management</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5DCCB]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#58761B]" />
                      </div>
                      <span>Compliance with international examination standards</span>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-[#4C6B37] leading-relaxed text-sm lg:text-base">
                  Our growing examination portfolio demonstrates our ability to support professional, academic, and corporate assessments with consistency and confidence.
                </p>
              </div>
              <div className="lg:pl-10 lg:border-l lg:border-[#E5DCCB]">
                <h3 className="text-xl lg:text-2xl font-semibold">Why This Matters to Our Clients</h3>
                <ul className="mt-4 space-y-3 text-[#1C4B26] text-sm lg:text-base">
                  <li>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#58761B]" />
                      <span>Proven experience with international examination bodies</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#58761B]" />
                      <span>Demonstrated capability in handling high-stakes examinations</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#58761B]" />
                      <span>Trusted infrastructure and professional operations</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#58761B]" />
                      <span>Ongoing and repeat engagements from global exam providers</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
              <div className="relative mt-8 pt-4 border-t border-[#E5DCCB]">
                <p className="text-sm lg:text-base text-[#4C6B37] leading-relaxed">
                  APEX Training and Examination Centre continues to expand its examination credentials and remains committed to delivering secure, world-class assessment services for prestigious examination bodies worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </PageContainer>

      {/* Infrastructure stats and clients section */}
      <div>
        <InfrastructureStats fullWidth />
      </div>
      <ClientsSection />
    </>
  )
}
