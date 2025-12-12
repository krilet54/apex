import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ServiceList from '../components/ServiceList'
import PageContainer from '../components/PageContainer'
import { Link } from 'react-router-dom'
import heroImg2 from '../assets/heroimg2.png'

const faqs = [
  {
    question: 'Can Apex customise services for specific awarding bodies?',
    answer: 'Yes. We align our processes with awarding-body standards, tailoring manpower, access controls, and reporting to meet specific audit and compliance requirements.'
  },
  {
    question: 'How quickly can the centre be prepared for a new examination programme?',
    answer: 'Typical readiness timelines range from 5-7 days, including documentation, dry runs, and rehearsals, subject to awarding-body approvals.'
  },
  {
    question: 'How do you ensure examination security and integrity?',
    answer: 'Through controlled access, monitored environments, documented procedures, and compliance-aligned protocols designed to protect examination integrity throughout delivery.'
  },
    {
    question: 'Are site visits or inspections supported before onboarding?',
    answer: 'Yes. We welcome site visits and walkthroughs to support due diligence, audits, and verification prior to programme onboarding.'
  }
]
export default function Services() {
  useEffect(() => {
    document.title = 'Apex — Services'
  }, [])

  const sectionMotion = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 }
  }

  const sectionTransition = { duration: 0.6, ease: 'easeOut' }

  return (
    <>
      <motion.section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen text-white py-12 lg:py-16 border-y border-white/10 bg-gradient-to-br from-[#08160D] via-[#12311E] to-[#1E422A]"
        {...sectionMotion}
        transition={sectionTransition}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
              <motion.h2
                className="text-2xl font-semibold uppercase tracking-[0.25em] text-[#6DE5A9]"
              >
                Services
              </motion.h2>
              <motion.h1
                className="mt-3 text-xl lg:text-[34px] font-semibold leading-tight"
              >
                Integrated Solutions for Secure Examination Delivery
              </motion.h1>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-base btn-primary">
                  Contact Our Team
                </Link>
                <Link to="/our-centre" className="btn-base btn-outline-light">
                  Tour the Centre
                </Link>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: 0.05 }}>
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
              <motion.img
                src={heroImg2}
                alt="Operations team preparing an exam hall"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-64 lg:h-80"
                loading="lazy"
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <PageContainer>
        <section className="mt-0">
          <motion.div
            className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white border-y border-[#E8E0CF] py-14"
            {...sectionMotion}
            transition={sectionTransition}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#58761B]">Service Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Choose the service combination that fits your requirements.</h2>
              <p className="mt-3 text-[#4C6B37]">Integrate infrastructure, operational manpower, and support services to enable smooth, reliable examination delivery.</p>
              <div className="mt-10">
                <ServiceList showHeading={false} withContainer={false} />
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"
          {...sectionMotion}
          transition={sectionTransition}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#58761B]">FAQs</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Clarifying how we deliver.</h3>
            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  className="rounded-2xl border border-[#E5DCCB] bg-white/80 p-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <summary className="cursor-pointer text-lg font-semibold text-[#1A3F22] list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-[#D99201] text-sm font-medium ml-4">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-[#1C4B26] leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
          <motion.div
            className="rounded-[32px] bg-gradient-to-br from-[#FDF5E7] to-white border border-[#EEDFC6] p-8 text-center"
            {...sectionMotion}
            transition={{ ...sectionTransition, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9F6B1F]">Need a tailored solution?</p>
            <h4 className="mt-4 text-2xl font-semibold text-[#1A3F22]">Share your examination requirements, timelines, and compliance needs, and we will design a structured service approach aligned to your programme.</h4>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-base btn-primary">
                Contact Our Team
              </Link>
              <Link to="/our-centre" className="btn-base btn-outline">
                Tour the Centre
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </PageContainer>
    </>
  )
}
