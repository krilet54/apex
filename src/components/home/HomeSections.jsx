import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Layers,
  Compass,
  Globe2,
  Headphones,
  MapPin,
  Phone,
  Mail,
  MonitorSmartphone,
  Users
} from 'lucide-react'
import { motion } from 'framer-motion'
import useTypedText from '../../hooks/useTypedText'
import timelapseReel from '../../assets/images/Stop_Motion_Exam_Centre_Timelapse_Video.mp4'
import labImage from '../../assets/images/examination lab.png'
import waitingRoomImage from '../../assets/images/exam waiting room.png'
import desksImage from '../../assets/images/desks exam.png'
import accaLogo from '../../assets/acca.png'
import bitsLogo from '../../assets/bits.png'
import cfaLogo from '../../assets/cfa.png'
import britishCouncilLogo from '../../assets/british council.png'
import mrcpLogo from '../../assets/mrcp.svg'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }
}

const trustLogos = [
  { name: 'British Council', image: britishCouncilLogo, className: 'h-20' },
  { name: 'ACCA', image: accaLogo },
  { name: 'CFA Institute', image: cfaLogo },
  { name: 'MRCP(UK)', image: mrcpLogo, className: 'h-12' },
  { name: 'BITS Pilani – WILP', image: bitsLogo }
]

const infrastructureStats = [
  { value: 181, suffix: '', label: 'Workstations' },
  { value: 8, suffix: '', label: 'Examination Labs' },
  { value: 181, suffix: '+', label: 'Candidate Waiting Capacity' },
  { value: '2 x 20kVA', suffix: '', label: 'UPS Power Reserve', static: true }
]

const galleryItems = [
  { label: 'Examination Lab', accent: 'Labs', image: labImage },
  { label: 'Waiting Room', accent: '181+ Waiting Capacity', image: waitingRoomImage },
  { label: 'Workstations', accent: 'Desks', image: desksImage }
]

const centreHighlights = [
  'High-speed internet + backup line',
  'Fully air-conditioned labs',
  'Advanced CCTV surveillance',
  'Secure entry protocols',
  'Dedicated waiting room for 181+ candidates'
]

const signatureStats = [
  { value: '181', label: 'Workstations online' },
  { value: '8', label: 'Exam labs' },
  { value: '2 x 20kVA', label: 'UPS power reserve' }
]

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Government & Defence Experience',
    copy: 'Built by teams who understand high-security rollouts.'
  },
  {
    icon: Globe2,
    title: 'Global Examination Standards',
    copy: 'Infrastructure validated by international awarding bodies.'
  },
  {
    icon: Compass,
    title: 'Operational Precision',
    copy: 'Process-driven execution for zero disruption days.'
  },
  {
    icon: Layers,
    title: 'High Reliability Infrastructure',
    copy: 'Redundant power, network and monitoring stacks.'
  },
  {
    icon: Headphones,
    title: 'Dedicated Technical Support',
    copy: 'On-site engineers and remote NOC coverage.'
  }
]

const transportOptions = ['Vasant Vihar Metro', 'Munirka Metro', 'RK Puram Sec-5 Bus Stop']

function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const eased = progress < 1 ? progress * progress : 1
      setCurrent(Math.round(eased * value))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCurrent(value)
      }
    }

    requestAnimationFrame(step)
  }, [hasStarted, value, duration])

  return (
    <span ref={ref} className="font-semibold">
      {current}
      {suffix}
    </span>
  )
}

