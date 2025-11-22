import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'

export default function Contact(){
  useEffect(()=>{document.title = 'Apex — Contact';}, [])
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-700">Phone: <a href="tel:9560553909">9560553909</a> · Email: <a href="mailto:tusharsalesindia@gmail.com">tusharsalesindia@gmail.com</a></p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContactForm />
        <div>
          <h3 className="font-semibold">Office & Hours</h3>
          <p className="text-slate-700 mt-2">Guru Harkrishan Public School, Vasant Vihar, New Delhi - 110057</p>
          <p className="mt-2 text-slate-700">Office hours: Mon — Sat, 09:00 — 18:00</p>
          <LocationMap />
        </div>
      </div>
    </PageContainer>
  )
}
