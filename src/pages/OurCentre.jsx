import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import LocationMap from '../components/LocationMap'

export default function OurCentre() {
  useEffect(() => {
    document.title = 'Apex — Our Centre'
  }, [])

  return (
    <PageContainer>
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#1A3F22]">Our Centre</h1>
      <p className="mt-4 text-[#58761B] leading-relaxed">
        Facility details and photos. Capacity: <span className="font-medium text-[#905A01]">172 workstations</span>, 7 labs, UPS backup, CCTV monitoring,
        waiting rooms and accessible location in Vasant Vihar.
      </p>

      {/* Facilities & Gallery */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Facilities */}
        <div className="bg-gradient-to-b from-white to-[#fffaf3] border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
          <h3 className="font-semibold text-lg text-[#1A3F22]">Facilities</h3>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-[#58761B] leading-relaxed">
            <li>172 computer workstations with individual desks</li>
            <li>7 configurable labs for different setups</li>
            <li>AC throughout, UPS backup and generator support</li>
            <li>CCTV monitoring and biometric access control</li>
            <li>Waiting area and candidate verification counters</li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
          <h3 className="font-semibold text-lg text-[#1A3F22]">Photo Gallery</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <img
              src="/src/assets/images/centre-1.jpg"
              alt="Lab photo"
              className="w-full h-32 object-cover rounded-lg border border-[#D99201]/20 shadow-sm"
              loading="lazy"
            />
            <img
              src="/src/assets/images/centre-2.jpg"
              alt="Workstations"
              className="w-full h-32 object-cover rounded-lg border border-[#D99201]/20 shadow-sm"
              loading="lazy"
            />
            <img
              src="/src/assets/images/centre-3.jpg"
              alt="Waiting area"
              className="w-full h-32 object-cover rounded-lg border border-[#D99201]/20 shadow-sm"
              loading="lazy"
            />
            <img
              src="/src/assets/images/centre-4.jpg"
              alt="Entrance"
              className="w-full h-32 object-cover rounded-lg border border-[#D99201]/20 shadow-sm"
              loading="lazy"
            />
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
