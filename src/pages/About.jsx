import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import about_img from '../assets/about_apex.png'

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
            Welcome to <span className="font-semibold">Apex</span> — a trusted and fast-evolving 
            system integrator providing comprehensive IT and infrastructure solutions 
            across India. With a strong foundation in government and defence projects, 
            we have collaborated with esteemed organizations including the Corps of Signals, 
            DG Signals, and several Signals Groups across major command locations.
          </p>

          <p className="mt-4 text-[#58761B] leading-relaxed">
            While our roots lie in defence and government IT systems, our expertise now 
            extends into the education and examination sector. We have established a 
            <span className="font-semibold"> state-of-the-art Online Examination Centre</span>, 
            designed with precision, security, and operational excellence. 
            Our facility meets the highest international standards of infrastructure, 
            comfort, and reliability — ensuring a seamless and professional experience 
            for every candidate and examiner.
          </p>

          <h3 className="mt-8 font-semibold text-[#905A01] text-lg">Our Vision</h3>
          <p className="text-[#58761B] mt-2 leading-relaxed">
            To be recognized as the most dependable and proficient team of innovators, 
            known for transforming organizational excellence and consistently achieving 
            remarkable outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-[#D99201]/30 to-[#905A01]/20 blur-lg opacity-30" />
          <img
            src={about_img}
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
          <li>Comprehensive IT and infrastructure support for government and defence sectors</li>
          <li>Expertise in large-scale online examinations and educational technology</li>
          <li>End-to-end secure logistics, technical operations, and manpower deployment</li>
          <li>Proven record of delivering excellence with innovation and precision</li>
        </ul>
      </section>
    </PageContainer>
  )
}
