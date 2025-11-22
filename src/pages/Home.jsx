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
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold">Trusted by institutional clients</h2>
        <p className="mt-2 text-slate-600">British Council · BITS Pilani · CFA · and more.</p>
      </section>
      <CTASection />
    </div>
  )
}
