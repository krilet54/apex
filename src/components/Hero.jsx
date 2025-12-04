import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const headingAnimation = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: 'easeOut' }
      }
    : {
        initial: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        animate: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
        transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] }
      }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/hero-photo.png')] bg-center bg-cover bg-no-repeat"
        aria-hidden
      />

      {/* Gradient overlay on left for text readability */}
      <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#1A3F22]/80 via-[#58761B]/60 to-transparent" aria-hidden />

      {/* Hero Content */}
      <div className="relative" style={{ minHeight: 'calc(100vh - 84px)' }}>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl p-6 lg:p-12">
            <motion.h1
              className="text-4xl lg:text-[56px] font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]"
              aria-label="Government-grade Examination & Training Facilities"
              {...headingAnimation}
            >
              Government-grade Examination & Training Facilities
            </motion.h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Secure, reliable and fully managed exam delivery with on-site support.
              Trusted by institutional clients for high-stakes assessments.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="btn-base btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-base btn-outline-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent shapes (subtle) */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#D99201]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#1A3F22]/30 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
    </section>
  )
}
