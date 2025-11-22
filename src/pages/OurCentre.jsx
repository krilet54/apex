import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import LocationMap from '../components/LocationMap'

export default function OurCentre(){
  useEffect(()=>{document.title = 'Apex — Our Centre';}, [])
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold">Our Centre</h1>
      <p className="mt-4 text-slate-700">Facility details and photos. Capacity: 172 workstations, 7 labs, UPS backup, CCTV monitoring, waiting rooms and accessible location in Vasant Vihar.</p>

      <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Facilities</h3>
          <ul className="list-disc pl-5 mt-2 text-slate-700">
            <li>172 computer workstations with individual desks</li>
            <li>7 configurable labs for different setups</li>
            <li>AC throughout, UPS backup and generator support</li>
            <li>CCTV monitoring and biometric access control</li>
            <li>Waiting area, candidate verification counters</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Photo gallery</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <img src="/src/assets/images/centre-1.jpg" alt="Lab photo" className="w-full h-28 object-cover rounded" loading="lazy" />
            <img src="/src/assets/images/centre-2.jpg" alt="Workstations" className="w-full h-28 object-cover rounded" loading="lazy" />
            <img src="/src/assets/images/centre-3.jpg" alt="Waiting area" className="w-full h-28 object-cover rounded" loading="lazy" />
            <img src="/src/assets/images/centre-4.jpg" alt="Entrance" className="w-full h-28 object-cover rounded" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="font-semibold">Location</h3>
        <LocationMap />
      </section>
    </PageContainer>
  )
}
