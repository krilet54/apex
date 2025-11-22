import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import ServiceList from '../components/ServiceList'
import CentreFeatures from '../components/CentreFeatures'
import CTASection from '../components/CTASection'

export default function Home(){
  useEffect(()=>{document.title = 'Apex — Home';}, [])
  return (
    <div>
      <Hero />
      <ServiceList />
      <CentreFeatures />
      <section className="container mx-auto py-16 text-center bg-gradient-to-b from-white to-[#fffaf3] rounded-2xl shadow-sm">
  <h2 className="text-2xl font-semibold text-[#1A3F22]">
    Trusted by Institutional Clients
  </h2>
  <p className="mt-3 text-[#58761B]">
    British Council · BITS Pilani · CFA · and more.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <div className="px-5 py-2 bg-[#D99201]/15 text-[#905A01] rounded-md border border-[#D99201]/20 shadow-sm">
      British Council
    </div>
    <div className="px-5 py-2 bg-[#D99201]/15 text-[#905A01] rounded-md border border-[#D99201]/20 shadow-sm">
      BITS Pilani
    </div>
    <div className="px-5 py-2 bg-[#D99201]/15 text-[#905A01] rounded-md border border-[#D99201]/20 shadow-sm">
      CFA
    </div>
    <div className="px-5 py-2 bg-[#D99201]/15 text-[#905A01] rounded-md border border-[#D99201]/20 shadow-sm">
      and more
    </div>
  </div>
</section>

      <CTASection />
    </div>
  )
}
