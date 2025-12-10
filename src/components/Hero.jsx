import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import heroImg1 from '../assets/heroimg1.png'
import heroImg2 from '../assets/heroimg2.png'
import heroImg3 from '../assets/heroimg3.png'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const slides = [
    { image: heroImg1, alt: 'Apex secure exam lab overview' },
    { image: heroImg2, alt: 'Candidates seated in premium workstation rows' },
    { image: heroImg3, alt: 'Operations team overseeing exam delivery' }
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [prefersReducedMotion, slides.length])

  const displayedIndex = prefersReducedMotion ? 0 : activeIndex
  const currentSlide = slides[displayedIndex]
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
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden bg-[#0F2214]" aria-hidden>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentSlide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: 'easeOut' }}
          >
            <img
              src={currentSlide.image}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlay on left for text readability */}
      <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#1A3F22]/80 via-[#58761B]/60 to-transparent" aria-hidden />

      {/* Hero Content */}
      <div className="relative" style={{ minHeight: 'calc(100vh - 84px)' }}>
        <div className="container mx-auto px-6 h-full flex items-center" aria-hidden>
          <div className="max-w-2xl p-6 lg:p-12" />
        </div>
      </div>

        {!prefersReducedMotion && (
          <div className="absolute bottom-8 right-8 z-10 flex gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-8 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Show hero slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      {/* Decorative accent shapes (subtle) */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#D99201]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#1A3F22]/30 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
    </section>
  )
}
