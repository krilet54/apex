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
      <ServiceList />
      <InfrastructureStats />
      <CentrePreview />
      <WhyChooseApex />
      <LocationPreview />
      <PrimaryCTA />
      <QuickContactStrip />
    </div>
  )
}
