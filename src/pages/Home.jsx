import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import ServiceList from '../components/ServiceList'
import {
  TrustStrip,
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
  return (
    <div>
      <Hero />
      <TrustStrip />
      <AboutSnapshot />
      <section className="bg-[#FFFAF2] py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Service families</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Built to support every examination format.</h2>
          <p className="mt-2 text-[#4C6B37]">Infrastructure, manpower, security and support services operated from a single command desk.</p>
          <div className="mt-10">
            <ServiceList showHeading={false} withContainer={false} />
          </div>
        </div>
      </section>
      <InfrastructureStats />
      <CentrePreview />
      <WhyChooseApex />
      <LocationPreview />
      <PrimaryCTA />
      <QuickContactStrip />
    </div>
  )
}
