import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="bg-white border-[#D99201]/20 py-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold text-[#1A3F22]">
            Book a Site Visit
          </h3>
          <p className="text-sm mt-2 text-[#58761B] max-w-md">
            See the facilities in person and discuss your requirements with our team.
          </p>
        </div>

        <div>
          <Link
            to="/contact"
            className="btn-base btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
