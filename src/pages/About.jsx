import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'

export default function About(){
  useEffect(()=>{document.title = 'Apex — About';}, [])
  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold">About Apex</h1>
          <p className="mt-4 text-slate-700">Apex provides secure, high-availability exam delivery and training facilities. Our mission is to deliver dependable exam services for government and institutional clients with strict security and operational standards.</p>
          <h3 className="mt-6 font-semibold">Our Vision</h3>
          <p className="text-slate-700">To be the reference standard for secure examination and training facilities across public and private sectors.</p>
        </div>
        <div>
          <img src="/src/assets/images/centre-1.jpg" alt="Apex centre interior" className="rounded-lg shadow-md w-full object-cover h-64" loading="lazy" />
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Capabilities & Experience</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Delivery for defence & government examinations</li>
          <li>Ongoing expansion into large-scale computer-based testing</li>
          <li>End-to-end secure logistics and manpower support</li>
        </ul>
      </section>
    </PageContainer>
  )
}
