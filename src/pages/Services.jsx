import React, { useEffect } from 'react'
import ServiceList from '../components/ServiceList'

export default function Services(){
  useEffect(()=>{document.title = 'Apex — Services';}, [])
  return (
    <div>
      <header className="bg-white border-b">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-slate-600 mt-2">Explore our range of services for exam delivery and facility management.</p>
        </div>
      </header>
      <ServiceList />
    </div>
  )
}
