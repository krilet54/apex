import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import services from '../data/services'
import PageContainer from '../components/PageContainer'

export default function ServiceDetail(){
  const { slug } = useParams()
  const service = services.find(s=> s.slug === slug)

  useEffect(()=>{document.title = service? `Apex — ${service.title}`: 'Apex — Service';}, [service])

  if(!service) return (
    <PageContainer>
      <h2 className="text-xl">Service not found</h2>
      <Link to="/services" className="text-primary">Back to services</Link>
    </PageContainer>
  )

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold">{service.title}</h1>
      <p className="mt-2 text-slate-700">{service.description}</p>

      <section className="mt-6">
        <h3 className="font-semibold">Key features</h3>
        <ul className="list-disc pl-5 mt-2 text-slate-700">
          {service.features.map((f,i)=>(<li key={i}>{f}</li>))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="font-semibold">FAQ</h3>
        <details className="mt-2"><summary>How do I request a quote?</summary><p className="mt-2">Use the Request Quote button or contact us through the contact form.</p></details>
      </section>

      <div className="mt-6">
        <Link to="/contact" className="px-4 py-2 bg-primary text-white rounded-xl">Request Quote</Link>
      </div>
    </PageContainer>
  )
}
