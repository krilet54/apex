import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'

export default function About() {
  useEffect(() => {
    document.title = 'Apex — About'
  }, [])

  return (
    <PageContainer>
      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3F22]">About Apex</h1>
          <p className="mt-4 text-[#58761B] leading-relaxed">
            Apex provides secure, high-availability exam delivery and training
            facilities. Our mission is to deliver dependable exam services for
            government and institutional clients with strict security and
            operational standards.
          </p>

          <h3 className="mt-8 font-semibold text-[#905A01] text-lg">Our Vision</h3>
          <p className="text-[#58761B] mt-2 leading-relaxed">
            To be the reference standard for secure examination and training
            facilities across public and private sectors.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-[#D99201]/30 to-[#905A01]/20 blur-lg opacity-30" />
          <img
            src="/src/assets/images/centre-1.jpg"
            alt="Apex centre interior"
            className="relative rounded-xl shadow-md w-full object-cover h-72 border border-[#D99201]/20"
            loading="lazy"
          />
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="mt-14 bg-gradient-to-b from-white to-[#fffaf3] border border-[#D99201]/20 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1A3F22]">
          Capabilities & Experience
        </h2>
        <ul className="mt-4 list-disc pl-6 text-[#58761B] space-y-2 leading-relaxed">
          <li>Delivery for defence & government examinations</li>
          <li>Ongoing expansion into large-scale computer-based testing</li>
          <li>End-to-end secure logistics and manpower support</li>
        </ul>
      </section>
    </PageContainer>
  )
}
