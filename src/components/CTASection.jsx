import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection(){
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Book a Site Visit</h3>
          <p className="text-sm mt-1">See the facilities in person and discuss requirements with our team.</p>
        </div>
        <div>
          <Link to="/contact" className="px-6 py-3 bg-white text-primary rounded-xl">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
