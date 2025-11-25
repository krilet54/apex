import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import LocationMap from '../components/LocationMap'
import IMG1 from '../assets/about_apex.png'
import IMG2 from '../assets/apex_gallery.png'
import IMG3 from '../assets/apex_gallery2.png'
import IMG4 from '../assets/apex_gallery3.png'

export default function OurCentre() {
  useEffect(() => {
    document.title = 'Apex — Our Centre'
  }, [])

  // Image data array for dynamic rendering
  const images = [
    { src: IMG1, alt: 'Examination Lab Interior' },
    { src: IMG2, alt: 'Workstations in Exam Lab' },
    { src: IMG3, alt: 'Candidate Waiting Area' },
    { src: IMG4, alt: 'Centre Entrance and Surroundings' },
  ]

  return (
    <PageContainer>
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#1A3F22]">Our Centre</h1>
      <p className="mt-4 text-[#58761B] leading-relaxed">
        Our online examination centre comprises{' '}
        <span className="font-medium text-[#905A01]">172 workstations</span>{' '}
        distributed across 7 fully air-conditioned labs, along with 2 spacious
        waiting rooms and a dedicated staff room. All systems and infrastructure
        are newly installed to ensure optimal performance, reliability, and a
        seamless experience for candidates and examiners.
      </p>
      <p className="mt-2 text-[#58761B] leading-relaxed">
        The centre is located at Guru Harkrishan Public School, Vasant Vihar,
        New Delhi–110057, with excellent connectivity via Vasant Vihar and
        Munirka metro stations and the RK Puram Sec-5 bus stop (all within ~1 km),
        plus ample parking outside the school campus.
      </p>

      {/* Facilities & Gallery */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Facilities */}
        <div className="bg-gradient-to-b from-white to-[#fffaf3] border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
          <h3 className="font-semibold text-lg text-[#1A3F22]">Facilities</h3>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-[#58761B] leading-relaxed">
            <li>
              7 fully air-conditioned examination labs with a total of 172
              workstations:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>4 labs with 31 workstations each</li>
                <li>2 labs with 21 workstations each</li>
                <li>1 lab with 6 workstations for smaller batches/special tests</li>
              </ul>
            </li>
            <li>
              Two spacious, fully air-conditioned waiting rooms with a combined
              capacity of approximately 175 candidates.
            </li>
            <li>
              Dedicated staff room for administrative and technical teams to
              coordinate examinations in real time.
            </li>
            <li>
              Newly installed 40 kVA UPS battery backup system providing up to
              one hour of uninterrupted power supply.
            </li>
            <li>
              High-speed primary internet connectivity with a dedicated
              high-speed backup line for uninterrupted online examinations.
            </li>
            <li>
              Advanced security with CCTV surveillance, restricted access
              control and secure entry protocols to protect exam integrity.
            </li>
            <li>
              High hygiene standards maintained by two dedicated housekeeping
              staff, ensuring clean and sanitized labs and waiting areas.
            </li>
            <li>
              On-site trained technical team present throughout examinations to
              manage systems, connectivity and any operational contingencies.
            </li>
            <li>
              Proven track record of hosting examinations for reputed
              organizations such as The British Council (IFoA, ACCA, CFA, MRCP,
              RCPCH, TestAS) and BITS Pilani (WILP).
            </li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
  <h3 className="font-semibold text-lg text-[#1A3F22] mb-4">Photo Gallery</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-2xl border border-[#D99201]/20 shadow-sm hover:shadow-md transition"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>

      </section>

      {/* Location Section */}
      <section className="mt-12 bg-gradient-to-b from-white to-[#fffaf3] border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
        <h3 className="font-semibold text-lg text-[#1A3F22] mb-4">Location</h3>
        <LocationMap />
      </section>
    </PageContainer>
  )
}
