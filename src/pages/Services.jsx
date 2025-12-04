import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ServiceList from '../components/ServiceList'
import PageContainer from '../components/PageContainer'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'Can Apex customise services for specific awarding bodies?',
    answer: 'Yes. We map awarding-body SOPs and tailor manpower, access control and reporting to match audit requirements.'
  },
  {
    question: 'Do you support remote proctoring as well as on-site delivery?',
    answer: 'Our team handles both—secure browser setups, remote proctors and on-site invigilators with a single escalation ladder.'
  },
  {
    question: 'How quickly can the centre be readied for a new programme?',
    answer: 'Typical readiness is 10–14 days including rehearsals, documentation and dry-runs, subject to awarding-body clearances.'
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
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#1B3B24] to-[#1F4A2C] text-white py-12 lg:py-16 border-y border-white/10"
        {...sectionMotion}
        transition={sectionTransition}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-[40px] lg:text-[56px] font-semibold leading-tight">
            Services
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Government-grade exam infrastructure, operations manpower, security, housekeeping and training support under one programme office.
          </p>
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Service families</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Select the mix that suits your mandate.</h2>
              <p className="mt-3 text-[#4C6B37]">Combine infrastructure, manpower and security services for seamless rollouts.</p>
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">FAQs</p>
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#9F6B1F]">Need something custom?</p>
            <h4 className="mt-4 text-2xl font-semibold text-[#1A3F22]">Brief the programme office for a tailored service stack.</h4>
            <p className="mt-3 text-[#4C6B37]">Share your volumes, SLAs and compliance targets. We will respond with a modular plan.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-base btn-primary">
                Talk to Delivery Lead
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
