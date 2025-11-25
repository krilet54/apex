import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import about_img from '../assets/about_apex.png'

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
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#122A18] to-[#1E3E25] text-white py-10 lg:py-16 shadow-2xl border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Since 2011
            </div>
            <h1 className="mt-4 text-4xl lg:text-[44px] font-semibold leading-tight">
              Defence-born infrastructure partners for high-stakes examination programmes.
            </h1>
            <p className="mt-4 text-sm lg:text-base text-white/80 leading-relaxed">
              Apex operates at the intersection of mission-critical IT, facilities engineering and operations control. We combine defence discipline with hospitality-level experience to deliver examination centres that run flawlessly under pressure.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80">
              {operationalStats.map((stat) => (
                <div key={stat.label} className="border-l border-white/30 pl-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-base btn-primary">
                  Engage Apex
                </Link>
                <Link to="/our-centre" className="btn-base btn-outline-light">
                  Tour the Centre
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
              <img
                src={about_img}
                alt="Apex operations floor"
                className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <PageContainer>
        <section className="mt-16 rounded-[36px] border border-[#E8E0CF] bg-white p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Vision Statement</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]">Infrastructure trusted by ministries, examining bodies and defence establishments.</h2>
            <p className="mt-4 text-[#4C6B37] leading-relaxed">
              We design calm, precise environments that allow candidates, invigilators and stakeholders to operate with complete confidence.
            </p>
          </div>
          <div className="grid gap-6 text-sm text-[#1C4B26]">
            <div className="border-l-2 border-[#D99201] pl-5">
              <p className="uppercase tracking-[0.3em] text-xs text-[#9F6B1F]">Mission</p>
              <p className="mt-2">Deliver defence-grade readiness for every examination day.</p>
            </div>
            <div className="border-l-2 border-[#1A3F22] pl-5">
              <p className="uppercase tracking-[0.3em] text-xs text-[#1A3F22]">Ethos</p>
              <p className="mt-2">Operate with restraint, documentation and proactive governance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Who we are</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Government programme specialists with an examination focus.</h2>
          <p className="mt-4 text-[#4C6B37] leading-relaxed">
            Apex grew within the Corps of Signals ecosystem, solving for secure IT rooms, network-hardening and rapid deployments. Today we translate that discipline into the exam and certification space, where compliance windows and user experience matter equally.
          </p>
          <p className="mt-4 text-[#4C6B37] leading-relaxed">
            Our teams cover infrastructure, technology and candidate handling from a single command desk—removing silos and accelerating decision making.
          </p>
        </div>
        <div className="rounded-[30px] bg-[#F8F4EA] p-8 border border-[#E5DCCB]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9F6B1F]">Focus areas</p>
          <ul className="mt-4 space-y-3 text-sm text-[#1C4B26]">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#D99201]/20 to-transparent blur-2xl" aria-hidden />
          <img
            src={about_img}
            alt="Apex operations floor"
            className="relative rounded-[28px] border border-[#E4D7C0] shadow-xl w-full object-cover h-80"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Milestones</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">A single line of accountability since 2011.</h2>
          <div className="mt-6 space-y-5">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <p className="text-xl font-semibold text-[#D99201] w-16">{milestone.year}</p>
                <p className="text-sm text-[#1C4B26]">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#102616] to-[#0B1F13] text-white p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Delivery tenets</p>
            <h2 className="mt-3 text-3xl font-semibold">We keep programmes calm, visible and audit-ready.</h2>
          </div>
          <div>
            <ul className="space-y-4 text-sm text-white/80">
              {deliveryTenets.map((tenet) => (
                <li key={tenet}>{tenet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-[#EADFC8] bg-[#FFFAF2] p-10 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Engage us</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]">Brief the programme office, receive a blueprint within a week.</h2>
        <p className="mt-3 text-[#4C6B37]">Share mandate, intake capacity and evaluation calendar—we will respond with a compliant, minimal operations model.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-base btn-primary">
            Contact Programme Office
          </Link>
          <Link to="/our-centre" className="btn-base btn-outline">
            Schedule a walkthrough
          </Link>
        </div>
      </section>
      </PageContainer>
    </>
  )
}