export function TrustStrip() {
  return (
    <section className="bg-gradient-to-r from-[#0F2214] via-[#142D18] to-[#1A3F22] text-white py-10">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-white/70">
            Credibility Strip
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Trusted by examination leaders</h2>
          <p className="mt-2 text-sm text-white/70">
            Trusted by international and national examining bodies
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <div className="overflow-hidden py-6">
            <div className="trust-marquee flex items-center gap-10 px-4">
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="min-w-[200px] flex items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    className={`${logo.className ?? 'h-16'} w-auto object-contain`}
                    draggable={false}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutSnapshot() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#D99201]/18 via-transparent to-[#1A3F22]/15 blur-[60px]" aria-hidden />
          <div className="relative bg-white/95 rounded-[32px] p-6 shadow-xl border border-[#EFE9DB]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex text-xs font-semibold uppercase tracking-[0.35em] text-[#58761B]"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
              className="mt-4 text-[40px] leading-[1.15] font-semibold text-[#1A3F22]"
            >
              Apex Training and Examination Centre
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="mt-6 text-lg text-[#1C4B26] leading-relaxed text-justify about-quote"
            >
             Apex Training & Examination Centre is a newly established, fully equipped and operational, high-quality examination delivery and corporate training facility located within Guru Harkrishan Public School, Vasant Vihar. The centre has been designed and developed to align with global testing standards required by leading international examination bodies, government recruitment agencies, and corporate assessment.
            </motion.p>

           

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/about" className="btn-base btn-primary">
                Learn More About Apex
              </Link>
              <Link to="/contact" className="btn-base btn-outline">
                Speak With Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative space-y-6"
        >
          <div className="reel-shell shadow-2xl">
            <div className="flex items-center justify-between text-xs text-white/70 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#F2C94C] animate-pulse"></span>
                Live stream
              </div>
              <span>1080p Secure Feed</span>
            </div>
            <div className="relative overflow-hidden rounded-[26px] border border-white/10">
              <video
                className="h-full w-full object-cover"
                src={timelapseReel}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
          <div className="rounded-2xl border border-[#D99201]/25 bg-white/95 p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#58761B]">Infrastructure Reel</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#1A3F22]">Data Centre & Labs</h3>
            <p className="mt-2 text-sm text-[#1C4B26] leading-relaxed">
              Live capture from our secure examination floors showcasing monitoring, biometric access and dedicated control rooms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function InfrastructureStats() {
  return (
    <section className="bg-[#0A1A11] py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Infrastructure Statistics</p>
          <h2 className="mt-3 text-3xl font-semibold">Visual proof through numbers</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infrastructureStats.map((stat) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center"
            >
              <div className="text-4xl font-semibold text-[#F2C94C]">
                {stat.static ? stat.value : <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="mt-3 text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CentrePreview() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58761B]">Our Centre Preview</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Purpose-built operations floor</h2>
        <p className="mt-2 text-[#58761B]">
          “Our state-of-the-art examination centre is designed to meet international standards of infrastructure,
          security and comfort.”
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`${index === 0 ? 'sm:col-span-2 h-64' : 'h-48'} relative rounded-2xl overflow-hidden border border-[#D99201]/30 shadow-lg`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/75 via-transparent to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="inline-flex flex-col gap-2 text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    <MonitorSmartphone className="h-5 w-5 text-white" />
                    {item.accent}
                  </div>
                  <h3 className="text-2xl font-semibold">{item.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-3xl bg-white p-8 shadow-xl border border-[#E3E3E3]">
          <h3 className="text-2xl font-semibold text-[#1A3F22] mb-6">Salient Features</h3>
          <ul className="space-y-4 text-[#1C4B26]">
            {centreHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-[#58761B]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/our-centre" className="btn-base btn-primary">
              Explore Our Centre
            </Link>
            <Link to="/contact" className="btn-base btn-outline">
              Schedule a Walkthrough
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function WhyChooseApex() {
  return (
    <section className="bg-gradient-to-b from-[#FDF9F2] to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58761B]">Why Choose Apex</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Operationally ready for secure examination delivery</h2>
          <p className="mt-2 text-[#58761B]">Five reasons partners trust us for high-stakes delivery.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-[#E5E2DA] bg-white p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg transition"
              >
                <div className="inline-flex rounded-xl bg-[#D99201]/15 p-3 text-[#905A01]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1A3F22]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#58761B]">{feature.copy}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function LocationPreview() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58761B]">Location Preview</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Central & Connected</h2>
          <div className="mt-6 rounded-2xl border border-[#D99201]/20 bg-[#FBF6EC] p-6">
            <div className="flex items-start gap-3 text-[#1C4B26]">
              <MapPin className="mt-1 h-5 w-5 text-[#D99201]" />
              <div>
                <p className="font-semibold">Guru Harkrishan Public School</p>
                <p>Vasant Vihar, New Delhi – 110057</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {transportOptions.map((mode) => (
                <div key={mode} className="flex items-center gap-3 text-sm text-[#58761B]">
                  <Users className="h-4 w-4 text-[#1A3F22]" />
                  {mode}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="w-full overflow-hidden rounded-3xl shadow-2xl border border-[#1A3F22]/10">
          <iframe
            title="Apex Centre Location"
            src="https://maps.google.com/maps?q=Guru%20Harkrishan%20Public%20School%2C%20Vasant%20Vihar%2C%20New%20Delhi%20%E2%80%93%20110057&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}

export function PrimaryCTA() {
  const primaryHeadline = useTypedText('Purpose-built examination infrastructure for reliability, precision, and scale.', { speed: 60, delay: 240 })
  return (
    <section className="relative bg-white pb-32 pt-24 text-[#0F2A16] lg:pb-40 lg:pt-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mt-4 text-3xl font-semibold text-[#0F2A16] lg:text-4xl">{primaryHeadline}</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-base btn-primary">
            Contact Our Team
          </Link>
          <Link
            to="/our-centre"
            className="btn-base border border-[#0F2A16] text-[#0F2A16] hover:bg-[#0F2A16] hover:text-white"
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </section>
  )
}

export function QuickContactStrip() {
  const quickContactHeadline = useTypedText('Talk to our Team', { speed: 55, delay: 200 })
  return (
    <section className="bg-gradient-to-r from-[#FDF6EA] to-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58761B]">Quick Contact</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1A3F22]">{quickContactHeadline}</h2>

            <div className="mt-6 space-y-4 text-[#1C4B26]">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D99201]" />
                <a href="tel:+919560553909" className="hover:underline">+91 9560553909</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D99201]" />
                <a href="mailto:apexexamcentre@gmail.com" className="hover:underline">
                  apexexamcentre@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form
            action="mailto:apexexamcentre@gmail.com"
            method="POST"
            encType="text/plain"
            className="rounded-2xl border border-[#D99201]/30 bg-white p-6 shadow-lg"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="quick-name" className="text-sm font-medium text-[#1A3F22]">
                  Name
                </label>
                <input
                  id="quick-name"
                  name="Name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-[#E3E3E3] px-4 py-3 text-sm focus:border-[#905A01] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quick-email" className="text-sm font-medium text-[#1A3F22]">
                  Email
                </label>
                <input
                  id="quick-email"
                  name="Email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-[#E3E3E3] px-4 py-3 text-sm focus:border-[#905A01] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quick-message" className="text-sm font-medium text-[#1A3F22]">
                  Message
                </label>
                <textarea
                  id="quick-message"
                  name="Message"
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-[#E3E3E3] px-4 py-3 text-sm focus:border-[#905A01] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-base btn-primary w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
