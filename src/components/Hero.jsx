import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative bg-white">
      {/* Full-bleed background covering the hero area (no animations) */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/hero-photo.png')] bg-center bg-cover bg-no-repeat" aria-hidden />

      {/* Static left-side gradient overlay for guaranteed legibility */}
      <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none" aria-hidden>
        <div className="h-full w-full bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Ensure hero fills viewport height minus header */}
      <div className="relative" style={{minHeight: 'calc(100vh - 84px)'}}>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl p-6 lg:p-12">
            <h1 className="text-4xl lg:text-[56px] font-bold leading-tight text-white">Government-grade examination & training facilities</h1>
            <p className="mt-4 text-white/90 max-w-xl">Secure, reliable and fully managed exam delivery with on-site support. Trusted by institutional clients for high-stakes assessments.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center px-5 py-3 bg-white text-primary rounded-xl">Explore Services</Link>
              <Link to="/contact" className="inline-flex items-center px-5 py-3 border border-white/40 rounded-xl text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
