import React, { useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'

export default function Contact() {
  useEffect(() => {
    document.title = 'Apex — Contact'
  }, [])

  return (
    <PageContainer>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1A3F22]">Contact</h1>
        <p className="mt-2 text-sm sm:text-base text-[#58761B]">
          Phone:{' '}
          <a
            href="tel:9560553909"
            className="text-[#905A01] hover:underline"
          >
            9560553909
          </a>{' '}
          · Email:{' '}
          <a
            href="mailto:tusharsalesindia@gmail.com"
            className="text-[#905A01] hover:underline"
          >
            tusharsalesindia@gmail.com
          </a>
        </p>
      </div>

      {/* Main grid */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact form stays as-is */}
        <div className="bg-white border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1A3F22] mb-4">
            Send us a message
          </h2>
          <ContactForm />
        </div>

        {/* Office info + map */}
        <div className="space-y-4">
          <div className="bg-gradient-to-b from-white to-[#fffaf3] border border-[#D99201]/20 rounded-2xl shadow-sm p-6 sm:p-7">
            <h3 className="font-semibold text-lg text-[#1A3F22]">
              Office &amp; Hours
            </h3>
            <p className="text-sm sm:text-base text-[#58761B] mt-3 leading-relaxed">
              Guru Harkrishan Public School,
              <br />
              Vasant Vihar, New Delhi - 110057
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#58761B]">
              <span className="font-medium text-[#905A01]">Office hours:</span>{' '}
              Mon — Sat, 09:00 — 18:00
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#D99201]/20 shadow-sm">
            <LocationMap />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
