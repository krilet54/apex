import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceList from '../components/ServiceList'
import {
  AboutSnapshot,
  InfrastructureStats,
  CentrePreview,
  WhyChooseApex,
  LocationPreview,
  PrimaryCTA,
  QuickContactStrip
} from '../components/home/HomeSections'

export default function Home(){
  useEffect(()=>{document.title = 'Apex — Home';}, [])

  const sectionMotion = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }
  }

  const sectionTransition = { duration: 0.6, ease: 'easeOut' }

  return (
    <div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <Hero />
      </motion.div>
      <motion.section
        {...sectionMotion}
        transition={sectionTransition}
        className="bg-[#0F2214] text-white py-12"
      >
        <div className="container mx-auto px-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#F2C94C]">Mission-ready Support</p>
            <h2
              className="mt-3 text-3xl font-semibold text-white"
              aria-label="The Benchmark in Examination Services."
            >
              The Benchmark in Examination Services.
            </h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Trusted by international boards and government agencies.
            </p>
            <p className="mt-2 text-white/80 max-w-2xl">
              To deliver secure, high-quality examination and training solutions with integrity and precision.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-base btn-primary text-center">Contact Our Team</Link>
            <a
              href="/apex-brochure.pdf"
              className="btn-base btn-outline-light text-center"
              target="_blank"
              rel="noreferrer"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </motion.section>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <AboutSnapshot />
      </motion.div>
      <motion.section {...sectionMotion} transition={sectionTransition} className="bg-[#FFFAF2] py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Service families</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Built to support every examination format.</h2>
          <p className="mt-2 text-[#4C6B37]">Infrastructure, manpower, security and support services operated from a single command desk.</p>
          <div className="mt-10">
            <ServiceList showHeading={false} withContainer={false} />
          </div>
        </div>
      </motion.section>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <InfrastructureStats />
      </motion.div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <CentrePreview />
      </motion.div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <WhyChooseApex />
      </motion.div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <LocationPreview />
      </motion.div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <QuickContactStrip />
      </motion.div>
      <motion.div {...sectionMotion} transition={sectionTransition}>
        <PrimaryCTA />
      </motion.div>
    </div>
  )
}
